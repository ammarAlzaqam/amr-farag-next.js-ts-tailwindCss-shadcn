import PortfolioImage from "@/constants/portfolioImage";
import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative pt-30">
      <div className="main-container space-y-6 mb-10 sm:mb-20">
        {/*//! Text */}
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="head-text">Our Global Portfolio</h1>
          <h2 className="title">Expert Solutions for Global Business </h2>
          <p className="sub-title">
            We deliver expert trading, brokerage, digital marketing, and
            business coaching solutions designed to empower global companies.
            Our goal is to create measurable results, long-term partnerships,
            and real business impact.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="">
          {/*//* Top carve */}
          <Image
            src="/portfolio/ellipse2.png"
            alt="portfolio-image"
            width={1200}
            height={75}
            className="w-full h-8 z-4 sm:w-full sm:h-[104px] absolute -top-4 sm:-top-[52px] left-0"
          />
        </div>

        <div className="flex scroll-smooth snap-x snap-mandatory sm:justify-center gap-4 overflow-x-scroll">
          {PortfolioImage().map(({ img, title, des }, i) => (
            <div key={title+i} className={`z-2 snap-center relative w-[230px] sm:w-[400px] h-[200px] sm:h-[392px] shrink-0`}>
              <div className="flex flex-col justify-end border h-full p-5 sm:pb-12">
                <h3 className="text-[16px] sm:text-[32px] leading-[125.2%] font-extrabold text-secondary-100 text-shadow-lg text-shadow-primary-500/80">
                  {title}
                </h3>
                <h4 className="des max-sm:text-[8px] text-secondary-100 text-shadow-lg text-shadow-black/80">{des}</h4>
              </div>
              <Image
                src={img}
                alt="portfolio-image"
                fill
                quality={100}
                className="object-cover -z-1"
              />
            </div>
          ))}
        </div>

        {/*//* Bottom carve */}
        <div className="">
          <Image
            src="/portfolio/ellipse1.png"
            alt="portfolio-image"
            width={1200}
            height={100}
            className="w-full h-8 z-4 sm:h-[104px] absolute -bottom-4 sm:-bottom-[52px] left-0"
          />
        </div>
      </div>
    </section>
  );
}
