import { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import {
  BRAND_ASSETS,
  EXECUTION_WORKFLOW,
  MACHINERY_CAPABILITIES,
  MACHINERY_CATEGORIES,
  MEDIA_PHOTOS,
  type Locale,
} from '../data/brandData';

interface MachinerySectionProps {
  locale: Locale;
  onInquireMachinery: (categoryName: string) => void;
  onOpenDiagram: () => void;
}

export function MachinerySection({
  locale,
  onInquireMachinery,
  onOpenDiagram,
}: MachinerySectionProps) {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(
    MACHINERY_CATEGORIES[3].id // Flagship Husk to Fibre (Coir Processing)
  );

  const selectedCategory =
    MACHINERY_CATEGORIES.find((cat) => cat.id === selectedCategoryId) ??
    MACHINERY_CATEGORIES[0];

  return (
    <section
      id="mesin"
      className="scroll-mt-16 bg-navy-midnight text-white py-16 lg:py-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/12">
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E8CA64]">
              {locale === 'id'
                ? 'Dimensi 02 · Rekayasa 3D & Manufaktur Mesin'
                : 'Dimension 02 · 3D Engineering & Machinery Manufacturing'}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {locale === 'id'
                ? '02. Produksi Mesin Industri Kelapa, Desain 3D & Solusi Pabrik EPC'
                : '02. Coconut Industry Machinery, 3D Engineering & Turnkey EPC'}
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              {locale === 'id'
                ? 'Pusat desain, rekayasa proses 3D CAD, dan fabrikasi mesin pengolahan kelapa buatan Indonesia—dari unit mandiri hingga pabrik terintegrasi modular siap operasi.'
                : 'In-house 3D CAD engineering center and heavy steel fabrication workshop delivering standalone coconut machines and scalable turnkey EPC plants.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenDiagram}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 self-start lg:self-end cursor-pointer"
          >
            <Maximize2 className="w-4 h-4" aria-hidden="true" />
            <span>
              {locale === 'id' ? 'Lihat Cetak Biru Mesin' : 'View Machinery Blueprint'}
            </span>
          </button>
        </div>

        {/* Dedicated Engineering & Fabrication Visual Showcase */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="h-56 sm:h-64 overflow-hidden relative">
              <img
                src={MEDIA_PHOTOS.engineering3d}
                alt={
                  locale === 'id'
                    ? 'Pusat Desain 3D CAD & Rekayasa Pabrik Kelapa PT. Binco Global Nusantara'
                    : 'PT. Binco Global Nusantara 3D CAD Engineering & Plant Design Studio'
                }
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs font-semibold text-[#84CC16]">
                  {locale === 'id' ? 'Engineering · Desain 3D & Simulasi' : 'Engineering · 3D CAD & Simulation'}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-white">
                  {locale === 'id'
                    ? 'Perancangan Tata Letak 3D & Neraca Energi Pabrik'
                    : '3D Plant Layout Modeling & Process Utility Engineering'}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {locale === 'id'
                    ? 'Setiap lini mesin dimodelkan secara 3D untuk memverifikasi aliran bahan baku, kebutuhan daya listrik (kW), pemipaan higienis, serta kemudahan perawatan operator sebelum tahap fabrikasi.'
                    : 'Every line is modeled in 3D CAD to validate raw-material flow, electrical load schedules (kW), hygienic piping, and operator access prior to steel fabrication.'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0B1F3A] border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="h-56 sm:h-64 overflow-hidden relative">
              <img
                src={MEDIA_PHOTOS.machineryWorkshop}
                alt={
                  locale === 'id'
                    ? 'Workshop Fabrikasi Mesin Industri Kelapa PT. Binco Global Nusantara'
                    : 'PT. Binco Global Nusantara Heavy Coconut Machinery Fabrication Workshop'
                }
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs font-semibold text-[#E8CA64]">
                  {locale === 'id' ? 'Fabrikasi · Uji Mutu FAT & Instalasi' : 'Fabrication · FAT QC & Commissioning'}
                </p>
                <h3 className="mt-1.5 text-lg font-bold text-white">
                  {locale === 'id'
                    ? 'Fabrikasi Baja Tugas Berat, Stainless Food-Grade & Instalasi'
                    : 'Heavy Steel Fabrication, Food-Grade Stainless & Site Installation'}
                </h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                  {locale === 'id'
                    ? 'Pemotongan presisi, pengelasan struktur berat, perakitan panel kontrol, uji beban pabrik (FAT), hingga pengiriman kontainer dan komisioning langsung di lokasi pabrik klien.'
                    : 'Precision cutting, heavy-duty welding, control panel wiring, Factory Acceptance Testing (FAT), seaworthy crating, and on-site commissioning.'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Official Machinery Blueprint + 6 Engineering Capabilities */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-[#0B1F3A] border border-white/12 rounded-2xl p-3 sm:p-4">
            <div className="rounded-xl overflow-hidden bg-white">
              <img
                src={BRAND_ASSETS.machineryDiagram}
                alt={
                  locale === 'id'
                    ? 'Cetak Biru Desain, Rekayasa & Rantai Pasok Mesin Industri Kelapa PT. Binco Global Nusantara'
                    : 'PT. Binco Global Nusantara Coconut Industry Machinery Design, Engineering & Supply Chain'
                }
                referrerPolicy="no-referrer"
                className="w-full h-auto block object-contain"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-slate-300">
              <span>
                {locale === 'id'
                  ? 'R&D · Rekayasa Proses · Desain 3D · Fabrikasi · Uji FAT · Instalasi'
                  : 'R&D · Process Engineering · 3D CAD · Fabrication · FAT · On-Site Commissioning'}
              </span>
              <button
                type="button"
                onClick={onOpenDiagram}
                className="font-semibold text-[#E8CA64] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
              >
                {locale === 'id' ? 'Perbesar Penuh' : 'Expand Full View'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
            {MACHINERY_CAPABILITIES.map((cap, idx) => (
              <div
                key={cap.title.en}
                className="bg-[#0B1F3A]/90 border border-white/10 rounded-xl px-4 py-3"
              >
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-xs font-semibold text-[#E8CA64] tabular-nums">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-sm font-semibold text-white">{cap.title[locale]}</h3>
                </div>
                <p className="mt-1 pl-7 text-xs text-slate-300 leading-relaxed">
                  {cap.detail[locale]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Complete 7-Category Machinery Range Interactive Explorer */}
        <div className="mt-14 pt-12 border-t border-white/12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {locale === 'id'
                ? 'Katalog 7 Kategori Mesin Industri Kelapa'
                : 'Complete Range of 7 Coconut Machinery Categories'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {locale === 'id'
                ? 'Pilih kategori untuk melihat foto, spesifikasi kapasitas & daftar mesin'
                : 'Select a category to inspect photos, modular capacities & equipment list'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Category Selector List */}
            <div
              role="tablist"
              aria-label={locale === 'id' ? 'Kategori Mesin Kelapa' : 'Coconut Machinery Categories'}
              className="lg:col-span-5 flex flex-col gap-2"
            >
              {MACHINERY_CATEGORIES.map((category) => {
                const isSelected = category.id === selectedCategory.id;
                return (
                  <button
                    key={category.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setSelectedCategoryId(category.id)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-150 cursor-pointer flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'bg-[#102A4C] text-white border-[#D4AF37] shadow-md'
                        : 'bg-[#040F1E]/80 text-slate-200 border-white/10 hover:bg-[#0B1F3A] hover:border-white/25'
                    }`}
                  >
                    <div className="min-w-0">
                      <span
                        className={`font-mono text-xs font-semibold ${
                          isSelected ? 'text-[#E8CA64]' : 'text-[#84CC16]'
                        }`}
                      >
                        {category.code}
                      </span>
                      <p className="text-sm font-semibold truncate">{category.name[locale]}</p>
                    </div>
                    <span className="font-mono text-xs whitespace-nowrap shrink-0 tabular-nums text-slate-400">
                      {category.machines.length} {locale === 'id' ? 'unit' : 'units'}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Machinery Category Specification Panel (Dark Executive Steel-Navy) */}
            <div
              role="tabpanel"
              data-testid="machinery-detail-panel"
              className="lg:col-span-7 bg-[#040F1E] text-white rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-xl"
            >
              <div className="h-44 sm:h-52 relative overflow-hidden">
                <img
                  src={selectedCategory.image}
                  alt={selectedCategory.name[locale]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040F1E] via-[#040F1E]/35 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="font-mono text-xs font-semibold text-[#E8CA64]">
                    {selectedCategory.code} · {locale === 'id' ? 'Spesifikasi Sistem' : 'System Specification'}
                  </span>
                  <h4 className="mt-1 text-xl sm:text-2xl font-bold text-white">
                    {selectedCategory.name[locale]}
                  </h4>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-4">
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {selectedCategory.focus[locale]}
                </p>

                {/* Key Engineering Metrics */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#0B1F3A] rounded-xl p-4 border border-white/10">
                  <div>
                    <p className="text-xs text-slate-400">
                      {locale === 'id' ? 'Rentang Kapasitas Modular' : 'Modular Capacity Range'}
                    </p>
                    <p className="mt-1 font-mono text-sm font-semibold text-[#84CC16] tabular-nums">
                      {selectedCategory.capacityRange}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">
                      {locale === 'id' ? 'Estimasi Kebutuhan Daya' : 'Estimated Power Demand'}
                    </p>
                    <p className="mt-1 font-mono text-sm font-semibold text-[#E8CA64] tabular-nums">
                      {selectedCategory.powerEstimate}
                    </p>
                  </div>
                </div>

                {/* Equipment List */}
                <div className="mt-6">
                  <p className="text-xs font-semibold text-slate-400">
                    {locale === 'id'
                      ? 'Unit Mesin Utama dalam Kategori Ini'
                      : 'Core Machinery Included in This Line'}
                  </p>
                  <ul className="mt-3 divide-y divide-white/10 border-t border-b border-white/10">
                    {selectedCategory.machines.map((machine, idx) => (
                      <li key={machine.en} className="py-3 flex items-baseline gap-3 text-sm">
                        <span className="font-mono text-xs font-semibold text-[#84CC16] tabular-nums">
                          0{idx + 1}
                        </span>
                        <span className="font-medium text-slate-100">{machine[locale]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 text-xs text-slate-300">
                  <span className="font-semibold text-[#E8CA64]">
                    {locale === 'id' ? 'Output Utama: ' : 'Primary Output: '}
                  </span>
                  <span>{selectedCategory.outputs[locale]}</span>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <span className="text-xs text-slate-400">
                    {locale === 'id'
                      ? 'Tersedia konfigurasi unit tunggal atau pabrik turnkey EPC.'
                      : 'Available as standalone machinery or complete turnkey EPC plant.'}
                  </span>

                  <button
                    type="button"
                    onClick={() => onInquireMachinery(selectedCategory.name[locale])}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#040F1E] bg-[#10B981] hover:bg-[#34D399] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>
                      {locale === 'id' ? 'Minta Penawaran Lini Mesin' : 'Request Machinery Quote'}
                    </span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Stage Project Execution & EPC Workflow */}
        <div className="mt-14 pt-12 border-t border-white/12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {locale === 'id'
                ? 'Alur Eksekusi Proyek & Rantai Pasok Mesin (6 Tahap)'
                : 'Supply Chain & Project Execution Workflow (6 Stages)'}
            </h3>
            <p className="text-xs text-slate-400">
              {locale === 'id'
                ? 'Dari studi kelayakan hingga dukungan operasional jangka panjang'
                : 'From feasibility modeling through long-term plant operation'}
            </p>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXECUTION_WORKFLOW.map((stage) => (
              <li
                key={stage.step}
                className="bg-[#0B1F3A]/85 border border-white/10 rounded-xl p-5"
              >
                <span className="font-mono text-xs font-semibold text-[#E8CA64] tabular-nums">
                  {locale === 'id' ? `Tahap ${stage.step}` : `Stage ${stage.step}`}
                </span>
                <h4 className="mt-1.5 text-base font-bold text-white">{stage.title[locale]}</h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {stage.detail[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
