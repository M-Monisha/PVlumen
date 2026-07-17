export interface Brand {
  slug: string;
  name: string;
  logo: string;
  website: string;
  about: string;
  categories: string[]; // top-level category slugs
  subCategories: string[]; // sub-category slugs this brand supplies
}

// Real logos hosted on pvlumens.com (public marketing assets)
const CDN = "https://www.pvlumens.com/images/clientIcon";

export const brands: Brand[] = [
  {
    slug: "axis-communications",
    name: "Axis Communications",
    logo: `${CDN}/Axis_logo.png`,
    website: "https://www.axis.com",
    about:
      "Axis Communications is the market leader in network video, offering intelligent security solutions that improve safety and optimise business performance across the globe.",
    categories: ["safety-security"],
    subCategories: ["video-surveillance"],
  },
  {
    slug: "hanwha-vision",
    name: "Hanwha Vision",
    logo: `${CDN}/Hanwha%20Logo%20-%20160px%20x%2050px.png`,
    website: "https://www.hanwhavision.com",
    about:
      "Hanwha Vision (formerly Hanwha Techwin) delivers advanced video surveillance solutions with a strong focus on AI-powered analytics and cyber-secure network cameras.",
    categories: ["safety-security"],
    subCategories: ["video-surveillance"],
  },
  {
    slug: "digifort",
    name: "Digifort",
    logo: `${CDN}/digifort_logo1.jpg`,
    website: "https://www.digifort.com",
    about:
      "Digifort is a global IP surveillance platform providing enterprise VMS software with powerful analytics, video wall and centralised monitoring.",
    categories: ["safety-security"],
    subCategories: ["video-surveillance"],
  },
  {
    slug: "honeywell",
    name: "Honeywell",
    logo: `${CDN}/Honeywell%20-%20Freestanding%20Logo%20Red-EPS%20file.jpg`,
    website: "https://www.honeywell.com",
    about:
      "Honeywell is a Fortune 100 diversified technology and manufacturing leader, serving customers worldwide with aerospace products, control technologies, sensing and productivity solutions.",
    categories: ["safety-security", "business-productivity"],
    subCategories: ["fire-alarm", "intrusion-alarm", "barcode-scanners", "barcode-printers", "mobile-computers"],
  },
  {
    slug: "morley-ias",
    name: "Morley-IAS by Honeywell",
    logo: `${CDN}/Morley_Logo.png`,
    website: "https://www.morley-ias.co.uk",
    about:
      "Morley-IAS by Honeywell offers advanced fire alarm detection systems designed for commercial and industrial environments.",
    categories: ["safety-security"],
    subCategories: ["fire-alarm"],
  },
  {
    slug: "notifier",
    name: "Notifier",
    logo: `${CDN}/Notifier%20Logo%20-%20160px%20x%2050px.png`,
    website: "https://www.notifier.com",
    about:
      "Notifier by Honeywell is a leading manufacturer of engineered fire alarm systems with over 400 distributors globally.",
    categories: ["safety-security"],
    subCategories: ["fire-alarm"],
  },
  {
    slug: "system-sensor",
    name: "System Sensor",
    logo: `${CDN}/System_Sensor_logo.png`,
    website: "https://www.systemsensor.com",
    about:
      "System Sensor manufactures smoke, heat and CO detectors, notification appliances and other fire and life-safety devices.",
    categories: ["safety-security"],
    subCategories: ["fire-alarm"],
  },
  {
    slug: "gst",
    name: "GST",
    logo: `${CDN}/GSTimages.png`,
    website: "https://www.gst.com.cn",
    about:
      "GST (Global Security Technology) is a specialist in fire alarm and industrial safety systems trusted across large infrastructure projects.",
    categories: ["safety-security"],
    subCategories: ["fire-alarm"],
  },
  {
    slug: "texecom",
    name: "Texecom",
    logo: `${CDN}/TexecomLogo300pix.webp`,
    website: "https://www.texe.com",
    about:
      "Texecom is a leading European manufacturer of electronic security systems, offering intrusion detection and connected alarm platforms.",
    categories: ["safety-security"],
    subCategories: ["intrusion-alarm"],
  },
  {
    slug: "checkpoint-systems",
    name: "Checkpoint Systems",
    logo: `${CDN}/Checkpoint-Primary-Logo-Navy-2.png`,
    website: "https://checkpointsystems.com",
    about:
      "Checkpoint Systems is a global leader in RFID and RF technology for retail, offering loss prevention and inventory intelligence solutions.",
    categories: ["business-productivity"],
    subCategories: ["rfid-readers"],
  },
  {
    slug: "75f",
    name: "75F",
    logo: `${CDN}/Logo%20-%2075F_3.png`,
    website: "https://www.75f.io",
    about:
      "75F delivers intelligent IoT-based building automation that optimises energy, comfort and indoor air quality using wireless sensors and predictive controls.",
    categories: ["safety-security"],
    subCategories: ["iot-bms"],
  },
  {
    slug: "heinrich",
    name: "Heinrich",
    logo: `${CDN}/Heinrich%20Logo%20-%20160px%20x%2050px.png`,
    website: "#",
    about:
      "Heinrich — Technology Beyond Imagination — provides intelligent IoT and building automation systems.",
    categories: ["safety-security"],
    subCategories: ["iot-bms"],
  },
  {
    slug: "ideaforge",
    name: "ideaForge",
    logo: `${CDN}/ideaForgLogo.png`,
    website: "https://ideaforgetech.com",
    about:
      "ideaForge is India's leading unmanned aircraft systems manufacturer, powering mission-critical UAV deployments for defence, homeland security and enterprise applications.",
    categories: ["drones-uas"],
    subCategories: ["surveillance-drones", "mapping-drones"],
  },
  {
    slug: "panduit",
    name: "Panduit",
    logo: `${CDN}/Panduit-logo01.jpg`,
    website: "https://www.panduit.com",
    about:
      "Panduit delivers connected solutions for data centres, enterprise buildings and industrial automation — power, communications, computing, control and safety.",
    categories: ["network-infrastructure"],
    subCategories: ["passive-lan", "copper-fiber", "racks-cabinets", "wire-managers"],
  },
  {
    slug: "atlona",
    name: "Atlona",
    logo: `${CDN}/Atlona%20Logo%20-%20160px%20x%2050px.png`,
    website: "https://atlona.com",
    about:
      "Atlona — a Panduit company — designs award-winning AV distribution, control and collaboration products for commercial and educational environments.",
    categories: ["network-infrastructure"],
    subCategories: ["audio-video"],
  },
  {
    slug: "vertiv",
    name: "Vertiv",
    logo: `${CDN}/Vertiv-Logo.svg`,
    website: "https://www.vertiv.com",
    about:
      "Vertiv brings together hardware, software, analytics and ongoing services to ensure customers' vital applications run continuously — from data centres to industrial facilities.",
    categories: ["network-infrastructure"],
    subCategories: ["itms-power-cooling", "racks-cabinets"],
  },
  {
    slug: "netrack",
    name: "Netrack",
    logo: `${CDN}/logo.png`,
    website: "https://netrackindia.com",
    about:
      "Netrack is India's leading manufacturer of server racks, network enclosures and data centre infrastructure solutions with global presence.",
    categories: ["network-infrastructure"],
    subCategories: ["racks-cabinets", "wire-managers"],
  },
  {
    slug: "fluke-networks",
    name: "Fluke Networks",
    logo: `${CDN}/FNet_White_Blue_Box_RGB.JPG`,
    website: "https://www.flukenetworks.com",
    about:
      "Fluke Networks is a world-leading provider of network installation, certification and troubleshooting tools for enterprise and telecom networks.",
    categories: ["network-infrastructure"],
    subCategories: ["network-test-instruments"],
  },
  {
    slug: "netally",
    name: "NetAlly",
    logo: `${CDN}/netAlly.png`,
    website: "https://www.netally.com",
    about:
      "NetAlly delivers portable network analysis and testing tools purpose-built for network professionals in wired and wireless environments.",
    categories: ["network-infrastructure"],
    subCategories: ["network-test-instruments"],
  },
  {
    slug: "ekahau",
    name: "Ekahau",
    logo: `${CDN}/Ekahau.png`,
    website: "https://www.ekahau.com",
    about:
      "Ekahau is the global standard for Wi-Fi design, measurement and troubleshooting — used by 60% of the Fortune 500 for enterprise wireless networks.",
    categories: ["network-infrastructure"],
    subCategories: ["network-test-instruments"],
  },
  {
    slug: "hamina",
    name: "Hamina",
    logo: `${CDN}/HaminaLogo-1.png`,
    website: "https://hamina.com",
    about:
      "Hamina provides next-generation Wi-Fi planning and design software for enterprise wireless network professionals worldwide.",
    categories: ["network-infrastructure"],
    subCategories: ["network-test-instruments"],
  },
  {
    slug: "zebra-technologies",
    name: "Zebra Technologies",
    logo: `${CDN}/Zebra.png`,
    website: "https://www.zebra.com",
    about:
      "Zebra Technologies empowers front-line workers with rugged mobile computers, barcode scanners, RFID and printing solutions for retail, healthcare, manufacturing and logistics.",
    categories: ["business-productivity"],
    subCategories: ["barcode-scanners", "barcode-printers", "mobile-computers", "rugged-tablets", "rfid-readers"],
  },
  {
    slug: "sunmi",
    name: "SUNMI",
    logo: `${CDN}/Sunmi%20Logo%20-%20160px%20x%2050px.png`,
    website: "https://www.sunmi.com",
    about:
      "SUNMI is a global IoT company providing smart POS terminals, handhelds and self-service kiosks that power the digital transformation of retail and services.",
    categories: ["business-productivity"],
    subCategories: ["pos-devices", "mobile-computers"],
  },
  {
    slug: "ivanti-wavelink",
    name: "Ivanti Wavelink",
    logo: `${CDN}/ivanti-wavelink1.png`,
    website: "https://www.ivanti.com",
    about:
      "Ivanti Wavelink modernises supply-chain applications and mobile device management for warehouse, retail and enterprise mobility workflows.",
    categories: ["business-productivity"],
    subCategories: ["rugged-tablets", "mobile-computers"],
  },
  {
    slug: "megger",
    name: "Megger",
    logo: `${CDN}/Megger.png`,
    website: "https://www.megger.com",
    about:
      "Megger designs and manufactures portable electrical test equipment used to install, maintain and troubleshoot electrical power applications worldwide.",
    categories: ["test-measurement"],
    subCategories: ["insulation-testers", "multimeters", "clamp-meters", "rcd-testers"],
  },
  {
    slug: "teledyne-flir",
    name: "Teledyne FLIR",
    logo: `${CDN}/TeledyneFLIR2.png`,
    website: "https://www.flir.com",
    about:
      "Teledyne FLIR designs and produces thermal imaging cameras, components and imaging sensors for industrial, security and defence applications.",
    categories: ["test-measurement", "safety-security"],
    subCategories: ["thermal-imagers", "temperature-guns"],
  },
  {
    slug: "testo",
    name: "Testo",
    logo: `${CDN}/TESTO-img.jpg`,
    website: "https://www.testo.com",
    about:
      "Testo is a world leader in portable and stationary measurement solutions for HVAC, food safety, emissions monitoring and industrial applications.",
    categories: ["test-measurement"],
    subCategories: ["hygrometers", "anemometers", "temperature-guns", "smart-probes", "thermal-imagers", "pressure-meters"],
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
export const brandsByCategory = (category: string) =>
  brands.filter((b) => b.categories.includes(category));
export const brandsBySubCategory = (sub: string) =>
  brands.filter((b) => b.subCategories.includes(sub));
