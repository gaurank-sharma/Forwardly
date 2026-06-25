import {
  Code2,
  Boxes,
  Camera,
  Glasses,
  Sparkles,
  Clapperboard,
  TrendingUp,
  Smartphone,
} from "lucide-react";

/**
 * Services offered by Forwardly. `featured` lifts Web Development as the
 * flagship; `soon` marks upcoming offerings. The 3D / CGI services reflect
 * the studio's real production work.
 */
export const services = [
  {
    id: "web",
    icon: Code2,
    title: "Web Development",
    tag: "Flagship",
    featured: true,
    desc: "High-performance websites & web apps engineered like products — React, Next.js, headless commerce, and buttery 60fps experiences.",
    points: ["React / Next.js", "Headless Commerce", "Core Web Vitals 95+"],
  },
  {
    id: "3d-anim",
    icon: Boxes,
    title: "3D Product Visualization",
    desc: "Photoreal 3D models, 360° turntables and product animations that let customers explore a product before it physically exists.",
    points: ["360° Turntables", "Product Animation", "Photoreal CGI"],
  },
  {
    id: "renders",
    icon: Camera,
    title: "CGI Product Renders",
    desc: "Studio-grade still renders that replace traditional product photography — every angle, finish and colourway, pixel-perfect.",
    points: ["Packshots", "E-commerce Renders", "Material Studies"],
  },
  {
    id: "arvr",
    icon: Glasses,
    title: "AR / VR Experiences",
    desc: "Immersive, interactive environments and AR product previews — bring showrooms, galleries and try-ons to any device.",
    points: ["AR Product Preview", "VR Environments", "Realtime 3D"],
  },
  {
    id: "branding",
    icon: Sparkles,
    title: "Logo & Branding",
    desc: "Identity systems with soul — logos, design systems, and guidelines that scale across every touchpoint.",
    points: ["Visual Identity", "Design Systems", "Guidelines"],
  },
  {
    id: "video",
    icon: Clapperboard,
    title: "Video & Motion Design",
    desc: "Cinematic edits, motion graphics, and product films that stop the scroll and tell your story in seconds.",
    points: ["Motion Graphics", "Product Films", "Social Edits"],
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Marketing & Growth",
    desc: "Full-funnel growth — performance marketing, SEO, and data-driven experimentation that compounds.",
    points: ["Performance Ads", "SEO & Analytics", "Experiments"],
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App Development",
    soon: true,
    desc: "Native-grade iOS & Android apps with shared design systems and real-time backends. Launching soon.",
    points: ["iOS & Android", "React Native", "Realtime"],
  },
];
