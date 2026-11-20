import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  FileDown,
  Pause,
  Play,
} from 'lucide-react';
import {
  DIMENSIONS_OVERVIEW,
  HERO_SLIDES,
  type DimensionKey,
  type Locale,
} from '../data/brandData';

interface HeroSectionProps {
  locale: Locale;
  onLocaleChange: (next: Locale) => void;
  onOpenProfilePdf: () => void;
  onSelectDimension: (dimension: DimensionKey) => void;
}

export function HeroSection({
  locale,
  onLocaleChange,
  onOpenProfilePdf,
  onSelectDimension,
}: HeroSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  const current = HERO_SLIDES[activeSlide];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <section
      id="top"
      className="relative bg-[#040F1E] border-b border-white/10 overflow-hidden"
    >
      {/* Full-Bleed Cinematic Industrial Hero Slider */}
      <div className="relative min-h-[580px] lg:min-h-[650px] flex flex-col justify-between">
        {/* Background Slides with Crossfade & Subtle Slow Pan */}
        {HERO_SLIDES.map((slide, idx) => {
          const isCurrent = idx === activeSlide;
          return (
            <div
              key={slide.id}
              aria-hidden={!isCurrent}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isCurrent ? 'opacity-100 z-0' : 'opacity-0 pointer-events-none z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.caption[locale]}
                className={`w-full h-full object-cover object-center ${
                  isCurrent ? 'animate-hero-zoom' : ''
                }`}
              />
              {/* Deep Executive Navy Gradient Scrim for High-Contrast Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#040F1E]/95 via-[#040F1E]/82 to-[#040F1E]/45" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040F1E] via-transparent to-[#040F1E]/55" />
            </div>
          );
        })}

        {/* Top Utility Strip inside Hero: Corporate Identity + Bilingual Toggle + Company Profile PDF */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/12">
            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-x-3 gap-y-0.5 text-xs sm:text-sm text-slate-300">
              <span className="font-semibold text-white">PT. Binco Global Nusantara</span>
              <span aria-hidden="true" className="hidden sm:inline text-[#D4AF37]/60">
                ·
              </span>
              <span className="italic text-[#84CC16] font-medium">
                Waste to Wealth, Nature to Value
              </span>
              <span aria-hidden="true" className="hidden md:inline text-white/25">
                ·
              </span>
              <span className="hidden md:inline text-slate-300">
                {locale === 'id'
                  ? 'Industri Kelapa Terpadu & Rekayasa Global'
                  : 'Integrated Coconut Industry & Global Engineering'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={onOpenProfilePdf}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#E8CA64] bg-[#0B1F3A]/85 hover:bg-[#102A4C] border border-[#D4AF37]/40 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{locale === 'id' ? 'Company Profile PDF' : 'Company Profile PDF'}</span>
              </button>

              <div
                role="group"
                aria-label={locale === 'id' ? 'Pilihan Bahasa' : 'Language Selection'}
                className="inline-flex items-center p-1 bg-[#07172C]/90 rounded-lg border border-white/15"
              >
                <button
                  type="button"
                  onClick={() => onLocaleChange('id')}
                  aria-pressed={locale === 'id'}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    locale === 'id'
                      ? 'bg-[#D4AF37] text-[#040F1E]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  ID
                </button>
                <button
                  type="button"
                  onClick={() => onLocaleChange('en')}
                  aria-pressed={locale === 'en'}
                  className={`px-3 py-1 text-xs font-semibold rounded-md transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    locale === 'en'
                      ? 'bg-[#D4AF37] text-[#040F1E]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Center Hero Slide Copy & Actions */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E8CA64]">
              0{activeSlide + 1} / 0{HERO_SLIDES.length} · {current.eyebrow[locale]}
            </p>

            <h1 className="mt-3 text-[clamp(2rem,3.9vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-white">
              {current.title[locale]}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-200 max-w-2xl">
              {current.subtitle[locale]}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={current.ctaHref}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#040F1E] bg-[#10B981] hover:bg-[#34D399] rounded-lg shadow-lg transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>{current.ctaLabel[locale]}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href={current.secondaryHref}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/18 border border-white/20 backdrop-blur-xs rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
              >
                <span>{current.secondaryLabel[locale]}</span>
              </a>
            </div>
          </div>

          {/* Slider Navigation & Progress Controls */}
          <div className="mt-10 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Hero Slides">
              {HERO_SLIDES.map((slide, idx) => {
                const isSelected = idx === activeSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveSlide(idx)}
                    className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#0B1F3A]/90 border-[#D4AF37] text-white'
                        : 'bg-[#040F1E]/60 border-white/12 text-slate-300 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    <span
                      className={`font-mono font-semibold ${
                        isSelected ? 'text-[#E8CA64]' : 'text-slate-400'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="hidden md:inline max-w-[160px] truncate">
                      {slide.caption[locale]}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? 'Putar slider otomatis' : 'Jeda slider otomatis'}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B1F3A]/85 hover:bg-[#102A4C] border border-white/15 text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </button>
              <button
                type="button"
                onClick={handlePrev}
                aria-label={locale === 'id' ? 'Slide sebelumnya' : 'Previous slide'}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B1F3A]/85 hover:bg-[#102A4C] border border-white/15 text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label={locale === 'id' ? 'Slide berikutnya' : 'Next slide'}
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0B1F3A]/85 hover:bg-[#102A4C] border border-white/15 text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Dimension Architectural Executive Strip */}
      <div className="relative z-10 bg-[#040F1E] py-10 lg:py-12 border-t border-white/10">
        <div
          aria-label={locale === 'id' ? 'Ringkasan Tiga Dimensi Bisnis' : 'Three Business Dimensions Overview'}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {DIMENSIONS_OVERVIEW.map((dim) => (
            <div
              key={dim.key}
              className="group flex flex-col justify-between bg-[#0B1F3A]/90 hover:bg-[#102A4C] border border-white/10 hover:border-[#D4AF37]/45 rounded-2xl p-6 transition-all duration-200"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 pb-4 border-b border-white/10">
                  <span className="font-mono text-xs font-semibold text-[#E8CA64] tabular-nums">
                    {locale === 'id' ? `Dimensi ${dim.index}` : `Dimension ${dim.index}`}
                  </span>
                  <div className="text-right">
                    <span className="font-mono text-xl font-bold text-[#84CC16] tabular-nums">
                      {dim.metric}
                    </span>
                    <span className="ml-1.5 text-xs text-slate-300">
                      {dim.metricLabel[locale]}
                    </span>
                  </div>
                </div>

                <h2 className="mt-4 text-lg font-bold text-white leading-snug">
                  {dim.title[locale]}
                </h2>

                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {dim.summary[locale]}
                </p>

                <p className="mt-4 text-xs font-medium text-[#84CC16]/90 leading-relaxed">
                  {dim.scope[locale]}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href={dim.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-[#E8CA64] transition-colors whitespace-nowrap shrink-0"
                >
                  <span>{locale === 'id' ? 'Lihat Spesifikasi' : 'View Specifications'}</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <button
                  type="button"
                  onClick={() => onSelectDimension(dim.key)}
                  className="text-xs font-semibold text-[#84CC16] hover:text-[#A3E635] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {locale === 'id' ? 'Minta Penawaran' : 'Inquire'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
