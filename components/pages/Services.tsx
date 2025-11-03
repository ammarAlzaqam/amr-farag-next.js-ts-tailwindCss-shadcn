import servicesCards from "@/constants/serviceCards";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="relative max-sm:pt-30">
      <div className="main-container space-y-6">
        {/*//! Text */}
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="head-text">Our Services</h1>
          <h2 className="title">Expert Solutions for Global Business </h2>
          <p className="sub-title">
            We deliver expert trading, brokerage, digital marketing, and
            business coaching solutions designed to empower global companies.
            Our goal is to create measurable results, long-term partnerships,
            and real business impact.
          </p>
        </div>

        {/*//! Services cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {servicesCards().map(({ icon, title, des }, i) => (
            <div
              key={title}
              className={`relative z-2 h-[200px] sm:h-[345px] rounded-[30px] bg-primary-500 hover:bg-primary-700 p-5 sm:p-11 space-y-11 flex flex-col justify-center sm:justify-start overflow-hidden ${
                (i === 2 || i === 3) && "sm:justify-end!"
              }`}
            >
              <img
                src={icon}
                alt={`icon-${title}`}
                className="max-sm:absolute max-sm:-z-1 max-sm:top-1/2 max-sm:left-1/2 max-sm:-translate-x-1/2 max-sm:-translate-y-1/2 max-sm:w-[95%] max-sm:h-[95%] max-sm:opacity-10 sm:w-[83.3125px]"
              />

              <div className="space-y-3">
                <h3 className="card-title">{title}</h3>

                <ul className="card-des list-disc ms-4">
                  {des.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-primary-500 w-[80%] rounded-full h-[7px] max-sm:hidden" />
            </div>
          ))}
        </div>
      </div>

      {/*//! Overlay images */}
      <Image
        src="/services/vector1.png"
        alt="services-victor"
        width={100}
        height={100}
        className="absolute top-20 sm:-top-[400px] w-full max-sm:h-[900px]"
      />

      <Image
        src="/services/vector2.png"
        alt="services-victor"
        width={100}
        height={100}
        className="absolute top-[600px] sm:top-[100px] w-full max-sm:h-[900px]"
      />
    </section>
  );
}
