interface ServiceCard {
  icon: string;
  title: string;
  des: string[];
}

export default function servicesCards(): ServiceCard[] {
  return [
    {
      icon: "/services/expert.svg",
      title: "Expert Global Trading",
      des: [
        "Access to international markets",
        "Streamlined logistics and compliance",
        "Diverse product portfolio",
      ],
    },

    {
      icon: "/services/trusted.svg",
      title: "Trusted Brokerage Services",
      des: [
        "Ethical negotiation and representation",
        "Risk mitigation",
        "End-to-end transaction support",
      ],
    },

    {
      icon: "/services/innovative.svg",
      title: "Innovative Digital Marketing",
      des: [
        "Data-driven campaigns",
        "Brand visibility enhancement",
        "Lead generation expertise",
      ],
    },

    {
      icon: "/services/strategic.svg",
      title: "Strategic Business Coaching",
      des: [
        "Personalized growth plans",
        "Leadership development",
        "Ongoing support for success",
      ],
    },
  ];
}
