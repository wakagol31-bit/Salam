import { ArrowRight, Calendar, FileDown } from 'lucide-react';
import {
  INVESTOR_OPPORTUNITIES,
  type Locale,
  type NewsArticle,
} from '../data/brandData';

interface InvestorNewsSectionProps {
  locale: Locale;
  newsItems: NewsArticle[];
  onOpenProfilePdf: () => void;
  onInquireInvestor: (topic: string) => void;
}

export function InvestorNewsSection({
  locale,
  newsItems,
  onOpenProfilePdf,
  onInquireInvestor,
}: InvestorNewsSectionProps) {
  return (
    <section
      id="investor"
      className="scroll-mt-16 bg-navy-executive text-slate-100 py-16 lg:py-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Investor Relations & Strategic Partnerships */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-white/12">
            <div className="max-w-3xl">
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E8CA64]">
                {locale === 'id'
                  ? 'Investor Relations & Kemitraan Strategis'
                  : 'Investor Relations & Strategic Alliances'}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {locale === 'id'
                  ? 'Peluang Kerja Sama, Joint Venture & Pengembangan Industri Kelapa'
                  : 'Strategic Investment, Joint Ventures & Industrial Growth'}
              </h2>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                {locale === 'id'
                  ? 'PT. Binco Global Nusantara membuka kemitraan terstruktur bagi investor institusional, mitra industri manufaktur, serta importir global untuk mempercepat hilirisasi kelapa berkelanjutan di Indonesia.'
                  : 'PT. Binco Global Nusantara welcomes structured collaboration with institutional investors, industrial partners, and global off-takers scaling sustainable coconut downstreaming in Indonesia.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start lg:self-end">
              <button
                type="button"
                onClick={onOpenProfilePdf}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#040F1E] bg-[#D4AF37] hover:bg-[#E8CA64] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <FileDown className="w-4 h-4" aria-hidden="true" />
                <span>
                  {locale === 'id' ? 'Unduh Company Profile (PDF)' : 'Download Company Profile (PDF)'}
                </span>
              </button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {INVESTOR_OPPORTUNITIES.map((item) => (
              <div
                key={item.id}
                className="bg-[#0B1F3A] border border-white/10 hover:border-[#D4AF37]/45 rounded-2xl p-6 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs font-semibold text-[#E8CA64]">
                      {item.code}
                    </span>
                    <span className="font-mono text-xs text-[#84CC16]">{item.model[locale]}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-white">{item.title[locale]}</h3>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                    {item.summary[locale]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() =>
                      onInquireInvestor(
                        locale === 'id'
                          ? `Permintaan Informasi Investor Relations (${item.code}): ${item.title.id}`
                          : `Investor Relations Inquiry (${item.code}): ${item.title.en}`
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E8CA64] hover:text-[#84CC16] cursor-pointer"
                  >
                    <span>
                      {locale === 'id' ? 'Ajukan Diskusi Investor Desk' : 'Contact Investor Desk'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate News & Insights (CMS-Managed) */}
        <div id="berita" className="scroll-mt-20 pt-12 border-t border-white/12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#84CC16]">
                {locale === 'id' ? 'Berita & Wawasan Korporat' : 'Corporate News & Insights'}
              </p>
              <h3 className="mt-1.5 text-2xl sm:text-3xl font-bold text-white">
                {locale === 'id'
                  ? 'Perkembangan Industri, Rekayasa & Ekspor Global'
                  : 'Industry Developments, Engineering & Global Trade Updates'}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((article) => (
              <article
                key={article.id}
                className="bg-[#0B1F3A] border border-white/10 hover:border-[#10B981]/45 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="h-44 overflow-hidden relative bg-[#040F1E]">
                    <img
                      src={article.image}
                      alt={article.title[locale]}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono font-semibold text-[#E8CA64]">
                        {article.category[locale]}
                      </span>
                      <span className="inline-flex items-center gap-1 font-mono text-slate-400 tabular-nums">
                        <Calendar className="w-3 h-3" aria-hidden="true" />
                        {article.date}
                      </span>
                    </div>
                    <h4 className="mt-2.5 text-base font-bold text-white leading-snug">
                      {article.title[locale]}
                    </h4>
                    <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {article.summary[locale]}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
