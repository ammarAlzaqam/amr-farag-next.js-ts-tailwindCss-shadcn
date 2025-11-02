"use client";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function OpinionCard({
  index = 0,
  title = "",
  subtitle = "",
  des = "",
  avatar = "",
}) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div
      key={title}
      className="relative hover:bg-primary-700 py-10 px-7 sm:px-10 flex flex-col justify-between gap-4 rounded-[30px] bg-primary-500"
      data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-duration={1200}
    >
      {/*//* Qoma overlay */}
      <img
        src="/opinions/qoma.svg"
        className="absolute top-5 sm:top-7 right-4 sm:right-6 max-sm:w-[100px]"
      />

      {/*//* Description */}
      <p className="card-des max-w-full">{des}</p>

      {/*//* Person data */}
      <div className="flex items-center gap-2">
        <img src={avatar} alt="opinion-avatar" className="max-sm:w-16" />

        <div className="space-y-0.5">
          <h3 className="card-title">{title}</h3>
          <h3 className="card-des">{subtitle}</h3>
        </div>
      </div>
    </div>
  );
}
