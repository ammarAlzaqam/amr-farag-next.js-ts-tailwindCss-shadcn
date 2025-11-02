import { FaHome as HomeIcon } from "react-icons/fa";
import { IoMdInformationCircleOutline as AboutIcon } from "react-icons/io";
import { MdOutlineSettingsSuggest as ServicesIcon } from "react-icons/md";
import { IoBagSharp as PortfolioIcon } from "react-icons/io5";
import { FaHeadphonesAlt as ContactIcon } from "react-icons/fa";
import { SiTrustpilot as TestimonialsIcon } from "react-icons/si";
import { IconType } from "react-icons";

interface NavigationLink {
  Icon: IconType;
  route: string;
  label: string;
}

const navigationLinks: NavigationLink[] = [
  {
    Icon: HomeIcon,
    route: "#home",
    label: "Home",
  },
  {
    Icon: AboutIcon,
    route: "#about",
    label: "About",
  },
  {
    Icon: ServicesIcon,
    route: "#services",
    label: "Services",
  },
  {
    Icon: PortfolioIcon,
    route: "#portfolio",
    label: "Portfolio",
  },
  {
    Icon: TestimonialsIcon,
    route: "#testimonials",
    label: "Testimonials",
  },
  {
    Icon: ContactIcon,
    route: "#contact",
    label: "Contact",
  },
];

export default navigationLinks;
