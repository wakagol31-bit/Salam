export type Locale = 'id' | 'en';

export type DimensionKey = 'processing' | 'machinery' | 'trading';

export interface BilingualText {
  id: string;
  en: string;
}

export interface HeroSlide {
  id: string;
  image: string;
  eyebrow: BilingualText;
  title: BilingualText;
  subtitle: BilingualText;
  ctaHref: string;
  ctaLabel: BilingualText;
  secondaryHref: string;
  secondaryLabel: BilingualText;
  caption: BilingualText;
}

export interface ProcessingProduct {
  id: string;
  name: BilingualText;
  spec: BilingualText;
  applications: BilingualText;
  moistureOrGrade: string;
  packaging: BilingualText;
}

export interface ProcessingStream {
  id: 'meat' | 'husk' | 'shell' | 'value_added' | 'organic';
  code: string;
  image: string;
  title: BilingualText;
  subtitle: BilingualText;
  yieldNote: BilingualText;
  products: ProcessingProduct[];
}

export interface MachineryCategory {
  id: string;
  code: string;
  image: string;
  name: BilingualText;
  focus: BilingualText;
  capacityRange: string;
  powerEstimate: string;
  machines: BilingualText[];
  outputs: BilingualText;
}

export interface ExecutionStage {
  step: string;
  title: BilingualText;
  detail: BilingualText;
}

export interface TradeCorridor {
  id: string;
  region: BilingualText;
  primaryPorts: string;
  keyDemand: BilingualText;
  transitDays: string;
  incoterms: string;
}

export interface PackagingStandard {
  id: string;
  name: BilingualText;
  unitWeight: string;
  container40HC: string;
  specDetail: BilingualText;
}

export interface GalleryItem {
  id: string;
  category: 'plantation' | 'processing' | 'machinery' | 'export';
  image: string;
  title: BilingualText;
  caption: BilingualText;
  isBlueprint?: boolean;
}

export interface ProjectTrack {
  id: string;
  code: string;
  image: string;
  category: BilingualText;
  title: BilingualText;
  scope: BilingualText;
  deliverables: BilingualText;
  statusLabel: BilingualText;
}

export interface InvestorOpportunity {
  id: string;
  code: string;
  title: BilingualText;
  summary: BilingualText;
  model: BilingualText;
}

export interface NewsArticle {
  id: string;
  date: string;
  category: BilingualText;
  title: BilingualText;
  summary: BilingualText;
  image: string;
}

export interface SiteCmsSettings {
  whatsappNumber: string;
  corporateEmail: string;
  headquartersLocation: string;
}

export const BRAND_ASSETS = {
  logoLightBg: '/assets/aistudio/Logo_Binco_Warna_Penuh_d85d549b.png',
  logoDarkBg: '/assets/aistudio/Logo_Binco_Latar_Gelap_dd11d74d.png',
  iconLightBg: '/assets/aistudio/Ikon_Binco_Warna_Penuh_9a1c3dfc.png',
  iconDarkBg: '/assets/aistudio/Ikon_Binco_Latar_Gelap_3ca6ea9e.png',
  iconSquareGreen: '/assets/aistudio/icon-hijau-1x1_8d3aae5e.png',
  ecosystemDiagram: '/assets/aistudio/IMG-20261117-WA0018_1__b3f1bddf.jpg',
  machineryDiagram: '/assets/aistudio/IMG-20261117-WA0019_1__c892ae0d.jpg',
} as const;

export const MEDIA_PHOTOS = {
  plantationFarmers: '/src/assets/images/binco_plantation_farmers_1795166614882.jpg',
  dehuskingLine: '/src/assets/images/binco_dehusking_line_1795166823186.jpg',
  oilMilkProcessing: '/src/assets/images/binco_oil_milk_processing_1795166615874.jpg',
  coirCocopeat: '/src/assets/images/binco_coir_cocopeat_1795166614790.jpg',
  charcoalBriquettes: '/src/assets/images/binco_charcoal_briquettes_1795166615501.jpg',
  organicFertilizer: '/src/assets/images/binco_organic_fertilizer_1795166615135.jpg',
  machineryWorkshop: '/src/assets/images/binco_machinery_workshop_1795166846261.jpg',
  engineering3d: '/src/assets/images/binco_engineering_3d_1795166824256.jpg',
  warehouseLogistics: '/src/assets/images/binco_warehouse_logistics_1795166824145.jpg',
  exportPort: '/src/assets/images/binco_export_port_1795166822703.jpg',
} as const;

export const DEFAULT_SITE_SETTINGS: SiteCmsSettings = {
  whatsappNumber: '6281234567890',
  corporateEmail: 'info@bincoglobalnusantara.co.id',
  headquartersLocation: 'Jakarta & Sentra Industri Kelapa Nusantara, Indonesia',
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'ecosystem',
    image: MEDIA_PHOTOS.dehuskingLine,
    eyebrow: {
      id: 'Integrated Coconut Industry & Global Engineering',
      en: 'Integrated Coconut Industry & Global Engineering',
    },
    title: {
      id: 'Ekosistem Industri Kelapa Terpadu & Pengolahan Limbah Zero-Waste',
      en: 'Integrated Coconut Processing & Zero-Waste Industrial Ecosystem',
    },
    subtitle: {
      id: 'Mengubah 100% potensi kelapa Nusantara—daging, minyak, santan, sabut, tempurung, hingga residu organik—menjadi komoditas ekspor berstandar internasional.',
      en: 'Transforming 100% of Indonesian coconuts—kernel, oil, milk, husk, shell, and organic residues—into standardized export-grade industrial commodities.',
    },
    ctaHref: '#produk',
    ctaLabel: { id: 'Jelajahi Katalog Produk', en: 'Explore Product Catalog' },
    secondaryHref: '#pabrik',
    secondaryLabel: { id: 'Lihat Alur Pabrik', en: 'View Factory Flow' },
    caption: {
      id: 'Lini Pengupasan & Pemisahan Kelapa Terotomasi',
      en: 'Automated Coconut Dehusking & Separation Line',
    },
  },
  {
    id: 'machinery',
    image: MEDIA_PHOTOS.machineryWorkshop,
    eyebrow: {
      id: 'Machinery Design, 3D Engineering & EPC',
      en: 'Machinery Design, 3D Engineering & EPC',
    },
    title: {
      id: 'Rekayasa Desain 3D & Fabrikasi Mesin Industri Kelapa Turnkey',
      en: '3D Engineering & Custom Coconut Machinery Manufacturing',
    },
    subtitle: {
      id: 'Perancangan mekanikal, fabrikasi baja tugas berat, uji fungsi FAT, hingga instalasi pabrik modular dari skala UKM industri hingga kapasitas besar.',
      en: 'Mechanical CAD modeling, heavy steel fabrication, pre-shipment FAT validation, and modular turnkey plant commissioning from regional to industrial scale.',
    },
    ctaHref: '#mesin',
    ctaLabel: { id: 'Katalog 7 Kategori Mesin', en: '7 Machinery Categories' },
    secondaryHref: '#kontak',
    secondaryLabel: { id: 'Konsultasi Proyek EPC', en: 'Consult EPC Project' },
    caption: {
      id: 'Workshop Fabrikasi Mesin & Konstruksi Baja Industri',
      en: 'Industrial Steel Fabrication & Machinery Assembly Workshop',
    },
  },
  {
    id: 'export',
    image: MEDIA_PHOTOS.exportPort,
    eyebrow: {
      id: 'Global Supply Chain, Export & Import Trading',
      en: 'Global Supply Chain, Export & Import Trading',
    },
    title: {
      id: 'Rantai Pasok Ekspor-Impor & Distribusi Maritim ke 5 Kawasan Dunia',
      en: 'Global Export-Import & Maritime Supply Chain Across 5 Regions',
    },
    subtitle: {
      id: 'Pengiriman kontainer FCL 20ft & 40ft HC dengan standar kemasan internasional, sertifikasi Phytosanitary, COO, Lab CoA, serta skema FOB & CIF terukur.',
      en: 'Containerized FCL 20ft & 40ft HC logistics backed by export packaging standards, Phytosanitary, COO, Lab CoA, and structured FOB & CIF terms.',
    },
    ctaHref: '#ekspor',
    ctaLabel: { id: 'Jaringan Ekspor & Kalkulator', en: 'Export Network & Calculator' },
    secondaryHref: '#investor',
    secondaryLabel: { id: 'Kemitraan & Investor', en: 'Investor & Partnerships' },
    caption: {
      id: 'Koridor Pengapalan Kontainer Internasional dari Indonesia',
      en: 'International Maritime Container Corridors from Indonesia',
    },
  },
  {
    id: 'sustainability',
    image: MEDIA_PHOTOS.plantationFarmers,
    eyebrow: {
      id: 'Waste to Wealth, Nature to Value',
      en: 'Waste to Wealth, Nature to Value',
    },
    title: {
      id: 'Kemitraan Petani Nusantara & Ekonomi Sirkular Berkelanjutan',
      en: 'Smallholder Farmer Partnerships & Circular Bio-Economy',
    },
    subtitle: {
      id: 'Membangun rantai pasok hulu yang adil bersama petani kelapa Indonesia sambil memulihkan nutrisi tanah melalui kompos dan pupuk organik granul.',
      en: 'Building equitable upstream partnerships with Indonesian coconut farmers while closing the ecological loop with fermented compost and organic fertilizers.',
    },
    ctaHref: '#tentang',
    ctaLabel: { id: 'Tentang & Filosofi Binco', en: 'About Binco Philosophy' },
    secondaryHref: '#kalkulator',
    secondaryLabel: { id: 'Simulasi Neraca Massa', en: 'Mass Balance Simulator' },
    caption: {
      id: 'Panen & Agregasi Kelapa Bersama Kemitraan Petani Nusantara',
      en: 'Coconut Harvesting & Aggregation with Smallholder Farmers',
    },
  },
];

