import opinionCards from "@/constants/opinionCards";
import Image from "next/image";
import OpinionCard from "../shared/OpinionCard";

export default function Opinions() {
  return (
    <section id="testimonials" className="relative z-2 pt-24 sm:pt-30">
      <div className="main-container space-y-6 mb-10 sm:mb-20">
        {/*//! Text */}
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="head-text">What Our Global Partners Say</h1>

          <p className="sub-title">
            Trusted by international clients in B2B trading, brokerage, and
            digital marketing
          </p>
        </div>

        {/*//! Opinions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {opinionCards().map(({ title, subtitle, des, avatar }, index) => (
            <OpinionCard
              index={index}
              key={title}
              title={title}
              subtitle={subtitle}
              des={des}
              avatar={avatar}
            />
          ))}
        </div>
      </div>

      <Image
        src="/opinions/vector.png"
        alt="opinions-victor"
        width={1200}
        height={1200}
        className="absolute -z-1 top-0 right-0 w-full max-sm:h-[3600px]"
      />

      <Image
        src="/opinions/r-shadow.png"
        alt="opinions-r-shadow"
        width={800}
        height={800}
        className="absolute -bottom-100 -z-1 sm:-bottom-150 -right-0 sm:-right-5"
      />

      <Image
        src="/opinions/l-shadow.png"
        alt="opinions-l-shadow"
        width={800}
        height={800}
        className="absolute -bottom-120 -z-1 sm:-bottom-250 -left-0 sm:-left-5"
      />
    </section>
  );
}
