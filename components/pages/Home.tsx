import HeadText_split from "@/components/animations/HeadText_split";
import SubText_typing from "@/components/animations/SubText_typing";

export default function Home() {
  return (
    <section id="home" className="hero-sec_bg min-h-[800px] sm:min-h-[1024px] flex items-center">
      <div className="main-container w-full sm:pt-28">
        {/*//! Text */}
        <div className="flex flex-col gap-4">
          <HeadText_split
            className="head-text text-secondary-100 text-shadow-lg text-shadow-black max-w-[866px]"
            text="Building Global Partnerships with Trust & Expertise"
          />
          <SubText_typing
            className="sub-title text-secondary-100 max-w-[744px] min-h-[100px]"
            texts={[
              "Authentic commercial trading, strategic brokerage",
              "and human-driven growth connecting businesses worldwide",
            ]}
          />
        </div>

        {/*//! Buttons */}
        <div className="relative max-w-[850px] flex max-sm:flex-col gap-4">
          <button className="btn">Explore Our Services</button>
          <button className="btn bg-none border-[1.5px] border-secondary-100 hover:bg-primary-500 hover:border-primary-500">
            Our stroy
          </button>

          <div className="hero-sec_b2b max-sm:-z-1">B2B</div>
        </div>
      </div>
    </section>
  );
}