export const DIMENSIONS_OVERVIEW: Array<{
  key: DimensionKey;
  index: string;
  href: string;
  title: BilingualText;
  summary: BilingualText;
  scope: BilingualText;
  metric: string;
  metricLabel: BilingualText;
}> = [
  {
    key: 'processing',
    index: '01',
    href: '#produk',
    title: {
      id: 'Industri Pengolahan Kelapa & Limbah Kelapa',
      en: 'Coconut & Coconut Waste Processing Industry',
    },
    summary: {
      id: 'Fasilitas terintegrasi yang mengolah daging, minyak, santan, sabut, tempurung, hingga residu organik menjadi komoditas industri bernilai tambah tanpa limbah.',
      en: 'Integrated facility converting coconut meat, oil, milk, husk, shell, and organic residues into high-value export commodities under a zero-waste model.',
    },
    scope: {
      id: 'VCO/CNO · Santan · Cocofiber · Cocopeat · Cocomesh · Briket Arang · Pupuk Organik',
      en: 'VCO/CNO · Coconut Milk · Cocofiber · Cocopeat · Cocomesh · Briquettes · Compost',
    },
    metric: '7',
    metricLabel: {
      id: 'Lini Proses Terintegrasi',
      en: 'Integrated Process Lines',
    },
  },
  {
    key: 'machinery',
    index: '02',
    href: '#mesin',
    title: {
      id: 'Produksi Mesin Industri Kelapa & Engineering 3D',
      en: 'Coconut Machinery Manufacturing & 3D Engineering',
    },
    summary: {
      id: 'Perancangan rekayasa 3D CAD, fabrikasi mesin khusus, hingga penyediaan pabrik turnkey (EPC) modular yang dapat disesuaikan dengan kapasitas klien.',
      en: 'Custom 3D CAD engineering, heavy steel fabrication, and modular turnkey plant (EPC) solutions engineered to client raw-material capacity.',
    },
    scope: {
      id: 'Desain 3D · Fabrikasi CNC · Defibering · Press Briket · Instalasi & Suku Cadang',
      en: '3D CAD · Steel Fabrication · Defibering · Briquette Presses · Commissioning',
    },
    metric: '28+',
    metricLabel: {
      id: 'Konfigurasi Mesin Modular',
      en: 'Modular Machine Configurations',
    },
  },
  {
    key: 'trading',
    index: '03',
    href: '#ekspor',
    title: {
      id: 'Ekspor, Impor & Global Supply Chain Trading',
      en: 'Global Export, Import & Supply Chain Trading',
    },
    summary: {
      id: 'Distribusi domestik Nusantara, ekspor komoditas olahan kelapa standar kontainer, serta perdagangan dan pengadaan mesin lintas kawasan internasional.',
      en: 'Domestic Indonesian distribution, containerized export of processed coconut commodities, and cross-border machinery sourcing & logistics.',
    },
    scope: {
      id: 'Asia Tenggara · Asia Pasifik · Timur Tengah · Eropa · Amerika',
      en: 'Southeast Asia · Asia Pacific · Middle East · Europe · Americas',
    },
    metric: '5',
    metricLabel: {
      id: 'Koridor Distribusi Global',
      en: 'Global Trade Corridors',
    },
  },
];

export const COMPANY_ABOUT = {
  history: {
    id: 'PT. Binco Global Nusantara lahir dari visi strategis untuk menjawab dua tantangan utama industri kelapa Indonesia: tingginya limbah sabut dan tempurung kelapa yang belum termanfaatkan serta ketergantungan industri pengolahan terhadap mesin impor. Dengan menyatukan pengolahan hilir terpadu, kemandirian rekayasa mesin, dan jaringan ekspor-impor global, perusahaan hadir sebagai mitra industri kelapa menyeluruh dari hulu hingga pelabuhan tujuan.',
    en: 'PT. Binco Global Nusantara was founded to address two structural opportunities in Indonesia’s coconut sector: transforming vast volumes of underutilized coconut husks and shells into export commodities, and building domestic industrial machinery engineering capability. By integrating downstream processing, in-house machinery fabrication, and international trading, we serve as an end-to-end global coconut industry partner.',
  },
  vision: {
    id: 'Menjadi perusahaan industri kelapa terpadu, rekayasa mesin, dan perdagangan global terkemuka dari Indonesia yang menciptakan nilai ekonomi berkelanjutan melalui prinsip zero-waste.',
    en: 'To become Indonesia’s premier integrated coconut processing, industrial machinery engineering, and global trade enterprise delivering sustainable value through zero-waste innovation.',
  },
  missions: [
    {
      id: 'Mengolah seluruh fraksi kelapa dan limbahnya menjadi produk pangan, hortikultura, geotekstil, dan bio-energi berstandar mutu internasional.',
      en: 'Convert every fraction of the coconut and its by-products into internationally certified food, horticultural, geotextile, and bio-energy commodities.',
    },
    {
      id: 'Merancang dan memproduksi mesin pengolahan kelapa yang tangguh, modular, dan efisien untuk mendorong hilirisasi industri nasional dan regional.',
      en: 'Engineer and manufacture durable, modular, energy-efficient coconut processing machinery to accelerate regional industrial value creation.',
    },
    {
      id: 'Membangun kemitraan jangka panjang yang transparan bersama petani kelapa Nusantara, pembeli ekspor internasional, dan mitra investor strategis.',
      en: 'Cultivate transparent, long-term partnerships with smallholder farmers, global industrial buyers, and strategic institutional investors.',
    },
  ],
  structure: [
    {
      code: 'DIV-01',
      title: { id: 'Direktorat Agro & Industri Pengolahan', en: 'Agro-Sourcing & Processing Directorate' },
      role: {
        id: 'Mengelola kemitraan petani kelapa, penerimaan bahan baku, kontrol mutu laboratorium (QC), dan operasional 7 lini produksi terpadu.',
        en: 'Oversees smallholder sourcing partnerships, raw nut aggregation, lab quality assurance (QC), and operations across 7 integrated lines.',
      },
    },
    {
      code: 'DIV-02',
      title: { id: 'Direktorat Rekayasa Mesin & EPC', en: 'Machinery Engineering & EPC Directorate' },
      role: {
        id: 'Bertanggung jawab atas R&D, desain 3D CAD, fabrikasi mesin baja & stainless steel, uji FAT, serta instalasi dan purnajual pabrik turnkey.',
        en: 'Leads R&D, 3D CAD modeling, heavy steel & stainless fabrication, FAT certification, on-site installation, and spare parts.',
      },
    },
    {
      code: 'DIV-03',
      title: { id: 'Direktorat Ekspor, Impor & Logistik Global', en: 'Export, Import & Global Logistics Directorate' },
      role: {
        id: 'Mengelola kontrak dagang B2B, pengemasan kontainer, kepatuhan dokumen ekspor-impor (COO, Phytosanitary, Fumigation), dan pelayaran FOB/CIF.',
        en: 'Manages B2B commercial contracts, containerization, export-import compliance (COO, Phytosanitary, Fumigation), and FOB/CIF freight.',
      },
    },
    {
      code: 'DIV-04',
      title: { id: 'Direktorat Kemitraan Strategis, ESG & Keuangan', en: 'Strategic Partnerships, ESG & Finance' },
      role: {
        id: 'Mengawal tata kelola perusahaan, program keberlanjutan ekonomi sirkular, relasi investor, serta struktur kemitraan Joint Venture.',
        en: 'Directs corporate governance, circular economy ESG initiatives, investor relations, and Joint Venture development frameworks.',
      },
    },
  ],
};

