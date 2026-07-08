/**
 * Forwardly portfolio — real CGI / 3D work backed by assets in /public.
 * `type` drives rendering: looping video vs. still image.
 */

export const workCategories = ["All", "3D Animation", "Still Renders", "AR / VR"];

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
    id: "headphone-vid",
    type: "video",
    src: "/Headphone.mp4",
    title: "Wireless Headphones",
    subtitle: "Product Reveal Animation",
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

  // ---- Interactive 360° viewers (multi-angle render sets) ----
  {
    id: "joy360",
    type: "sequence",
    src: "/work/joy/1.jpg",
    frames: ["/work/joy/1.jpg", "/work/joy/3.jpg", "/work/joy/4.jpg", "/work/joy/5.jpg", "/work/joy/6.jpg", "/work/joy/7.jpg"],
    title: "Thrustmaster Airbus Joystick",
    subtitle: "Interactive 360° View",
    category: "3D Animation",
    tags: ["360°", "Hardware", "CGI"],
  },
  {
    id: "cam360",
    type: "sequence",
    src: "/work/cam/1.jpg",
    frames: ["/work/cam/1.jpg", "/work/cam/2.jpg", "/work/cam/3.jpg", "/work/cam/4.jpg", "/work/cam/5.jpg"],
    title: "Samsung Bridge Camera",
    subtitle: "Interactive 360° View",
    category: "3D Animation",
    tags: ["360°", "Tech", "CGI"],
  },
  {
    id: "jbl360",
    type: "sequence",
    src: "/work/jbl/1.jpg",
    frames: ["/work/jbl/1.jpg", "/work/jbl/2.jpg", "/work/jbl/3.jpg", "/work/jbl/4.jpg", "/work/jbl/5.jpg", "/work/jbl/6.jpg"],
    title: "JBL Live Headphones",
    subtitle: "Interactive 360° View",
    category: "3D Animation",
    tags: ["360°", "Audio", "CGI"],
  },

  // ---- Still product renders (photoreal CGI) ----
  {
    id: "mk-bag",
    type: "image",
    src: "/work/bag.jpg",
    title: "Michael Kors Backpack",
    subtitle: "Lifestyle Product Render",
    category: "Still Renders",
    tags: ["Fashion", "Lifestyle", "Render"],
  },
  {
    id: "salomon",
    type: "image",
    src: "/work/shoes1.jpg",
    title: "Salomon Alpha Cross",
    subtitle: "Footwear Studio Render",
    category: "Still Renders",
    tags: ["Footwear", "Sport", "Render"],
  },
  {
    id: "ankle-boot",
    type: "image",
    src: "/work/shoes2.jpg",
    title: "Suede Ankle Boot",
    subtitle: "Footwear Studio Render",
    category: "Still Renders",
    tags: ["Footwear", "Fashion", "Render"],
  },
  {
    id: "crossbody",
    type: "image",
    src: "/work/bag2.jpg",
    title: "Leather Crossbody Bag",
    subtitle: "Studio Render",
    category: "Still Renders",
    tags: ["Fashion", "Leather", "Render"],
  },
  {
    id: "bulova",
    type: "image",
    src: "/work/watch.jpg",
    title: "Bulova Chronograph",
    subtitle: "Studio Render",
    category: "Still Renders",
    tags: ["Watch", "Luxury", "Render"],
  },
  {
    id: "xdrive",
    type: "image",
    src: "/work/xdrive.jpg",
    title: "xDrive Gaming Chair",
    subtitle: "Studio Render",
    category: "Still Renders",
    tags: ["Furniture", "Gaming", "Render"],
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
];
