import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  PACKAGING_STANDARDS,
  PROJECT_TRACKS,
  TRADE_CORRIDORS,
  type Locale,
} from '../data/brandData';

interface TradingSectionProps {
  locale: Locale;
  onInquireTrade: (summary: string) => void;
}

export function TradingSection({ locale, onInquireTrade }: TradingSectionProps) {
  const [selectedRegionId, setSelectedRegionId] = useState<string>(TRADE_CORRIDORS[0].id);

  const selectedCorridor =
    TRADE_CORRIDORS.find((c) => c.id === selectedRegionId) ?? TRADE_CORRIDORS[0];

  const tradePillars = [
    {
      index: 'A',
      title: {
        id: 'Ekspor Komoditas Olahan Kelapa',
        en: 'Processed Coconut Commodity Export',
      },
      detail: {
        id: 'Pengiriman FCL 20ft & 40ft HC untuk Cocofiber, Cocopeat Block/Karung, Cocomesh, Briket Arang Tempurung, VCO/CNO, Santan, dan Coir Pots lengkap dengan Phytosanitary, Fumigation, COO, dan CoA lab.',
        en: 'FCL 20ft & 40ft HC shipments of Cocofiber, Cocopeat Blocks/Sacks, Cocomesh, Shell Briquettes, VCO/CNO, Coconut Milk, and Coir Pots with Phytosanitary, Fumigation, COO, and lab CoA.',
      },
    },
    {
      index: 'B',
      title: {
        id: 'Ekspor-Impor Mesin & Komponen Industri',
        en: 'Industrial Machinery Export-Import & Sourcing',
      },
      detail: {
        id: 'Pengadaan dan ekspor lini mesin kelapa buatan Indonesia serta impor komponen presisi (motor efisiensi tinggi, PLC otomasi, komponen hidrolik) dengan pengurusan kepabeanan terpadu.',
        en: 'Exporting Indonesian-built coconut processing lines and importing precision sub-assemblies (high-efficiency motors, PLC controls, hydraulic units) with full customs clearance.',
      },
    },
    {
      index: 'C',
      title: {
        id: 'Distribusi Domestik & Trading Komoditas',
        en: 'Domestic Distribution & Multi-Origin Trading',
      },
      detail: {
        id: 'Konsolidasi pasokan dari sentra kelapa Nusantara, manajemen gudang ekspor, serta kontrak pasokan rutin bulanan untuk manufaktur domestik dan importir internasional.',
        en: 'Multi-island Indonesian sourcing consolidation, export warehousing, and recurring monthly supply contracts for both domestic mills and international importers.',
      },
    },
  ];

  return (
    <section
      id="ekspor"
      className="scroll-mt-16 bg-navy-midnight text-slate-100 py-16 lg:py-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/12">
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E8CA64]">
              {locale === 'id'
                ? 'Dimensi 03 · Ekspor, Impor & Portofolio Proyek'
                : 'Dimension 03 · Global Export, Trade & Project Tracks'}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {locale === 'id'
                ? '03. Ekspor, Impor & Rantai Pasok Global'
                : '03. Global Export, Import & Supply Chain Network'}
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              {locale === 'id'
                ? 'Menghubungkan sentra produksi Nusantara dengan pembeli industri di 5 kawasan global melalui pengemasan standar kontainer, kepatuhan dokumen ekspor-impor, dan jadwal pengapalan terukur.'
                : 'Connecting Indonesian production centers to industrial buyers across 5 global regions with export-grade containerization, full customs compliance, and reliable vessel schedules.'}
            </p>
          </div>

          <a
            href="#kalkulator"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#040F1E] bg-[#10B981] hover:bg-[#34D399] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 self-start lg:self-end"
          >
            <span>
              {locale === 'id' ? 'Hitung Muatan Kontainer' : 'Calculate Container Load'}
            </span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* 3 Trade Pillars */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tradePillars.map((pillar) => (
            <div
              key={pillar.index}
              className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-6"
            >
              <span className="font-mono text-xs font-semibold text-[#E8CA64]">
                {locale === 'id' ? `Lingkup ${pillar.index}` : `Scope ${pillar.index}`}
              </span>
              <h3 className="mt-2 text-lg font-bold text-white">{pillar.title[locale]}</h3>
              <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                {pillar.detail[locale]}
              </p>
            </div>
          ))}
        </div>

        {/* 5 Global Distribution Corridors Interactive Matrix */}
        <div className="mt-14">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-5">
            <h3 className="text-xl font-bold text-white">
              {locale === 'id'
                ? 'Jaringan Koridor Ekspor & Distribusi Global'
                : 'Global Export Corridors & Regional Distribution'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {locale === 'id'
                ? 'Pelabuhan Muat Utama: Tanjung Priok (Jakarta) · Tanjung Perak (Surabaya) · Belawan · Makassar'
                : 'Primary Loading Ports: Tanjung Priok (Jakarta) · Tanjung Perak (Surabaya) · Belawan · Makassar'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Corridor Table */}
            <div className="lg:col-span-8 min-w-0 w-full overflow-x-auto border border-white/12 rounded-2xl bg-[#040F1E]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#0B1F3A] border-b border-white/12 text-xs font-semibold text-[#E8CA64]">
                    <th className="py-3.5 px-4">{locale === 'id' ? 'Kawasan' : 'Region'}</th>
                    <th className="py-3.5 px-4">{locale === 'id' ? 'Pelabuhan Utama' : 'Primary Hubs'}</th>
                    <th className="py-3.5 px-4 whitespace-nowrap">
                      {locale === 'id' ? 'Estimasi Transit' : 'Est. Transit'}
                    </th>
                    <th className="py-3.5 px-4 whitespace-nowrap">Incoterms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-sm">
                  {TRADE_CORRIDORS.map((corridor) => {
                    const isSelected = corridor.id === selectedCorridor.id;
                    return (
                      <tr
                        key={corridor.id}
                        className={
                          isSelected
                            ? 'bg-[#102A4C]'
                            : 'bg-[#040F1E] hover:bg-[#0B1F3A]/80 transition-colors'
                        }
                      >
                        <td className="py-3.5 px-4">
                          <button
                            type="button"
                            onClick={() => setSelectedRegionId(corridor.id)}
                            aria-pressed={isSelected}
                            className={`text-left font-semibold cursor-pointer ${
                              isSelected
                                ? 'text-[#84CC16] underline'
                                : 'text-white hover:text-[#E8CA64]'
                            }`}
                          >
                            {corridor.region[locale]}
                          </button>
                        </td>
                        <td className="py-3.5 px-4 text-xs sm:text-sm text-slate-300">
                          {corridor.primaryPorts}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs sm:text-sm text-slate-100 whitespace-nowrap tabular-nums">
                          {corridor.transitDays}
                        </td>
                        <td className="py-3.5 px-4 font-mono text-xs text-slate-300 whitespace-nowrap">
                          {corridor.incoterms}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Selected Corridor Brief */}
            <div className="lg:col-span-4 bg-[#040F1E] text-white rounded-2xl p-6 flex flex-col justify-between border border-[#D4AF37]/35">
              <div>
                <p className="font-mono text-xs font-semibold text-[#E8CA64]">
                  {locale === 'id' ? 'Profil Koridor Terpilih' : 'Selected Trade Corridor'}
                </p>
                <h4 className="mt-1.5 text-xl font-bold">{selectedCorridor.region[locale]}</h4>

                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-xs text-slate-400">
                      {locale === 'id' ? 'Permintaan Komoditas Utama' : 'Primary Buyer Demand'}
                    </dt>
                    <dd className="mt-1 text-slate-200 leading-relaxed">
                      {selectedCorridor.keyDemand[locale]}
                    </dd>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                    <div>
                      <dt className="text-xs text-slate-400">
                        {locale === 'id' ? 'Transit Laut' : 'Ocean Transit'}
                      </dt>
                      <dd className="mt-0.5 font-mono text-sm font-semibold text-[#84CC16] tabular-nums">
                        {selectedCorridor.transitDays}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-slate-400">Incoterms</dt>
                      <dd className="mt-0.5 font-mono text-sm font-semibold text-white">
                        {selectedCorridor.incoterms}
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <button
                type="button"
                onClick={() =>
                  onInquireTrade(
                    locale === 'id'
                      ? `Permintaan Ekspor/Trading tujuan ${selectedCorridor.region.id} (${selectedCorridor.incoterms})`
                      : `Export/Trading inquiry for ${selectedCorridor.region.en} (${selectedCorridor.incoterms})`
                  )
                }
                className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>
                  {locale === 'id'
                    ? `Ajukan Pengiriman ke ${selectedCorridor.region.id}`
                    : `Inquire for ${selectedCorridor.region.en}`}
                </span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Export Packaging Standards */}
        <div className="mt-14 pt-12 border-t border-white/12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <h3 className="text-xl font-bold text-white">
              {locale === 'id'
                ? 'Standar Kemasan Ekspor & Muatan Kontainer'
                : 'Export Packaging & Containerization Standards'}
            </h3>
            <p className="text-xs text-slate-400">
              {locale === 'id'
                ? 'Mendukung merek Binco maupun OEM / Private Label pembeli'
                : 'Available in Binco branding or OEM / Private Label packaging'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PACKAGING_STANDARDS.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#D4AF37]/40 transition-colors"
              >
                <div>
                  <h4 className="text-base font-bold text-white">{pkg.name[locale]}</h4>
                  <p className="mt-2 font-mono text-xs font-medium text-[#E8CA64] tabular-nums">
                    {pkg.unitWeight}
                  </p>
                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                    {pkg.specDetail[locale]}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-xs text-slate-400">
                    {locale === 'id' ? 'Kapasitas 40ft HC' : '40ft HC Payload'}
                  </p>
                  <p className="mt-0.5 font-mono text-xs font-semibold text-[#84CC16] tabular-nums">
                    {pkg.container40HC}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Portfolio / Implementation Solution Models */}
        <div id="proyek" className="scroll-mt-20 mt-14 pt-12 border-t border-white/12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#84CC16]">
                {locale === 'id' ? 'Portofolio & Skema Implementasi Proyek' : 'Project Portfolio & Solution Models'}
              </p>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                {locale === 'id'
                  ? 'Solusi Proyek Pabrik Turnkey & Kontrak Pasokan Ekspor'
                  : 'Turnkey Plant Implementations & Export Supply Programs'}
              </h3>
            </div>
            <p className="text-xs text-slate-400">
              {locale === 'id'
                ? 'Dapat dikonfigurasi sesuai kapasitas bahan baku mitra'
                : 'Configurable to partner raw-material throughput'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECT_TRACKS.map((proj) => (
              <article
                key={proj.id}
                className="bg-[#040F1E] border border-white/12 hover:border-[#D4AF37]/45 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={proj.image}
                      alt={proj.title[locale]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040F1E] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 font-mono text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#040F1E]/85 text-[#E8CA64] border border-[#D4AF37]/40">
                      {proj.code} · {proj.statusLabel[locale]}
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-xs text-[#84CC16]">{proj.category[locale]}</p>
                    <h4 className="mt-1.5 text-base font-bold text-white leading-snug">
                      {proj.title[locale]}
                    </h4>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {proj.scope[locale]}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-white/10 flex flex-col gap-3">
                  <p className="text-xs font-mono text-slate-400">{proj.deliverables[locale]}</p>
                  <button
                    type="button"
                    onClick={() =>
                      onInquireTrade(
                        locale === 'id'
                          ? `Konsultasi Skema Proyek ${proj.code}: ${proj.title.id}`
                          : `Project Inquiry ${proj.code}: ${proj.title.en}`
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8CA64] hover:text-[#84CC16] cursor-pointer"
                  >
                    <span>
                      {locale === 'id' ? 'Diskusikan Skema Proyek Ini' : 'Discuss This Project Model'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