export const PROCESSING_STREAMS: ProcessingStream[] = [
  {
    id: 'husk',
    code: '01',
    image: MEDIA_PHOTOS.coirCocopeat,
    title: {
      id: 'Pengolahan Sabut Kelapa (Coir & Fibre)',
      en: 'Husk Processing (Coir & Fibre Products)',
    },
    subtitle: {
      id: 'Mengubah limbah sabut menjadi serat panjang, media tanam hortikultura, hingga geotekstil pengendali erosi.',
      en: 'Transforming discarded coconut husks into industrial long fibres, horticultural substrates, and erosion-control geotextiles.',
    },
    yieldNote: {
      id: 'Porsi ~35% dari bobot kelapa utuh',
      en: '~35% weight fraction of whole coconut',
    },
    products: [
      {
        id: 'cocofiber',
        name: { id: 'Cocofiber (Serat Sabut)', en: 'Coir Fibre (Cocofiber)' },
        spec: {
          id: 'Panjang serat 10–25 cm, kadar air <15%, impuritas <3%',
          en: 'Fibre length 10–25 cm, moisture <15%, impurities <3%',
        },
        applications: {
          id: 'Matras pegas, jok otomotif, tali industri, dan bantalan akustik',
          en: 'Spring mattresses, automotive upholstery, industrial ropes, acoustic pads',
        },
        moistureOrGrade: 'Moisture < 15%',
        packaging: { id: 'Bal pres 110–120 kg ikat strapping', en: 'Compressed bales 110–120 kg' },
      },
      {
        id: 'coir_bristle',
        name: { id: 'Coir Bristle (Serat Keras)', en: 'Coir Bristle Fibre' },
        spec: {
          id: 'Serat panjang selektif >20 cm, kaku, lurus, dan dibersihkan mekanis',
          en: 'Selected stiff straight fibres >20 cm, mechanically combed',
        },
        applications: {
          id: 'Sikat industri, sapu ekspor, dan komponen filtrasi mekanis',
          en: 'Industrial brushes, export brooms, mechanical filtration media',
        },
        moistureOrGrade: 'Length > 20 cm',
        packaging: { id: 'Ikat bundel 50 kg / karung ekspor', en: '50 kg bundled export packs' },
      },
      {
        id: 'cocopeat',
        name: { id: 'Cocopeat (Media Tanam)', en: 'Cocopeat (Low / High EC)' },
        spec: {
          id: 'Low EC <0.5 mS/cm (tercuci) & High EC, pH 5.5–6.8, rasio ekspansi 1:5',
          en: 'Washed Low EC <0.5 mS/cm & unwashed, pH 5.5–6.8, 1:5 expansion ratio',
        },
        applications: {
          id: 'Rumah kaca hidroponik, pembibitan hortikultura, dan pembenah tanah',
          en: 'Greenhouse hydroponics, commercial nurseries, soil conditioning',
        },
        moistureOrGrade: 'Low EC < 0.5 mS/cm',
        packaging: { id: 'Blok pres 5 kg & karung netto 20 kg', en: '5 kg blocks & 20 kg sacks' },
      },
      {
        id: 'coir_chips',
        name: { id: 'Coir Chips (Potongan Sabut)', en: 'Coir Husk Chips' },
        spec: {
          id: 'Potongan kubus 1–2 cm tercuci, aerasi akar tinggi, bebas patogen',
          en: 'Washed 1–2 cm cubes, high root aeration, pathogen-free',
        },
        applications: {
          id: 'Media tanam anggrek, anthurium, dan mulsa organik perkebunan',
          en: 'Orchid & anthurium cultivation, organic plantation mulch',
        },
        moistureOrGrade: 'Cut 10–20 mm',
        packaging: { id: 'Blok pres 4.5–5 kg / karung', en: '4.5–5 kg compressed blocks' },
      },
      {
        id: 'coir_geotextile',
        name: { id: 'Cocomesh, Cocomat & Tali Sabut', en: 'Coir Geotextile, Nets, Mats & Rope' },
        spec: {
          id: 'Anyaman 2-ply kerapatan 400–900 gsm, lebar gulungan 2 m × 20–50 m',
          en: '2-ply woven 400–900 gsm density, roll width 2 m × 20–50 m',
        },
        applications: {
          id: 'Rehabilitasi lahan pascatambang, stabilisasi lereng, dan penahan abrasi',
          en: 'Post-mining land reclamation, slope stabilization, coastal erosion control',
        },
        moistureOrGrade: '400–900 gsm',
        packaging: { id: 'Gulungan standar kontainer ekspor', en: 'Export container rolls' },
      },
    ],
  },
  {
    id: 'meat',
    code: '02',
    image: MEDIA_PHOTOS.oilMilkProcessing,
    title: {
      id: 'Pengolahan Daging, Santan & Ekstraksi Minyak',
      en: 'Coconut Meat, Milk & Oil Extraction',
    },
    subtitle: {
      id: 'Ekstraksi higienis daging kelapa segar dan kopra menjadi minyak pangan (VCO/CNO), santan industri, dan bungkil pakan.',
      en: 'Hygienic extraction of fresh coconut kernel and copra into food-grade oil (VCO/CNO), industrial coconut milk, and protein meal.',
    },
    yieldNote: {
      id: 'Porsi ~28% dari bobot kelapa utuh',
      en: '~28% weight fraction of whole coconut',
    },
    products: [
      {
        id: 'coconut_oil',
        name: { id: 'Minyak Kelapa (CNO & VCO)', en: 'Coconut Oil (CNO & Virgin Coconut Oil)' },
        spec: {
          id: 'VCO cold-pressed kadar air <0.1%, asam laurat >48%; CNO standar kilang',
          en: 'Cold-pressed VCO moisture <0.1%, lauric acid >48%; refinery-grade CNO',
        },
        applications: {
          id: 'Industri pangan, kosmetik, oleokimia, dan suplemen nutrisi',
          en: 'Food manufacturing, personal care, oleochemicals, nutritional oils',
        },
        moistureOrGrade: 'Lauric > 48%',
        packaging: { id: 'IBC tank 1.000 L, drum baja 190 kg, flexibag', en: '1,000 L IBC, 190 kg drums, flexibag' },
      },
      {
        id: 'coconut_milk',
        name: { id: 'Santan & Krim Kelapa Industri', en: 'Industrial Coconut Milk & Cream' },
        spec: {
          id: 'Kadar lemak terkendali 17–24% fat, pasteurisasi higienis stainless steel',
          en: 'Controlled fat content 17–24%, hygienic stainless-steel pasteurization',
        },
        applications: {
          id: 'Industri makanan & minuman olahan, kulinari komersial, dan pengemasan OEM',
          en: 'Processed F&B manufacturing, commercial culinary supply, OEM packing',
        },
        moistureOrGrade: '17–24% Fat',
        packaging: { id: 'Aseptic bag-in-drum 200 kg / kemasan B2B', en: '200 kg aseptic bag-in-drum / B2B bulk' },
      },
      {
        id: 'coconut_cake',
        name: { id: 'Bungkil Kelapa (Coconut Cake)', en: 'Coconut Cake (Copra Meal By-product)' },
        spec: {
          id: 'Protein kasar 18–21%, sisa minyak 6–9%, kadar aflatoksin terpantau',
          en: 'Crude protein 18–21%, residual oil 6–9%, controlled aflatoxin levels',
        },
        applications: {
          id: 'Bahan baku konsentrat pakan ternak ruminansia dan perikanan',
          en: 'Ruminant & aquaculture feed concentrate ingredient',
        },
        moistureOrGrade: 'Protein 18–21%',
        packaging: { id: 'Karung PP 50 kg / jumbo bag 1.000 kg', en: '50 kg PP sacks / 1 MT jumbo bags' },
      },
    ],
  },
  {
    id: 'shell',
    code: '03',
    image: MEDIA_PHOTOS.charcoalBriquettes,
    title: {
      id: 'Pengolahan Tempurung (Arang, Briket & Asap Cair)',
      en: 'Shell Processing (Charcoal, Briquettes & Liquid Smoke)',
    },
    subtitle: {
      id: 'Karbonisasi terkendali tempurung kelapa menjadi sumber bio-energi berkalori tinggi dan asap cair hasil kondensasi.',
      en: 'Controlled carbonization of dense coconut shells into high-calorific bio-energy fuels and distilled liquid smoke.',
    },
    yieldNote: {
      id: 'Porsi ~15% dari bobot kelapa utuh',
      en: '~15% weight fraction of whole coconut',
    },
    products: [
      {
        id: 'shell_charcoal',
        name: { id: 'Arang Tempurung (Shell Charcoal)', en: 'Coconut Shell Charcoal' },
        spec: {
          id: 'Fixed carbon >75%, kadar abu <3%, kadar air <10%',
          en: 'Fixed carbon >75%, ash content <3%, moisture <10%',
        },
        applications: {
          id: 'Bahan baku karbon aktif, metalurgi, dan bahan bakar industri bersih',
          en: 'Activated carbon feedstock, metallurgy, clean industrial fuel',
        },
        moistureOrGrade: 'Fixed C > 75%',
        packaging: { id: 'Karung woven 25–50 kg / jumbo bag', en: '25–50 kg woven bags / jumbo bags' },
      },
      {
        id: 'briquettes',
        name: { id: 'Briket Arang Kelapa (Briquettes)', en: 'Charcoal Briquettes (Shisha & BBQ)' },
        spec: {
          id: 'Kalori >7.200 kcal/kg, abu putih <2.2%, durasi bakar 2–2.5 jam, tanpa bau',
          en: 'Calorific >7,200 kcal/kg, white ash <2.2%, 2–2.5 hr burn time, odorless',
        },
        applications: {
          id: 'Ekspor briket shisha (kubus 25 mm) dan briket BBQ heksagonal',
          en: 'Shisha cube briquettes (25 mm) & hexagonal BBQ fuel for export',
        },
        moistureOrGrade: 'Ash < 2.2%',
        packaging: { id: 'Inner box 1 kg & master carton 10 kg', en: '1 kg inner box / 10 kg master carton' },
      },
      {
        id: 'liquid_smoke',
        name: { id: 'Asap Cair (Liquid Smoke)', en: 'Distilled Liquid Smoke' },
        spec: {
          id: 'Destilasi bertingkat Grade 1 (pangan), Grade 2, dan Grade 3 (pertanian/karet)',
          en: 'Multi-stage distillation Grade 1 (food), Grade 2, and Grade 3 (agri/rubber)',
        },
        applications: {
          id: 'Koagulan lateks ramah lingkungan, pengawet organik, dan biopestisida',
          en: 'Eco-friendly latex coagulant, natural preservative, biopesticide',
        },
        moistureOrGrade: 'Grade 1 / 2 / 3',
        packaging: { id: 'Jerigen HDPE 20 L & drum 200 L', en: '20 L HDPE jerrycans & 200 L drums' },
      },
    ],
  },
  {
    id: 'value_added',
    code: '04',
    image: MEDIA_PHOTOS.organicFertilizer,
    title: {
      id: 'Produk Turunan Bernilai Tambah (Biodegradable)',
      en: 'Value-Added Biodegradable Products',
    },
    subtitle: {
      id: 'Produk cetak biodegradable berbahan serat sabut dan lateks alami sebagai substitusi plastik pertanian.',
      en: 'Moulded biodegradable products made from coir fibre and natural latex replacing single-use horticultural plastics.',
    },
    yieldNote: {
      id: '100% biodegradable & bebas plastik',
      en: '100% biodegradable & plastic-free',
    },
    products: [
      {
        id: 'coir_pots',
        name: { id: 'Coir Pots (Pot Tanam Sabut)', en: 'Coir Pots & Biodegradable Planters' },
        spec: {
          id: 'Cetak panas dengan perekat lateks alami, diameter 8–30 cm, tembus akar',
          en: 'Hot-pressed with natural rubber latex, 8–30 cm diameter, root-permeable',
        },
        applications: {
          id: 'Pembibitan langsung tanam ke tanah untuk ritel taman Eropa & Amerika',
          en: 'Direct plant-in-ground pots for European & North American garden retail',
        },
        moistureOrGrade: 'Natural Latex Bond',
        packaging: { id: 'Karton bertumpuk hemat volume kontainer', en: 'Nested export cartons' },
      },
      {
        id: 'coir_baskets',
        name: { id: 'Keranjang & Liner Sabut', en: 'Hanging Coir Baskets & Liners' },
        spec: {
          id: 'Ketebalan liner 6–10 mm, retensi kelembapan tinggi, rangka kawat berlapis',
          en: '6–10 mm liner thickness, high moisture retention, coated wire frames',
        },
        applications: {
          id: 'Lanskap komersial, hortikultura urban, dan ekspor home-living',
          en: 'Commercial landscaping, urban gardening, home-living retail export',
        },
        moistureOrGrade: '6–10 mm Liner',
        packaging: { id: 'Karton ekspor kustom merek pembeli', en: 'OEM buyer-branded export cartons' },
      },
    ],
  },
  {
    id: 'organic',
    code: '05',
    image: MEDIA_PHOTOS.plantationFarmers,
    title: {
      id: 'Pemanfaatan Residu Organik (Zero-Waste)',
      en: 'Organic Residues Utilization (Zero-Waste)',
    },
    subtitle: {
      id: 'Menutup siklus zero-waste dengan mengomposkan sisa debu serat dan air limbah menjadi nutrisi perkebunan.',
      en: 'Closing the zero-waste loop by composting residual coir pith and organic fines back into plantation nutrition.',
    },
    yieldNote: {
      id: 'Menutup 100% siklus limbah pabrik',
      en: 'Closes 100% of factory organic cycle',
    },
    products: [
      {
        id: 'compost',
        name: { id: 'Kompos Sabut Terfermentasi', en: 'Fermented Coir Compost' },
        spec: {
          id: 'Rasio C/N <20, kaya kalium organik dan mikroba pembenah struktur tanah',
          en: 'C/N ratio <20, rich in natural potassium and beneficial soil microbes',
        },
        applications: {
          id: 'Kemitraan petani kelapa Nusantara dan perkebunan organik',
          en: 'Partner coconut smallholder farms and organic agriculture',
        },
        moistureOrGrade: 'C/N Ratio < 20',
        packaging: { id: 'Karung 25 kg & 40 kg', en: '25 kg & 40 kg sacks' },
      },
      {
        id: 'organic_fertilizer',
        name: { id: 'Pupuk Organik Granul', en: 'Granulated Organic Fertilizer' },
        spec: {
          id: 'Granul ukuran 2–4 mm, pelepasan nutrisi lambat, kadar air <18%',
          en: '2–4 mm uniform granules, slow-release nutrients, moisture <18%',
        },
        applications: {
          id: 'Aplikasi mekanis pada lahan hortikultura dan rehabilitasi tanah marginal',
          en: 'Mechanical spreading on horticulture and marginal land rehabilitation',
        },
        moistureOrGrade: 'Granule 2–4 mm',
        packaging: { id: 'Karung laminasi 25 kg / 50 kg', en: '25 kg / 50 kg laminated bags' },
      },
    ],
  },
];

