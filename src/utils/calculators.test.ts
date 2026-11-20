import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateContainerShipment,
  calculateMassBalance,
  validateRfqForm,
  generateRfqReference,
} from './calculators';

test('calculateContainerShipment computes 40ft HC cocopeat FOB shipment accurately', () => {
  const result = calculateContainerShipment('cocopeat_block', '40ft_hc', 2, 'FOB');
  assert.equal(result.totalPayloadMT, 50);
  assert.equal(result.totalUnits, 10000);
  assert.equal(result.freightAllowanceUsd, 0);
  assert.equal(result.estimatedValueMinUsd, 50 * 260);
  assert.equal(result.estimatedValueMaxUsd, 50 * 330);
  assert.equal(result.rawCoconutRequiredMT, 225);
});

test('calculateContainerShipment adds freight allowance when CIF is selected', () => {
  const fob = calculateContainerShipment('shell_briquette', '20ft', 3, 'FOB');
  const cif = calculateContainerShipment('shell_briquette', '20ft', 3, 'CIF');
  assert.equal(cif.freightAllowanceUsd, 2100 * 3);
  assert.equal(cif.estimatedValueMinUsd - fob.estimatedValueMinUsd, 6300);
  assert.equal(cif.estimatedValueMaxUsd - fob.estimatedValueMaxUsd, 6300);
});

test('calculateContainerShipment clamps out-of-range container counts', () => {
  const minClamped = calculateContainerShipment('cocofiber_bale', '20ft', 0, 'FOB');
  const maxClamped = calculateContainerShipment('cocofiber_bale', '20ft', 999, 'FOB');
  assert.equal(minClamped.containerCount, 1);
  assert.equal(maxClamped.containerCount, 50);
});

test('calculateMassBalance computes zero-waste outputs proportionally for 100 MT raw coconut', () => {
  const result = calculateMassBalance(100);
  assert.equal(result.rawCoconutTons, 100);
  assert.equal(result.streams.coconutOilMT, 10.5);
  assert.equal(result.streams.coconutCakeMT, 8.5);
  assert.equal(result.streams.cocofiberMT, 11);
  assert.equal(result.streams.cocopeatMT, 21);
  assert.equal(result.streams.shellCharcoalMT, 4.5);
  assert.equal(result.streams.liquidSmokeKL, 2.8);
  assert.equal(result.streams.organicCompostMT, 6.5);
  assert.equal(result.totalRecoveredOutputMT, 62);
  assert.equal(result.wasteDiversionRatePct, 98.4);
});

test('validateRfqForm rejects empty or malformed inputs', () => {
  const errors = validateRfqForm(
    {
      companyName: '',
      contactName: 'A',
      email: 'not-an-email',
      phone: '123',
      country: '',
      dimension: 'trading',
      message: 'short',
    },
    'id'
  );
  assert.ok(errors.companyName);
  assert.ok(errors.contactName);
  assert.ok(errors.email);
  assert.ok(errors.phone);
  assert.ok(errors.country);
  assert.ok(errors.message);
});

test('validateRfqForm accepts a complete valid B2B inquiry', () => {
  const errors = validateRfqForm(
    {
      companyName: 'PT Agro Nusantara Ekspor',
      contactName: 'Budi Santoso',
      email: 'budi@agronusantara.co.id',
      phone: '+62 812 3456 7890',
      country: 'Indonesia / Rotterdam',
      dimension: 'machinery',
      message: 'Mohon penawaran lini mesin defibering dan press cocopeat blok 5 kg kapasitas 20 MT/hari.',
    },
    'id'
  );
  assert.deepEqual(errors, {});
});

test('generateRfqReference produces deterministic formatted code', () => {
  const ref = generateRfqReference('machinery', new Date('2026-11-19T12:00:00Z'), 42);
  assert.equal(ref, 'BGN-MCH-20261119-042');
});
