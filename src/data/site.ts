export interface NavItem {
  title: string;
  href: string;
  isActive?: boolean;
}

export interface PageData {
  title: string;
  description: string;
  slug: string;
  order: number;
}

export interface SiteConfig {
  name: string;
  description: string;
  navigation: NavItem[];
  pages: PageData[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "SILVIN HOMES",
  description: "Your trusted partner for home design and renovation",
  navigation: [
    { title: "About", href: "/about" },
    { title: "Design", href: "/design" },
    { title: "Available", href: "/available" },
    { title: "Financing", href: "/financing" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ],
  pages: [
    {
      title: "About",
      description: "Learn about our company and mission",
      slug: "about",
      order: 1,
    },
    {
      title: "Design",
      description: "Explore our design services and portfolio",
      slug: "design", 
      order: 2,
    },
    {
      title: "Available",
      description: "View available properties and listings",
      slug: "available",
      order: 3,
    },
    {
      title: "Financing",
      description: "Financing options and mortgage information",
      slug: "financing",
      order: 4,
    },
    {
      title: "Projects",
      description: "Browse our completed projects and renovations",
      slug: "projects",
      order: 5,
    },
    {
      title: "Contact",
      description: "Get in touch with our team",
      slug: "contact",
      order: 6,
    },
  ],
  contact: {
    email: "info@lococohome.com",
    phone: "(555) 123-4567",
    address: "123 Main Street, City, State 12345",
  },
  social: {
    facebook: "https://facebook.com/lococohome",
    instagram: "https://instagram.com/lococohome",
    twitter: "https://twitter.com/lococohome",
    linkedin: "https://linkedin.com/company/lococohome",
  },
}; 