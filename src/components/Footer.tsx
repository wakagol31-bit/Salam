import { FileDown, Settings2 } from 'lucide-react';
import { BRAND_ASSETS, type Locale, type SiteCmsSettings } from '../data/brandData';

interface FooterProps {
  locale: Locale;
  siteSettings: SiteCmsSettings;
  onOpenProfilePdf: () => void;
  onOpenCms: () => void;
}

export function Footer({
  locale,
  siteSettings,
  onOpenProfilePdf,
  onOpenCms,
}: FooterProps) {
  return (
    <footer className="no-print bg-[#030A15] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          <div className="md:col-span-5 space-y-4">
            <img
              src={BRAND_ASSETS.logoDarkBg}
              alt="PT. Binco Global Nusantara"
              referrerPolicy="no-referrer"
              className="h-11 w-auto object-contain"
            />
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {locale === 'id'
                ? 'Integrated Coconut Industry & Global Engineering — Pengolahan kelapa & limbah zero-waste, desain 3D & produksi mesin industri kelapa, serta ekspor-impor dan rantai pasok global dari Indonesia.'
                : 'Integrated Coconut Industry & Global Engineering — Zero-waste coconut processing, 3D engineering & industrial machinery manufacturing, and global export-import supply chain from Indonesia.'}
            </p>
            <p className="text-xs font-mono text-slate-400">
              {siteSettings.corporateEmail} · {siteSettings.headquartersLocation}
            </p>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h2 className="text-sm font-bold text-[#E8CA64]">
              {locale === 'id' ? 'Navigasi Korporat' : 'Corporate Directory'}
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              <li>
                <a href="#tentang" className="hover:text-[#84CC16] transition-colors">
                  {locale === 'id' ? 'Tentang & Visi' : 'About & Vision'}
                </a>
              </li>
              <li>
                <a href="#produk" className="hover:text-[#84CC16] transition-colors">
                  {locale === 'id' ? 'Katalog Produk' : 'Product Catalog'}
                </a>
              </li>
              <li>
                <a href="#mesin" className="hover:text-[#84CC16] transition-colors">
                  {locale === 'id' ? 'Mesin & 3D CAD' : 'Machinery & 3D'}
                </a>
              </li>
              <li>
                <a href="#pabrik" className="hover:text-[#84CC16] transition-colors">
                  {locale === 'id' ? 'Pabrik & Galeri' : 'Factory & Gallery'}
                </a>
              </li>
              <li>
                <a href="#ekspor" className="hover:text-[#84CC16] transition-colors">
                  {locale === 'id' ? 'Ekspor & Proyek' : 'Export & Projects'}
                </a>
              </li>
              <li>
                <a href="#investor" className="hover:text-[#84CC16] transition-colors">
                  {locale === 'id' ? 'Investor & Berita' : 'Investor & News'}
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h2 className="text-sm font-bold text-[#E8CA64]">
              {locale === 'id' ? 'Perangkat & Dokumen' : 'Tools & Documents'}
            </h2>
            <div className="flex flex-col items-start gap-2.5 text-sm">
              <a href="#kalkulator" className="hover:text-[#84CC16] transition-colors">
                {locale === 'id'
                  ? 'Kalkulator Ekspor & Neraca Massa'
                  : 'Export & Mass Balance Calculator'}
              </a>
              <a href="#kontak" className="hover:text-[#84CC16] transition-colors">
                {locale === 'id' ? 'Permintaan Penawaran (RFQ)' : 'Request for Quotation (RFQ)'}
              </a>
              <button
                type="button"
                onClick={onOpenProfilePdf}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8CA64] hover:text-white transition-colors cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5" aria-hidden="true" />
                <span>
                  {locale === 'id' ? 'Unduh Company Profile (PDF)' : 'Download Company Profile (PDF)'}
                </span>
              </button>
              <button
                type="button"
                onClick={onOpenCms}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-[#84CC16] transition-colors cursor-pointer"
              >
                <Settings2 className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{locale === 'id' ? 'Kelola Konten (CMS)' : 'Manage Content (CMS)'}</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} PT. Binco Global Nusantara. All rights reserved.</p>
          <p className="italic text-[#84CC16] font-medium">Waste to Wealth, Nature to Value</p>
        </div>
      </div>
    </footer>
  );
}
