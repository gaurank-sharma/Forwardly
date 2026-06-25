/**
 * Real Forwardly portfolio — backed by the studio's actual assets in /public.
 * `type` drives how each item renders (looping video vs. still image).
 */

export const workCategories = [
  "All",
  "3D Animation",
  "Still Renders",
  "AR / VR",
  "Web Development",
];

export const workItems = [
  // ---- 3D product animations (turntables / 360°) ----
  {
    id: "bottle",
    type: "video",
    src: "/Bottle_Animation.mp4",
    title: "Premium Bottle",
    subtitle: "360° Product Animation",
    category: "3D Animation",
    tags: ["Turntable", "CGI", "Beverage"],
  },
  {
    id: "handbag",
    type: "video",
    src: "/Handbag_Turntable.mp4",
    title: "Designer Handbag",
    subtitle: "Turntable Showcase",
    category: "3D Animation",
    tags: ["Turntable", "Fashion", "CGI"],
  },
  {
    id: "headphone",
    type: "video",
    src: "/Headphone.mp4",
    title: "Wireless Headphones",
    subtitle: "Product Reveal",
    category: "3D Animation",
    tags: ["Animation", "Tech", "CGI"],
  },
  {
    id: "toothbrush",
    type: "video",
    src: "/Toothbrush_Turn%20Table_H.mp4",
    title: "Electric Toothbrush",
    subtitle: "Turntable Animation",
    category: "3D Animation",
    tags: ["Turntable", "Lifestyle", "CGI"],
  },

  // ---- Still product renders (CGI product photography) ----
  {
    id: "movado",
    type: "image",
    src: "/still-renders/Watch_Movado_1.png",
    title: "Movado Bold",
    subtitle: "Gold Chronograph — Studio Render",
    category: "Still Renders",
    tags: ["Watch", "Luxury", "Render"],
  },
  {
    id: "seiko",
    type: "image",
    src: "/still-renders/Watch_Seiko_1.png",
    title: "Seiko Two-Tone",
    subtitle: "Dress Watch — Studio Render",
    category: "Still Renders",
    tags: ["Watch", "Render", "Product"],
  },
  {
    id: "movado2",
    type: "image",
    src: "/still-renders/Watch_Bulova_1.png",
    title: "Bulova",
    subtitle: "Precisionist — Studio Render",
    category: "Still Renders",
    tags: ["Watch", "Render", "Product"],
  },
  {
    id: "citizen",
    type: "image",
    src: "/still-renders/Watch_Citizen_1.png",
    title: "Citizen",
    subtitle: "Eco-Drive — Studio Render",
    category: "Still Renders",
    tags: ["Watch", "Render", "Product"],
  },
  {
    id: "joss",
    type: "image",
    src: "/still-renders/Black_Front_1.5.jpg",
    title: "JOSS 40oz Tumbler",
    subtitle: "Packshot — Studio Render",
    category: "Still Renders",
    tags: ["Drinkware", "Packshot", "Render"],
  },

  // ---- AR / VR ----
  {
    id: "meeting-room",
    type: "image",
    src: "/ar-vr/Meeting%20Room.png",
    title: "Virtual Gallery Room",
    subtitle: "Immersive AR / VR Environment",
    category: "AR / VR",
    tags: ["AR/VR", "Environment", "Realtime"],
  },

  // ---- Web development (placeholder until projects are added) ----
  {
    id: "web-soon",
    type: "soon",
    title: "Web Projects",
    subtitle: "Case studies landing soon",
    category: "Web Development",
    tags: ["React", "Next.js", "WebGL"],
  },
];
