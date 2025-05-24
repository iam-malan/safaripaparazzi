// Site configuration
export const siteConfig = {
  name: "Safari Paparazzi",
  title: "Safari Paparazzi | Namibian Photography Tours",
  description:
    "Experience the breathtaking landscapes and wildlife of Namibia through the lens of your camera. Join our expert-guided photography tours across Namibia's most stunning locations.",
  url: "https://safaripaparazzi.com",
  logo: "/images/logo/logo.svg",
  logoDark: "/images/logo/logo-dark.svg",
  icon: "/images/logo/icon.png",
  email: "info@safaripaparazzi.com",
  phone: "+264 81 234 5678",
  address: "123 Desert View, Windhoek, Namibia",
  socials: {
    facebook: "https://facebook.com/safaripaparazzi",
    instagram: "https://instagram.com/safaripaparazzi",
    twitter: "https://twitter.com/safaripaparazzi",
    pinterest: "https://pinterest.com/safaripaparazzi",
    youtube: "https://youtube.com/@safaripaparazzi",
  },
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Tours",
      href: "/tours",
      submenu: [
        {
          title: "Swakopmund to Windhoek",
          href: "/tours/swakopmund-to-windhoek",
          description: "Coastal to capital photography adventure",
        },
        {
          title: "Namib Desert Expedition",
          href: "/tours/namib-desert",
          description: "Capture the world's oldest desert",
        },
        {
          title: "Etosha Wildlife Safari",
          href: "/tours/etosha-wildlife",
          description: "Iconic wildlife photography experience",
        },
        {
          title: "Skeleton Coast Adventure",
          href: "/tours/skeleton-coast",
          description: "Mystical coastal landscapes and shipwrecks",
        },
      ],
    },
    {
      title: "Gallery",
      href: "/gallery",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ] as const,
  author: {
    name: "Safari Paparazzi Team",
    url: "https://safaripaparazzi.com/about",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://safaripaparazzi.com",
    siteName: "Safari Paparazzi",
    title: "Safari Paparazzi | Namibian Photography Tours",
    description:
      "Capture the essence of Namibia with our expert-guided photography tours. Experience the perfect blend of adventure, wildlife, and stunning landscapes.",
  },
  twitter: {
    handle: "@safaripaparazzi",
    site: "@safaripaparazzi",
    cardType: "summary_large_image",
  },
  keywords: [
    "Namibia photography tours",
    "Safari photography",
    "African wildlife photography",
    "Landscape photography Namibia",
    "Photography workshops Namibia",
    "Swakopmund to Windhoek tour",
    "Namib Desert photography",
    "Namibia travel",
    "Wildlife safaris Namibia",
    "Photography expeditions",
  ],
};

// Navigation links
export const mainNav = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Tours",
    href: "/tours",
    submenu: [
      {
        title: "Swakopmund to Windhoek",
        href: "/tours/swakopmund-to-windhoek",
        description: "Coastal to capital photography adventure",
      },
      {
        title: "Namib Desert Expedition",
        href: "/tours/namib-desert",
        description: "Capture the world's oldest desert",
      },
      {
        title: "Etosha Wildlife Safari",
        href: "/tours/etosha-wildlife",
        description: "Iconic wildlife photography experience",
      },
      {
        title: "Skeleton Coast Adventure",
        href: "/tours/skeleton-coast",
        description: "Mystical coastal landscapes and shipwrecks",
      },
    ],
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

