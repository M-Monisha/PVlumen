export interface Product {
  slug: string;
  name: string;
  brandSlug: string;
  category: string; // top-level category slug
  subCategory: string; // sub-category slug
  image?: string;
  shortSpec: string;
  description: string;
}

// Representative catalog. Structured so more SKUs can be added without code changes.
export const products: Product[] = [
  // Zebra
  {
    slug: "zebra-ds3678-sr",
    name: "Zebra DS3678-SR Ultra Rugged Scanner",
    brandSlug: "zebra-technologies",
    category: "business-productivity",
    subCategory: "barcode-scanners",
    image: "https://www.pvlumens.com/images/products/DS3678-SR.jpg",
    shortSpec: "Cordless 1D/2D imager, IP67, drop-tested 8ft.",
    description:
      "Ultra-rugged cordless 1D/2D imager engineered for the harshest warehouse, manufacturing and yard-management environments.",
  },
  {
    slug: "zebra-tc22",
    name: "Zebra TC22 Touch Mobile Computer",
    brandSlug: "zebra-technologies",
    category: "business-productivity",
    subCategory: "mobile-computers",
    shortSpec: "Android 12, all-day battery, Wi-Fi 6.",
    description:
      "Enterprise Android touch computer built for small and medium businesses that need retail-grade mobility.",
  },
  {
    slug: "zebra-zt411",
    name: "Zebra ZT411 Industrial Label Printer",
    brandSlug: "zebra-technologies",
    category: "business-productivity",
    subCategory: "barcode-printers",
    shortSpec: "203/300/600 dpi, 4-inch industrial thermal printer.",
    description:
      "Rugged industrial printer for high-volume label printing with intelligent connectivity and enterprise security.",
  },

  // Honeywell (productivity)
  {
    slug: "honeywell-1950g",
    name: "Honeywell Xenon 1950g Area Scanner",
    brandSlug: "honeywell",
    category: "business-productivity",
    subCategory: "barcode-scanners",
    shortSpec: "Corded 2D area-imaging scanner with best-in-class range.",
    description:
      "Sixth-generation area-imaging scanner with superior scanning performance across 1D, 2D and PDF barcodes.",
  },
  {
    slug: "honeywell-pc42e",
    name: "Honeywell PC42E-T Desktop Printer",
    brandSlug: "honeywell",
    category: "business-productivity",
    subCategory: "barcode-printers",
    shortSpec: "Compact 4-inch desktop thermal printer.",
    description:
      "Economical desktop printer ideal for low- to mid-volume printing in retail, healthcare and light industrial applications.",
  },

  // SUNMI
  {
    slug: "sunmi-v2s",
    name: "SUNMI V2s Smart Mobile POS",
    brandSlug: "sunmi",
    category: "business-productivity",
    subCategory: "pos-devices",
    shortSpec: "5.5\" Android handheld with integrated printer.",
    description:
      "All-in-one Android POS terminal with built-in receipt printer, camera scanner and NFC — perfect for mobile checkouts and delivery.",
  },

  // Testo
  {
    slug: "testo-103",
    name: "Testo 103 Compact Folding Thermometer",
    brandSlug: "testo",
    category: "test-measurement",
    subCategory: "temperature-guns",
    image: "https://www.pvlumens.com/images/products/testo-103-l1.jpg",
    shortSpec: "-30 to +220 °C, foldable food-safe probe.",
    description:
      "Ultra-compact folding food thermometer designed for HACCP-compliant temperature measurement in kitchens and food processing.",
  },
  {
    slug: "testo-115i",
    name: "Testo 115i Smart Pipe-Clamp Thermometer",
    brandSlug: "testo",
    category: "test-measurement",
    subCategory: "smart-probes",
    image: "https://www.pvlumens.com/images/products/testo-115i-l1.jpg",
    shortSpec: "Bluetooth smart probe for pipes up to 2.2\".",
    description:
      "Wireless clamp thermometer that measures pipe temperature on HVAC systems and reports directly to your smartphone.",
  },
  {
    slug: "testo-mini-waterproof",
    name: "Testo Waterproof Mini Probe Thermometer",
    brandSlug: "testo",
    category: "test-measurement",
    subCategory: "temperature-guns",
    image: "https://www.pvlumens.com/images/products/testo-mini-w-l1.jpg",
    shortSpec: "Robust, waterproof, ideal for food service.",
    description:
      "Waterproof mini penetration thermometer built for demanding kitchen and food-service environments.",
  },
  {
    slug: "testo-410i",
    name: "Testo 410i Smart Vane Anemometer",
    brandSlug: "testo",
    category: "test-measurement",
    subCategory: "anemometers",
    shortSpec: "Bluetooth vane anemometer, 0.4 to 30 m/s.",
    description:
      "Compact smart-probe anemometer for measuring airflow, temperature and volume flow at ventilation outlets.",
  },
  {
    slug: "testo-608-h1",
    name: "Testo 608-H1 Thermo-Hygrometer",
    brandSlug: "testo",
    category: "test-measurement",
    subCategory: "hygrometers",
    shortSpec: "Wall-mounted humidity, temperature and dew point.",
    description:
      "Reliable thermo-hygrometer for continuous monitoring of room climate, humidity and dew point.",
  },

  // FLIR
  {
    slug: "flir-one-edge-pro",
    name: "FLIR One Edge Pro Wireless Thermal Camera",
    brandSlug: "teledyne-flir",
    category: "test-measurement",
    subCategory: "thermal-imagers",
    image: "https://www.pvlumens.com/images/products/Flir_One%20Edge%20Pro.jpg",
    shortSpec: "Wireless thermal camera for iOS & Android.",
    description:
      "Wireless thermal camera that streams high-resolution thermal imagery to your phone or tablet — ideal for building diagnostics and electrical inspection.",
  },
  {
    slug: "flir-e8-pro",
    name: "FLIR E8 Pro Thermal Imaging Camera",
    brandSlug: "teledyne-flir",
    category: "test-measurement",
    subCategory: "thermal-imagers",
    shortSpec: "320 × 240 IR resolution, MSX enhancement.",
    description:
      "Professional handheld thermal camera for electrical, mechanical and building applications with intuitive touchscreen operation.",
  },

  // Megger
  {
    slug: "megger-mit230",
    name: "Megger MIT230 Insulation & Continuity Tester",
    brandSlug: "megger",
    category: "test-measurement",
    subCategory: "insulation-testers",
    shortSpec: "250/500 V insulation, continuity, resistance.",
    description:
      "Handheld insulation and continuity tester ideal for electricians commissioning and maintaining domestic and light commercial installations.",
  },
  {
    slug: "megger-dcm305e",
    name: "Megger DCM305E Digital Clamp Meter",
    brandSlug: "megger",
    category: "test-measurement",
    subCategory: "clamp-meters",
    shortSpec: "True-RMS AC clamp meter with earth leakage.",
    description:
      "True-RMS clamp meter that measures leakage current down to 0.001 mA — essential for electrical fault-finding.",
  },

  // Ekahau
  {
    slug: "ekahau-sidekick-2",
    name: "Ekahau Sidekick 2 Wi-Fi Diagnostic Device",
    brandSlug: "ekahau",
    category: "network-infrastructure",
    subCategory: "network-test-instruments",
    image: "https://www.pvlumens.com/images/products/Sidekick-2-3D-with-Phone-Shadow-Only.png",
    shortSpec: "All-in-one Wi-Fi 6/6E measurement device.",
    description:
      "Purpose-built Wi-Fi survey and diagnostic device that delivers professional-grade measurements with a single walk-through.",
  },
  {
    slug: "ekahau-sidekick-1",
    name: "Ekahau Sidekick 1",
    brandSlug: "ekahau",
    category: "network-infrastructure",
    subCategory: "network-test-instruments",
    image: "https://www.pvlumens.com/images/products/Sidekick1111.jpg",
    shortSpec: "Wi-Fi 5 all-in-one survey tool.",
    description:
      "Compact, all-in-one Wi-Fi measurement device that combines multiple radios and a spectrum analyzer into a single portable unit.",
  },
  {
    slug: "ekahau-ecse-training",
    name: "ECSE Design Training & Wi-Fi Certification",
    brandSlug: "ekahau",
    category: "network-infrastructure",
    subCategory: "network-test-instruments",
    image: "https://www.pvlumens.com/images/products/ECSE-Certified.jpg",
    shortSpec: "Official Ekahau Certified Survey Engineer course.",
    description:
      "Instructor-led certification training covering Wi-Fi design, survey and troubleshooting best practices.",
  },

  // Panduit
  {
    slug: "panduit-mini-com",
    name: "Panduit Mini-Com Modular Jack System",
    brandSlug: "panduit",
    category: "network-infrastructure",
    subCategory: "passive-lan",
    shortSpec: "Cat 6A shielded modular jack for structured cabling.",
    description:
      "Modular jack system providing the industry's most flexible and complete structured-cabling solution.",
  },
  {
    slug: "panduit-net-access-rack",
    name: "Panduit Net-Access Cabinet",
    brandSlug: "panduit",
    category: "network-infrastructure",
    subCategory: "racks-cabinets",
    shortSpec: "42U/45U server cabinet with intelligent airflow.",
    description:
      "Server-grade enclosure designed for high-density deployments with airflow containment and cable management.",
  },

  // Vertiv
  {
    slug: "vertiv-liebert-gxt5",
    name: "Vertiv Liebert GXT5 Online UPS",
    brandSlug: "vertiv",
    category: "network-infrastructure",
    subCategory: "itms-power-cooling",
    shortSpec: "1–20 kVA true online double-conversion UPS.",
    description:
      "Compact rack/tower online UPS providing continuous, high-quality power protection for critical IT loads.",
  },
  {
    slug: "vertiv-liebert-crv",
    name: "Vertiv Liebert CRV Row-Based Cooling",
    brandSlug: "vertiv",
    category: "network-infrastructure",
    subCategory: "itms-power-cooling",
    shortSpec: "Precision cooling for high-density racks.",
    description:
      "Row-based precision cooling unit delivering targeted cooling for high-density data centre environments.",
  },

  // Netrack
  {
    slug: "netrack-server-rack-42u",
    name: "Netrack 42U Server Rack",
    brandSlug: "netrack",
    category: "network-infrastructure",
    subCategory: "racks-cabinets",
    shortSpec: "42U floor-standing rack with perforated doors.",
    description:
      "Robust server-grade rack cabinet with perforated front and rear doors for optimal airflow in data centre deployments.",
  },

  // Fluke Networks
  {
    slug: "fluke-dsx-8000",
    name: "Fluke Networks DSX-8000 CableAnalyzer",
    brandSlug: "fluke-networks",
    category: "network-infrastructure",
    subCategory: "network-test-instruments",
    shortSpec: "Cat 6A/8 copper certification, 2 GHz.",
    description:
      "Cat 8 copper cable certifier delivering the fastest test times in the industry with Level V accuracy.",
  },
  {
    slug: "fluke-versiv-cfp",
    name: "Fluke Networks Versiv CertiFiber Pro",
    brandSlug: "fluke-networks",
    category: "network-infrastructure",
    subCategory: "network-test-instruments",
    shortSpec: "Optical loss test set for tier-1 fiber certification.",
    description:
      "Dual-wavelength optical loss test set that provides the industry's most efficient tier-1 fiber certification.",
  },

  // Axis
  {
    slug: "axis-p3268-lve",
    name: "Axis P3268-LVE 4K Dome Camera",
    brandSlug: "axis-communications",
    category: "safety-security",
    subCategory: "video-surveillance",
    shortSpec: "4K outdoor dome with Lightfinder 2.0 and OptimizedIR.",
    description:
      "Rugged outdoor dome camera delivering excellent image quality in any light condition with edge-based analytics.",
  },
  {
    slug: "axis-q6135-le",
    name: "Axis Q6135-LE PTZ Network Camera",
    brandSlug: "axis-communications",
    category: "safety-security",
    subCategory: "video-surveillance",
    shortSpec: "32× optical zoom PTZ with OptimizedIR.",
    description:
      "Outdoor-ready PTZ camera with high-speed pan/tilt performance and long-range infrared for 24/7 monitoring.",
  },

  // Hanwha
  {
    slug: "hanwha-xno-8080r",
    name: "Hanwha XNO-8080R 5MP AI Bullet Camera",
    brandSlug: "hanwha-vision",
    category: "safety-security",
    subCategory: "video-surveillance",
    shortSpec: "5MP AI bullet with 50m IR and object detection.",
    description:
      "AI-powered bullet camera with object classification and business intelligence analytics at the edge.",
  },

  // Digifort
  {
    slug: "digifort-enterprise-vms",
    name: "Digifort Enterprise VMS License",
    brandSlug: "digifort",
    category: "safety-security",
    subCategory: "video-surveillance",
    shortSpec: "Enterprise-class video management software.",
    description:
      "Enterprise video management platform supporting unlimited cameras with advanced analytics and video-wall integration.",
  },

  // Honeywell fire
  {
    slug: "honeywell-notifier-nfs2",
    name: "Notifier NFS2-3030 Fire Alarm Panel",
    brandSlug: "notifier",
    category: "safety-security",
    subCategory: "fire-alarm",
    shortSpec: "Intelligent addressable fire alarm control panel.",
    description:
      "Powerful intelligent fire alarm control panel scalable up to 3,180 addressable points for large commercial buildings.",
  },
  {
    slug: "morley-zx5se",
    name: "Morley ZX5Se Addressable Fire Panel",
    brandSlug: "morley-ias",
    category: "safety-security",
    subCategory: "fire-alarm",
    shortSpec: "5-loop intelligent addressable panel.",
    description:
      "Intelligent addressable fire alarm control panel designed for medium-to-large protected premises.",
  },
  {
    slug: "system-sensor-b501",
    name: "System Sensor B501 Detector Base",
    brandSlug: "system-sensor",
    category: "safety-security",
    subCategory: "fire-alarm",
    shortSpec: "Universal mounting base for smoke and heat detectors.",
    description:
      "Universal detector base compatible with the full range of System Sensor conventional detectors.",
  },
  {
    slug: "gst-102a",
    name: "GST I-9105 Addressable Smoke Detector",
    brandSlug: "gst",
    category: "safety-security",
    subCategory: "fire-alarm",
    shortSpec: "Photoelectric addressable smoke detector.",
    description:
      "Photoelectric smoke detector for intelligent addressable fire detection systems in commercial and industrial settings.",
  },

  // Texecom
  {
    slug: "texecom-premier-elite-24",
    name: "Texecom Premier Elite 24 Control Panel",
    brandSlug: "texecom",
    category: "safety-security",
    subCategory: "intrusion-alarm",
    shortSpec: "24-zone hybrid intrusion control panel.",
    description:
      "Feature-rich hybrid intrusion control panel supporting wired and wireless devices for commercial installations.",
  },

  // Checkpoint
  {
    slug: "checkpoint-wirama-r640",
    name: "Checkpoint Wirama R640 RFID Reader",
    brandSlug: "checkpoint-systems",
    category: "business-productivity",
    subCategory: "rfid-readers",
    shortSpec: "Overhead RFID reader for retail inventory.",
    description:
      "High-performance RFID reader that delivers pinpoint accuracy for real-time inventory visibility in retail stores.",
  },

  // 75F
  {
    slug: "75f-facilisight-suite",
    name: "75F Facilisight Cloud Platform",
    brandSlug: "75f",
    category: "safety-security",
    subCategory: "iot-bms",
    shortSpec: "Cloud BMS with wireless IoT sensors.",
    description:
      "Cloud-based building management platform combining wireless sensors, predictive controls and analytics for smart buildings.",
  },

  // ideaForge
  {
    slug: "ideaforge-switch",
    name: "ideaForge SWITCH UAV",
    brandSlug: "ideaforge",
    category: "drones-uas",
    subCategory: "surveillance-drones",
    shortSpec: "Fixed-wing hybrid VTOL UAV, 15 km range.",
    description:
      "Man-portable fixed-wing hybrid VTOL UAV designed for high-altitude, long-endurance surveillance and reconnaissance missions.",
  },
  {
    slug: "ideaforge-q6",
    name: "ideaForge Q6 Quadcopter",
    brandSlug: "ideaforge",
    category: "drones-uas",
    subCategory: "surveillance-drones",
    shortSpec: "Rugged quadcopter for public safety operations.",
    description:
      "Compact multirotor UAV built for defence, law enforcement and homeland security missions in the toughest environments.",
  },
];

export const productsByBrand = (brandSlug: string) =>
  products.filter((p) => p.brandSlug === brandSlug);

export const productsByCategory = (cat: string) =>
  products.filter((p) => p.category === cat);

export const productsBySubCategory = (cat: string, sub: string) =>
  products.filter((p) => p.category === cat && p.subCategory === sub);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
