import { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut } from 'lucide-react';
import { BRAND_ASSETS, type Locale } from '../data/brandData';

interface DiagramModalProps {
  activeDiagram: 'ecosystem' | 'machinery' | null;
  locale: Locale;
  onClose: () => void;
}

export function DiagramModal({ activeDiagram, locale, onClose }: DiagramModalProps) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    setZoomed(false);
  }, [activeDiagram]);

  useEffect(() => {
    if (!activeDiagram) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeDiagram, onClose]);

  if (!activeDiagram) return null;

  const isEcosystem = activeDiagram === 'ecosystem';
  const imageSrc = isEcosystem ? BRAND_ASSETS.ecosystemDiagram : BRAND_ASSETS.machineryDiagram;
  const title = isEcosystem
    ? locale === 'id'
      ? 'Ekosistem Pengolahan Kelapa & Ekspor Global Terpadu'
      : 'Integrated Coconut Processing & Global Export Ecosystem'
    : locale === 'id'
      ? 'Mesin Industri Kelapa — Desain, Rekayasa & Rantai Pasok'
      : 'Coconut Industry Machinery — Design, Engineering & Supply Chain';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="diagram-modal-title"
      className="no-print fixed inset-0 z-50 flex items-center justify-center bg-[#040F1E]/90 backdrop-blur-sm p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-6xl max-h-[90vh] flex flex-col bg-[#0B1F3A] rounded-2xl border border-white/15 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-white/12 bg-[#040F1E]">
          <div className="min-w-0">
            <p className="text-xs font-mono font-semibold text-[#E8CA64]">
              PT. Binco Global Nusantara · {locale === 'id' ? 'Cetak Biru Teknis' : 'Technical Blueprint'}
            </p>
            <h2 id="diagram-modal-title" className="text-base sm:text-lg font-bold text-white truncate">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setZoomed((z) => !z)}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {zoomed ? (
                <>
                  <ZoomOut className="w-4 h-4" aria-hidden="true" />
                  <span>{locale === 'id' ? 'Perkecil (100%)' : 'Reset Zoom'}</span>
                </>
              ) : (
                <>
                  <ZoomIn className="w-4 h-4" aria-hidden="true" />
                  <span>{locale === 'id' ? 'Perbesar (150%)' : 'Zoom In (150%)'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label={locale === 'id' ? 'Tutup jendela diagram' : 'Close blueprint dialog'}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 border border-white/15 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-[#07172C] p-4 sm:p-6">
          <div className={zoomed ? 'w-[150%] max-w-none' : 'w-full'}>
            <img
              src={imageSrc}
              alt={title}
              referrerPolicy="no-referrer"
              className="w-full h-auto rounded-lg border border-white/15 bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
