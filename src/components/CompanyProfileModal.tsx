import { useEffect } from 'react';
import { Download, Printer, X } from 'lucide-react';
import {
  BRAND_ASSETS,
  COMPANY_ABOUT,
  DIMENSIONS_OVERVIEW,
  MACHINERY_CATEGORIES,
  PACKAGING_STANDARDS,
  type Locale,
  type SiteCmsSettings,
} from '../data/brandData';

interface CompanyProfileModalProps {
  open: boolean;
  locale: Locale;
  siteSettings: SiteCmsSettings;
  onClose: () => void;
}

export function CompanyProfileModal({
  open,
  locale,
  siteSettings,
  onClose,
}: CompanyProfileModalProps) {
  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  const handlePrintPdf = () => {
    window.print();
  };

  const handleDownloadDossier = () => {
    const htmlContent = `<!doctype html>
<html lang="${locale}">
<head>
<meta charset="UTF-8" />
<title>Company Profile — PT. Binco Global Nusantara</title>
<style>
  body { font-family: Arial, sans-serif; color: #071A2F; max-width: 840px; margin: 40px auto; line-height: 1.6; padding: 0 24px; }
  h1 { color: #041527; border-bottom: 3px solid #D4AF37; padding-bottom: 10px; }
  h2 { color: #0B233F; margin-top: 28px; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; }
  .tagline { color: #15803D; font-style: italic; font-weight: bold; }
  ul { padding-left: 20px; }
  .meta { background: #f1f5f9; padding: 14px; border-radius: 8px; margin-top: 24px; font-size: 13px; }
</style>
</head>
<body>
  <h1>PT. BINCO GLOBAL NUSANTARA</h1>
  <p class="tagline">Waste to Wealth, Nature to Value — Integrated Coconut Industry & Global Engineering</p>
  <h2>${locale === 'id' ? 'Profil & Visi Perusahaan' : 'Corporate Profile & Vision'}</h2>
  <p>${COMPANY_ABOUT.history[locale]}</p>
  <p><strong>${locale === 'id' ? 'Visi:' : 'Vision:'}</strong> ${COMPANY_ABOUT.vision[locale]}</p>
  <h2>${locale === 'id' ? 'Tiga Dimensi Bisnis Terpadu' : 'Three Integrated Business Dimensions'}</h2>
  <ul>
    ${DIMENSIONS_OVERVIEW.map((d) => `<li><strong>${d.title[locale]}:</strong> ${d.summary[locale]} (${d.scope[locale]})</li>`).join('')}
  </ul>
  <h2>${locale === 'id' ? '7 Kategori Mesin Industri Kelapa' : '7 Coconut Machinery Categories'}</h2>
  <ul>
    ${MACHINERY_CATEGORIES.map((m) => `<li><strong>${m.code} — ${m.name[locale]}:</strong> ${m.capacityRange} | ${m.powerEstimate}</li>`).join('')}
  </ul>
  <h2>${locale === 'id' ? 'Standar Kemasan Ekspor' : 'Export Packaging Standards'}</h2>
  <ul>
    ${PACKAGING_STANDARDS.map((p) => `<li><strong>${p.name[locale]}:</strong> ${p.unitWeight} — 40ft HC: ${p.container40HC}</li>`).join('')}
  </ul>
  <div class="meta">
    <strong>${locale === 'id' ? 'Kontak Resmi' : 'Official Contact'}:</strong><br/>
    Email: ${siteSettings.corporateEmail} | WhatsApp: +${siteSettings.whatsappNumber.replace(/[^\d]/g, '')}<br/>
    ${siteSettings.headquartersLocation}
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Company_Profile_PT_Binco_Global_Nusantara.html';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-pdf-title"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-[#040F1E]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="print-only-profile w-full max-w-4xl max-h-[90vh] flex flex-col bg-white text-[#071A2F] rounded-2xl border border-slate-300 overflow-hidden shadow-2xl"
      >
        {/* Top Action Bar (Hidden in Print) */}
        <div className="no-print flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-[#040F1E] text-white border-b border-white/10">
          <div>
            <p className="font-mono text-xs text-[#E8CA64]">
              {locale === 'id' ? 'Dokumen Resmi Perusahaan' : 'Official Corporate Dossier'}
            </p>
            <h2 id="profile-pdf-title" className="text-base font-bold">
              Company Profile — PT. Binco Global Nusantara
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrintPdf}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg cursor-pointer"
            >
              <Printer className="w-4 h-4" aria-hidden="true" />
              <span>{locale === 'id' ? 'Cetak / Simpan PDF' : 'Print / Save PDF'}</span>
            </button>
            <button
              type="button"
              onClick={handleDownloadDossier}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#10B981]/20 hover:bg-[#10B981]/30 border border-[#10B981]/50 rounded-lg cursor-pointer"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>{locale === 'id' ? 'Unduh Berkas' : 'Download File'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={locale === 'id' ? 'Tutup preview company profile' : 'Close company profile preview'}
              className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15 text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Preview */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-2 border-[#D4AF37]">
            <img
              src={BRAND_ASSETS.logoLightBg}
              alt="PT. Binco Global Nusantara"
              className="h-12 w-auto object-contain"
            />
            <div className="text-right text-xs text-slate-600">
              <p className="font-bold text-[#071A2F]">COMPANY PROFILE DOSSIER</p>
              <p className="italic text-[#15803D]">Waste to Wealth, Nature to Value</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-[#071A2F]">
              {locale === 'id' ? '01. Ringkasan Eksekutif & Visi' : '01. Executive Summary & Vision'}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">{COMPANY_ABOUT.history[locale]}</p>
            <p className="text-sm text-slate-800 bg-slate-50 border border-slate-200 rounded-xl p-4">
              <strong className="text-[#071A2F]">{locale === 'id' ? 'Visi: ' : 'Vision: '}</strong>
              {COMPANY_ABOUT.vision[locale]}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#071A2F] mb-3">
              {locale === 'id' ? '02. Tiga Dimensi Bisnis Terpadu' : '02. Three Integrated Business Dimensions'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {DIMENSIONS_OVERVIEW.map((dim) => (
                <div key={dim.key} className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <p className="font-mono text-xs font-bold text-[#15803D]">
                    {dim.index} · {dim.metric} {dim.metricLabel[locale]}
                  </p>
                  <h4 className="mt-1 text-sm font-bold text-[#071A2F]">{dim.title[locale]}</h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">{dim.summary[locale]}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#071A2F] mb-3">
              {locale === 'id'
                ? '03. Ringkasan 7 Kategori Mesin & Standar Ekspor'
                : '03. 7 Machinery Categories & Export Standards'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {MACHINERY_CATEGORIES.map((m) => (
                <div key={m.id} className="border border-slate-200 rounded-lg p-3">
                  <p className="font-bold text-[#071A2F]">
                    {m.code} — {m.name[locale]}
                  </p>
                  <p className="text-slate-600 mt-0.5 font-mono">
                    {m.capacityRange} · {m.powerEstimate}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-wrap justify-between gap-4 text-xs text-slate-600">
            <div>
              <p className="font-bold text-[#071A2F]">PT. Binco Global Nusantara</p>
              <p>{siteSettings.headquartersLocation}</p>
            </div>
            <div className="text-right font-mono">
              <p>{siteSettings.corporateEmail}</p>
              <p>WhatsApp: +{siteSettings.whatsappNumber.replace(/[^\d]/g, '')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