// Featured tours for the homepage
export const featuredTours = [
  {
    id: "swakopmund-to-windhoek",
    title: "Swakopmund to Windhoek",
    slug: "swakopmund-to-windhoek",
    duration: "7 days",
    difficulty: "Moderate",
    price: 2499,
    discountPrice: 2199,
    currency: "NAD",
    highlights: [
      "Coastal landscapes of Swakopmund",
      "Sossusvlei's iconic red dunes",
      "Wildlife photography in Namib-Naukluft Park",
      "Stargazing in the NamibRand Nature Reserve",
      "Cultural experiences with local communities",
    ],
    description:
      "Journey from the coastal town of Swakopmund to the capital city of Windhoek, capturing the diverse landscapes and wildlife of central Namibia. This tour is perfect for photographers looking to capture the contrast between the Atlantic coastline and the rugged inland terrain.",
    image: "/images/tours/swakopmund-windhoek/hero.jpg",
    images: [
      "/images/tours/swakopmund-windhoek/gallery-1.jpg",
      "/images/tours/swakopmund-windhoek/gallery-2.jpg",
      "/images/tours/swakopmund-windhoek/gallery-3.jpg",
      "/images/tours/swakopmund-windhoek/gallery-4.jpg",
    ],
    nextDeparture: "2025-07-15",
    available: true,
    groupSize: {
      min: 4,
      max: 12,
    },
    rating: 4.9,
    reviewCount: 127,
    featured: true,
  },
  {
    id: "namib-desert-expedition",
    title: "Namib Desert Expedition",
    slug: "namib-desert",
    duration: "5 days",
    difficulty: "Moderate",
    price: 1899,
    currency: "NAD",
    highlights: [
      "Sunrise at Deadvlei",
      "Dune 45 photography",
      "Sesriem Canyon",
      "Sossusvlei's iconic landscapes",
      "Desert-adapted wildlife",
    ],
    description:
      "Immerse yourself in the world's oldest desert and capture its ever-changing colors and textures. This expedition focuses on landscape photography in the iconic Sossusvlei and Deadvlei regions.",
    image: "/images/tours/namib-desert/hero.jpg",
    images: [
      "/images/tours/namib-desert/gallery-1.jpg",
      "/images/tours/namib-desert/gallery-2.jpg",
      "/images/tours/namib-desert/gallery-3.jpg",
    ],
    nextDeparture: "2025-08-10",
    available: true,
    groupSize: {
      min: 4,
      max: 10,
    },
    rating: 4.8,
    reviewCount: 94,
    featured: true,
  },
  {
    id: "etosha-wildlife-safari",
    title: "Etosha Wildlife Safari",
    slug: "etosha-wildlife",
    duration: "6 days",
    difficulty: "Easy",
    price: 2899,
    discountPrice: 2599,
    currency: "NAD",
    highlights: [
      "Game drives in Etosha National Park",
      "Predator photography at waterholes",
      "Bird watching in diverse habitats",
      "Night photography opportunities",
      "Conservation-focused experiences",
    ],
    description:
      "Capture Namibia's incredible wildlife in one of Africa's premier game reserves. This safari focuses on wildlife photography, with expert guides who know the best locations and times for perfect shots.",
    image: "/images/tours/etosha/hero.jpg",
    images: [
      "/images/tours/etosha/gallery-1.jpg",
      "/images/tours/etosha/gallery-2.jpg",
      "/images/tours/etosha/gallery-3.jpg",
      "/images/tours/etosha/gallery-4.jpg",
    ],
    nextDeparture: "2025-09-05",
    available: true,
    groupSize: {
      min: 4,
      max: 8,
    },
    rating: 4.9,
    reviewCount: 156,
    featured: true,
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Wildlife Photographer",
    avatar: "/images/testimonials/sarah-johnson.jpg",
    content:
      "The Swakopmund to Windhoek tour exceeded all my expectations. The guides were incredibly knowledgeable about both photography and the local wildlife. I came home with a portfolio I'm truly proud of.",
    rating: 5,
    date: "2024-03-15",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Landscape Photographer",
    avatar: "/images/testimonials/michael-chen.jpg",
    content:
      "Capturing the dunes at sunrise was a once-in-a-lifetime experience. The attention to detail and the small group size made all the difference in getting those perfect shots.",
    rating: 5,
    date: "2024-04-22",
  },
  {
    id: 3,
    name: "Amina Diallo",
    role: "Travel Blogger",
    avatar: "/images/testimonials/amina-diallo.jpg",
    content:
      "As someone who's been on many photography tours, I can confidently say Safari Paparazzi stands out. Their local knowledge and passion for conservation shine through in every aspect of the journey.",
    rating: 5,
    date: "2024-05-10",
  },
];

// FAQ section
export const faqs = [
  {
    question: "What photography equipment should I bring?",
    answer:
      "We recommend bringing a DSLR or mirrorless camera with a variety of lenses (wide-angle for landscapes, telephoto for wildlife), extra batteries, memory cards, a sturdy tripod, and lens cleaning supplies. A detailed packing list will be provided upon booking.",
  },
  {
    question: "What's the best time of year for photography in Namibia?",
    answer:
      "The dry season (May to October) offers the best wildlife viewing and clear skies, while the wet season (November to April) brings lush landscapes and excellent birding opportunities. Each season offers unique photographic opportunities.",
  },
  {
    question: "What's included in the tour price?",
    answer:
      "Our tours include accommodation, meals as specified, transportation, park fees, professional photography guidance, and most activities. Flights, travel insurance, personal expenses, and gratuities are not included unless specified.",
  },
  {
    question: "What's the group size for your tours?",
    answer:
      "We keep our groups small (typically 4-12 people) to ensure personalized attention and a better experience for all participants. This allows for more flexibility and better photography opportunities.",
  },
  {
    question: "Do I need to be a professional photographer to join?",
    answer:
      "Not at all! Our tours cater to all skill levels, from beginners to professionals. Our guides are experienced in teaching photography techniques while also providing advanced tips for more experienced photographers.",
  },
];

// Social proof metrics
export const stats = [
  {
    value: "98%",
    label: "Client Satisfaction",
  },
  {
    value: "15+",
    label: "Years of Experience",
  },
  {
    value: "5000+",
    label: "Photos Taken",
  },
  {
    value: "100%",
    label: "Local Guides",
  },
];

// Footer navigation
export const footerNav = {
  explore: [
    { name: "About Us", href: "/about" },
    { name: "Our Tours", href: "/tours" },
    { name: "Gallery", href: "/gallery" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Blog", href: "/blog" },
  ],
  support: [
    { name: "FAQ", href: "/faq" },
    { name: "Booking Policy", href: "/booking-policy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Contact Us", href: "/contact" },
  ],
  contact: {
    email: "info@safaripaparazzi.com",
    phone: "+264 81 234 5678",
    address: "123 Desert View, Windhoek, Namibia",
  },
};
