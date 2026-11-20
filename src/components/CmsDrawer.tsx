import { useState, type FormEvent } from 'react';
import { Plus, RotateCcw, Trash2, X } from 'lucide-react';
import {
  MEDIA_PHOTOS,
  type Locale,
  type NewsArticle,
  type SiteCmsSettings,
} from '../data/brandData';

interface CmsDrawerProps {
  open: boolean;
  locale: Locale;
  newsItems: NewsArticle[];
  siteSettings: SiteCmsSettings;
  onUpdateSettings: (next: SiteCmsSettings) => void;
  onAddNews: (article: NewsArticle) => void;
  onDeleteNews: (id: string) => void;
  onResetDefaults: () => void;
  onClose: () => void;
}

export function CmsDrawer({
  open,
  locale,
  newsItems,
  siteSettings,
  onUpdateSettings,
  onAddNews,
  onDeleteNews,
  onResetDefaults,
  onClose,
}: CmsDrawerProps) {
  const [waNumber, setWaNumber] = useState(siteSettings.whatsappNumber);
  const [email, setEmail] = useState(siteSettings.corporateEmail);
  const [hq, setHq] = useState(siteSettings.headquartersLocation);

  const [titleId, setTitleId] = useState('');
  const [summaryId, setSummaryId] = useState('');
  const [categoryLabel, setCategoryLabel] = useState('Berita Korporat');
  const [savedNotice, setSavedNotice] = useState(false);

  if (!open) return null;

  const handleSaveSettings = (e: FormEvent) => {
    e.preventDefault();
    onUpdateSettings({
      whatsappNumber: waNumber.trim() || siteSettings.whatsappNumber,
      corporateEmail: email.trim() || siteSettings.corporateEmail,
      headquartersLocation: hq.trim() || siteSettings.headquartersLocation,
    });
    setSavedNotice(true);
    window.setTimeout(() => setSavedNotice(false), 2500);
  };

  const handlePublishNews = (e: FormEvent) => {
    e.preventDefault();
    if (!titleId.trim() || !summaryId.trim()) return;
    const today = new Date().toISOString().slice(0, 10);
    onAddNews({
      id: `news-${Date.now()}`,
      date: today,
      category: { id: categoryLabel, en: categoryLabel },
      title: { id: titleId.trim(), en: titleId.trim() },
      summary: { id: summaryId.trim(), en: summaryId.trim() },
      image: MEDIA_PHOTOS.dehuskingLine,
    });
    setTitleId('');
    setSummaryId('');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={locale === 'id' ? 'Panel Pengelolaan Konten CMS' : 'Corporate CMS Content Manager'}
      onClick={onClose}
      className="no-print fixed inset-0 z-50 bg-[#040F1E]/80 backdrop-blur-xs flex justify-end"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg bg-[#07172C] text-slate-100 border-l border-white/15 h-full flex flex-col shadow-2xl"
      >
        <div className="px-6 py-4 bg-[#040F1E] border-b border-white/12 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold text-[#E8CA64]">BINCO CMS</p>
            <h2 className="text-base font-bold text-white">
              {locale === 'id' ? 'Pengelola Konten & Kontak' : 'Content & Contact Manager'}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close CMS"
            className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/15 text-slate-300 hover:text-white hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Contact & WhatsApp Settings */}
          <form onSubmit={handleSaveSettings} className="space-y-4">
            <h3 className="text-sm font-bold text-[#E8CA64]">
              {locale === 'id' ? '1. Pengaturan Kontak & WhatsApp' : '1. Contact & WhatsApp Settings'}
            </h3>
            <div>
              <label htmlFor="cms-wa" className="block text-xs text-slate-300">
                WhatsApp (format internasional, mis. 6281234567890)
              </label>
              <input
                id="cms-wa"
                type="text"
                value={waNumber}
                onChange={(e) => setWaNumber(e.target.value)}
                className="mt-1 w-full px-3 py-2 text-sm rounded-lg bg-[#040F1E] border border-white/15 text-white"
              />
            </div>
            <div>
              <label htmlFor="cms-email" className="block text-xs text-slate-300">
                Email Resmi Perusahaan
              </label>
              <input
                id="cms-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full px-3 py-2 text-sm rounded-lg bg-[#040F1E] border border-white/15 text-white"
              />
            </div>
            <div>
              <label htmlFor="cms-hq" className="block text-xs text-slate-300">
                Alamat / Lokasi Operasional
              </label>
              <input
                id="cms-hq"
                type="text"
                value={hq}
                onChange={(e) => setHq(e.target.value)}
                className="mt-1 w-full px-3 py-2 text-sm rounded-lg bg-[#040F1E] border border-white/15 text-white"
              />
            </div>
            <div className="flex items-center justify-between gap-3">
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg cursor-pointer"
              >
                {locale === 'id' ? 'Simpan Pengaturan' : 'Save Settings'}
              </button>
              {savedNotice && (
                <span className="text-xs font-medium text-[#84CC16]">
                  {locale === 'id' ? 'Tersimpan!' : 'Saved!'}
                </span>
              )}
            </div>
          </form>

          {/* News Management */}
          <div className="pt-6 border-t border-white/12 space-y-4">
            <h3 className="text-sm font-bold text-[#84CC16]">
              {locale === 'id' ? '2. Tambah Berita / Wawasan Baru' : '2. Publish News / Update'}
            </h3>
            <form onSubmit={handlePublishNews} className="space-y-3">
              <select
                value={categoryLabel}
                onChange={(e) => setCategoryLabel(e.target.value)}
                className="w-full px-3 py-2 text-xs rounded-lg bg-[#040F1E] border border-white/15 text-white"
              >
                <option value="Ekosistem & Keberlanjutan">Ekosistem &amp; Keberlanjutan</option>
                <option value="Rekayasa & Mesin">Rekayasa &amp; Mesin</option>
                <option value="Ekspor & Logistik Global">Ekspor &amp; Logistik Global</option>
                <option value="Berita Korporat">Berita Korporat</option>
              </select>
              <input
                type="text"
                value={titleId}
                onChange={(e) => setTitleId(e.target.value)}
                placeholder={locale === 'id' ? 'Judul berita perusahaan...' : 'Corporate news headline...'}
                className="w-full px-3 py-2 text-sm rounded-lg bg-[#040F1E] border border-white/15 text-white placeholder:text-slate-500"
              />
              <textarea
                rows={3}
                value={summaryId}
                onChange={(e) => setSummaryId(e.target.value)}
                placeholder={locale === 'id' ? 'Ringkasan isi berita...' : 'Brief summary...'}
                className="w-full px-3 py-2 text-sm rounded-lg bg-[#040F1E] border border-white/15 text-white placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#040F1E] bg-[#10B981] hover:bg-[#34D399] rounded-lg cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{locale === 'id' ? 'Terbitkan Berita' : 'Publish Update'}</span>
              </button>
            </form>

            <ul className="space-y-2 pt-2">
              {newsItems.map((item) => (
                <li
                  key={item.id}
                  className="flex items-start justify-between gap-3 p-3 rounded-xl bg-[#040F1E] border border-white/10 text-xs"
                >
                  <div className="min-w-0">
                    <p className="font-semibold text-white truncate">{item.title[locale]}</p>
                    <p className="font-mono text-[11px] text-slate-400">{item.date}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onDeleteNews(item.id)}
                    aria-label="Hapus berita"
                    className="p-1.5 text-slate-400 hover:text-red-400 cursor-pointer shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="px-6 py-4 bg-[#040F1E] border-t border-white/12 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={onResetDefaults}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{locale === 'id' ? 'Reset Bawaan' : 'Reset Defaults'}</span>
          </button>
          <span className="text-[11px] text-slate-500">
            {locale === 'id' ? 'Tersimpan lokal di browser' : 'Saved locally in browser'}
          </span>
        </div>
      </div>
    </div>
  );
}
