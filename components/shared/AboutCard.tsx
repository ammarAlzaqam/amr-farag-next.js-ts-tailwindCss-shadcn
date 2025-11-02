"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AboutCard({ title = "", icon = "", des = "" }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      className="flex flex-col items-center justify-center w-full md:w-[350px] lg:w-[400px] h-72 text-center gap-4 rounded-[30px] bg-primary-500"
    >
      <img src={icon} alt={`${title}-icon`} />

      <h3 className="card-title text-white">{title}</h3>

      <p className="card-des">{des}</p>
    </div>
  );
}
