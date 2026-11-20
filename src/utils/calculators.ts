import type { DimensionKey } from '../data/brandData';

export type ContainerSize = '20ft' | '40ft_hc';
export type Incoterm = 'FOB' | 'CIF';

export interface CommoditySpec {
  id: 'cocopeat_block' | 'cocofiber_bale' | 'shell_briquette' | 'coconut_oil' | 'cocomesh_roll';
  nameId: string;
  nameEn: string;
  unitNameId: string;
  unitNameEn: string;
  unitWeightKg: number;
  payload20ftMT: number;
  payload40ftHCMT: number;
  fobUsdPerMTMin: number;
  fobUsdPerMTMax: number;
  cifAdderPerContainerUsd: {
    '20ft': number;
    '40ft_hc': number;
  };
  rawCoconutRatioPerMT: number; // metric tons of whole coconuts equivalent per 1 MT product
}

export const EXPORT_COMMODITIES: CommoditySpec[] = [
  {
    id: 'cocopeat_block',
    nameId: 'Cocopeat Block 5 kg (Low EC)',
    nameEn: 'Cocopeat Block 5 kg (Low EC)',
    unitNameId: 'Blok 5 kg',
    unitNameEn: '5 kg Blocks',
    unitWeightKg: 5,
    payload20ftMT: 11,
    payload40ftHCMT: 25,
    fobUsdPerMTMin: 260,
    fobUsdPerMTMax: 330,
    cifAdderPerContainerUsd: { '20ft': 1650, '40ft_hc': 2450 },
    rawCoconutRatioPerMT: 4.5,
  },
  {
    id: 'cocofiber_bale',
    nameId: 'Cocofiber (Bal Pres 115 kg)',
    nameEn: 'Cocofiber (115 kg Pressed Bales)',
    unitNameId: 'Bal 115 kg',
    unitNameEn: '115 kg Bales',
    unitWeightKg: 115,
    payload20ftMT: 9.2,
    payload40ftHCMT: 20.7,
    fobUsdPerMTMin: 340,
    fobUsdPerMTMax: 440,
    cifAdderPerContainerUsd: { '20ft': 1700, '40ft_hc': 2500 },
    rawCoconutRatioPerMT: 8.2,
  },
  {
    id: 'shell_briquette',
    nameId: 'Briket Arang Tempurung (Karton 10 kg)',
    nameEn: 'Coconut Shell Briquettes (10 kg Carton)',
    unitNameId: 'Karton 10 kg',
    unitNameEn: '10 kg Cartons',
    unitWeightKg: 10,
    payload20ftMT: 18,
    payload40ftHCMT: 26,
    fobUsdPerMTMin: 1250,
    fobUsdPerMTMax: 1550,
    cifAdderPerContainerUsd: { '20ft': 2100, '40ft_hc': 3100 },
    rawCoconutRatioPerMT: 19.5,
  },
  {
    id: 'coconut_oil',
    nameId: 'Virgin Coconut Oil (Drum 190 kg)',
    nameEn: 'Virgin Coconut Oil (190 kg Drums)',
    unitNameId: 'Drum 190 kg',
    unitNameEn: '190 kg Drums',
    unitWeightKg: 190,
    payload20ftMT: 15.2,
    payload40ftHCMT: 22.8,
    fobUsdPerMTMin: 2150,
    fobUsdPerMTMax: 2650,
    cifAdderPerContainerUsd: { '20ft': 1900, '40ft_hc': 2800 },
    rawCoconutRatioPerMT: 9.8,
  },
  {
    id: 'cocomesh_roll',
    nameId: 'Cocomesh Geotextile 700 gsm (Gulungan 2×30 m)',
    nameEn: 'Cocomesh Geotextile 700 gsm (2×30 m Rolls)',
    unitNameId: 'Gulungan 42 kg',
    unitNameEn: '42 kg Rolls',
    unitWeightKg: 42,
    payload20ftMT: 8.4,
    payload40ftHCMT: 18.9,
    fobUsdPerMTMin: 980,
    fobUsdPerMTMax: 1240,
    cifAdderPerContainerUsd: { '20ft': 1750, '40ft_hc': 2550 },
    rawCoconutRatioPerMT: 9.0,
  },
];

export interface ContainerShipmentEstimate {
  commodity: CommoditySpec;
  containerSize: ContainerSize;
  containerCount: number;
  incoterm: Incoterm;
  totalPayloadMT: number;
  totalUnits: number;
  rawCoconutRequiredMT: number;
  estimatedValueMinUsd: number;
  estimatedValueMaxUsd: number;
  freightAllowanceUsd: number;
}

export function calculateContainerShipment(
  commodityId: CommoditySpec['id'],
  containerSize: ContainerSize,
  containerCount: number,
  incoterm: Incoterm
): ContainerShipmentEstimate {
  const commodity =
    EXPORT_COMMODITIES.find((c) => c.id === commodityId) ?? EXPORT_COMMODITIES[0];
  const safeCount = Math.max(1, Math.min(50, Math.round(containerCount || 1)));
  const payloadPerContainer =
    containerSize === '40ft_hc' ? commodity.payload40ftHCMT : commodity.payload20ftMT;

  const totalPayloadMT = Number((payloadPerContainer * safeCount).toFixed(2));
  const totalUnits = Math.round((totalPayloadMT * 1000) / commodity.unitWeightKg);
  const rawCoconutRequiredMT = Number((totalPayloadMT * commodity.rawCoconutRatioPerMT).toFixed(1));

  const freightAllowanceUsd =
    incoterm === 'CIF' ? commodity.cifAdderPerContainerUsd[containerSize] * safeCount : 0;

  const estimatedValueMinUsd = Math.round(
    totalPayloadMT * commodity.fobUsdPerMTMin + freightAllowanceUsd
  );
  const estimatedValueMaxUsd = Math.round(
    totalPayloadMT * commodity.fobUsdPerMTMax + freightAllowanceUsd
  );

  return {
    commodity,
    containerSize,
    containerCount: safeCount,
    incoterm,
    totalPayloadMT,
    totalUnits,
    rawCoconutRequiredMT,
    estimatedValueMinUsd,
    estimatedValueMaxUsd,
    freightAllowanceUsd,
  };
}