export const MAIN_PROCESS_LINES: Array<{ step: string; name: BilingualText; detail: BilingualText }> = [
  {
    step: '01',
    name: { id: 'Lini Ekstraksi Daging, Santan & Minyak', en: 'Meat, Milk & Oil Extraction Line' },
    detail: { id: 'Penerimaan, pencucian, pengupasan, pasteurisasi santan, pengepresan dingin/panas', en: 'Receiving, washing, paring, milk pasteurization, cold/hot oil pressing' },
  },
  {
    step: '02',
    name: { id: 'Lini Cocofiber & Cocopeat', en: 'Coir Fibre & Cocopeat Line' },
    detail: { id: 'Defibering sabut, pengayakan serbuk, pencucian EC, baling & blok', en: 'Husk defibering, pith screening, EC washing, baling & block press' },
  },
  {
    step: '03',
    name: { id: 'Lini Tali & Geotekstil Sabut', en: 'Rope & Geotextile Manufacturing Line' },
    detail: { id: 'Pemintalan benang sabut 2-ply, tenun cocomesh & cocomat', en: '2-ply coir yarn spinning, cocomesh & cocomat weaving' },
  },
  {
    step: '04',
    name: { id: 'Lini Arang & Briket Tempurung', en: 'Charcoal & Briquette Line' },
    detail: { id: 'Kiln karbonisasi, penggilingan, pencampuran binder, pencetakan & oven', en: 'Carbonization kiln, crushing, binder mixing, extrusion & drying oven' },
  },
  {
    step: '05',
    name: { id: 'Lini Produksi Asap Cair', en: 'Liquid Smoke Production Line' },
    detail: { id: 'Penangkapan asap pirolisis, kondensasi bertingkat, destilasi grade 1–3', en: 'Pyrolysis smoke capture, condensation, multi-stage distillation' },
  },
  {
    step: '06',
    name: { id: 'Lini Coir Pots & Produk Turunan', en: 'Coir Pots & Value-Added Products Line' },
    detail: { id: 'Pencetakan panas pot sabut biodegradable dan keranjang tanam', en: 'Thermo-moulding biodegradable coir pots and planter baskets' },
  },
  {
    step: '07',
    name: { id: 'Lini Kompos & Pupuk Organik', en: 'Compost & Organic Fertilizer Line' },
    detail: { id: 'Fermentasi residu organik, pengayakan, dan granulasi pupuk', en: 'Organic residue fermentation, screening, and fertilizer granulation' },
  },
];

export const MACHINERY_CAPABILITIES: Array<{ title: BilingualText; detail: BilingualText }> = [
  {
    title: { id: 'Desain Mesin Kustom (3D CAD)', en: 'Custom Machinery Design (3D CAD)' },
    detail: {
      id: 'Perancangan mekanikal dan simulasi aliran material sesuai karakter kelapa lokal dan target kapasitas.',
      en: 'Mechanical engineering and material-flow simulation tailored to local coconut varieties and capacity targets.',
    },
  },
  {
    title: { id: 'Rekayasa Proses & Tata Letak Pabrik', en: 'Process & Plant Engineering' },
    detail: {
      id: 'Neraca massa, optimasi energi, dan tata letak terpadu dari penerimaan bahan baku hingga gudang ekspor.',
      en: 'Mass-balance optimization, energy efficiency, and integrated layout from raw receiving to export warehouse.',
    },
  },
  {
    title: { id: 'Fabrikasi & Perakitan Presisi', en: 'Manufacturing & Assembly' },
    detail: {
      id: 'Konstruksi baja tugas berat dan stainless steel food-grade dengan uji fungsi pabrik (FAT) sebelum kirim.',
      en: 'Heavy-duty carbon steel and food-grade stainless fabrication with Factory Acceptance Testing (FAT) pre-shipment.',
    },
  },
  {
    title: { id: 'Pasokan Pabrik Turnkey (EPC)', en: 'Plant Turnkey Supply (EPC)' },
    detail: {
      id: 'Konfigurasi modular dan skalabel dari lini tunggal hingga pabrik kelapa terintegrasi penuh.',
      en: 'Modular and scalable configurations from standalone units to full end-to-end coconut industrial plants.',
    },
  },
  {
    title: { id: 'Modernisasi & Peningkatan Kapasitas', en: 'Upgrading & Modernisation' },
    detail: {
      id: 'Otomatisasi lini eksisting, integrasi konveyor, dan efisiensi pengeringan untuk menekan biaya per ton.',
      en: 'Retrofitting existing mills with automated conveying and drying optimization to lower unit processing costs.',
    },
  },
  {
    title: { id: 'Instalasi, Pelatihan & Suku Cadang', en: 'Installation, Training & Spares' },
    detail: {
      id: 'Komisioning di lokasi klien, pelatihan operator, serta jaminan pasokan suku cadang jangka panjang.',
      en: 'On-site commissioning, operator training, and long-term spare parts & preventive maintenance support.',
    },
  },
];

