import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CalculatorSection } from './components/CalculatorSection';
import { CmsDrawer } from './components/CmsDrawer';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { DiagramModal } from './components/DiagramModal';
import { FactoryGallerySection } from './components/FactoryGallerySection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { InvestorNewsSection } from './components/InvestorNewsSection';
import { MachinerySection } from './components/MachinerySection';
import { PhilosophySection } from './components/PhilosophySection';
import { ProcessingSection } from './components/ProcessingSection';
import { RfqSection, type RfqPrefill } from './components/RfqSection';
import { TradingSection } from './components/TradingSection';
import {
  DEFAULT_NEWS_ITEMS,
  DEFAULT_SITE_SETTINGS,
  type DimensionKey,
  type Locale,
  type NewsArticle,
  type SiteCmsSettings,
} from './data/brandData';

const CMS_NEWS_KEY = 'binco_cms_news_v1';
const CMS_SETTINGS_KEY = 'binco_cms_settings_v1';

export default function App() {
  const [locale, setLocale] = useState<Locale>('id');
  const [activeDiagram, setActiveDiagram] = useState<'ecosystem' | 'machinery' | null>(null);
  const [profilePdfOpen, setProfilePdfOpen] = useState(false);
  const [cmsOpen, setCmsOpen] = useState(false);
  const [rfqPrefill, setRfqPrefill] = useState<RfqPrefill | null>(null);

  const [newsItems, setNewsItems] = useState<NewsArticle[]>(() => {
    try {
      const stored = window.localStorage.getItem(CMS_NEWS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as NewsArticle[];
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // Ignore storage parsing errors
    }
    return DEFAULT_NEWS_ITEMS;
  });

  const [siteSettings, setSiteSettings] = useState<SiteCmsSettings>(() => {
    try {
      const stored = window.localStorage.getItem(CMS_SETTINGS_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<SiteCmsSettings>;
        return { ...DEFAULT_SITE_SETTINGS, ...parsed };
      }
    } catch {
      // Ignore storage parsing errors
    }
    return DEFAULT_SITE_SETTINGS;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(CMS_NEWS_KEY, JSON.stringify(newsItems));
    } catch {
      // Ignore storage quota errors
    }
  }, [newsItems]);

  useEffect(() => {
    try {
      window.localStorage.setItem(CMS_SETTINGS_KEY, JSON.stringify(siteSettings));
    } catch {
      // Ignore storage quota errors
    }
  }, [siteSettings]);

  const scrollToRfq = (dimension?: DimensionKey, note?: string) => {
    if (dimension) {
      setRfqPrefill({
        dimension,
        note: note ?? '',
        nonce: Date.now(),
      });
    }
    const target = document.getElementById('kontak');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cleanWaDigits = siteSettings.whatsappNumber.replace(/[^\d]/g, '') || '6281234567890';
  const floatingWaHref = `https://wa.me/${cleanWaDigits}?text=${encodeURIComponent(
    locale === 'id'
      ? 'Halo PT. Binco Global Nusantara, saya tertarik berdiskusi mengenai produk kelapa, mesin industri, atau ekspor.'
      : 'Hello PT. Binco Global Nusantara, I would like to inquire about coconut commodities, machinery, or export.'
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[#040F1E] text-slate-100">
      <Header locale={locale} onRequestQuote={() => scrollToRfq()} />

      <main className="flex-1">
        <HeroSection
          locale={locale}
          onLocaleChange={setLocale}
          onOpenProfilePdf={() => setProfilePdfOpen(true)}
          onSelectDimension={(dimension) => {
            const labels: Record<DimensionKey, { id: string; en: string }> = {
              processing: {
                id: 'Permintaan informasi & spesifikasi produk Pengolahan Kelapa & Limbah Kelapa.',
                en: 'Request for specifications and pricing on Coconut & Waste Processing commodities.',
              },
              machinery: {
                id: 'Permintaan penawaran teknis & kapasitas Produksi Mesin Industri Kelapa / Pabrik Turnkey.',
                en: 'Request for technical proposal & budget for Coconut Industry Machinery / Turnkey EPC.',
              },
              trading: {
                id: 'Permintaan penawaran Ekspor, Impor & Trading komoditas kelapa (FOB/CIF).',
                en: 'Request for FOB/CIF quotation for Export, Import & Global Coconut Trading.',
              },
            };
            scrollToRfq(dimension, labels[dimension][locale]);
          }}
        />

        <PhilosophySection locale={locale} />

        <ProcessingSection
          locale={locale}
          onOpenDiagram={() => setActiveDiagram('ecosystem')}
          onInquireProduct={(productName) =>
            scrollToRfq(
              'processing',
              locale === 'id'
                ? `Mohon spesifikasi lab, MOQ, dan penawaran harga untuk produk: ${productName}.`
                : `Please provide lab specs, MOQ, and quotation for product: ${productName}.`
            )
          }
        />

        <MachinerySection
          locale={locale}
          onOpenDiagram={() => setActiveDiagram('machinery')}
          onInquireMachinery={(categoryName) =>
            scrollToRfq(
              'machinery',
              locale === 'id'
                ? `Mohon proposal teknis, layout 3D, dan penawaran mesin kategori: ${categoryName}.`
                : `Please share technical specs, 3D layout, and quotation for machinery line: ${categoryName}.`
            )
          }
        />

        <FactoryGallerySection
          locale={locale}
          onOpenDiagram={(diagram) => setActiveDiagram(diagram)}
        />

        <TradingSection
          locale={locale}
          onInquireTrade={(summary) => scrollToRfq('trading', summary)}
        />

        <CalculatorSection
          locale={locale}
          onTransferToRfq={(summary, dimension) => scrollToRfq(dimension, summary)}
        />

        <InvestorNewsSection
          locale={locale}
          newsItems={newsItems}
          onOpenProfilePdf={() => setProfilePdfOpen(true)}
          onInquireInvestor={(topic) => scrollToRfq('trading', topic)}
        />

        <RfqSection locale={locale} prefill={rfqPrefill} siteSettings={siteSettings} />
      </main>

      <Footer
        locale={locale}
        siteSettings={siteSettings}
        onOpenProfilePdf={() => setProfilePdfOpen(true)}
        onOpenCms={() => setCmsOpen(true)}
      />

      {/* Floating WhatsApp Direct Business Action */}
      <a
        href={floatingWaHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={locale === 'id' ? 'Hubungi via WhatsApp Business' : 'Contact via WhatsApp Business'}
        className="no-print fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-[#10B981] hover:bg-[#34D399] text-[#040F1E] font-semibold text-xs sm:text-sm shadow-xl border border-[#040F1E]/20 transition-transform hover:scale-105"
      >
        <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      <DiagramModal
        activeDiagram={activeDiagram}
        locale={locale}
        onClose={() => setActiveDiagram(null)}
      />

      <CompanyProfileModal
        open={profilePdfOpen}
        locale={locale}
        siteSettings={siteSettings}
        onClose={() => setProfilePdfOpen(false)}
      />

      <CmsDrawer
        open={cmsOpen}
        locale={locale}
        newsItems={newsItems}
        siteSettings={siteSettings}
        onUpdateSettings={setSiteSettings}
        onAddNews={(article) => setNewsItems((prev) => [article, ...prev])}
        onDeleteNews={(id) =>
          setNewsItems((prev) => (prev.length > 1 ? prev.filter((item) => item.id !== id) : prev))
        }
        onResetDefaults={() => {
          setNewsItems(DEFAULT_NEWS_ITEMS);
          setSiteSettings(DEFAULT_SITE_SETTINGS);
        }}
        onClose={() => setCmsOpen(false)}
      />
    </div>
  );
}
