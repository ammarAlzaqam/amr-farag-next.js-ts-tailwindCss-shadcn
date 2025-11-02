interface StrengthCard {
  icon: string;
  title: string;
  des: string;
}

export default function strengthCards(): StrengthCard[] {
  return [
    {
      icon: "/about/authenticity.svg",
      title: "Authenticity",
      des: "Building genuine global relationships rooted in transparency and value.",
    },
    {
      icon: "/about/integrity.svg",
      title: "Integrity",
      des: "Ethical practices and honesty guide every partnership we form.",
    },
    {
      icon: "/about/market.svg",
      title: "Market Expertise",
      des: "Leveraging years of experience to navigate international opportunities.",
    },
  ];
}