export const MACHINERY_CATEGORIES: MachineryCategory[] = [
  {
    id: 'pre_processing',
    code: 'M-01',
    image: MEDIA_PHOTOS.dehuskingLine,
    name: { id: 'Pra-Pengolahan & Persiapan', en: 'Pre-Processing & Preparation' },
    focus: {
      id: 'Pemisahan otomatis sabut, tempurung, dan daging kelapa dengan efisiensi tenaga kerja tinggi.',
      en: 'Automated separation of husk, shell, and coconut kernel with minimal manual handling.',
    },
    capacityRange: '1.500 – 10.000 butir/jam (modular)',
    powerEstimate: '15 – 45 kW',
    machines: [
      { id: 'Mesin Pengupas Sabut (Dehusking Machine)', en: 'High-Speed Dehusking Machine' },
      { id: 'Unit Pemisah & Sortasi Modular', en: 'Modular Grading & Separating System' },
      { id: 'Sistem Pencucian & Sanitasi Kelapa', en: 'Pressurized Washing & Sorting Line' },
      { id: 'Mesin Pembelah & Pemotong Kopra/Daging', en: 'Kernel & Copra Splitting / Cutting Unit' },
    ],
    outputs: { id: 'Sabut bersih, kelapa kupas, dan daging siap ekstraksi', en: 'Clean husk, dehusked nut, extraction-ready kernel' },
  },
  {
    id: 'oil_extraction',
    code: 'M-02',
    image: MEDIA_PHOTOS.oilMilkProcessing,
    name: { id: 'Ekstraksi & Pemurnian Minyak', en: 'Oil Extraction & Refining' },
    focus: {
      id: 'Lini ekstraksi minyak kelapa dingin (VCO) dan panas (CNO) berstandar higienis stainless steel.',
      en: 'Hygienic cold-press Virgin Coconut Oil (VCO) and hot-expeller Crude Coconut Oil lines.',
    },
    capacityRange: '500 – 15.000 L/hari (modular)',
    powerEstimate: '25 – 120 kW',
    machines: [
      { id: 'Pengering Kopra Terkendali (Copra Dryer)', en: 'Controlled Temperature Copra Dryer' },
      { id: 'Mesin Press Minyak Dingin & Panas (Oil Expeller)', en: 'Cold & Hot Screw Oil Expeller' },
      { id: 'Unit Kilang Pemurnian Minyak (Crude Oil Refinery)', en: 'Crude Coconut Oil Refinery System' },
      { id: 'Pabrik Virgin Coconut Oil (VCO Sentrifugal)', en: 'Centrifugal VCO Complete Plant' },
    ],
    outputs: { id: 'VCO grade pangan, CNO kilang, dan bungkil pakan', en: 'Food-grade VCO, refined CNO, copra cake' },
  },
  {
    id: 'by_product',
    code: 'M-03',
    image: MEDIA_PHOTOS.oilMilkProcessing,
    name: { id: 'Pengolahan Santan & Produk Samping Daging', en: 'Coconut Milk & Kernel By-Products' },
    focus: {
      id: 'Diversifikasi daging dan ampas kelapa menjadi santan, kelapa parut kering, tepung, dan bungkil pakan.',
      en: 'Converting coconut kernel and press cake into pasteurized coconut milk, desiccated coconut, flour, and feed.',
    },
    capacityRange: '2 – 20 MT/hari (modular)',
    powerEstimate: '30 – 95 kW',
    machines: [
      { id: 'Lini Santan & Krim Kelapa UHT/Pasteurisasi', en: 'Coconut Milk & Cream Processing Line' },
      { id: 'Pabrik Kelapa Parut Kering (Desiccated Coconut)', en: 'Desiccated Coconut Production Plant' },
      { id: 'Lini Tepung Kelapa (Coconut Flour Plant)', en: 'Low-Fat Coconut Flour Milling Plant' },
      { id: 'Lini Pengolahan Bungkil Kelapa (Pakan/Pangan)', en: 'Coconut Cake Processing Plant (Feed / Food)' },
    ],
    outputs: { id: 'Santan industri, desiccated coconut, tepung kelapa, bungkil', en: 'Industrial milk/cream, desiccated coconut, flour, feed cake' },
  },
  {
    id: 'husk_to_fibre',
    code: 'M-04',
    image: MEDIA_PHOTOS.coirCocopeat,
    name: { id: 'Pengolahan Sabut ke Serat (Coir)', en: 'Husk to Fibre (Coir Processing)' },
    focus: {
      id: 'Lini unggulan Binco untuk memisahkan cocofiber panjang dan cocopeat Low-EC berstandar ekspor.',
      en: 'Flagship Binco defibering lines separating export-grade cocofiber and washed low-EC cocopeat.',
    },
    capacityRange: '5 – 40 MT sabut/hari (modular)',
    powerEstimate: '55 – 160 kW',
    machines: [
      { id: 'Mesin Defibering / Pengurai Sabut Otomatis', en: 'Automated Fibre Extraction (Defibering) Drum' },
      { id: 'Unit Penyisir & Sortasi Coir Bristle', en: 'Coir Bristle Combing & Processing Unit' },
      { id: 'Lini Cocopeat (Pencuci EC, Pengering, Press Blok 5 kg)', en: 'Cocopeat Line (EC Washer, Dryer, 5 kg Block Press)' },
      { id: 'Mesin Pemotong & Pengemas Coco Chips', en: 'Coco Husk Chips Cutting & Baling Plant' },
    ],
    outputs: { id: 'Bal cocofiber, blok cocopeat 5 kg, cocopeat karung, coco chips', en: 'Cocofiber bales, 5 kg cocopeat blocks, loose pith, coco chips' },
  },
  {
    id: 'value_added_coir',
    code: 'M-05',
    image: MEDIA_PHOTOS.machineryWorkshop,
    name: { id: 'Mesin Produk Sabut Bernilai Tambah', en: 'Value-Added Coir Products' },
    focus: {
      id: 'Mesin pemintalan dan tenun industri untuk geotekstil reklamasi, tali, dan matras sabut.',
      en: 'Industrial spinning and weaving machinery for erosion-control geotextiles, rope, and rubberized mats.',
    },
    capacityRange: '1.000 – 6.000 m²/hari (modular)',
    powerEstimate: '20 – 75 kW',
    machines: [
      { id: 'Mesin Tenun Coir Geotextile (Pengendali Erosi)', en: 'Coir Geotextile Weaving Loom (Erosion Control)' },
      { id: 'Mesin Pemintal Benang & Tali Sabut 2-Ply', en: 'Automated 2-Ply Coir Yarn & Rope Making Machine' },
      { id: 'Lini Matras Sabut Karet (Coir Mat & Mattress)', en: 'Rubberized Coir Mat & Mattress Line' },
      { id: 'Mesin Anyam Jaring Sabut (Cocomesh Netting)', en: 'Cocomesh Industrial Netting Plant' },
    ],
    outputs: { id: 'Cocomesh, cocomat, tali sabut, dan lembaran matras', en: 'Cocomesh rolls, geotextile mats, coir rope, mattress pads' },
  },
  {
    id: 'shell_bioenergy',
    code: 'M-06',
    image: MEDIA_PHOTOS.charcoalBriquettes,
    name: { id: 'Pengolahan Tempurung & Bio-Energi', en: 'Shell Processing & Bio-Energy' },
    focus: {
      id: 'Sistem karbonisasi rendah emisi, pencetak briket presisi tinggi, dan destilasi asap cair.',
      en: 'Low-emission continuous carbonization, high-density briquette extruders, and liquid smoke distillation.',
    },
    capacityRange: '3 – 25 MT briket/hari (modular)',
    powerEstimate: '35 – 110 kW',
    machines: [
      { id: 'Kiln Karbonisasi Kontinu (Charcoal Carbonizer)', en: 'Continuous Rotary Charcoal Kiln / Carbonizer' },
      { id: 'Mesin Press Briket Arang Tempurung (Kubus & Hexa)', en: 'High-Pressure Coconut Shell Briquette Press' },
      { id: 'Kolom Kondensasi & Destilasi Asap Cair', en: 'Multi-Stage Liquid Smoke Distillation Tower' },
      { id: 'Unit Aktivasi Karbon Aktif (Opsional)', en: 'Activated Carbon Steam Activation Unit (Optional)' },
    ],
    outputs: { id: 'Arang tempurung, briket shisha/BBQ, asap cair, karbon aktif', en: 'Shell charcoal, shisha/BBQ briquettes, liquid smoke, activated carbon' },
  },
  {
    id: 'moulded_organic',
    code: 'M-07',
    image: MEDIA_PHOTOS.organicFertilizer,
    name: { id: 'Mesin Produk Cetak & Pupuk Organik', en: 'Moulded & Organic Residue Systems' },
    focus: {
      id: 'Pencetakan pot sabut biodegradable serta granulasi kompos dari limbah akhir pabrik.',
      en: 'Thermo-moulding biodegradable coco pots and granulating organic fertilizer from final mill residues.',
    },
    capacityRange: '2.000 – 8.000 pot/hari · 5–15 MT pupuk/hari',
    powerEstimate: '18 – 55 kW',
    machines: [
      { id: 'Mesin Press Panas Coir Pots / Planters', en: 'Hydraulic Hot-Press Coco Pots / Planters Machine' },
      { id: 'Lini Produk Kemasan Biodegradable Serat Kelapa', en: 'Biodegradable Coir Packaging Moulding Line' },
      { id: 'Pabrik Pupuk Organik dari Residu Akhir', en: 'Organic Fertilizer Plant from Final Waste' },
      { id: 'Mesin Pencampur & Granulasi Kompos', en: 'Compost Mixing, Screening & Granulation Line' },
    ],
    outputs: { id: 'Pot sabut tanam, kemasan ramah lingkungan, pupuk granul', en: 'Coir planters, eco packaging, granulated organic fertilizer' },
  },
];

