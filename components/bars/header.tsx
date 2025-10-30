import Image from "next/image";
import NavigationLinks from "./NavigationLinks";

export default function Header() {
  return (
    <header className="pt-10">
      <div className="max-w-[1232px] mx-auto px-5 flex items-center gap-23">
        {/*//! Logo image */}
        <Image src="/logo.png" width={124} height={62} alt="Logo" />

        {/*//! Navigation Links */}
        <div className="flex flex-1 gap-[57px]">
          <NavigationLinks />

          <div className="rounded-full w-[62.64849853515625px] h-[61px] flex items-center justify-center cursor-pointer bg-primary-500">
            <img src="/menu.svg" />
          </div>
        </div>
      </div>
    </header>
  );
}
