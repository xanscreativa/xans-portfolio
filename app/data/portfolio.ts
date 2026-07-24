export interface PortfolioItem {
  title: string;
  subtitle?: string;
  description: string;
  cover: string;
  images: string[];
}

export interface PortfolioCollection {
  id: number;
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  overview: string;
  featured?: boolean;
  video?: {
    title: string;
    thumbnail: string;
    youtubeId: string;
  };
  items: PortfolioItem[];
}

export const portfolioCollections: PortfolioCollection[] = [
  // 1. Social Media Design
  {
    id: 1,
    slug: "social-media-design",
    title: "Social Media Design",
    category: "Creative",
    description:
      "Editorial social media systems with clean layouts and consistent branding.",
    cover: "/portfolio/uksw.jpg",
    overview:
      "Editorial social media systems designed to look refined, coherent, and premium across feed, story, and campaign touchpoints.",
    items: [
      {
        title: "UKSW",
        subtitle: "UKSW",
        description: "Social feed visuals with a calm editorial rhythm and polished hierarchy.",
        cover: "/portfolio/uksw.jpg",
        images: ["/portfolio/uksw.jpg"],
      },
      {
        title: "Jendela Finansial",
        subtitle: "Jendela Finansial",
        description: "Crisp social visuals for educational and branded communication.",
        cover: "/portfolio/jendela-finansial.jpg",
        images: ["/portfolio/jendela-finansial.jpg"],
      },
      {
        title: "GPIB Immanuel Pekanbaru",
        subtitle: "GPIB Immanuel Pekanbaru",
        description: "Community-focused social media assets shaped with warmth and structure.",
        cover: "/portfolio/pelkatpa.jpg",
        images: ["/portfolio/pelkatpa.jpg"],
      },
      {
        title: "Emily Creative",
        subtitle: "Emily",
        description: "A polished visual system combining event messaging and premium digital storytelling.",
        cover: "/portfolio/emily.jpg",
        images: ["/portfolio/emily.jpg"],
      },
    ],
  },

  // 2. Brand Identity
  {
    id: 2,
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Creative",
    description:
      "Building cohesive brand experiences through strategic visual identity, social media systems, content design, and creative storytelling.",
    cover: "/portfolio/jendela-finansial.jpg",
    overview:
      "A comprehensive branding project that combines visual identity, social media content, campaign design, motion graphics, and digital storytelling into one consistent brand ecosystem.",
    featured: true,
    items: [
      {
        title: "Brand Identity",
        subtitle: "Visual Identity",
        description:
          "Designed a cohesive brand identity system including colors, typography, layouts, and supporting visual elements.",
        cover: "/portfolio/jendela-finansial.jpg",
        images: ["/portfolio/jendela-finansial.jpg"],
      },
      {
        title: "Social Media Design",
        subtitle: "Content Design",
        description:
          "Created engaging Instagram feeds, carousel posts, stories, promotional graphics, and educational content.",
        cover: "/portfolio/mark.jpg",
        images: ["/portfolio/mark.jpg"],
      },
    ],
  },

  // 3. Logo Design
  {
    id: 3,
    slug: "logo-design",
    title: "Logo Design",
    category: "Creative",
    description:
      "Timeless logo systems designed for brands, churches, and communities.",
    cover: "/portfolio/pelkatpa.jpg",
    overview:
      "Timeless logo systems built for communities, churches, and brands that need a confident and lasting identity.",
    items: [
      {
        title: "HUT 63 Pelkat PA",
        subtitle: "HUT 63 Pelkat PA",
        description: "A commemorative logo direction with a clear and memorable identity.",
        cover: "/portfolio/pelkatpa.jpg",
        images: ["/portfolio/pelkatpa.jpg"],
      },
      {
        title: "GPIB Immanuel Pekanbaru",
        subtitle: "GPIB Immanuel Pekanbaru",
        description: "Community identity work built with warmth, clarity, and lasting structure.",
        cover: "/portfolio/pelkatpa.jpg",
        images: ["/portfolio/pelkatpa.jpg"],
      },
      {
        title: "Sinyal Ordal",
        subtitle: "Sinyal Ordal",
        description: "Logo application and brand symbol direction for a recognizable visual presence.",
        cover: "/portfolio/reno.jpg",
        images: ["/portfolio/reno.jpg"],
      },
    ],
  },

  // 4. Thumbnail Design
  {
    id: 4,
    slug: "thumbnail-design",
    title: "Thumbnail Design",
    category: "Creative",
    description:
      "High-performing YouTube and social media thumbnails crafted with strong visual hierarchy and storytelling.",
    cover: "/portfolio/showreel.jpg",
    overview:
      "High-performing thumbnails designed to balance clarity, storytelling, and premium visual hierarchy for social and video platforms.",
    items: [
      {
        title: "Sinyal Ordal",
        subtitle: "Sinyal Ordal",
        description: "Editorial thumbnail direction for educational trading content.",
        cover: "/portfolio/reno.jpg",
        images: ["/portfolio/reno.jpg"],
      },
      {
        title: "Wak Atom",
        subtitle: "Wak Atom",
        description: "A polished thumbnail set built for attention and strong visual clarity.",
        cover: "/portfolio/wakatom.jpg",
        images: ["/portfolio/wakatom.jpg"],
      },
      {
        title: "Raka Trabas",
        subtitle: "Raka Trabas",
        description: "Thumbnail treatment focused on clean hierarchy and expressive storytelling.",
        cover: "/portfolio/raka.jpg",
        images: ["/portfolio/raka.jpg"],
      },
    ],
  },

  // 5. Character Design
  {
    id: 5,
    slug: "character-design",
    title: "Character Design",
    category: "Creative",
    description:
      "Custom character design and mascot illustrations tailored for digital presence and brand storytelling.",
    cover: "/portfolio/character.jpg",
    overview:
      "Expressive character designs and digital mascot assets crafted to give brands and creators a unique personality.",
    items: [
      {
        title: "Jendela Finansial Mascot",
        subtitle: "Character Illustration",
        description: "Custom character design created for educational digital content and brand identity.",
        cover: "/portfolio/character.jpg",
        images: ["/portfolio/character.jpg"],
      },
    ],
  },

  // 6. Live Stream Design
  {
    id: 6,
    slug: "live-stream-design",
    title: "Live Stream Design",
    category: "Creative",
    description:
      "Professional streaming layouts and broadcast assets for creators and trading communities.",
    cover: "/portfolio/ezsquad.jpg",
    overview:
      "Streaming layouts, sponsor graphics, and broadcast visuals designed for creators and communities that need clean, premium professionalism.",
    video: {
      title: "Live Stream Design",
      thumbnail: "/portfolio/ezsquad.jpg",
      youtubeId: "AbCdEf12345",
    },
    items: [
      {
        title: "Wak Atom",
        subtitle: "Wak Atom",
        description: "Live stream direction with clean composition and strong timing cues.",
        cover: "/portfolio/wakatom.jpg",
        images: ["/portfolio/wakatom.jpg"],
      },
      {
        title: "EZ Squad",
        subtitle: "EZ Squad",
        description: "Premium motion-forward assets for a live community and trading campaign identity.",
        cover: "/portfolio/ezsquad.jpg",
        images: ["/portfolio/ezsquad.jpg"],
      },
    ],
  },
];