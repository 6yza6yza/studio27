export type ProjectCategory = "Residential" | "Commercial";

export interface Collaborator {
  name: string;
  handle?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: ProjectCategory;
  subcategory: string;
  year: number;
  location: string;
  area?: string;
  description: string;
  longDescription: string;
  photographer?: string;
  photographerHandle?: string;
  collaborators?: Collaborator[];
  featured: boolean;
  status: "Completed" | "In Progress";
  galleryCount: number;
  heroImage?: string;
  galleryImages?: string[];
}

export const projects: Project[] = [
  {
    slug: "sunny-hill-apartment",
    name: "Sunny Hill Apartment",
    category: "Residential",
    subcategory: "Interior Design",
    year: 2025,
    location: "Sunny Hill, Prishtina",
    area: "100m²",
    description:
      "A complete 100m² makeover in Prishtina's Sunny Hill neighbourhood. Rebuilt from scratch, the apartment blends warm oak with terracotta and yellow tones for a cozy, natural vibe. Thoughtful details and clean lines create a space that feels calm, bright, and effortlessly inviting.",
    longDescription:
      "A complete 100m² makeover in Prishtina's Sunny Hill neighbourhood. Rebuilt from scratch, the apartment blends warm oak with terracotta and yellow tones for a cozy, natural vibe. Thoughtful details and clean lines create a space that feels calm, bright, and effortlessly inviting.\n\nThe custom millwork throughout the apartment creates a seamless experience where architectural elements dissolve into one another. Oak veneer panels flow from walls to doors to cabinets without visible seams.\n\nThe warm terracotta tiles in the bathrooms ground the space with earthy texture, while yellow accent tones bring warmth and personality. Natural light was a driving force in the layout decisions, ensuring every room feels open and connected to the outside.",
    photographer: "Agron Istra",
    photographerHandle: "agronistra",
    collaborators: [{ name: "Agimi Company", handle: "agimicompany" }],
    featured: true,
    status: "Completed",
    galleryCount: 13,
    heroImage: "/images/1. sunny hill apartment 2025/COVER.jpg",
    galleryImages: [
      "/images/1. sunny hill apartment 2025/COVER.jpg",
      "/images/1. sunny hill apartment 2025/living room 4.jpg",
      "/images/1. sunny hill apartment 2025/living room 6.jpg",
      "/images/1. sunny hill apartment 2025/kitchen 1.jpg",
      "/images/1. sunny hill apartment 2025/kitchen 3.jpg",
      "/images/1. sunny hill apartment 2025/kitchen 6.jpg",
      "/images/1. sunny hill apartment 2025/kitchen 7.jpg",
      "/images/1. sunny hill apartment 2025/coridor 1.jpg",
      "/images/1. sunny hill apartment 2025/coridor 3.jpg",
      "/images/1. sunny hill apartment 2025/bathroom 2.jpg",
      "/images/1. sunny hill apartment 2025/bathroom 3.jpg",
      "/images/1. sunny hill apartment 2025/room 3.jpg",
      "/images/1. sunny hill apartment 2025/detail 4.jpg",
    ],
  },
  {
    slug: "brod-smor-bakery",
    name: "Brød & Smør Bakery and Café",
    category: "Commercial",
    subcategory: "Café & Bakery Interior",
    year: 2026,
    location: "Prishtina",
    description:
      "Interior design with a mix of modern crafts and raw old materials, designed to age beautifully with use. The space balances warmth with industrial honesty — every surface is meant to develop character over time.",
    longDescription:
      "Interior design with a mix of modern crafts and raw old materials, designed to age beautifully with use. The space balances warmth with industrial honesty — every surface is meant to develop character over time.\n\nBrød & Smør asked for a space that felt simultaneously modern and timeless. Studio 27 responded with an interior that marries Scandinavian simplicity with Kosovo's own craft traditions. Raw plaster walls meet precision-built wooden counters.\n\nThe design philosophy was simple: create something that looks better in five years than it does today. Natural materials were chosen not just for their beauty but for how they'll age — the wood will darken, the brass will patina, the concrete will soften.",
    featured: true,
    status: "Completed",
    galleryCount: 7,
    heroImage: "/images/2. brod & smor bakery and cafe 2026/COVER PIC.jpg",
    galleryImages: [
      "/images/2. brod & smor bakery and cafe 2026/COVER PIC.jpg",
      "/images/2. brod & smor bakery and cafe 2026/brod and smor (1).jpeg",
      "/images/2. brod & smor bakery and cafe 2026/brod and smor (1).jpg",
      "/images/2. brod & smor bakery and cafe 2026/brod and smor (2).jpg",
      "/images/2. brod & smor bakery and cafe 2026/brod and smor (3).jpg",
      "/images/2. brod & smor bakery and cafe 2026/brod and smor (4).jpg",
      "/images/2. brod & smor bakery and cafe 2026/brod and smor (6).jpg",
    ],
  },
  {
    slug: "sanaja-penthouse",
    name: "Sanaja Penthouse",
    category: "Residential",
    subcategory: "Interior Design",
    year: 2023,
    location: "Prishtina",
    area: "165m²",
    description:
      "A 165m² penthouse interior that combines open-plan living with refined material choices. Generous ceiling heights and panoramic views shape every design decision.",
    longDescription:
      "A 165m² penthouse interior that combines open-plan living with refined material choices. Generous ceiling heights and panoramic views shape every design decision.\n\nThe layout takes full advantage of the penthouse's elevated position, with living areas oriented to capture the best light and views across Prishtina. Material selections — natural stone, warm timber, and soft textiles — create a sense of grounded luxury.\n\nEvery detail, from the integrated lighting to the custom joinery, was designed to complement the architecture rather than compete with it.",
    featured: true,
    status: "Completed",
    galleryCount: 14,
    heroImage: "/images/3. sanaja penthouse 2024/COVER.jpg",
    galleryImages: [
      "/images/3. sanaja penthouse 2024/COVER.jpg",
      "/images/3. sanaja penthouse 2024/1.jpg",
      "/images/3. sanaja penthouse 2024/3.jpg",
      "/images/3. sanaja penthouse 2024/5.jpg",
      "/images/3. sanaja penthouse 2024/6.jpg",
      "/images/3. sanaja penthouse 2024/9.jpg",
      "/images/3. sanaja penthouse 2024/10.jpg",
      "/images/3. sanaja penthouse 2024/11.jpg",
      "/images/3. sanaja penthouse 2024/12.jpg",
      "/images/3. sanaja penthouse 2024/14.jpg",
      "/images/3. sanaja penthouse 2024/15.jpg",
      "/images/3. sanaja penthouse 2024/17.jpg",
      "/images/3. sanaja penthouse 2024/20.jpg",
      "/images/3. sanaja penthouse 2024/21.jpg",
    ],
  },
  {
    slug: "bagolina-eatery",
    name: "Bagolina Eatery",
    category: "Commercial",
    subcategory: "Restaurant Interior",
    year: 2024,
    location: "Muharrem Fejza, Prishtina",
    area: "200m²",
    description:
      "A 200m² restaurant interior on Muharrem Fejza street. The design creates a warm, inviting atmosphere where food and gathering take center stage.",
    longDescription:
      "A 200m² restaurant interior on Muharrem Fejza street. The design creates a warm, inviting atmosphere where food and gathering take center stage.\n\nThe material palette draws from the culinary world — warm woods, natural stone, and handmade tiles create a tactile environment that feels both refined and approachable. Lighting was carefully layered to create different moods throughout the day.\n\nThe layout balances intimate dining corners with communal gathering spaces, ensuring the restaurant serves both everyday meals and special occasions with equal grace.",
    featured: true,
    status: "Completed",
    galleryCount: 12,
    heroImage: "/images/4. bagolina eatery/COVER PICTURE.jpg",
    galleryImages: [
      "/images/4. bagolina eatery/COVER PICTURE.jpg",
      "/images/4. bagolina eatery/DSC01233.jpg",
      "/images/4. bagolina eatery/DSC01240.jpg",
      "/images/4. bagolina eatery/DSC01254.jpg",
      "/images/4. bagolina eatery/DSC01276.jpg",
      "/images/4. bagolina eatery/DSC01281.jpg",
      "/images/4. bagolina eatery/DSC01299.jpg",
      "/images/4. bagolina eatery/DSC01305.jpg",
      "/images/4. bagolina eatery/DSC01309.jpg",
      "/images/4. bagolina eatery/DSC01324.jpg",
      "/images/4. bagolina eatery/DSC01341.jpg",
      "/images/4. bagolina eatery/DSC01345.jpg",
    ],
  },
  {
    slug: "toyota-kosova-offices",
    name: "Toyota Kosova Offices",
    category: "Commercial",
    subcategory: "Office Design",
    year: 2024,
    location: "Prishtina",
    area: "220m²",
    description:
      "Corporate office interior for Toyota Kosova. A 220m² workspace that balances the brand's identity with functional, modern office design. Clean material choices and thoughtful spatial planning create a professional environment that feels open and energizing.",
    longDescription:
      "Corporate office interior for Toyota Kosova. A 220m² workspace that balances the brand's identity with functional, modern office design. Clean material choices and thoughtful spatial planning create a professional environment that feels open and energizing.\n\nStudio 27 developed a material palette of light oak, white surfaces, and subtle brand color accents that feel professional without being sterile. Open collaboration areas flow into focused work zones, with careful acoustic planning ensuring each space serves its purpose.\n\nThe result is an office that feels both distinctly Toyota and unmistakably modern — a space that energizes rather than drains.",
    featured: false,
    status: "Completed",
    galleryCount: 8,
    heroImage: "/images/5. toyota kosova offices 2024/COVER.jpg",
    galleryImages: [
      "/images/5. toyota kosova offices 2024/COVER.jpg",
      "/images/5. toyota kosova offices 2024/IMG_6207.jpg",
      "/images/5. toyota kosova offices 2024/IMG_6321.jpg",
      "/images/5. toyota kosova offices 2024/IMG_6329.jpg",
      "/images/5. toyota kosova offices 2024/IMG_6353.jpg",
      "/images/5. toyota kosova offices 2024/IMG_6363.jpg",
      "/images/5. toyota kosova offices 2024/IMG_6396.jpg",
      "/images/5. toyota kosova offices 2024/IMG_6431.jpg",
    ],
  },
  {
    slug: "bagolina-traditional",
    name: "Bagolina Traditional",
    category: "Commercial",
    subcategory: "Restaurant Interior",
    year: 2023,
    location: "Prishtina",
    area: "520m²",
    description:
      "A 520m² restaurant space that honors traditional Kosovar dining culture through contemporary design. Natural materials and warm lighting create an atmosphere rooted in hospitality.",
    longDescription:
      "A 520m² restaurant space that honors traditional Kosovar dining culture through contemporary design. Natural materials and warm lighting create an atmosphere rooted in hospitality.\n\nThe expansive space is organized into distinct zones — from private dining areas to open communal tables — each with its own character while maintaining a cohesive material language throughout.\n\nThe design draws on traditional architectural elements, reinterpreting them with modern craftsmanship and materiality to create a space that feels both familiar and fresh.",
    featured: false,
    status: "Completed",
    galleryCount: 10,
    heroImage: "/images/6. bagolina traditional 2024/COVER PIC.jpg",
    galleryImages: [
      "/images/6. bagolina traditional 2024/COVER PIC.jpg",
      "/images/6. bagolina traditional 2024/bagolina traditional (1).jpg",
      "/images/6. bagolina traditional 2024/bagolina traditional (2).jpg",
      "/images/6. bagolina traditional 2024/bagolina traditional (3).jpg",
      "/images/6. bagolina traditional 2024/bagolina traditional (4).jpg",
      "/images/6. bagolina traditional 2024/bagolina traditional (5).jpg",
      "/images/6. bagolina traditional 2024/bagolina traditional (6).jpg",
      "/images/6. bagolina traditional 2024/bagolina traditional (7).jpg",
      "/images/6. bagolina traditional 2024/bagolina traditional (8).jpg",
      "/images/6. bagolina traditional 2024/bagolina traditional (9).jpg",
    ],
  },
  {
    slug: "moritz-eis",
    name: "Moritz Eis",
    category: "Commercial",
    subcategory: "Brand Experience",
    year: 2023,
    location: "Prishtina",
    description:
      "A vintage car turned into an ice cream station for Moritz Eis Kosovo. A playful brand experience that brings character and charm to street-level retail.",
    longDescription:
      "A vintage car turned into an ice cream station for Moritz Eis Kosovo. A playful brand experience that brings character and charm to street-level retail.\n\nThe project reimagines what a point-of-sale can be — transforming a classic vehicle into a fully functional ice cream service point. Every detail was considered, from the display layout to the customer flow around the vehicle.\n\nThe result is a distinctive brand moment that draws attention and creates memorable interactions between the brand and its customers.",
    featured: false,
    status: "Completed",
    galleryCount: 6,
    heroImage: "/images/7. moritz eis 2023/COVER.jpg",
    galleryImages: [
      "/images/7. moritz eis 2023/COVER.jpg",
      "/images/7. moritz eis 2023/DSC01405.jpg",
      "/images/7. moritz eis 2023/DSC01412.jpg",
      "/images/7. moritz eis 2023/DSC01414.jpg",
      "/images/7. moritz eis 2023/DSC01430.jpg",
      "/images/7. moritz eis 2023/DSC01431.jpg",
    ],
  },
  {
    slug: "cabin-druni",
    name: "Cabin Druni",
    category: "Residential",
    subcategory: "Cabin Interior",
    year: 2023,
    location: "Nærøyfjorden, Norway",
    description:
      "This cabin house is located in Nærøyfjorden park in Norway. With the client being a vintage furniture collector, this project came to life by renovating and mixing these elements with natural local wood applied in the walls, floor and in the ceiling.",
    longDescription:
      "This cabin house is located in Nærøyfjorden park in Norway. With the client being a vintage furniture collector, this project came to life by renovating and mixing these elements with natural local wood applied in the walls, floor and in the ceiling.\n\nThe design philosophy centered on creating a dialogue between the client's curated collection of vintage pieces and the raw beauty of Norwegian timber. Local wood species were selected for their natural character and warmth.\n\nThe result is a retreat that feels deeply personal — a space where every piece of furniture tells a story and the architecture provides a quiet, natural backdrop for a life well-lived.",
    featured: false,
    status: "Completed",
    galleryCount: 9,
    heroImage: "/images/8. cabin druni 2023/COVER.jpg",
    galleryImages: [
      "/images/8. cabin druni 2023/COVER.jpg",
      "/images/8. cabin druni 2023/262_1043767775.jpg",
      "/images/8. cabin druni 2023/262_1165548.jpg",
      "/images/8. cabin druni 2023/262_1437634807.jpg",
      "/images/8. cabin druni 2023/262_1896247708.jpg",
      "/images/8. cabin druni 2023/262_2065039668.jpg",
      "/images/8. cabin druni 2023/262_2073658977.jpg",
      "/images/8. cabin druni 2023/262_256004263.jpg",
      "/images/8. cabin druni 2023/262_576838497.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getAdjacentProjects(
  currentSlug: string
): { prev: Project | null; next: Project | null } {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return { prev: null, next: null };

  const prev = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  return { prev, next };
}
