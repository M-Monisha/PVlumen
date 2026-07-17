import catNetwork from "@/assets/cat-network.jpg";
import catSecurity from "@/assets/cat-security.jpg";
import catProductivity from "@/assets/cat-productivity.jpg";
import catTesting from "@/assets/cat-testing.jpg";
import catDrones from "@/assets/cat-drones.jpg";

export interface SubCategory {
  slug: string;
  name: string;
}

export interface Category {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  subCategories: SubCategory[];
}

export const categories: Category[] = [
  {
    slug: "network-infrastructure",
    name: "Network Infrastructure",
    short: "Passive & active networking, racks, cabling, AV.",
    description:
      "End-to-end passive and active network infrastructure — from copper and fiber cabling to intelligent racks, ITMS, power, cooling and audio-video distribution for data centres and enterprises.",
    image: catNetwork,
    subCategories: [
      { slug: "passive-lan", name: "Passive LAN Infrastructure" },
      { slug: "copper-fiber", name: "Copper & Fiber Cables and Connectors" },
      { slug: "audio-video", name: "Audio - Video" },
      { slug: "racks-cabinets", name: "Racks & Cabinets" },
      { slug: "wire-managers", name: "Wire Managers" },
      { slug: "itms-power-cooling", name: "ITMS, Power & Cooling" },
      { slug: "network-test-instruments", name: "Network Test Instruments" },
    ],
  },
  {
    slug: "safety-security",
    name: "Safety & Security",
    short: "Surveillance, fire, access, intrusion, IoT BMS.",
    description:
      "A comprehensive portfolio of video surveillance and analytics, fire alarm detection, public address, access control, intrusion alarms and IoT-based building management systems.",
    image: catSecurity,
    subCategories: [
      { slug: "video-surveillance", name: "Video Surveillance, VMS & Analytics" },
      { slug: "fire-alarm", name: "Fire Alarm Detection Systems" },
      { slug: "public-address", name: "Public Address & Voice Alarm" },
      { slug: "access-control", name: "Access Control" },
      { slug: "intrusion-alarm", name: "Intrusion Alarm Systems" },
      { slug: "iot-bms", name: "IoT Building Management" },
    ],
  },
  {
    slug: "business-productivity",
    name: "Business Productivity",
    short: "Barcode, RFID, mobile computing, POS.",
    description:
      "Rugged data-capture and mobility solutions for retail, warehousing, manufacturing and logistics — barcode scanners, printers, mobile computers, RFID readers and POS devices.",
    image: catProductivity,
    subCategories: [
      { slug: "barcode-scanners", name: "Barcode Scanners / Readers" },
      { slug: "barcode-printers", name: "Barcode Printers" },
      { slug: "mobile-computers", name: "Mobile Computers" },
      { slug: "rugged-tablets", name: "Tablets & Rugged Devices" },
      { slug: "rfid-readers", name: "RFID Readers" },
      { slug: "pos-devices", name: "Point of Sale Devices" },
    ],
  },
  {
    slug: "test-measurement",
    name: "Test & Measurement",
    short: "Precision instrumentation for field & lab.",
    description:
      "Precision test and measurement instrumentation — hygrometers, anemometers, thermal imagers, multimeters, insulation testers and smart probes for electrical, HVAC and industrial applications.",
    image: catTesting,
    subCategories: [
      { slug: "hygrometers", name: "Hygrometers" },
      { slug: "anemometers", name: "Anemometers" },
      { slug: "temperature-guns", name: "Temperature Guns" },
      { slug: "smart-probes", name: "Smart Probes" },
      { slug: "thermal-imagers", name: "Thermal Imagers" },
      { slug: "pressure-meters", name: "Pressure Meters" },
      { slug: "multimeters", name: "Multimeters" },
      { slug: "clamp-meters", name: "Clamp Meters" },
      { slug: "lux-meters", name: "Lux Meters" },
      { slug: "tachometers", name: "Tachometers" },
      { slug: "insulation-testers", name: "Insulation Resistance Testers" },
      { slug: "rcd-testers", name: "Residual Current Device Testers" },
    ],
  },
  {
    slug: "drones-uas",
    name: "Drones & UAS",
    short: "Industrial & defence-grade unmanned systems.",
    description:
      "Industrial and defence-grade unmanned aerial systems for surveillance, mapping, inspection and public safety — sourced from India's leading UAS manufacturer.",
    image: catDrones,
    subCategories: [
      { slug: "surveillance-drones", name: "Surveillance Drones" },
      { slug: "mapping-drones", name: "Mapping & Survey Drones" },
    ],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getSubCategory = (category: string, sub: string) =>
  getCategory(category)?.subCategories.find((s) => s.slug === sub);
