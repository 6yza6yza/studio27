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
    year: 2024,
    location: "Sunny Hill, Prishtina",
    area: "100m²",
    description:
      "A complete 100m² apartment makeover in Prishtina's Sunny Hill neighbourhood. Rebuilt from scratch, the design blends warm oak with terracotta and yellow tones for a cozy, natural vibe. Seamless custom woodwork makes it impossible to tell what's a door, wall, or cabinet. Thoughtful details and clean lines create a space that feels calm, bright, and effortlessly inviting.",
    longDescription:
      "The Sunny Hill Apartment represents Studio 27's philosophy at its purest — every surface, joint, and material choice was made with intention. The custom millwork throughout the apartment creates a seamless experience where architectural elements dissolve into one another. Oak veneer panels flow from walls to doors to cabinets without visible seams.\n\nThe warm terracotta tiles in the bathrooms ground the space with earthy texture, while yellow accent tones bring warmth and personality. Natural light was a driving force in the layout decisions, ensuring every room feels open and connected to the outside.\n\nEvery detail, from the hidden hinges to the integrated lighting, was designed to disappear into the architecture, creating a space that feels both minimal and deeply warm.",
    photographer: "Agron Istra",
    photographerHandle: "agronistra",
    collaborators: [{ name: "Agimi Company", handle: "agimicompany" }],
    featured: true,
    status: "Completed",
    galleryCount: 10,
    heroImage: "/images/sunnyhill_1.jpeg",
    galleryImages: [
      "/images/sunnyhill_1.jpeg",
      "/images/sunnyhill_2.jpeg",
      "/images/sunnyhill_3.jpeg",
      "/images/sunnyhill_4.jpeg",
      "/images/sunnyhill_5.jpeg",
      "/images/sunnyhill_6.jpeg",
      "/images/sunnyhill_7.jpeg",
      "/images/sunnyhill_8.jpeg",
      "/images/sunnyhill_9.jpeg",
      "/images/sunnyhill_10.jpeg",
    ],
  },
  {
    slug: "brod-smor-bakery",
    name: "Brød & Smør Bakery and Café",
    category: "Commercial",
    subcategory: "Café & Bakery Interior",
    year: 2025,
    location: "Prishtina",
    description:
      "Interior design for a Scandinavian-inspired bakery and café. A mix of modern crafts and raw old materials, designed to age beautifully with use. The space balances warmth with industrial honesty — every surface is meant to develop character over time.",
    longDescription:
      "Brød & Smør asked for a space that felt simultaneously modern and timeless. Studio 27 responded with an interior that marries Scandinavian simplicity with Kosovo's own craft traditions. Raw plaster walls meet precision-built wooden counters. Industrial pendant lights hang above surfaces designed to collect the patina of daily use.\n\nThe design philosophy was simple: create something that looks better in five years than it does today. Natural materials were chosen not just for their beauty but for how they'll age — the wood will darken, the brass will patina, the concrete will soften.\n\nEvery element serves both form and function, from the custom display cases to the carefully positioned seating that encourages lingering.",
    featured: true,
    status: "Completed",
    galleryCount: 4,
    heroImage: "/images/brod_smor_1.jpeg",
    galleryImages: [
      "/images/brod_smor_1.jpeg",
      "/images/brod_smor_2.jpeg",
      "/images/brod_smor_3.jpeg",
      "/images/brod_smor_4.jpeg",
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
      "The Toyota Kosova office project required balancing corporate identity with contemporary workspace design. The 220m² space needed to reflect Toyota's values of precision and quality while creating an environment where employees could thrive.\n\nStudio 27 developed a material palette of light oak, white surfaces, and subtle brand color accents that feel professional without being sterile. Open collaboration areas flow into focused work zones, with careful acoustic planning ensuring each space serves its purpose.\n\nThe result is an office that feels both distinctly Toyota and unmistakably modern — a space that energizes rather than drains.",
    photographer: "Supercut Studio",
    photographerHandle: "supercutstudio",
    featured: true,
    status: "Completed",
    galleryCount: 8,
  },
  {
    slug: "dragodan-residence",
    name: "Dragodan Residence",
    category: "Residential",
    subcategory: "Interior Design",
    year: 2023,
    location: "Dragodan, Prishtina",
    area: "150m²",
    description:
      "Full residential interior redesign for a family home in the Dragodan neighbourhood. Warm materials and an open layout bring daylight deep into every room.",
    longDescription:
      "The Dragodan Residence presented an opportunity to transform a traditional family home into a contemporary living space without losing its warmth. The 150m² interior was completely reimagined, with walls removed to create flowing spaces that connect family life.\n\nNatural light became the organizing principle — every design decision was made to draw daylight deeper into the home. Material choices of warm oak, soft textiles, and natural stone create a palette that feels timeless and inviting.\n\nThe result is a home that adapts to modern life while honoring the traditions of family gathering and comfortable living.",
    featured: false,
    status: "Completed",
    galleryCount: 6,
  },
  {
    slug: "concept-store",
    name: "Concept Store Interior",
    category: "Commercial",
    subcategory: "Retail Interior",
    year: 2023,
    location: "Prishtina",
    area: "80m²",
    description:
      "A boutique retail space featuring handcrafted display elements and a material palette that lets the products take center stage.",
    longDescription:
      "This 80m² concept store required an interior that could showcase diverse product categories while maintaining a cohesive aesthetic. Studio 27 designed a flexible system of display elements — custom shelving, movable fixtures, and adaptable lighting — that allows the store to evolve with its inventory.\n\nThe material palette was intentionally restrained: raw steel, natural wood, and white plaster create a backdrop that elevates whatever products are displayed. The design disappears so the merchandise can shine.\n\nHandcrafted details throughout — from the welded steel joints to the hand-finished wood surfaces — give the space an artisanal quality that reflects the curated nature of the products within.",
    featured: false,
    status: "Completed",
    galleryCount: 6,
  },
  {
    slug: "mountain-retreat",
    name: "Mountain Retreat",
    category: "Residential",
    subcategory: "Architecture",
    year: 2024,
    location: "Brezovica, Kosovo",
    area: "200m²",
    description:
      "A mountain retreat that responds to its alpine surroundings with natural stone, timber, and large glazed openings framing the landscape.",
    longDescription:
      "Set against the dramatic backdrop of Brezovica's mountains, this 200m² retreat is designed to feel like an extension of its landscape. Local stone anchors the building to its site, while large timber-framed windows frame views of the surrounding peaks.\n\nThe interior continues the dialogue with nature — wood-clad walls and ceilings create warmth against the mountain cold, while carefully positioned openings bring the changing light and weather into daily experience.\n\nCurrently in progress, the Mountain Retreat represents Studio 27's expansion into full architectural projects, applying our interior design sensibility to the complete building envelope.",
    featured: false,
    status: "In Progress",
    galleryCount: 6,
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
