"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="contact"
      data-aos="zoom-out"
      data-aos-duration="1000"
      className="relative z-2 mt-30 bg-[url('/contact.png')] bg-no-repeat bg-center bg-cover"
    >
      <div className="main-container min-h-[650px] sm:min-h-[794px] space-y-6 mb-10 sm:mb-20 flex items-center justify-center h-full">
        {/*//! Text */}
        <div className="flex flex-col items-center text-center gap-12">
          <div className="flex flex-col items-center gap-6">
            <h1 className="head-text text-secondary-100">
              Partner with Global Trading Experts
            </h1>
            <p className="sub-title max-xs:text-[16px] text-secondary-100">
              Expand your business with trusted professionals in international
              trading, brokerage, and digital growth. Let's work together to
              build partnerships that drive measurable success.
            </p>
          </div>

          <button className="btn">Request a Consultation</button>
        </div>
      </div>
    </section>
  );
}
