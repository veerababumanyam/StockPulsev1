export const siteConfig = {
  name: "StockPulse AI Platform",
  description: "Advanced AI-powered stock analysis and trading platform",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Documentation",
      href: "/documentation",
    },
    {
      title: "User Guide",
      href: "/user-guide",
    },
    {
      title: "Features",
      href: "/features",
      subItems: [
        {
          title: "AI Agents",
          href: "/features/ai-agents",
        },
        {
          title: "Trading Modules",
          href: "/features/trading-modules",
        },
        {
          title: "Stock Screener",
          href: "/features/stock-screener",
        },
        {
          title: "Multi-Ticker Analysis",
          href: "/features/multi-ticker-analysis",
        },
      ],
    },
    {
      title: "Performance",
      href: "/performance",
    },
    {
      title: "Validation",
      href: "/validation",
    },
  ],
  links: {
    github: "https://github.com/stockpulse/stock-analysis-platform",
    docs: "/documentation",
  },
  footerLinks: [
    {
      title: "Resources",
      items: [
        {
          title: "Documentation",
          href: "/documentation",
        },
        {
          title: "User Guide",
          href: "/user-guide",
        },
        {
          title: "API Reference",
          href: "/documentation#api",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Contact",
          href: "/contact",
        },
        {
          title: "FAQ",
          href: "/faq",
        },
      ],
    },
    {
      title: "Legal",
      items: [
        {
          title: "Privacy",
          href: "/privacy",
        },
        {
          title: "Terms",
          href: "/terms",
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