export const EXECUTION_WORKFLOW: ExecutionStage[] = [
  {
    step: '01',
    title: { id: 'Analisis Kebutuhan & Kelayakan', en: 'Requirement & Feasibility' },
    detail: {
      id: 'Pemetaan pasokan kelapa lokal, target kapasitas, analisis ROI, dan standar kualitas produk tujuan.',
      en: 'Raw material assessment, capacity sizing, ROI modeling, and target export quality standards.',
    },
  },
  {
    step: '02',
    title: { id: 'Desain & Rekayasa 3D', en: 'Design & Engineering' },
    detail: {
      id: 'Penyusunan flow diagram proses, desain mesin 3D CAD, spesifikasi utilitas listrik & air, serta tata letak pabrik.',
      en: 'Process flow engineering, 3D CAD equipment modeling, power/water utilities, and plant layout.',
    },
  },
  {
    step: '03',
    title: { id: 'Fabrikasi & Uji Mutu (QC)', en: 'Manufacturing & Quality Control' },
    detail: {
      id: 'Pemotongan CNC, pengelasan struktur berat, perakitan panel kontrol, serta Factory Acceptance Test (FAT).',
      en: 'Precision fabrication, assembly, control panel wiring, and pre-shipment Factory Acceptance Testing.',
    },
  },
  {
    step: '04',
    title: { id: 'Logistik & Kepabeanan Global', en: 'Global Supply & Logistics' },
    detail: {
      id: 'Pengemasan seaworthy, pemuatan kontainer, dokumen ekspor-impor, hingga pengiriman ke pelabuhan tujuan.',
      en: 'Seaworthy crating, container stuffing, customs clearance documentation, and ocean freight delivery.',
    },
  },
  {
    step: '05',
    title: { id: 'Instalasi & Komisioning', en: 'Installation & Commissioning' },
    detail: {
      id: 'Pemasangan mesin di lokasi klien, uji coba produksi (trial run), dan verifikasi performa kapasitas.',
      en: 'On-site mechanical/electrical setup, live trial run with raw coconuts, and throughput verification.',
    },
  },
  {
    step: '06',
    title: { id: 'Dukungan Operasi & Suku Cadang', en: 'Operation Support & Spares' },
    detail: {
      id: 'Pelatihan tim operator, panduan perawatan preventif, serta pasokan suku cadang jangka panjang.',
      en: 'Operator certification, preventive maintenance manuals, and long-term spare parts supply.',
    },
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-plantation',
    category: 'plantation',
    image: MEDIA_PHOTOS.plantationFarmers,
    title: { id: 'Perkebunan Kelapa & Kemitraan Petani', en: 'Coconut Plantations & Farmer Sourcing' },
    caption: {
      id: 'Panen selektif dan pengumpulan kelapa matang langsung dari sentra perkebunan petani mitra Nusantara.',
      en: 'Selective harvesting and direct farm-gate aggregation from Indonesian smallholder plantations.',
    },
  },
  {
    id: 'gal-dehusking',
    category: 'processing',
    image: MEDIA_PHOTOS.dehuskingLine,
    title: { id: 'Lini Pengupasan & Pemisahan Terotomasi', en: 'Automated Dehusking & Separation Line' },
    caption: {
      id: 'Pemisahan mekanis sabut, tempurung, dan daging kelapa segar untuk efisiensi kapasitas harian.',
      en: 'Mechanical separation of coconut husk, shell, and fresh white kernel for high daily throughput.',
    },
  },
  {
    id: 'gal-oil-milk',
    category: 'processing',
    image: MEDIA_PHOTOS.oilMilkProcessing,
    title: { id: 'Fasilitas Minyak Kelapa (VCO) & Santan', en: 'VCO & Coconut Milk Extraction Facility' },
    caption: {
      id: 'Tangki ekstraksi stainless steel food-grade serta inspeksi kejernihan minyak kelapa murni di laboratorium QC.',
      en: 'Food-grade stainless extraction tanks and laboratory quality verification of cold-pressed virgin coconut oil.',
    },
  },
  {
    id: 'gal-coir-cocopeat',
    category: 'processing',
    image: MEDIA_PHOTOS.coirCocopeat,
    title: { id: 'Produksi Cocofiber & Blok Cocopeat Ekspor', en: 'Cocofiber Bales & Export Cocopeat Blocks' },
    caption: {
      id: 'Bal serat sabut pres hidrolik dan tumpukan blok cocopeat Low-EC 5 kg siap pengapalan.',
      en: 'Hydraulically baled golden cocofiber and palletized 5 kg Low-EC cocopeat blocks ready for stuffing.',
    },
  },
  {
    id: 'gal-briquettes',
    category: 'processing',
    image: MEDIA_PHOTOS.charcoalBriquettes,
    title: { id: 'Lini Arang Tempurung & Briket Ekspor', en: 'Shell Charcoal & Briquette Extrusion Line' },
    caption: {
      id: 'Pencetakan presisi briket kubus berkalori tinggi dengan kadar abu rendah untuk pasar Timur Tengah & Eropa.',
      en: 'Precision high-density cube charcoal briquettes engineered for low white-ash export specifications.',
    },
  },
  {
    id: 'gal-organic',
    category: 'plantation',
    image: MEDIA_PHOTOS.organicFertilizer,
    title: { id: 'Pupuk Organik, Kompos & Coir Pots', en: 'Organic Fertilizer, Compost & Coir Pots' },
    caption: {
      id: 'Transformasi residu organik menjadi kompos subur, pupuk granul, dan pot tanam biodegradable bebas plastik.',
      en: 'Converting mill fines into fermented compost, organic fertilizer granules, and plastic-free coir pots.',
    },
  },
  {
    id: 'gal-engineering',
    category: 'machinery',
    image: MEDIA_PHOTOS.engineering3d,
    title: { id: 'Pusat Rekayasa & Desain CAD 3D', en: '3D CAD Engineering & Process Design Studio' },
    caption: {
      id: 'Pemodelan tata letak pabrik terpadu, simulasi aliran material, dan desain komponen mesin kustom.',
      en: 'Integrated 3D plant layout modeling, material flow simulation, and custom machinery engineering.',
    },
  },
  {
    id: 'gal-workshop',
    category: 'machinery',
    image: MEDIA_PHOTOS.machineryWorkshop,
    title: { id: 'Workshop Fabrikasi Mesin Industri Kelapa', en: 'Heavy Machinery Fabrication Workshop' },
    caption: {
      id: 'Perakitan mesin defibering, press hidrolik, dan rotary dryer baja tugas berat dengan standar QC ketat.',
      en: 'Heavy steel fabrication of defibering drums, hydraulic presses, and rotary dryers under strict QC.',
    },
  },
  {
    id: 'gal-warehouse',
    category: 'export',
    image: MEDIA_PHOTOS.warehouseLogistics,
    title: { id: 'Gudang Ekspor & Pemuatan Kontainer 40ft HC', en: 'Export Warehouse & 40ft HC Container Loading' },
    caption: {
      id: 'Manajemen paletisasi anti-lembap dan pemuatan langsung ke kontainer standar pelayaran internasional.',
      en: 'Moisture-protected palletized inventory loaded directly into 40-foot High Cube export containers.',
    },
  },
  {
    id: 'gal-port',
    category: 'export',
    image: MEDIA_PHOTOS.exportPort,
    title: { id: 'Pengapalan Maritim & Ekspor Internasional', en: 'International Maritime Shipping & Export' },
    caption: {
      id: 'Akses langsung melalui pelabuhan kontainer utama Indonesia menuju 5 kawasan perdagangan global.',
      en: 'Direct ocean freight dispatch from major Indonesian container terminals to 5 global trade regions.',
    },
  },
  {
    id: 'gal-blueprint-eco',
    category: 'processing',
    image: BRAND_ASSETS.ecosystemDiagram,
    title: { id: 'Cetak Biru Ekosistem Terpadu Binco', en: 'Binco Integrated Ecosystem Blueprint' },
    caption: {
      id: 'Diagram lengkap alur bahan baku kelapa dari kebun petani hingga 7 lini pemrosesan dan ekspor global.',
      en: 'Complete flow diagram from coconut plantations through 7 integrated process lines to global export.',
    },
    isBlueprint: true,
  },
  {
    id: 'gal-blueprint-machinery',
    category: 'machinery',
    image: BRAND_ASSETS.machineryDiagram,
    title: { id: 'Cetak Biru Rekayasa & Rantai Pasok Mesin', en: 'Machinery Engineering & Supply Blueprint' },
    caption: {
      id: 'Skema komprehensif 7 kategori mesin kelapa dan 6 tahap eksekusi proyek turnkey EPC.',
      en: 'Comprehensive architecture of 7 coconut machinery categories and 6-stage turnkey EPC execution.',
    },
    isBlueprint: true,
  },
];

