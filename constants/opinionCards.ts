interface OpinionCard {
  avatar: string;
  title: string;
  subtitle: string;
  des: string;
}

export default function opinionCards(): OpinionCard[] {
  return [
    {
      avatar: "/opinions/opinion1.png",
      title: "Elena Petrova",
      subtitle: "Baltic Exports Ltd",
      des: `Self-Discovery with Amr
        Farag has proven to be
        an invaluable partner in
        navigating complex
        international trade. Their
        commitment to
        transparency and results
        has helped us expand
        into new markets with
        confidence.`,
    },
    {
      avatar: "/opinions/opinion2.png",
      title: "Carlos Mendes",
      subtitle: "GlobalRetail Solutions",
      des: `Our collaboration on
        digital marketing
        initiatives led to
        measurable growth and
        stronger brand presence.
        The team’s
        professionalism and
        strategic insight set them
        apart in the global arena`,
    },
    {
      avatar: "/opinions/opinion3.png",
      title: "Priya Sharma",
      subtitle: "Zenith Appliances",
      des: `Reliability and integrity
        are rare in this industry,
        but Amr Farag delivers
        both. Thanks to their
        brokerage services, we
        secured high-quality
        suppliers for our
        wholesale business.`,
    },
    {
      avatar: "/opinions/opinion4.png",
      title: "Hiro Tanaka",
      subtitle: "Pacific Construction Group",
      des: `The business coaching
        sessions provided by Amr
        Farag were
        transformative for our
        management team. We
        now approach global
        partnerships with
        renewed clarity and
        purpose.`,
    },
  ];
}
