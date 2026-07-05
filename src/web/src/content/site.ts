export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  ogImage: string;
  language: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  tagline: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  description: string;
}

export interface Show {
  date: string;
  venue: string;
  city: string;
  ticketUrl?: string;
}

export interface ShowsContent {
  eyebrow: string;
  title: string;
  emptyMessage: string;
  shows: Show[];
}

export interface Member {
  name: string;
  role: string;
  image: string;
}

export interface MembersContent {
  eyebrow: string;
  title: string;
  members: Member[];
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryContent {
  eyebrow: string;
  title: string;
  images: GalleryImage[];
}

export interface Video {
  title: string;
  youtubeId: string;
}

export interface VideosContent {
  eyebrow: string;
  title: string;
  videos: Video[];
}

export interface Song {
  title: string;
  artist: string;
}

export interface RepertoireGroup {
  category: string;
  songs: Song[];
}

export interface RepertoireContent {
  eyebrow: string;
  title: string;
  groups: RepertoireGroup[];
}

export interface ContactContent {
  eyebrow: string;
  title: string;
  description: string;
  email: string;
  phone?: string;
  whatsAppUrl: string;
  ctaText: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface FooterContent {
  bandName: string;
  tagline: string;
  socials: SocialLink[];
}

export interface PastShow {
  venue: string;
  city: string;
  date: string;
  note: string;
}

export interface PastShowsContent {
  eyebrow: string;
  title: string;
  lead: string;
  shows: PastShow[];
}

export interface SocialLinkItem {
  label: string;
  handle: string;
  url: string;
}

export interface SocialSectionContent {
  eyebrow: string;
  title: string;
  lead: string;
  links: SocialLinkItem[];
}

// ─── Site Data ────────────────────────────────────────────────────────────────

export const metadata: SiteMetadata = {
  title: "Pánico & Cía — Pop-Rock en directo, Madrid",
  description: "Pánico & Cía es una banda de pop-rock de Madrid que interpreta los mejores clásicos nacionales e internacionales de los 70, 80 y 90.",
  url: "https://www.panicoycia.com",
  ogImage: "/images/poster_rockville.jpg",
  language: "es",
};

export const navigation: NavLink[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre nosotros", href: "#about" },
  { label: "Escenarios", href: "#past-shows" },
  { label: "Galería", href: "#gallery" },
  { label: "Vídeos", href: "#videos" },
  { label: "Repertorio", href: "#repertoire" },
  { label: "Redes", href: "#social" },
  { label: "Contacto", href: "#contact" },
];

export const hero: HeroContent = {
  headline: "PÁNICO & CÍA",
  tagline: "Clásicos nacionales e internacionales de los 70, 80 y 90",
  ctaText: "Contrátanos",
  ctaHref: "#contact",
  backgroundImage: "/images/poster_rockville.jpg",
};

export const about: AboutContent = {
  eyebrow: "La banda",
  title: "Energía pura sobre el escenario",
  description: "Pánico & Cía lleva la fiesta a cualquier escenario. Somos una banda de Madrid especializada en versiones de pop-rock nacional e internacional de los 70, 80 y 90. Desde fiestas privadas hasta festivales, nuestro objetivo es que el público no pare de bailar y cantar.",
};

// Upcoming shows — commented out until confirmed
// export const shows: ShowsContent = {
//   eyebrow: "En directo",
//   title: "Próximos conciertos",
//   emptyMessage: "No hay conciertos programados. ¡Síguenos en redes para enterarte de las próximas fechas!",
//   shows: [],
// };

export const members: MembersContent = {
  eyebrow: "El equipo",
  title: "Miembros de la banda",
  members: [
    { name: "Oscar", role: "Batería", image: "/images/placeholder-member.jpg" },
    { name: "Cecilio", role: "Bajo", image: "/images/placeholder-member.jpg" },
    { name: "Gema", role: "Voz", image: "/images/placeholder-member.jpg" },
    { name: "Jose Luis", role: "Teclados", image: "/images/placeholder-member.jpg" },
    { name: "Paco", role: "Guitarra", image: "/images/placeholder-member.jpg" },
    { name: "Joel", role: "Guitarra", image: "/images/placeholder-member.jpg" },
  ],
};

export const gallery: GalleryContent = {
  eyebrow: "En acción",
  title: "Galería",
  images: [
    { src: "/images/rockville_2.jpg", alt: "Pánico & Cía en directo — Rockville" },
    { src: "/images/rockville_3.jpg", alt: "Concierto en Rockville" },
    { src: "/images/rockville_4.jpg", alt: "Directo en Rockville" },
    { src: "/images/cadillac-solitario_2.jpg", alt: "Pánico & Cía en Cadillac Solitario" },
    { src: "/images/TheRockLab_2.jpg", alt: "Directo en The Rock Lab" },
    { src: "/images/TheRockLab_3.jpg", alt: "Concierto en The Rock Lab" },
    { src: "/images/TheRockLab_4.jpg", alt: "Pánico & Cía en The Rock Lab" },
    { src: "/images/poster_rockville.jpg", alt: "Cartel concierto Rockville" },
    { src: "/images/poster_cadillac-solitario.jpg", alt: "Cartel Cadillac Solitario" },
    { src: "/images/poster_TheRockLab.jpg", alt: "Cartel The Rock Lab" },
  ],
};

export const videos: VideosContent = {
  eyebrow: "En acción",
  title: "Vídeos",
  videos: [
    { title: "Pánico & Cía — Directo en Sala El Sol", youtubeId: "dQw4w9WgXcQ" },
    { title: "Pánico & Cía — Medley 80s", youtubeId: "dQw4w9WgXcQ" },
  ],
};

export const repertoire: RepertoireContent = {
  eyebrow: "Lo que tocamos",
  title: "Repertorio",
  groups: [
    {
      category: "Versiones",
      songs: [
        { title: "Walking by Myself", artist: "Gary Moore" },
        { title: "Fortunate Son", artist: "Creedence Clearwater Revival" },
        { title: "The Best", artist: "Tina Turner" },
        { title: "No One Like You", artist: "Scorpions" },
        { title: "I Remember You", artist: "Skid Row" },
        { title: "What's Up", artist: "4 Non Blondes" },
        { title: "Zombie", artist: "The Cranberries" },
        { title: "Bitch", artist: "Meredith Brooks" },
        { title: "Carrie", artist: "Europe" },
        { title: "Tainted Love", artist: "Soft Cell" },
        { title: "Maniac", artist: "Michael Sembello" },
      ],
    },
  ],
};

export const contact: ContactContent = {
  eyebrow: "Contratación",
  title: "¿Quieres que toquemos en tu evento?",
  description: "Fiestas corporativas, cumpleaños, festivales, eventos... Escríbenos y te preparamos una propuesta a medida.",
  email: "contacto@panicoycia.com",
  phone: "+34 686 209 311",
  whatsAppUrl: "https://wa.me/34686209311",
  ctaText: "Escríbenos",
};

export const footer: FooterContent = {
  bandName: "Pánico & Cía",
  tagline: "Pop-rock en directo desde Madrid",
  socials: [
    { label: "Instagram", url: "https://www.instagram.com/panico_cia/", icon: "instagram" },
    { label: "Facebook", url: "https://www.facebook.com/profile.php?id=100081305106155", icon: "facebook" },
  ],
};

export const pastShows: PastShowsContent = {
  eyebrow: "Escenarios",
  title: "Donde ya ha sonado Pánico & Cía",
  lead: "Salas, fiestas y escenarios donde hemos llevado versiones pop-rock, clásicos nacionales e internacionales y algún tema propio.",
  shows: [
    { venue: "Sala Rockville", city: "Madrid", date: "21 septiembre", note: "Sesión vermut rock" },
    { venue: "Cadillac Solitario", city: "Madrid", date: "22 marzo 2025", note: "Versiones pop-rock" },
    { venue: "Street Lounge", city: "Paracuellos de Jarama", date: "18 abril", note: "Grandes clásicos del rock and roll" },
    { venue: "The RockLab", city: "Coslada", date: "3 julio 2026", note: "Con 2 Months To Go" },
    { venue: "Centro Cultural de Paracuellos", city: "Paracuellos de Jarama", date: "16 mayo 2021", note: "Concierto del grupo local Pánico & Cía" },
    { venue: "Fiestas de Belvis de Jarama", city: "Belvis de Jarama", date: "24 julio 2023", note: "Plaza de la Libertad" },
  ],
};

export const shows: ShowsContent = {
  eyebrow: "En directo",
  title: "Próximos conciertos",
  emptyMessage: "No hay conciertos programados. ¡Síguenos en redes para enterarte de las próximas fechas!",
  shows: [],
};

export const social: SocialSectionContent = {
  eyebrow: "Redes",
  title: "Síguenos",
  lead: "Conciertos, carteles, fotos de directo y próximas fechas.",
  links: [
    { label: "Instagram", handle: "@panico_cia", url: "https://www.instagram.com/panico_cia/" },
    { label: "Facebook", handle: "Pánico & Cía", url: "https://www.facebook.com/profile.php?id=100081305106155" },
  ],
};
