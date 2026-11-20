import { useEffect, useState, type FormEvent } from 'react';
import { CheckCircle2, ExternalLink, Mail, MapPin, MessageCircle, RotateCcw } from 'lucide-react';
import { MEDIA_PHOTOS, type DimensionKey, type Locale, type SiteCmsSettings } from '../data/brandData';
import {
  generateRfqReference,
  validateRfqForm,
  type RfqFieldErrors,
  type RfqFormValues,
} from '../utils/calculators';

export interface RfqPrefill {
  dimension: DimensionKey;
  note: string;
  nonce: number;
}

interface RfqSectionProps {
  locale: Locale;
  prefill: RfqPrefill | null;
  siteSettings: SiteCmsSettings;
}

interface SubmittedRecord {
  reference: string;
  values: RfqFormValues;
  submittedAt: string;
}

const INITIAL_VALUES: RfqFormValues = {
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  country: '',
  dimension: 'processing',
  message: '',
};

export function RfqSection({ locale, prefill, siteSettings }: RfqSectionProps) {
  const [values, setValues] = useState<RfqFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<RfqFieldErrors>({});
  const [submitted, setSubmitted] = useState<SubmittedRecord | null>(null);
  const [prefillBanner, setPrefillBanner] = useState<string | null>(null);

  useEffect(() => {
    if (!prefill) return;
    setSubmitted(null);
    setValues((prev) => ({
      ...prev,
      dimension: prefill.dimension,
      message: prefill.note || prev.message,
    }));
    setErrors((prev) => ({ ...prev, message: undefined }));
    setPrefillBanner(prefill.note || null);
  }, [prefill]);

  const dimensionOptions: Array<{ key: DimensionKey; label: string }> = [
    {
      key: 'processing',
      label:
        locale === 'id'
          ? '01. Pengolahan Kelapa & Limbah'
          : '01. Coconut & Waste Processing',
    },
    {
      key: 'machinery',
      label:
        locale === 'id'
          ? '02. Mesin Industri Kelapa / EPC'
          : '02. Coconut Machinery / EPC',
    },
    {
      key: 'trading',
      label:
        locale === 'id'
          ? '03. Ekspor, Impor & Trading'
          : '03. Export, Import & Trading',
    },
  ];

  const handleFieldChange = <K extends keyof RfqFormValues>(
    field: K,
    value: RfqFormValues[K]
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateRfqForm(values, locale);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const now = new Date();
    const reference = generateRfqReference(
      values.dimension,
      now,
      ((values.companyName.length * 37 + values.message.length * 13) % 900) + 100
    );

    setSubmitted({
      reference,
      values: { ...values },
      submittedAt: now.toLocaleDateString(locale === 'id' ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    });
    setErrors({});
    setPrefillBanner(null);
  };

  const handleReset = () => {
    setSubmitted(null);
    setValues(INITIAL_VALUES);
    setErrors({});
    setPrefillBanner(null);
  };

  const cleanWaDigits = siteSettings.whatsappNumber.replace(/[^\d]/g, '') || '6281234567890';
  const waPrefillText = encodeURIComponent(
    locale === 'id'
      ? 'Halo PT. Binco Global Nusantara, saya ingin berdiskusi mengenai penawaran komoditas kelapa / mesin industri / ekspor.'
      : 'Hello PT. Binco Global Nusantara, I would like to request a commercial quotation for coconut commodities / machinery / export.'
  );
  const waUrl = `https://wa.me/${cleanWaDigits}?text=${waPrefillText}`;

  return (
    <section
      id="kontak"
      className="scroll-mt-16 bg-navy-midnight text-slate-100 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Executive Contact Desk + WhatsApp + Google Maps */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="font-mono text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#E8CA64]">
                {locale === 'id'
                  ? 'Kontak Korporat & Permintaan Penawaran (RFQ)'
                  : 'Corporate Contact & Request for Quotation'}
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {locale === 'id'
                  ? 'Diskusikan Kebutuhan Komoditas, Mesin, atau Ekspor Anda'
                  : 'Discuss Your Commodity, Machinery, or Export Requirements'}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                {locale === 'id'
                  ? 'Tim rekayasa dan perdagangan internasional PT. Binco Global Nusantara menyiapkan spesifikasi teknis, sampel uji lab, dan penawaran FOB/CIF sesuai kebutuhan proyek Anda.'
                  : 'Our engineering and international trade desks prepare technical dossiers, lab samples, turnkey plant budgets, and FOB/CIF quotations tailored to your specification.'}
              </p>
            </div>

            {/* Direct WhatsApp & Email Action Card */}
            <div className="bg-[#0B1F3A] border border-white/12 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white">
                {locale === 'id' ? 'Saluran Komunikasi Resmi' : 'Official Commercial Channels'}
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#10B981]/15 hover:bg-[#10B981]/25 border border-[#10B981]/40 text-white transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <MessageCircle className="w-5 h-5 text-[#10B981] shrink-0" aria-hidden="true" />
                    <div className="min-w-0">
                      <p className="font-semibold text-white">WhatsApp Business Desk</p>
                      <p className="font-mono text-xs text-slate-300 truncate">
                        +{cleanWaDigits}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#84CC16] whitespace-nowrap">
                    {locale === 'id' ? 'Chat Langsung' : 'Chat Now'}
                  </span>
                </a>

                <a
                  href={`mailto:${siteSettings.corporateEmail}`}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#040F1E]/80 hover:bg-[#040F1E] border border-white/10 text-slate-200 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E8CA64] shrink-0" aria-hidden="true" />
                  <span className="truncate font-mono text-xs sm:text-sm">
                    {siteSettings.corporateEmail}
                  </span>
                </a>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#040F1E]/80 border border-white/10 text-slate-300">
                  <MapPin className="w-4 h-4 text-[#E8CA64] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs sm:text-sm leading-relaxed">
                    {siteSettings.headquartersLocation}
                  </span>
                </div>
              </div>
            </div>

            {/* Interactive Google Maps Export Hub Location Card */}
            <div className="bg-[#0B1F3A] border border-white/12 rounded-2xl overflow-hidden">
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-white">
                  {locale === 'id'
                    ? 'Peta Lokasi & Hub Ekspor Indonesia'
                    : 'Indonesia Corporate & Export Hub Map'}
                </span>
                <span className="font-mono text-[11px] text-[#E8CA64]">-6.1045° S, 106.8805° E</span>
              </div>
              <div className="relative h-44 overflow-hidden">
                <img
                  src={MEDIA_PHOTOS.exportPort}
                  alt="Tanjung Priok International Export Hub Indonesia"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040F1E]/92 via-[#040F1E]/45 to-transparent" />
                <div className="absolute inset-x-4 bottom-3.5 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] font-semibold text-[#84CC16]">
                      {locale === 'id' ? 'Pelabuhan Muat Ekspor Utama' : 'Primary Export Loading Ports'}
                    </p>
                    <p className="text-xs font-medium text-white mt-0.5">
                      Tanjung Priok · Tanjung Perak · Belawan · Makassar
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Tanjung+Priok+Jakarta+Indonesia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#E8CA64] text-[#040F1E] text-xs font-semibold transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>{locale === 'id' ? 'Buka Google Maps' : 'Open Google Maps'}</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right B2B RFQ Form or Confirmed Summary */}
          <div className="lg:col-span-7 bg-[#0B1F3A] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-xl">
            {submitted ? (
              <div data-testid="rfq-confirmation" className="space-y-6">
                <div className="flex items-start gap-3 pb-5 border-b border-white/12">
                  <CheckCircle2
                    className="w-6 h-6 text-[#10B981] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-mono font-semibold text-[#84CC16]">
                      {locale === 'id' ? 'Permintaan Penawaran Tercatat' : 'RFQ Dossier Recorded'}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-white">
                      {locale === 'id'
                        ? 'Terima kasih, permintaan penawaran Anda telah siap ditindaklanjuti.'
                        : 'Thank you, your inquiry dossier has been registered.'}
                    </h3>
                  </div>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#040F1E] rounded-xl p-5 text-sm border border-white/10">
                  <div>
                    <dt className="text-xs text-slate-400">
                      {locale === 'id' ? 'Nomor Referensi RFQ' : 'RFQ Reference Number'}
                    </dt>
                    <dd
                      data-testid="rfq-reference-code"
                      className="mt-0.5 font-mono font-bold text-[#E8CA64] tabular-nums"
                    >
                      {submitted.reference}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">
                      {locale === 'id' ? 'Tanggal Pengajuan' : 'Submission Date'}
                    </dt>
                    <dd className="mt-0.5 font-medium text-white">{submitted.submittedAt}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">
                      {locale === 'id' ? 'Perusahaan / PIC' : 'Company / Contact'}
                    </dt>
                    <dd className="mt-0.5 font-medium text-white">
                      {submitted.values.companyName} · {submitted.values.contactName}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-slate-400">
                      {locale === 'id' ? 'Dimensi Layanan' : 'Business Dimension'}
                    </dt>
                    <dd className="mt-0.5 font-medium text-white">
                      {
                        dimensionOptions.find((d) => d.key === submitted.values.dimension)
                          ?.label
                      }
                    </dd>
                  </div>
                  <div className="sm:col-span-2 pt-3 border-t border-white/10">
                    <dt className="text-xs text-slate-400">
                      {locale === 'id' ? 'Ringkasan Kebutuhan' : 'Requirement Summary'}
                    </dt>
                    <dd className="mt-1 text-slate-200 leading-relaxed">
                      {submitted.values.message}
                    </dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#102A4C] hover:bg-white/15 border border-white/15 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>
                    {locale === 'id' ? 'Buat Permintaan Penawaran Baru' : 'Submit Another Inquiry'}
                  </span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {prefillBanner && (
                  <div className="bg-[#040F1E] border border-[#10B981]/40 rounded-xl px-4 py-3 text-xs text-slate-200">
                    <span className="font-semibold text-[#84CC16]">
                      {locale === 'id'
                        ? 'Terisi otomatis dari katalog/kalkulator: '
                        : 'Pre-filled from catalog/calculator: '}
                    </span>
                    <span>{prefillBanner}</span>
                  </div>
                )}

                {/* Dimension Selection */}
                <fieldset>
                  <legend className="text-sm font-semibold text-white">
                    {locale === 'id' ? 'Pilih Dimensi Bisnis' : 'Select Business Dimension'}
                  </legend>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {dimensionOptions.map((opt) => {
                      const active = values.dimension === opt.key;
                      return (
                        <button
                          key={opt.key}
                          type="button"
                          onClick={() => handleFieldChange('dimension', opt.key)}
                          aria-pressed={active}
                          className={`px-3.5 py-2.5 text-xs font-semibold rounded-lg border text-left transition-colors cursor-pointer ${
                            active
                              ? 'bg-[#D4AF37] text-[#040F1E] border-[#D4AF37]'
                              : 'bg-[#040F1E] text-slate-200 border-white/15 hover:border-[#D4AF37]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="rfq-company"
                      className="block text-sm font-medium text-slate-200"
                    >
                      {locale === 'id' ? 'Nama Perusahaan' : 'Company Name'} *
                    </label>
                    <input
                      id="rfq-company"
                      type="text"
                      value={values.companyName}
                      onChange={(e) => handleFieldChange('companyName', e.target.value)}
                      aria-invalid={Boolean(errors.companyName)}
                      placeholder={
                        locale === 'id'
                          ? 'Contoh: PT Agro Nusantara'
                          : 'e.g. Pacific Coir Imports Ltd.'
                      }
                      className={`mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#040F1E] text-white placeholder:text-slate-500 focus:outline-none ${
                        errors.companyName
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-white/15 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.companyName && (
                      <p role="alert" className="mt-1 text-xs font-medium text-red-400">
                        {errors.companyName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="rfq-contact"
                      className="block text-sm font-medium text-slate-200"
                    >
                      {locale === 'id' ? 'Nama PIC' : 'Contact Person'} *
                    </label>
                    <input
                      id="rfq-contact"
                      type="text"
                      value={values.contactName}
                      onChange={(e) => handleFieldChange('contactName', e.target.value)}
                      aria-invalid={Boolean(errors.contactName)}
                      placeholder={locale === 'id' ? 'Nama lengkap' : 'Full name'}
                      className={`mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#040F1E] text-white placeholder:text-slate-500 focus:outline-none ${
                        errors.contactName
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-white/15 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.contactName && (
                      <p role="alert" className="mt-1 text-xs font-medium text-red-400">
                        {errors.contactName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-start">
                  <div>
                    <label
                      htmlFor="rfq-email"
                      className="block text-sm font-medium text-slate-200"
                    >
                      {locale === 'id' ? 'Email Bisnis' : 'Business Email'} *
                    </label>
                    <input
                      id="rfq-email"
                      type="email"
                      value={values.email}
                      onChange={(e) => handleFieldChange('email', e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      placeholder="name@company.com"
                      className={`mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#040F1E] text-white placeholder:text-slate-500 focus:outline-none ${
                        errors.email
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-white/15 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1 text-xs font-medium text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="rfq-phone"
                      className="block text-sm font-medium text-slate-200"
                    >
                      {locale === 'id' ? 'Telepon / WA' : 'Phone / WA'} *
                    </label>
                    <input
                      id="rfq-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) => handleFieldChange('phone', e.target.value)}
                      aria-invalid={Boolean(errors.phone)}
                      placeholder="+62 812 3456 7890"
                      className={`mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#040F1E] text-white placeholder:text-slate-500 focus:outline-none ${
                        errors.phone
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-white/15 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.phone && (
                      <p role="alert" className="mt-1 text-xs font-medium text-red-400">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="rfq-country"
                      className="block text-sm font-medium text-slate-200"
                    >
                      {locale === 'id' ? 'Negara / Tujuan' : 'Country / Port'} *
                    </label>
                    <input
                      id="rfq-country"
                      type="text"
                      value={values.country}
                      onChange={(e) => handleFieldChange('country', e.target.value)}
                      aria-invalid={Boolean(errors.country)}
                      placeholder={locale === 'id' ? 'Indonesia / Rotterdam' : 'Netherlands / Rotterdam'}
                      className={`mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#040F1E] text-white placeholder:text-slate-500 focus:outline-none ${
                        errors.country
                          ? 'border-red-400 focus:border-red-400'
                          : 'border-white/15 focus:border-[#D4AF37]'
                      }`}
                    />
                    {errors.country && (
                      <p role="alert" className="mt-1 text-xs font-medium text-red-400">
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="rfq-message"
                    className="block text-sm font-medium text-slate-200"
                  >
                    {locale === 'id'
                      ? 'Detail Spesifikasi Produk, Kapasitas Mesin, atau Volume Ekspor'
                      : 'Product Specs, Machinery Capacity, or Shipment Volume'}{' '}
                    *
                  </label>
                  <textarea
                    id="rfq-message"
                    rows={4}
                    value={values.message}
                    onChange={(e) => handleFieldChange('message', e.target.value)}
                    aria-invalid={Boolean(errors.message)}
                    placeholder={
                      locale === 'id'
                        ? 'Sebutkan produk (mis. Cocopeat Low EC 40ft HC), kategori mesin (mis. lini defibering 15 MT/hari), atau jadwal pengiriman yang dibutuhkan.'
                        : 'Specify target commodities, machinery capacity (e.g., 15 MT/day defibering plant), or desired shipping schedule.'
                    }
                    className={`mt-1.5 w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#040F1E] text-white placeholder:text-slate-500 focus:outline-none ${
                      errors.message
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-white/15 focus:border-[#D4AF37]'
                    }`}
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1 text-xs font-medium text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs text-slate-400">
                    {locale === 'id'
                      ? '* Kolom wajib diisi untuk penyusunan penawaran resmi.'
                      : '* Required fields for formal commercial quotation.'}
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-semibold text-[#040F1E] bg-[#10B981] hover:bg-[#34D399] rounded-lg shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {locale === 'id' ? 'Kirim Permintaan Penawaran' : 'Submit Quotation Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
