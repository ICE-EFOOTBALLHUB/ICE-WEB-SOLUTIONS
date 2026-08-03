// Add a new project by pushing another object into this array.
// image: path relative to index.html (e.g. "images/projects/yourfile.jpg")
// status: "live" | "soon" — "soon" renders a dashed placeholder card with no image.

const PROJECTS = [
  {
    status: "live",
    tag: "Booking & admin system",
    name: "FAD3D Barbers",
    image: "images/projects/fad3d-hero.jpg",
    description:
      "A full barbershop platform: appointment booking, product ordering, order status tracking, and a PIN-secured admin dashboard to manage services, prices, products and reviews in one place.",
    features: ["Live booking calendar", "Order tracking", "Auth-gated admin panel", "Firebase / Firestore"]
  },
  {
    status: "live",
    tag: "Marketplace & real-time chat",
    name: "ICE eFootballHub",
    image: "images/projects/ice-home.jpg",
    description:
      "A self-built marketplace for buying and selling eFootball accounts, with real-time buyer/seller chat, admin broadcast messaging, and moderation tools — packaged as an installable app.",
    features: ["Real-time chat (onSnapshot)", "Admin moderation", "User auth", "Installable PWA / APK"]
  },
  {
    status: "soon",
    tag: "In build",
    name: "Restaurant & ordering site",
    description: "Digital menu with live stock control, booking + delivery flow, and WhatsApp order handoff.",
    features: []
  },
  {
    status: "soon",
    tag: "In build",
    name: "Home services site",
    description: "Multi-trade quote-request flow, before/after gallery, and service-area check.",
    features: []
  }
];
