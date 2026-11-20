import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Locale } from '../data/brandData';
import {
  EXPORT_COMMODITIES,
  calculateContainerShipment,
  calculateMassBalance,
  type CommoditySpec,
  type ContainerSize,
  type Incoterm,
} from '../utils/calculators';

interface CalculatorSectionProps {
  locale: Locale;
  onTransferToRfq: (summary: string, dimension: 'trading' | 'processing') => void;
}

type CalculatorMode = 'container' | 'mass_balance';

export function CalculatorSection({ locale, onTransferToRfq }: CalculatorSectionProps) {
  const [mode, setMode] = useState<CalculatorMode>('container');

  // Container Load Planner state
  const [commodityId, setCommodityId] = useState<CommoditySpec['id']>('cocopeat_block');
  const [containerSize, setContainerSize] = useState<ContainerSize>('40ft_hc');
  const [containerCount, setContainerCount] = useState<number>(2);
  const [incoterm, setIncoterm] = useState<Incoterm>('FOB');

  // Mass Balance Yield state
  const [rawCoconutTons, setRawCoconutTons] = useState<number>(250);

  const shipment = calculateContainerShipment(
    commodityId,
    containerSize,
    containerCount,
    incoterm
  );

  const balance = calculateMassBalance(rawCoconutTons);

  const formatUsd = (amount: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(amount);

  const formatNum = (num: number) =>
    new Intl.NumberFormat(locale === 'id' ? 'id-ID' : 'en-US').format(num);

  const handleTransferShipment = () => {
    const commodityName = locale === 'id' ? shipment.commodity.nameId : shipment.commodity.nameEn;
    const sizeLabel = containerSize === '40ft_hc' ? '40ft HC' : '20ft Standard';
    const unitLabel = locale === 'id' ? shipment.commodity.unitNameId : shipment.commodity.unitNameEn;
    const summary =
      locale === 'id'
        ? `Simulasi Ekspor: ${shipment.containerCount}× kontainer ${sizeLabel} ${commodityName} (${shipment.totalPayloadMT} MT / ${formatNum(shipment.totalUnits)} ${unitLabel}), skema ${shipment.incoterm}, estimasi ${formatUsd(shipment.estimatedValueMinUsd)} – ${formatUsd(shipment.estimatedValueMaxUsd)}.`
        : `Export Estimate: ${shipment.containerCount}× ${sizeLabel} containers of ${commodityName} (${shipment.totalPayloadMT} MT / ${formatNum(shipment.totalUnits)} ${unitLabel}), ${shipment.incoterm}, est. ${formatUsd(shipment.estimatedValueMinUsd)} – ${formatUsd(shipment.estimatedValueMaxUsd)}.`;
    onTransferToRfq(summary, 'trading');
  };

  const handleTransferMassBalance = () => {
    const summary =
      locale === 'id'
        ? `Simulasi Kapasitas Pengolahan: ${formatNum(balance.rawCoconutTons)} MT kelapa utuh/bulan (~${formatNum(balance.estimatedWholeCoconuts)} butir) menghasilkan ${balance.streams.coconutOilMT} MT minyak, ${balance.streams.cocofiberMT} MT cocofiber, ${balance.streams.cocopeatMT} MT cocopeat, dan ${balance.streams.shellCharcoalMT} MT arang tempurung.`
        : `Plant Capacity Estimate: ${formatNum(balance.rawCoconutTons)} MT whole coconuts/month (~${formatNum(balance.estimatedWholeCoconuts)} nuts) yielding ${balance.streams.coconutOilMT} MT oil, ${balance.streams.cocofiberMT} MT cocofiber, ${balance.streams.cocopeatMT} MT cocopeat, and ${balance.streams.shellCharcoalMT} MT shell charcoal.`;
    onTransferToRfq(summary, 'processing');
  };

  const massRows = [
    {
      label: locale === 'id' ? 'Cocopeat (Media Tanam)' : 'Cocopeat (Horticultural Substrate)',
      value: `${balance.streams.cocopeatMT} MT`,
      pct: Math.round((balance.streams.cocopeatMT / balance.totalRecoveredOutputMT) * 100),
      colorClass: 'bg-[#D4AF37]',
    },
    {
      label: locale === 'id' ? 'Cocofiber (Serat Panjang)' : 'Cocofiber (Long Coir Fibre)',
      value: `${balance.streams.cocofiberMT} MT`,
      pct: Math.round((balance.streams.cocofiberMT / balance.totalRecoveredOutputMT) * 100),
      colorClass: 'bg-[#10B981]',
    },
    {
      label: locale === 'id' ? 'Minyak Kelapa (VCO / CNO)' : 'Coconut Oil (VCO / CNO)',
      value: `${balance.streams.coconutOilMT} MT`,
      pct: Math.round((balance.streams.coconutOilMT / balance.totalRecoveredOutputMT) * 100),
      colorClass: 'bg-[#38BDF8]',
    },
    {
      label: locale === 'id' ? 'Bungkil Kelapa (Pakan)' : 'Coconut Cake (Feed Meal)',
      value: `${balance.streams.coconutCakeMT} MT`,
      pct: Math.round((balance.streams.coconutCakeMT / balance.totalRecoveredOutputMT) * 100),
      colorClass: 'bg-[#818CF8]',
    },
    {
      label: locale === 'id' ? 'Kompos & Pupuk Organik' : 'Compost & Organic Fertilizer',
      value: `${balance.streams.organicCompostMT} MT`,
      pct: Math.round((balance.streams.organicCompostMT / balance.totalRecoveredOutputMT) * 100),
      colorClass: 'bg-[#84CC16]',
    },
    {
      label: locale === 'id' ? 'Arang Tempurung / Briket' : 'Shell Charcoal / Briquettes',
      value: `${balance.streams.shellCharcoalMT} MT`,
      pct: Math.round((balance.streams.shellCharcoalMT / balance.totalRecoveredOutputMT) * 100),
      colorClass: 'bg-slate-400',
    },
  ];

  return (
    <section
      id="kalkulator"
      className="scroll-mt-16 bg-navy-grid text-slate-100 py-16 lg:py-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/12">
          <div className="max-w-2xl">
            <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E8CA64]">
              {locale === 'id'
                ? 'Perangkat Rekayasa & Ekspor B2B'
                : 'B2B Engineering & Export Estimator'}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {locale === 'id'
                ? 'Kalkulator Muatan Kontainer & Neraca Massa Kelapa'
                : 'Export Container Load & Zero-Waste Yield Calculator'}
            </h2>
          </div>

          {/* Mode Switcher */}
          <div
            role="tablist"
            aria-label={locale === 'id' ? 'Mode Kalkulator' : 'Calculator Mode'}
            className="grid grid-cols-2 sm:inline-flex w-full sm:w-auto p-1 bg-[#0B1F3A] border border-white/12 rounded-xl self-start lg:self-end"
          >
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'container'}
              onClick={() => setMode('container')}
              className={`px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors text-center cursor-pointer ${
                mode === 'container'
                  ? 'bg-[#D4AF37] text-[#040F1E]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {locale === 'id' ? 'Muatan Kontainer' : 'Container Planner'}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === 'mass_balance'}
              onClick={() => setMode('mass_balance')}
              className={`px-2.5 sm:px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors text-center cursor-pointer ${
                mode === 'mass_balance'
                  ? 'bg-[#D4AF37] text-[#040F1E]'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {locale === 'id' ? 'Neraca Massa' : 'Mass Balance'}
            </button>
          </div>
        </div>

        {mode === 'container' ? (
          <div
            role="tabpanel"
            data-testid="calculator-container-panel"
            className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Input Controls + Active Specification Reference */}
            <div className="lg:col-span-5 bg-[#0B1F3A] border border-white/12 rounded-2xl p-6 flex flex-col justify-between gap-6">
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="commodity-select"
                    className="block text-sm font-semibold text-white"
                  >
                    {locale === 'id' ? 'Komoditas Ekspor' : 'Export Commodity'}
                  </label>
                  <select
                    id="commodity-select"
                    value={commodityId}
                    onChange={(e) => setCommodityId(e.target.value as CommoditySpec['id'])}
                    className="mt-2 w-full px-3.5 py-2.5 text-sm bg-[#040F1E] border border-white/15 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
                  >
                    {EXPORT_COMMODITIES.map((item) => (
                      <option key={item.id} value={item.id} className="bg-[#040F1E] text-white">
                        {locale === 'id' ? item.nameId : item.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-sm font-semibold text-white">
                      {locale === 'id' ? 'Ukuran Kontainer' : 'Container Type'}
                    </span>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setContainerSize('20ft')}
                        aria-pressed={containerSize === '20ft'}
                        className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                          containerSize === '20ft'
                            ? 'bg-[#D4AF37] text-[#040F1E] border-[#D4AF37]'
                            : 'bg-[#040F1E] text-slate-300 border-white/15 hover:border-[#D4AF37]'
                        }`}
                      >
                        20ft Std
                      </button>
                      <button
                        type="button"
                        onClick={() => setContainerSize('40ft_hc')}
                        aria-pressed={containerSize === '40ft_hc'}
                        className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                          containerSize === '40ft_hc'
                            ? 'bg-[#D4AF37] text-[#040F1E] border-[#D4AF37]'
                            : 'bg-[#040F1E] text-slate-300 border-white/15 hover:border-[#D4AF37]'
                        }`}
                      >
                        40ft HC
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="block text-sm font-semibold text-white">Incoterms</span>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setIncoterm('FOB')}
                        aria-pressed={incoterm === 'FOB'}
                        className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                          incoterm === 'FOB'
                            ? 'bg-[#10B981] text-[#040F1E] border-[#10B981]'
                            : 'bg-[#040F1E] text-slate-300 border-white/15 hover:border-[#10B981]'
                        }`}
                      >
                        FOB
                      </button>
                      <button
                        type="button"
                        onClick={() => setIncoterm('CIF')}
                        aria-pressed={incoterm === 'CIF'}
                        className={`py-2.5 px-3 text-xs font-semibold rounded-lg border transition-colors whitespace-nowrap cursor-pointer ${
                          incoterm === 'CIF'
                            ? 'bg-[#10B981] text-[#040F1E] border-[#10B981]'
                            : 'bg-[#040F1E] text-slate-300 border-white/15 hover:border-[#10B981]'
                        }`}
                      >
                        CIF
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="container-count"
                      className="text-sm font-semibold text-white"
                    >
                      {locale === 'id' ? 'Jumlah Kontainer (FCL)' : 'Container Quantity (FCL)'}
                    </label>
                    <span className="font-mono text-sm font-bold text-[#84CC16] tabular-nums">
                      {containerCount} FCL
                    </span>
                  </div>
                  <input
                    id="container-count"
                    type="range"
                    min={1}
                    max={20}
                    step={1}
                    value={containerCount}
                    onChange={(e) => setContainerCount(Number(e.target.value))}
                    className="mt-3 w-full accent-[#D4AF37] cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-xs font-mono text-slate-400 tabular-nums">
                    <span>1 FCL</span>
                    <span>10 FCL</span>
                    <span>20 FCL</span>
                  </div>
                </div>
              </div>

              <dl className="pt-5 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <dt className="text-slate-400">
                    {locale === 'id' ? 'Bobot per Unit Kemasan' : 'Net Weight / Unit'}
                  </dt>
                  <dd className="mt-1 font-mono font-semibold text-white tabular-nums">
                    {shipment.commodity.unitWeightKg} kg
                  </dd>
                </div>
                <div>
                  <dt className="text-slate-400">
                    {locale === 'id' ? 'Muatan per Kontainer' : 'Payload / Container'}
                  </dt>
                  <dd className="mt-1 font-mono font-semibold text-white tabular-nums">
                    {containerSize === '40ft_hc'
                      ? shipment.commodity.payload40ftHCMT
                      : shipment.commodity.payload20ftMT}{' '}
                    MT
                  </dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-slate-400">
                    {locale === 'id' ? 'Kelengkapan Dokumen Ekspor' : 'Included Export Documents'}
                  </dt>
                  <dd className="mt-1 font-medium text-slate-200">
                    COO · Phytosanitary · Fumigation · Lab CoA · Packing List &amp; B/L
                  </dd>
                </div>
              </dl>
            </div>

            {/* Live Shipment Summary */}
            <div className="lg:col-span-7 bg-[#040F1E] text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-[#D4AF37]/35 shadow-xl">
              <div>
                <p className="font-mono text-xs font-semibold text-[#E8CA64]">
                  {locale === 'id' ? 'Estimasi Muatan & Nilai Indikatif' : 'Indicative Payload & Trade Valuation'}
                </p>
                <h3 className="mt-1 text-xl font-bold">
                  {locale === 'id' ? shipment.commodity.nameId : shipment.commodity.nameEn}
                </h3>
                <p className="mt-1 text-xs text-slate-300">
                  {shipment.containerCount}× {containerSize === '40ft_hc' ? '40ft High Cube' : '20ft Standard'} · {shipment.incoterm}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-[#0B1F3A] border border-white/10 rounded-xl p-4">
                    <p className="text-xs text-slate-300">
                      {locale === 'id' ? 'Total Berat Bersih Muatan' : 'Total Net Cargo Payload'}
                    </p>
                    <p
                      data-testid="calc-total-payload"
                      className="mt-1 font-mono text-2xl font-bold text-white tabular-nums"
                    >
                      {formatNum(shipment.totalPayloadMT)} MT
                    </p>
                  </div>

                  <div className="bg-[#0B1F3A] border border-white/10 rounded-xl p-4">
                    <p className="text-xs text-slate-300">
                      {locale === 'id' ? 'Jumlah Kemasan' : 'Total Export Units'}
                    </p>
                    <p
                      data-testid="calc-total-units"
                      className="mt-1 font-mono text-2xl font-bold text-white tabular-nums"
                    >
                      {formatNum(shipment.totalUnits)}{' '}
                      <span className="text-sm font-sans font-normal text-slate-300">
                        {locale === 'id'
                          ? shipment.commodity.unitNameId
                          : shipment.commodity.unitNameEn}
                      </span>
                    </p>
                  </div>

                  <div className="bg-[#0B1F3A] border border-white/10 rounded-xl p-4">
                    <p className="text-xs text-slate-300">
                      {locale === 'id'
                        ? `Rentang Nilai Indikatif (${shipment.incoterm})`
                        : `Indicative Value Range (${shipment.incoterm})`}
                    </p>
                    <p
                      data-testid="calc-usd-range"
                      className="mt-1 font-mono text-lg sm:text-xl font-bold text-[#84CC16] tabular-nums"
                    >
                      {formatUsd(shipment.estimatedValueMinUsd)} – {formatUsd(shipment.estimatedValueMaxUsd)}
                    </p>
                    {shipment.incoterm === 'CIF' && (
                      <p className="mt-1 text-xs text-slate-300 font-mono tabular-nums">
                        {locale === 'id' ? 'Termasuk estimasi freight/asuransi ' : 'Includes est. freight/ins. '}
                        {formatUsd(shipment.freightAllowanceUsd)}
                      </p>
                    )}
                  </div>

                  <div className="bg-[#0B1F3A] border border-white/10 rounded-xl p-4">
                    <p className="text-xs text-slate-300">
                      {locale === 'id'
                        ? 'Setara Bahan Baku Kelapa Nusantara'
                        : 'Whole Coconut Sourcing Equivalent'}
                    </p>
                    <p className="mt-1 font-mono text-2xl font-bold text-[#E8CA64] tabular-nums">
                      {formatNum(shipment.rawCoconutRequiredMT)} MT
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-400 max-w-md">
                  {locale === 'id'
                    ? 'Angka merupakan estimasi indikatif industri. Harga kontrak resmi ditentukan berdasarkan spesifikasi lab dan pelabuhan tujuan.'
                    : 'Figures are industrial planning estimates. Formal quotations are finalized based on lab specs and destination port.'}
                </p>
                <button
                  type="button"
                  onClick={handleTransferShipment}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>
                    {locale === 'id' ? 'Masukkan ke Penawaran (RFQ)' : 'Send Estimate to RFQ'}
                  </span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            role="tabpanel"
            data-testid="calculator-mass-panel"
            className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Mass Balance Input */}
            <div className="lg:col-span-5 bg-[#0B1F3A] border border-white/12 rounded-2xl p-6 flex flex-col justify-between">
              <div className="space-y-5">
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="raw-coconut-tons"
                      className="text-sm font-semibold text-white"
                    >
                      {locale === 'id'
                        ? 'Pasokan Kelapa Utuh (Ton / Bulan)'
                        : 'Whole Coconut Input (MT / Month)'}
                    </label>
                    <span className="font-mono text-base font-bold text-[#84CC16] tabular-nums">
                      {formatNum(balance.rawCoconutTons)} MT
                    </span>
                  </div>
                  <input
                    id="raw-coconut-tons"
                    type="range"
                    min={50}
                    max={2000}
                    step={50}
                    value={rawCoconutTons}
                    onChange={(e) => setRawCoconutTons(Number(e.target.value))}
                    className="mt-3 w-full accent-[#10B981] cursor-pointer"
                  />
                  <div className="mt-1 flex justify-between text-xs font-mono text-slate-400 tabular-nums">
                    <span>50 MT</span>
                    <span>1.000 MT</span>
                    <span>2.000 MT</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xs text-slate-400">
                      {locale === 'id' ? 'Estimasi Jumlah Buah' : 'Estimated Whole Nuts'}
                    </p>
                    <p className="mt-1 font-mono text-lg font-bold text-white tabular-nums">
                      {formatNum(balance.estimatedWholeCoconuts)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">
                      {locale === 'id' ? 'Pemanfaatan Zero-Waste' : 'Zero-Waste Utilization'}
                    </p>
                    <p className="mt-1 font-mono text-lg font-bold text-[#84CC16] tabular-nums">
                      {balance.wasteDiversionRatePct}%
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {locale === 'id'
                    ? 'Selain produk padat dan minyak di samping, karbonisasi tempurung juga menghasilkan kondensat Asap Cair sebesar '
                    : 'In addition to solid & oil yields, controlled shell carbonization recovers distilled Liquid Smoke of '}
                  <strong className="font-mono text-[#E8CA64] tabular-nums">
                    {balance.streams.liquidSmokeKL} kL
                  </strong>
                  {locale === 'id' ? ' per bulan.' : ' per month.'}
                </p>
              </div>

              <button
                type="button"
                onClick={handleTransferMassBalance}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#040F1E] bg-[#10B981] hover:bg-[#34D399] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>
                  {locale === 'id'
                    ? 'Konsultasikan Kapasitas Pabrik Ini'
                    : 'Consult This Plant Capacity'}
                </span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Output Breakdown */}
            <div className="lg:col-span-7 bg-[#040F1E] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-white/10">
                <div>
                  <p className="font-mono text-xs font-semibold text-[#E8CA64]">
                    {locale === 'id' ? 'Hasil Pengolahan Terpadu' : 'Integrated Industrial Outputs'}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white">
                    {locale === 'id'
                      ? 'Distribusi Produk Bernilai Tambah'
                      : 'Value-Added Product Output Distribution'}
                  </h3>
                </div>
                <p className="font-mono text-sm font-bold text-[#84CC16] tabular-nums">
                  {balance.totalRecoveredOutputMT} MT {locale === 'id' ? 'produk padat & minyak' : 'finished output'}
                </p>
              </div>

              <div className="mt-6 space-y-4">
                {massRows.map((row) => (
                  <div key={row.label}>
                    <div className="flex items-baseline justify-between text-sm mb-1.5">
                      <span className="font-medium text-slate-200">{row.label}</span>
                      <span className="font-mono font-semibold text-white tabular-nums">
                        {row.value}{' '}
                        <span className="text-xs font-normal text-slate-400">({row.pct}%)</span>
                      </span>
                    </div>
                    <div className="h-2.5 w-full bg-[#0B1F3A] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${row.colorClass}`}
                        style={{ width: `${Math.max(4, row.pct)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