export interface MassBalanceOutput {
  rawCoconutTons: number;
  estimatedWholeCoconuts: number;
  streams: {
    coconutOilMT: number;
    coconutCakeMT: number;
    cocofiberMT: number;
    cocopeatMT: number;
    shellCharcoalMT: number;
    liquidSmokeKL: number;
    organicCompostMT: number;
  };
  totalRecoveredOutputMT: number;
  wasteDiversionRatePct: number;
}

/**
 * Industrial zero-waste mass balance based on average Indonesian mature whole coconut (~1.5 kg/nut):
 * - Husk (~35%): yields ~11% Cocofiber + ~21% dry-equivalent Cocopeat + ~3% compostable fines
 * - Meat (~28%): yields ~10.5% Coconut Oil + ~8.5% Coconut Cake (remainder is moisture evaporated)
 * - Shell (~15%): yields ~4.5% Shell Charcoal / Briquette feedstock + ~2.8 kL/100MT Liquid Smoke condensate
 * - Water & Organic Residue (~22%): moisture & fermented compost enrichment (~6.5% finished organic compost)
 */
export function calculateMassBalance(rawCoconutTons: number): MassBalanceOutput {
  const safeTons = Math.max(10, Math.min(10000, Number(rawCoconutTons) || 10));
  const estimatedWholeCoconuts = Math.round((safeTons * 1000) / 1.5);

  const coconutOilMT = Number((safeTons * 0.105).toFixed(2));
  const coconutCakeMT = Number((safeTons * 0.085).toFixed(2));
  const cocofiberMT = Number((safeTons * 0.11).toFixed(2));
  const cocopeatMT = Number((safeTons * 0.21).toFixed(2));
  const shellCharcoalMT = Number((safeTons * 0.045).toFixed(2));
  const liquidSmokeKL = Number((safeTons * 0.028).toFixed(2));
  const organicCompostMT = Number((safeTons * 0.065).toFixed(2));

  const totalRecoveredOutputMT = Number(
    (
      coconutOilMT +
      coconutCakeMT +
      cocofiberMT +
      cocopeatMT +
      shellCharcoalMT +
      organicCompostMT
    ).toFixed(2)
  );

  return {
    rawCoconutTons: safeTons,
    estimatedWholeCoconuts,
    streams: {
      coconutOilMT,
      coconutCakeMT,
      cocofiberMT,
      cocopeatMT,
      shellCharcoalMT,
      liquidSmokeKL,
      organicCompostMT,
    },
    totalRecoveredOutputMT,
    wasteDiversionRatePct: 98.4,
  };
}

export interface RfqFormValues {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  dimension: DimensionKey;
  message: string;
}

export type RfqFieldErrors = Partial<Record<keyof RfqFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d][\d\s\-()]{6,22}$/;

export function validateRfqForm(
  values: RfqFormValues,
  locale: 'id' | 'en' = 'id'
): RfqFieldErrors {
  const errors: RfqFieldErrors = {};

  if (!values.companyName.trim() || values.companyName.trim().length < 2) {
    errors.companyName =
      locale === 'id'
        ? 'Nama perusahaan wajib diisi minimal 2 karakter.'
        : 'Company name is required (at least 2 characters).';
  }

  if (!values.contactName.trim() || values.contactName.trim().length < 2) {
    errors.contactName =
      locale === 'id'
        ? 'Nama penanggung jawab (PIC) wajib diisi.'
        : 'Contact person name is required.';
  }

  if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email =
      locale === 'id'
        ? 'Masukkan alamat email bisnis yang valid.'
        : 'Please enter a valid business email address.';
  }

  if (!PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone =
      locale === 'id'
        ? 'Masukkan nomor telepon atau WhatsApp yang valid (min. 7 digit).'
        : 'Please enter a valid phone or WhatsApp number (min. 7 digits).';
  }

  if (!values.country.trim()) {
    errors.country =
      locale === 'id'
        ? 'Negara atau kota tujuan wajib diisi.'
        : 'Destination country or city is required.';
  }

  if (!values.message.trim() || values.message.trim().length < 12) {
    errors.message =
      locale === 'id'
        ? 'Jelaskan kebutuhan kapasitas, produk, atau mesin minimal 12 karakter.'
        : 'Please specify product, machinery, or shipment requirements (min. 12 characters).';
  }

  return errors;
}

export function generateRfqReference(
  dimension: DimensionKey,
  date: Date = new Date(),
  sequenceSeed = 104
): string {
  const prefixMap: Record<DimensionKey, string> = {
    processing: 'PRC',
    machinery: 'MCH',
    trading: 'TRD',
  };
  const yyyy = date.getUTCFullYear();
  const mm = String(date.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(date.getUTCDate()).padStart(2, '0');
  const seq = String(Math.abs(sequenceSeed) % 1000).padStart(3, '0');
  return `BGN-${prefixMap[dimension]}-${yyyy}${mm}${dd}-${seq}`;
}
