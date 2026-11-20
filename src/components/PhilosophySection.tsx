import {
  BRAND_ASSETS,
  COMPANY_ABOUT,
  LOGO_ANATOMY,
  PHILOSOPHY_PILLARS,
  type Locale,
} from '../data/brandData';

interface PhilosophySectionProps {
  locale: Locale;
}

export function PhilosophySection({ locale }: PhilosophySectionProps) {
  return (
    <section
      id="tentang"
      className="scroll-mt-16 bg-navy-midnight text-slate-100 py-16 lg:py-24 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* About Us: Corporate History, Vision & Mission */}
        <div>
          <div className="max-w-3xl pb-8 border-b border-white/10">
            <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E8CA64]">
              {locale === 'id'
                ? 'Tentang Perusahaan · Profil Korporat'
                : 'About Us · Corporate Profile'}
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {locale === 'id'
                ? 'Membangun Kemandirian Industri Kelapa & Rekayasa Global dari Nusantara'
                : 'Advancing Integrated Coconut Industry & Global Engineering from Indonesia'}
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {COMPANY_ABOUT.history[locale]}
            </p>
          </div>

          {/* Vision & Mission Split */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-[#0B1F3A] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#E8CA64]">
                  {locale === 'id' ? 'Visi Perusahaan' : 'Corporate Vision'}
                </p>
                <p className="mt-3 text-lg sm:text-xl font-semibold text-white leading-relaxed">
                  {COMPANY_ABOUT.vision[locale]}
                </p>
              </div>
              <p className="mt-6 pt-4 border-t border-white/10 text-xs italic text-[#84CC16] font-medium">
                Waste to Wealth, Nature to Value
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#0B1F3A] border border-white/10 rounded-2xl p-6 sm:p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#84CC16]">
                {locale === 'id' ? 'Misi Strategis' : 'Strategic Mission'}
              </p>
              <ol className="mt-4 space-y-4">
                {COMPANY_ABOUT.missions.map((mission, idx) => (
                  <li key={idx} className="flex items-start gap-3.5 text-sm text-slate-200 leading-relaxed">
                    <span className="font-mono text-xs font-bold text-[#E8CA64] bg-[#040F1E] border border-[#D4AF37]/35 rounded-md px-2 py-1 shrink-0 tabular-nums">
                      0{idx + 1}
                    </span>
                    <span>{mission[locale]}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Corporate Organizational Structure */}
          <div className="mt-10">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-5">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {locale === 'id'
                  ? 'Struktur Organisasi & Tata Kelola Terpadu'
                  : 'Integrated Corporate Structure & Governance'}
              </h3>
              <p className="text-xs text-slate-400">
                {locale === 'id'
                  ? '4 Direktorat Operasional Terkoordinasi'
                  : '4 Coordinated Operational Directorates'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {COMPANY_ABOUT.structure.map((div) => (
                <div
                  key={div.code}
                  className="bg-[#0B1F3A]/85 border border-white/10 hover:border-[#10B981]/40 rounded-2xl p-5 transition-colors"
                >
                  <span className="font-mono text-xs font-semibold text-[#E8CA64]">
                    {div.code}
                  </span>
                  <h4 className="mt-2 text-sm sm:text-base font-bold text-white leading-snug">
                    {div.title[locale]}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
                    {div.role[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Banner: Waste to Wealth, Nature to Value */}
        <div
          id="filosofi"
          className="scroll-mt-20 bg-[#040F1E] rounded-2xl p-6 sm:p-10 lg:p-12 border border-white/12 ring-1 ring-inset ring-[#D4AF37]/15"
        >
          <div className="max-w-3xl">
            <p className="font-mono text-xs sm:text-sm font-semibold text-[#84CC16]">
              {locale === 'id' ? 'Filosofi Korporat' : 'Corporate Philosophy'}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Waste to Wealth, Nature to Value
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {locale === 'id'
                ? 'Perjalanan transformasi dari limbah sabut dan tempurung kelapa yang kerap terabaikan menjadi kekayaan ekonomi, kemandirian teknologi mesin, dan dampak keberlanjutan global.'
                : 'A disciplined transformation turning overlooked coconut waste into industrial wealth, indigenous machinery engineering, and lasting ecological value.'}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.keyword}
                className="bg-[#0B1F3A]/90 rounded-xl p-5 border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`h-1 w-full rounded-full mb-5 ${
                      idx % 2 === 0 ? 'bg-[#84CC16]' : 'bg-[#D4AF37]'
                    }`}
                  />
                  <span className="font-mono text-2xl font-bold text-[#E8CA64] tabular-nums">
                    {pillar.number}
                  </span>
                  <h4 className="mt-2 text-lg font-bold tracking-wide text-white">
                    {pillar.keyword}
                  </h4>
                  <p className="text-xs font-medium text-[#84CC16] mt-0.5">
                    {pillar.role[locale]}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description[locale]}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm font-semibold tracking-wider text-white">
            <span>{locale === 'id' ? 'LIMBAH' : 'WASTE'}</span>
            <span aria-hidden="true" className="text-[#E8CA64]">
              &gt;
            </span>
            <span>{locale === 'id' ? 'PENGOLAHAN & MESIN' : 'PROCESSING & MACHINERY'}</span>
            <span aria-hidden="true" className="text-[#E8CA64]">
              &gt;
            </span>
            <span>{locale === 'id' ? 'PRODUK BERNILAI EKSPOR' : 'EXPORT-GRADE VALUE'}</span>
            <span aria-hidden="true" className="text-[#E8CA64]">
              &gt;
            </span>
            <span>{locale === 'id' ? 'KEBERLANJUTAN' : 'SUSTAINABILITY'}</span>
          </div>
        </div>

        {/* Symbol Anatomy & Official Brand Identity on Dark Executive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 bg-[#040F1E] border border-[#D4AF37]/30 rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center">
            <img
              src={BRAND_ASSETS.iconDarkBg}
              alt={
                locale === 'id'
                  ? 'Ikon Resmi PT. Binco Global Nusantara'
                  : 'Official PT. Binco Global Nusantara Brand Mark'
              }
              referrerPolicy="no-referrer"
              className="w-36 sm:w-44 h-auto object-contain"
            />
            <p className="mt-6 text-base font-bold text-white tracking-wide">
              BINCO GLOBAL NUSANTARA
            </p>
            <p className="mt-1 text-xs italic text-[#84CC16] font-medium">
              Waste to Wealth, Nature to Value
            </p>
            <p className="mt-4 text-xs text-slate-300 max-w-xs leading-relaxed">
              {locale === 'id'
                ? 'Simbol huruf B (Binco) memadukan wadah kontainer Navy untuk ketangguhan industri & logistik global dengan tunas Hijau untuk pertumbuhan ekonomi berkelanjutan.'
                : 'The letter B emblem pairs a Navy logistics container for industrial rigor with an Emerald-Lime sprout representing sustainable green growth.'}
            </p>
          </div>

          <div className="lg:col-span-7">
            <p className="font-mono text-xs sm:text-sm font-semibold text-[#E8CA64]">
              {locale === 'id' ? 'Anatomi Identitas Visual' : 'Visual Identity Anatomy'}
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white">
              {locale === 'id'
                ? 'Satu Identitas untuk Pengolahan, Rekayasa Mesin & Perdagangan Dunia'
                : 'One Identity Across Processing, Machinery & Global Trade'}
            </h3>

            <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {LOGO_ANATOMY.map((item) => (
                <div
                  key={item.index}
                  className="bg-[#0B1F3A] border border-white/10 rounded-2xl p-5"
                >
                  <dt className="flex items-baseline gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#84CC16] tabular-nums">
                      0{item.index}.
                    </span>
                    <span className="text-sm font-bold text-white">
                      {item.title[locale]}
                    </span>
                  </dt>
                  <dd className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description[locale]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
