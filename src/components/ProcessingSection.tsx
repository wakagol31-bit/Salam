import { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import {
  MAIN_PROCESS_LINES,
  PROCESSING_STREAMS,
  type Locale,
  type ProcessingStream,
} from '../data/brandData';

interface ProcessingSectionProps {
  locale: Locale;
  onInquireProduct: (productName: string) => void;
  onOpenDiagram: () => void;
}

type StreamFilter = 'all' | ProcessingStream['id'];

export function ProcessingSection({
  locale,
  onInquireProduct,
  onOpenDiagram,
}: ProcessingSectionProps) {
  const [activeFilter, setActiveFilter] = useState<StreamFilter>('all');

  const filterButtons: Array<{ id: StreamFilter; label: string }> = [
    { id: 'all', label: locale === 'id' ? 'Semua Aliran (5)' : 'All Streams (5)' },
    { id: 'husk', label: locale === 'id' ? 'Sabut & Coir' : 'Husk & Coir' },
    { id: 'meat', label: locale === 'id' ? 'Daging, Santan & Minyak' : 'Meat, Milk & Oil' },
    { id: 'shell', label: locale === 'id' ? 'Tempurung & Arang' : 'Shell & Charcoal' },
    { id: 'value_added', label: locale === 'id' ? 'Produk Turunan' : 'Value-Added' },
    { id: 'organic', label: locale === 'id' ? 'Residu Organik' : 'Organic Residues' },
  ];

  const visibleStreams =
    activeFilter === 'all'
      ? PROCESSING_STREAMS
      : PROCESSING_STREAMS.filter((s) => s.id === activeFilter);

  return (
    <section
      id="produk"
      className="scroll-mt-16 bg-navy-executive text-slate-100 py-16 lg:py-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/12">
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E8CA64]">
              {locale === 'id'
                ? 'Dimensi 01 · Katalog Produk & Pengolahan Limbah'
                : 'Dimension 01 · Product Catalog & Waste Processing'}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {locale === 'id'
                ? '01. Industri Pengolahan Kelapa & Limbah Kelapa'
                : '01. Integrated Coconut & Waste Processing'}
            </h2>
            <p className="mt-3 text-base text-slate-300 leading-relaxed">
              {locale === 'id'
                ? 'Bermitra langsung dengan petani kelapa Nusantara, kami mengolah 100% komponen buah kelapa—dari daging segar, santan, minyak, sabut, tempurung, hingga residu organik—dalam satu ekosistem zero-waste berstandar ekspor.'
                : 'Partnering directly with smallholder coconut plantations across Indonesia, we convert 100% of every coconut—kernel, milk, oil, husk, shell, and organic fines—into standardized export commodities.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenDiagram}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#102A4C] border border-[#D4AF37]/40 rounded-lg transition-colors whitespace-nowrap shrink-0 self-start lg:self-end cursor-pointer"
          >
            <Maximize2 className="w-4 h-4 text-[#E8CA64]" aria-hidden="true" />
            <span>
              {locale === 'id' ? 'Lihat Diagram Ekosistem' : 'View Ecosystem Diagram'}
            </span>
          </button>
        </div>

        {/* Interactive Filter Segmented Control */}
        <div
          className="mt-8 flex flex-wrap items-center gap-2"
          role="tablist"
          aria-label={
            locale === 'id' ? 'Filter Aliran Pengolahan Kelapa' : 'Filter Coconut Processing Streams'
          }
        >
          {filterButtons.map((btn) => {
            const selected = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActiveFilter(btn.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                  selected
                    ? 'bg-[#D4AF37] text-[#040F1E] font-semibold'
                    : 'bg-[#0B1F3A] text-slate-300 hover:text-white hover:bg-[#102A4C] border border-white/10'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>

        {/* Stream & Product Catalog with Realistic Industrial Photography */}
        <div className="mt-10 space-y-14" data-testid="processing-streams-list">
          {visibleStreams.map((stream) => (
            <div key={stream.id} className="space-y-6">
              {/* Stream Header Banner with Realistic Photo */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center bg-[#0B1F3A]/85 border border-white/10 rounded-2xl overflow-hidden">
                <div className="lg:col-span-4 h-48 lg:h-full min-h-[190px] relative">
                  <img
                    src={stream.image}
                    alt={stream.title[locale]}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040F1E]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#0B1F3A]/60" />
                </div>

                <div className="lg:col-span-8 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="font-mono text-xs font-semibold text-[#E8CA64]">
                      {locale === 'id' ? `Aliran ${stream.code}` : `Stream ${stream.code}`} ·{' '}
                      {stream.yieldNote[locale]}
                    </span>
                    <h3 className="mt-1.5 text-xl sm:text-2xl font-bold text-white">
                      {stream.title[locale]}
                    </h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed max-w-2xl">
                      {stream.subtitle[locale]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {stream.products.map((product) => (
                  <article
                    key={product.id}
                    className="flex flex-col justify-between bg-[#0B1F3A]/90 border border-white/10 rounded-2xl p-5 hover:border-[#10B981]/50 hover:bg-[#102A4C]/90 transition-all duration-150"
                  >
                    <div>
                      <div className="flex items-baseline justify-between gap-3">
                        <h4 className="text-base font-bold text-white">
                          {product.name[locale]}
                        </h4>
                        <span className="font-mono text-xs font-semibold text-[#84CC16] whitespace-nowrap shrink-0">
                          {product.moistureOrGrade}
                        </span>
                      </div>

                      <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                        {product.spec[locale]}
                      </p>

                      <dl className="mt-4 pt-3 border-t border-white/10 space-y-2 text-xs">
                        <div>
                          <dt className="text-slate-400">
                            {locale === 'id' ? 'Aplikasi Industri' : 'Industrial Applications'}
                          </dt>
                          <dd className="font-medium text-slate-100 mt-0.5">
                            {product.applications[locale]}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-slate-400">
                            {locale === 'id' ? 'Standar Kemasan' : 'Packaging Standard'}
                          </dt>
                          <dd className="font-medium text-slate-100 mt-0.5">
                            {product.packaging[locale]}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="mt-5 pt-3 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => onInquireProduct(product.name[locale])}
                        className="inline-flex items-center gap-1.5 text-left text-xs font-semibold text-[#E8CA64] hover:text-[#84CC16] transition-colors cursor-pointer"
                      >
                        <span>
                          {locale === 'id'
                            ? `Minta Spesifikasi ${product.name.id}`
                            : `Request ${product.name.en} Spec`}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 7 Integrated Main Process Lines Strip */}
        <div className="mt-16 bg-[#07172C] border border-white/12 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-5 border-b border-white/10">
            <h3 className="text-lg font-bold text-white">
              {locale === 'id'
                ? '7 Lini Proses Utama Fasilitas Terintegrasi'
                : '7 Main Process Lines — Integrated Facility'}
            </h3>
            <p className="text-xs text-slate-400">
              {locale === 'id'
                ? 'Penerimaan · Sortasi · Pencucian · Pengupasan · Pemrosesan Hilir'
                : 'Receiving · Sorting · Washing · Dehusking · Downstream Conversion'}
            </p>
          </div>

          <ol className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MAIN_PROCESS_LINES.map((line) => (
              <li
                key={line.step}
                className="bg-[#0B1F3A] border border-white/10 rounded-xl p-4"
              >
                <span className="font-mono text-xs font-semibold text-[#E8CA64]">
                  {locale === 'id' ? `Lini ${line.step}` : `Line ${line.step}`}
                </span>
                <p className="mt-1 text-sm font-bold text-white">{line.name[locale]}</p>
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                  {line.detail[locale]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
