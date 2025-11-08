export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image: string;
  date: string;
  relatedLink?: {
    href: string;
    label: string;
  };
}

export const articles: Article[] = [
  {
    slug: "real-estate-agency-expertise",
    title: "Our Real Estate Agency Expertise: Leading Tanzania's Property Market",
    excerpt: "Discover how Propertywise Limited combines technology with personalized service to revolutionize real estate transactions in Tanzania.",
    category: "Company Insight",
    readTime: "5 min read",
    image: "/blog-1.jpg",
    date: "2024-01-15"
  },
  {
    slug: "estate-agency",
    title: "Estate Agency Expertise for Commercial, Residential & Tourism Assets",
    excerpt: "How Propertywise pairs people-first service with tech-enabled marketing to match clients with the right property faster.",
    category: "Estate Services",
    readTime: "7 min read",
    image: "/blog-2.jpg",
    date: "2024-01-11"
  },
  {
    slug: "asset-register-formulation",
    title: "Asset Register Formulation & Fixed Asset Governance",
    excerpt: "Physical verification, barcode tagging, reconciliation, and accounting system integration for transparent asset control.",
    category: "Asset Management",
    readTime: "9 min read",
    image: "/blog-3.jpg",
    date: "2024-01-18"
  },
  {
    slug: "asset-management-consultancy",
    title: "Asset Management Consultancy for Utilities & Infrastructure",
    excerpt: "Understand why disciplined asset management matters and how Propertywise aligns engineers, accountants, and directors around lifecycle value.",
    category: "Asset Management",
    readTime: "8 min read",
    image: "/blog-4.jpg",
    date: "2024-01-20"
  },
  {
    slug: "property-management",
    title: "Comprehensive Property Management for Owners & Tenants",
    excerpt: "Full-service residential and commercial management covering leasing, maintenance, accounting, and tenant care.",
    category: "Property Management",
    readTime: "10 min read",
    image: "/blog-5.jpg",
    date: "2024-01-14"
  },
  {
    slug: "professional-vs-street-agents",
    title: "Why Choose Professional Estate Agents vs Street Agents in Tanzania",
    excerpt: "Understanding the critical differences between professional real estate agents and street agents in Tanzania's property market.",
    category: "Professional Advice",
    readTime: "6 min read",
    image: "/blog-6.jpg",
    date: "2024-01-08",
    relatedLink: {
      href: "/insights/estate-agency",
      label: "See how our Estate Agency team delivers results"
    }
  },
  {
    slug: "property-development",
    title: "Property Development Consultancy & Armchair Developer Program",
    excerpt: "Become a property developer without the stress—Propertywise manages site, finance, approvals, and construction while you retain profits.",
    category: "Development",
    readTime: "8 min read",
    image: "/blog-1.jpg",
    date: "2024-01-09"
  },
  {
    slug: "mortgage-brokerage",
    title: "Mortgage Brokerage for Residential & Commercial Real Estate",
    excerpt: "Cut through loan complexity with one application, nationwide lenders, and Propertywise experts who source the best rates and terms.",
    category: "Financing",
    readTime: "7 min read",
    image: "/blog-7.jpg",
    date: "2024-01-07"
  }
];