export const PROJECT_TRACKS: ProjectTrack[] = [
  {
    id: 'proj-coir-epc',
    code: 'EPC-01',
    image: MEDIA_PHOTOS.coirCocopeat,
    category: { id: 'Pabrik Turnkey Sabut & Cocopeat', en: 'Turnkey Husk & Cocopeat Plant' },
    title: {
      id: 'Skema Pembangunan Lini Terpadu Cocofiber & Cocopeat Low-EC',
      en: 'Integrated Cocofiber & Low-EC Cocopeat Turnkey Line Model',
    },
    scope: {
      id: 'Perancangan tata letak 3D, fabrikasi mesin defibering, unit pencucian EC, pengeringan, hingga mesin press blok 5 kg siap ekspor.',
      en: '3D plant layout, defibering drum fabrication, EC washing tanks, drying system, and 5 kg hydraulic block press for export.',
    },
    deliverables: {
      id: 'Desain 3D · Fabrikasi & FAT · Instalasi & Pelatihan Operator',
      en: '3D Layout · Fabrication & FAT · Installation & Operator Training',
    },
    statusLabel: { id: 'Model Solusi EPC', en: 'EPC Solution Blueprint' },
  },
  {
    id: 'proj-shell-bio',
    code: 'EPC-02',
    image: MEDIA_PHOTOS.charcoalBriquettes,
    category: { id: 'Bio-Energi Tempurung & Briket', en: 'Shell Bio-Energy & Briquettes' },
    title: {
      id: 'Skema Lini Karbonisasi, Briket Shisha/BBQ & Asap Cair',
      en: 'Continuous Carbonization, Briquette & Liquid Smoke Plant Model',
    },
    scope: {
      id: 'Integrasi kiln karbonisasi rendah asap, kolom kondensasi asap cair, mesin crusher-mixer, dan extruder briket kubus ekspor.',
      en: 'Low-emission carbonization kiln, liquid smoke distillation column, crushing/mixing unit, and cube briquette extruder.',
    },
    deliverables: {
      id: 'Rekayasa Proses · Mesin Briket · Standar Uji Lab & MSDS',
      en: 'Process Engineering · Briquette Line · Lab QC & MSDS Prep',
    },
    statusLabel: { id: 'Model Solusi EPC', en: 'EPC Solution Blueprint' },
  },
  {
    id: 'proj-export-supply',
    code: 'TRD-03',
    image: MEDIA_PHOTOS.warehouseLogistics,
    category: { id: 'Kontrak Pasokan & Ekspor FCL', en: 'FCL Export Supply Program' },
    title: {
      id: 'Program Konsolidasi & Pengapalan Komoditas Kelapa Berkelanjutan',
      en: 'Recurring Multi-Container Coconut Commodity Export Program',
    },
    scope: {
      id: 'Agregasi pasokan multi-sentra, pengendalian mutu pra-muat, kemasan merek pembeli (OEM), dan jadwal pengapalan FOB/CIF berkala.',
      en: 'Multi-region supply consolidation, pre-shipment lab QC, OEM private labeling, and scheduled recurring FOB/CIF dispatches.',
    },
    deliverables: {
      id: 'COO · Phytosanitary · Fumigation · Independent Lab CoA',
      en: 'COO · Phytosanitary · Fumigation · Independent Lab CoA',
    },
    statusLabel: { id: 'Program Perdagangan B2B', en: 'B2B Trade Program' },
  },
];

export const INVESTOR_OPPORTUNITIES: InvestorOpportunity[] = [
  {
    id: 'inv-jv',
    code: 'INV-01',
    title: {
      id: 'Joint Venture Pabrik Pengolahan Kelapa Terpadu',
      en: 'Integrated Coconut Processing Plant Joint Venture',
    },
    summary: {
      id: 'Kemitraan pembangunan fasilitas pengolahan kelapa zero-waste di sentra bahan baku potensial Nusantara dengan dukungan penuh rekayasa mesin dan akses pasar ekspor Binco.',
      en: 'Co-development of regional zero-waste coconut processing hubs near raw-material centers backed by Binco machinery engineering and export off-take channels.',
    },
    model: { id: 'Ekuitas Bersama · Dukungan EPC & Off-take', en: 'Joint Equity · EPC & Off-take Support' },
  },
  {
    id: 'inv-offtake',
    code: 'INV-02',
    title: {
      id: 'Kontrak Pasokan Jangka Panjang (Strategic Off-take)',
      en: 'Long-Term Strategic Commodity Off-take Contracts',
    },
    summary: {
      id: 'Skema kepastian volume pasokan tahunan untuk importir global hortikultura, manufaktur matras, industri briket, dan kilang minyak kelapa.',
      en: 'Dedicated annual volume allocation agreements for global horticulture importers, mattress mills, briquette distributors, and oil refineries.',
    },
    model: { id: 'Kontrak Tahunan · Harga & Mutu Terukur', en: 'Annual Contracts · Guaranteed Spec QC' },
  },
  {
    id: 'inv-epc',
    code: 'INV-03',
    title: {
      id: 'Ekspansi Kapasitas Workshop & Produksi Mesin',
      en: 'Machinery Workshop & Industrial Capacity Expansion',
    },
    summary: {
      id: 'Kolaborasi peningkatan kapasitas fabrikasi CNC, otomasi PLC, dan ekspor mesin pengolahan kelapa buatan Indonesia ke Asia Tenggara, Afrika, dan Amerika Latin.',
      en: 'Strategic collaboration to scale CNC fabrication, PLC automation, and exports of Indonesian coconut processing machinery to tropical regions worldwide.',
    },
    model: { id: 'Kemitraan Teknologi & Pembiayaan Proyek', en: 'Technology & Project Financing Alliance' },
  },
  {
    id: 'inv-esg',
    code: 'INV-04',
    title: {
      id: 'Program Kemitraan Petani & Dampak ESG Sirkular',
      en: 'Smallholder Farmer Empowerment & Circular ESG Program',
    },
    summary: {
      id: 'Inisiatif dampak sosial-lingkungan yang meningkatkan pendapatan petani kelapa melalui pembelian limbah sabut-tempurung serta pengembalian pupuk organik ke kebun.',
      en: 'Impact-aligned ESG initiative increasing farmer incomes via husk/shell valorization while returning fermented organic nutrients to smallholder farms.',
    },
    model: { id: 'Impact Investing · Ketertelusuran Hulu', en: 'Impact Investing · Upstream Traceability' },
  },
];

export const DEFAULT_NEWS_ITEMS: NewsArticle[] = [
  {
    id: 'news-1',
    date: '2026-10-18',
    category: { id: 'Ekosistem & Keberlanjutan', en: 'Ecosystem & Sustainability' },
    title: {
      id: 'Integrasi 7 Lini Proses Zero-Waste untuk Meningkatkan Nilai Tambah Kelapa Nusantara',
      en: 'Integrating 7 Zero-Waste Process Lines to Maximize Indonesian Coconut Value',
    },
    summary: {
      id: 'Pendekatan pemrosesan menyeluruh dari daging, sabut, tempurung, hingga kompos organik memungkinkan sentra kelapa memaksimalkan nilai ekonomi tanpa meninggalkan residu terbuang.',
      en: 'A unified processing approach spanning kernel, husk, shell, and organic compost enables regional hubs to unlock full economic value with zero wasted biomass.',
    },
    image: MEDIA_PHOTOS.coirCocopeat,
  },
  {
    id: 'news-2',
    date: '2026-09-24',
    category: { id: 'Rekayasa & Mesin', en: 'Engineering & Machinery' },
    title: {
      id: 'Pengembangan Sistem Desain 3D CAD Modular untuk Efisiensi Pabrik Pengolahan Sabut',
      en: 'Advancing Modular 3D CAD Engineering for High-Efficiency Coir Processing Plants',
    },
    summary: {
      id: 'Simulasi aliran material dan kebutuhan daya sejak tahap desain membantu investor dan pemilik pabrik menyesuaikan kapasitas mesin secara bertahap sesuai pasokan kebun.',
      en: 'Upfront 3D material-flow and utility modeling empowers plant owners and investors to scale machinery capacity modularly in step with local coconut harvests.',
    },
    image: MEDIA_PHOTOS.engineering3d,
  },
  {
    id: 'news-3',
    date: '2026-08-30',
    category: { id: 'Ekspor & Logistik Global', en: 'Global Export & Logistics' },
    title: {
      id: 'Standarisasi Pengemasan Kontainer 40ft HC & Kepatuhan Dokumen Ekspor ke 5 Kawasan',
      en: 'Standardizing 40ft HC Containerization & Export Compliance Across 5 Global Regions',
    },
    summary: {
      id: 'Optimalisasi rasio kompresi cocopeat 5:1, bal cocofiber pres hidrolik, dan pengujian lab independen memperkuat daya saing pengiriman FOB maupun CIF di pasar global.',
      en: 'Optimized 5:1 cocopeat compression, hydraulic cocofiber baling, and independent lab verification strengthen FOB and CIF delivery reliability across international ports.',
    },
    image: MEDIA_PHOTOS.exportPort,
  },
];

