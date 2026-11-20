import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import {
  BRAND_ASSETS,
  GALLERY_ITEMS,
  type GalleryItem,
  type Locale,
} from '../data/brandData';

interface FactoryGallerySectionProps {
  locale: Locale;
  onOpenDiagram: (diagram: 'ecosystem' | 'machinery') => void;
}

type GalleryFilter = 'all' | GalleryItem['category'];

export function FactoryGallerySection({
  locale,
  onOpenDiagram,
}: FactoryGallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryFilter>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filterTabs: Array<{ id: GalleryFilter; label: string }> = [
    { id: 'all', label: locale === 'id' ? 'Semua Dokumentasi (12)' : 'All Media (12)' },
    { id: 'plantation', label: locale === 'id' ? 'Perkebunan & Zero-Waste' : 'Plantation & Zero-Waste' },
    { id: 'processing', label: locale === 'id' ? 'Pabrik & Pengolahan' : 'Factory & Processing' },
    { id: 'machinery', label: locale === 'id' ? 'Mesin & Desain 3D' : 'Machinery & 3D CAD' },
    { id: 'export', label: locale === 'id' ? 'Gudang & Ekspor' : 'Warehouse & Export' },
  ];

  const visibleItems =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const circularStages = [
    {
      fraction: '~35%',
      name: { id: 'Sabut Kelapa (Husk)', en: 'Coconut Husk' },
      output: { id: 'Cocofiber, Cocopeat Low-EC, Coir Chips, Cocomesh & Coir Pots', en: 'Cocofiber, Low-EC Cocopeat, Chips, Cocomesh & Coir Pots' },
    },
    {
      fraction: '~28%',
      name: { id: 'Daging Kelapa (Kernel)', en: 'Coconut Kernel' },
      output: { id: 'VCO, CNO, Santan Industri, Tepung Kelapa & Bungkil Pakan', en: 'VCO, CNO, Industrial Coconut Milk, Flour & Feed Cake' },
    },
    {
      fraction: '~15%',
      name: { id: 'Tempurung (Shell)', en: 'Coconut Shell' },
      output: { id: 'Arang Tempurung, Briket Shisha/BBQ & Asap Cair Destilasi', en: 'Shell Charcoal, Shisha/BBQ Briquettes & Liquid Smoke' },
    },
    {
      fraction: '~22%',
      name: { id: 'Air & Residu Organik', en: 'Water & Organic Fines' },
      output: { id: 'Kompos Sabut Terfermentasi & Pupuk Organik Granul Kembali ke Kebun', en: 'Fermented Compost & Organic Granular Fertilizer Back to Farms' },
    },
  ];

  return (
    <section
      id="pabrik"
      className="scroll-mt-16 bg-navy-executive text-slate-100 py-16 lg:py-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Factory & Sustainability Circular Economy Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5">
            <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#84CC16]">
              {locale === 'id'
                ? 'Fasilitas Pabrik & Keberlanjutan Zero-Waste'
                : 'Integrated Factory & Zero-Waste Sustainability'}
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {locale === 'id'
                ? 'Ekonomi Sirkular: 100% Fraksi Kelapa Tanpa Limbah Terbuang'
                : 'Circular Bio-Economy: 100% Coconut Fraction Utilization'}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {locale === 'id'
                ? 'Arsitektur fasilitas terintegrasi kami menghubungkan penerimaan kelapa dari petani hingga 7 lini pengolahan dan pengemasan ekspor, memastikan tidak ada sabut, tempurung, maupun debu organik yang terbuang.'
                : 'Our integrated plant architecture links smallholder receiving through 7 synchronized processing lines to container dispatch, ensuring zero discarded husks, shells, or organic residues.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {circularStages.map((stage) => (
                <div
                  key={stage.name.en}
                  className="bg-[#0B1F3A] border border-white/10 rounded-xl p-4"
                >
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-xs font-bold text-white">{stage.name[locale]}</h3>
                    <span className="font-mono text-xs font-bold text-[#E8CA64] tabular-nums">
                      {stage.fraction}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {stage.output[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Integrated Ecosystem Blueprint Showcase */}
          <div className="lg:col-span-7 bg-[#0B1F3A] border border-[#D4AF37]/30 rounded-2xl p-3 sm:p-4">
            <div className="bg-white rounded-xl overflow-hidden">
              <img
                src={BRAND_ASSETS.ecosystemDiagram}
                alt={
                  locale === 'id'
                    ? 'Cetak Biru Ekosistem Pengolahan Kelapa & Ekspor Terpadu PT. Binco Global Nusantara'
                    : 'PT. Binco Global Nusantara Integrated Coconut Processing & Global Export Blueprint'
                }
                referrerPolicy="no-referrer"
                className="w-full h-auto block object-contain"
              />
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 px-1">
              <p className="text-xs text-slate-300">
                <span className="font-semibold text-white">
                  {locale === 'id'
                    ? 'Alur Nilai Terpadu (Integrated Value Chain)'
                    : 'Integrated Coconut Value Chain'}
                </span>{' '}
                · {locale === 'id' ? 'Hulu Kebun hingga Kontainer Ekspor' : 'Farm Gate to Export Container'}
              </p>
              <button
                type="button"
                onClick={() => onOpenDiagram('ecosystem')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{locale === 'id' ? 'Perbesar Cetak Biru' : 'Inspect Blueprint'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Industrial Photo & Blueprint Gallery */}
        <div className="pt-12 border-t border-white/12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#E8CA64]">
                {locale === 'id' ? 'Galeri Industri, Fasilitas & Produk' : 'Industrial, Facility & Product Gallery'}
              </p>
              <h3 className="mt-1.5 text-2xl sm:text-3xl font-bold text-white">
                {locale === 'id'
                  ? 'Dokumentasi Visual dari Kebun Kelapa hingga Pelabuhan Ekspor'
                  : 'Visual Documentation from Coconut Plantations to Export Ports'}
              </h3>
            </div>

            <div
              role="tablist"
              aria-label={locale === 'id' ? 'Filter Galeri Industri' : 'Filter Industrial Gallery'}
              className="flex flex-wrap gap-2"
            >
              {filterTabs.map((tab) => {
                const selected = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                      selected
                        ? 'bg-[#10B981] text-[#040F1E]'
                        : 'bg-[#0B1F3A] text-slate-300 hover:text-white border border-white/10'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleItems.map((item) => (
              <figure
                key={item.id}
                className="group bg-[#0B1F3A] border border-white/10 hover:border-[#D4AF37]/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setLightboxItem(item)}
                  className={`relative w-full aspect-video overflow-hidden cursor-pointer text-left ${
                    item.isBlueprint ? 'bg-white p-2' : 'bg-[#040F1E]'
                  }`}
                  aria-label={`${locale === 'id' ? 'Perbesar' : 'Inspect'} ${item.title[locale]}`}
                >
                  <img
                    src={item.image}
                    alt={item.title[locale]}
                    className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                      item.isBlueprint ? 'object-contain' : 'object-cover'
                    }`}
                  />
                  <span className="absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#040F1E]/80 text-white border border-white/15 opacity-90 group-hover:bg-[#D4AF37] group-hover:text-[#040F1E] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </button>
                <figcaption className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {item.title[locale]}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                    {item.caption[locale]}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title[locale]}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-[#040F1E]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl bg-[#0B1F3A] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/10">
              <div className="min-w-0">
                <p className="font-mono text-xs text-[#E8CA64]">PT. Binco Global Nusantara</p>
                <h4 className="text-sm sm:text-base font-bold text-white truncate">
                  {lightboxItem.title[locale]}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxItem(null)}
                aria-label={locale === 'id' ? 'Tutup tampilan foto' : 'Close photo viewer'}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15 text-slate-200 hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className={`p-4 ${lightboxItem.isBlueprint ? 'bg-white' : 'bg-[#040F1E]'}`}>
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title[locale]}
                className="w-full max-h-[70vh] object-contain mx-auto rounded-lg"
              />
            </div>
            <div className="px-5 py-3.5 border-t border-white/10 text-xs sm:text-sm text-slate-300">
              {lightboxItem.caption[locale]}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
