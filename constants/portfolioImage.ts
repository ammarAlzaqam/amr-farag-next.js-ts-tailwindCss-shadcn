interface PortfolioCard {
  img: string;
  title: string;
  des: string;
}

export default function PortfolioImage(): PortfolioCard[] {
  return [
    {
      img: "/portfolio/img1.png",
      title: "Baltic Expansion Deal",
      des: "Facilitated large-scale import and export partnership across Baltic markets",
    },
    {
      img: "/portfolio/img2.png",
      title: "Zenith Appliances",
      des: "Secured high-quality supplier network and brokerage support",
    },
    {
      img: "/portfolio/img3.png",
      title: "Baltic Expansion Deal",
      des: "Facilitated large-scale import and export partnership across Baltic markets",
    },
    {
      img: "/portfolio/img4.png",
      title: "Mediterranean Trade",
      des: "Built cross-border B2B relationships for construction materials",
    },
    {
      img: "/portfolio/img5.png",
      title: "Pacific Logistics",
      des: "Coordinated trade and distribution for technology exports",
    },
  ];
}