export const TRADE_CORRIDORS: TradeCorridor[] = [
  {
    id: 'sea',
    region: { id: 'Asia Tenggara', en: 'Southeast Asia' },
    primaryPorts: 'Singapore · Port Klang · Laem Chabang · Ho Chi Minh',
    keyDemand: {
      id: 'Mesin lini kelapa turnkey, cocopeat pembibitan, arang tempurung, minyak kelapa',
      en: 'Turnkey coconut machinery, nursery cocopeat, shell charcoal, coconut oil',
    },
    transitDays: '4 – 9 hari',
    incoterms: 'FOB · CIF · CFR',
  },
  {
    id: 'apac',
    region: { id: 'Asia Pasifik', en: 'Asia Pacific' },
    primaryPorts: 'Shanghai · Qingdao · Busan · Tokyo · Sydney',
    keyDemand: {
      id: 'Cocofiber matras, cocopeat blok 5 kg Low EC, cocomesh reklamasi, kopra & CNO',
      en: 'Mattress-grade cocofiber, 5 kg Low-EC cocopeat blocks, erosion cocomesh, CNO',
    },
    transitDays: '11 – 19 hari',
    incoterms: 'FOB · CIF',
  },
  {
    id: 'me',
    region: { id: 'Timur Tengah', en: 'Middle East' },
    primaryPorts: 'Jebel Ali · Jeddah · Dammam · Sohar',
    keyDemand: {
      id: 'Briket arang shisha premium (abu putih <2.2%), cocopeat greenhouse gurun',
      en: 'Premium shisha shell briquettes (<2.2% ash), desert greenhouse cocopeat',
    },
    transitDays: '16 – 24 hari',
    incoterms: 'FOB · CIF · CFR',
  },
  {
    id: 'eu',
    region: { id: 'Eropa', en: 'Europe' },
    primaryPorts: 'Rotterdam · Hamburg · Antwerp · Algeciras',
    keyDemand: {
      id: 'Cocopeat Low EC hortikultura, coir geotextile, coir pots biodegradable, VCO organik',
      en: 'Horticultural Low-EC cocopeat, coir geotextiles, biodegradable coir pots, VCO',
    },
    transitDays: '26 – 35 hari',
    incoterms: 'FOB · CIF',
  },
  {
    id: 'americas',
    region: { id: 'Amerika Utara & Selatan', en: 'Americas' },
    primaryPorts: 'Los Angeles · Savannah · Houston · Santos',
    keyDemand: {
      id: 'Cocopeat blok ritel, coco chips, briket BBQ & shisha, lini mesin pengolahan kelapa',
      en: 'Retail cocopeat blocks, coco chips, BBQ & shisha briquettes, coconut plant machinery',
    },
    transitDays: '28 – 40 hari',
    incoterms: 'FOB · CIF',
  },
];

export const PACKAGING_STANDARDS: PackagingStandard[] = [
  {
    id: 'cocopeat_block',
    name: { id: 'Cocopeat Block 5 kg', en: 'Cocopeat Block 5 kg' },
    unitWeight: '5 kg / blok (±30×30×12 cm)',
    container40HC: '24 – 26 MT (4.800–5.200 blok)',
    specDetail: {
      id: 'Kompresi 5:1, tersedia paletisasi atau floor-loaded dengan label ekspor & Phytosanitary.',
      en: '5:1 compression ratio, palletized or floor-loaded with full export labeling & Phytosanitary certificate.',
    },
  },
  {
    id: 'cocopeat_sack',
    name: { id: 'Karung Cocopeat 20 kg', en: 'Cocopeat Sack 20 kg' },
    unitWeight: 'Netto 20 kg / karung woven',
    container40HC: '18 – 20 MT (900–1.000 karung)',
    specDetail: {
      id: 'Karung berlabel identitas Binco dengan lapisan dalam anti-lembap untuk distribusi domestik & regional.',
      en: 'Branded woven sacks with inner moisture barrier ideal for domestic & regional nursery supply.',
    },
  },
  {
    id: 'cocofiber_bale',
    name: { id: 'Bal Cocofiber Ekspor', en: 'Export Cocofiber Bales' },
    unitWeight: '110 – 120 kg / bal pres hidrolik',
    container40HC: '19 – 21 MT (±170–185 bal)',
    specDetail: {
      id: 'Diikat strapping baja/PET standar kontainer untuk efisiensi ruang muat kapal.',
      en: 'Hydraulically pressed and secured with heavy-duty strapping for optimal container payload.',
    },
  },
  {
    id: 'briquette_carton',
    name: { id: 'Karton Briket Arang 10 kg', en: 'Charcoal Briquette Master Carton 10 kg' },
    unitWeight: '10 kg master carton (10 × 1 kg inner)',
    container40HC: '25 – 26 MT (2.500–2.600 karton)',
    specDetail: {
      id: 'Dilengkapi MSDS, SHT (Self-Heating Test), dan sertifikat analisis lab independen.',
      en: 'Shipped with MSDS, Self-Heating Test (SHT), and independent lab Certificate of Analysis.',
    },
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '1',
    keyword: 'WASTE',
    role: { id: 'Titik awal', en: 'Starting point' },
    description: {
      id: 'Sabut dan tempurung kelapa yang selama ini terbuang. Kesadaran bahwa limbah adalah sumber daya yang belum dikelola.',
      en: 'Discarded coconut husks and shells. Recognizing agricultural waste as an untapped industrial resource.',
    },
  },
  {
    number: '2',
    keyword: 'WEALTH',
    role: { id: 'Proses & hasil', en: 'Process & outcome' },
    description: {
      id: 'Pengolahan cermat, rekayasa mesin sendiri, dan standar profesional mengubah limbah kelapa menjadi komoditas bernilai ekonomi.',
      en: 'Precision engineering, proprietary machinery, and disciplined processing turn raw waste into export wealth.',
    },
  },
  {
    number: '3',
    keyword: 'NATURE',
    role: { id: 'Sumber & komitmen', en: 'Origin & commitment' },
    description: {
      id: 'Alam Nusantara sebagai asal bahan baku. Setiap tahap produksi dirancang selaras dengan prinsip lingkungan berkelanjutan.',
      en: 'Rooted in the Indonesian archipelago. Every stage is engineered to work in harmony with ecosystems.',
    },
  },
  {
    number: '4',
    keyword: 'VALUE',
    role: { id: 'Dampak berkelanjutan', en: 'Lasting impact' },
    description: {
      id: 'Nilai nyata bagi pelanggan global, kemitraan petani kelapa, industri nasional, dan kelestarian bumi.',
      en: 'Enduring value for global buyers, smallholder coconut farmers, national industry, and the planet.',
    },
  },
];

export const LOGO_ANATOMY = [
  {
    index: '1',
    title: { id: 'Wadah Kokoh (Navy Blue)', en: 'Sturdy Container (Navy Blue)' },
    description: {
      id: 'Bentuk berongga menyerupai kontainer dalam perspektif, menyiratkan produk siap kirim, kemasan ekspor, dan jangkauan logistik global.',
      en: 'Perspective container geometry representing export-ready packaging, structural stability, and global logistics reach.',
    },
  },
  {
    index: '2',
    title: { id: 'Lengkung Membulat', en: 'Organic Rounded Curves' },
    description: {
      id: 'Sudut halus yang terinspirasi dari cangkang kelapa dan lapisan serat alami, menghadirkan kesan profesional sekaligus ramah.',
      en: 'Smooth corners inspired by coconut shells and natural fibre layers—engineered yet approachable.',
    },
  },
  {
    index: '3',
    title: { id: 'Tunas Hijau (Emerald & Lime)', en: 'Green Sprout (Emerald & Lime)' },
    description: {
      id: 'Elemen hijau di dalam wadah bagaikan daun yang tumbuh—melambangkan nilai baru dan ekonomi hijau yang lahir dari sabut kelapa.',
      en: 'Rising green leaf nestled inside the container, symbolizing new economic value growing from coconut husks.',
    },
  },
  {
    index: '4',
    title: { id: 'Garis Mengalir Hulu ke Hilir', en: 'Continuous End-to-End Flow' },
    description: {
      id: 'Kontur menyambung membentuk huruf B (Binco) tanpa putus, mencerminkan rantai nilai terintegrasi dari kebun, mesin, hingga ekspor.',
      en: 'Unbroken contour forming the letter B (Binco), expressing continuous value creation from plantation and machinery to export.',
    },
  },
];
