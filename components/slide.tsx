"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Destinations() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "Malasiya",
      description:
        "Modern cities and rich culture. Landmarks, shopping, and scenic attractions. Great for varied travel experiences.",
      mainImage: "/malasiya1.webp",
      sideImage: "/malasiya2.webp",
    },
    {
      title: "Thailand",
      description:
        "Culture, temples, and lively streets. Markets, nightlife, and iconic sights. Ideal for adventure and leisure.",
      mainImage: "/thailand1.webp",
      sideImage: "/thailand2.webp",
    },
    {
      title: "Dubai",
      description:
        "Luxury city and desert adventures.Iconic landmarks and premium shopping. Perfect for modern travel experiences.",
      mainImage: "/Dubai1.webp",
      sideImage: "/Dubai2.webp",
    },
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="w-full py-16 bg-[#F8F8F6] relative">
      
      {/* SLIDER */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="shrink-0 w-full max-w-4/6 mx-auto px-3 md:px-10 flex flex-col bg-[#F8F8F6] lg:flex-row gap-6 py-10"
            >
              {/* Left Text */}
              <div className="w-full lg:w-1/3">
                <h2 className="text-2xl md:text-5xl text-center md:text-left font-bold mb-4 text-black md:leading-[1.2]">
                  Places We <br /> Take You <br /> Worldwide
                </h2>
                <p className="text-gray-400 text-base md:text-xl mb-6 text-center md:text-left">
                  Discover destinations chosen for their experiences, culture,
                  and unforgettable moments, both close to home and across the world.
                </p>
              </div>

              {/* Center Image */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative w-[240px] h-[380px] md:w-[400px] md:h-[520px] rounded-xl overflow-hidden">
                  <Image
                    src={slide.mainImage}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right Card */}
              <div className="lg:w-1/3 flex-col rounded-xl py-4">
                <div className="bg-white p-3 text-center md:text-left">
                  <h3 className="font-semibold text-black text-xl mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-400 text-base mb-5">
                    {slide.description}
                  </p>
                </div>

                <div className="mx-auto md:mx-0 relative w-[270px] h-[320px] rounded-lg overflow-hidden">
                  <Image
                    src={slide.sideImage}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 270px, 320px"
                    quality={90}
                    priority
                    className="object-cover"
                  />
                </div>



                <Link
                  href={`/${slide.title.toLowerCase()}`}
                  className="inline-block text-sm font-semibold text-black mt-4"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      {/* SLIDE INDICATORS */}
      <div className="flex justify-center gap-3 mt-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-[4px] rounded-full transition-all duration-300
              ${current === index
                ? "w-10 bg-black"
                : "w-5 bg-black/30"}
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default Destinations;
