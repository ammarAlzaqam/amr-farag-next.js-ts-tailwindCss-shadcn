import Image from "next/image";
import NavigationLinks from "./NavigationLinks";
import { RiWhatsappLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Sidebar from "./Sidebar";

export default function Header() {
  return (
    <header className="pt-10 absolute sm:fixed z-100 top-0 left-0 w-full">
      <div className="main-container flex items-center max-md:justify-between gap-23">
        {/*//! Logo image */}
        <Image
          className="max-sm:w-[105px]"
          src="/logo.png"
          width={124}
          height={62}
          alt="Logo"
        />

        {/*//! Navigation Links */}
        <div className="flex md:flex-1 gap-[29.35px]">
          <NavigationLinks className="max-md:hidden" />

          <div className="rounded-full w-[62.64849853515625px] h-[61px] flex items-center justify-center cursor-pointer sm:bg-primary-500">
            <Sidebar />
            <AiOutlineWhatsApp className="text-green-500 max-sm:hidden size-10 hover:text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}
