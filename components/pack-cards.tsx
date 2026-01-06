import React from "react";
import Link from "next/link";


interface TourPackage {
  id: number;
  destination: string;
  price: string;
  duration: string;
  image: string;
  imageAlt: string;
  slug: string; 
}

interface TourCardProps {
  tour: TourPackage;
}


const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ">
      <div className="relative h-[27rem] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.imageAlt}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-gray-900 shadow-sm">
            {tour.destination}
          </span>
        </div>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">
                Starting at {tour.price}
              </p>
              <p className="text-sm opacity-90">{tour.duration}</p>
            </div>


            <Link
              href={`/${tour.slug}`}
              className="inline-flex items-center text-sm md:text-base gap-2 px-2 md:px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium hover:bg-white/30 transition-colors duration-200 group/btn"
            >
              Learn More
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>


          </div>
        </div>
      </div>
    </div>
  );
};


const tourPackages: TourPackage[] = [
  {
    id: 1,
    destination: "Malaysia",
    price: "LKR 85,000",
    duration: "6 days",
    image: "/malasiya-pack.webp",
    imageAlt: "Malaysia mosque architecture",
    slug: "malasiya",
  },
  {
    id: 2,
    destination: "Thailand",
    price: "LKR 70,000",
    duration: "6 days",
    image: "/Thailand-pack.webp",
    imageAlt: "Thailand travel",
    slug: "thailand",
  },
  {
    id: 3,
    destination: "Dubai",
    price: "LKR 160,000",
    duration: "6 days",
    image: "/Dubai-pack.webp",
    imageAlt: "Dubai skyline",
    slug: "dubai",
  },
];


const TourPackages: React.FC = () => {
  return (
    <section className=" w-full max-w-4/6 mx-auto px-3 md:px-10 py-20 md:h-[100vh]">
      <div className="items-stretch grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-5xl font-bold text-black md:leading-[1.2] text-center md:text-left">
            Explore Our Most <br/> Popular Tour <br/> Packages
          </h1>
        </div>

          <span className="text-[#909090] self-end md:ml-32 text-base md:text-xl text-center md:text-left">
            Explore our carefully planned local and international tour packages,
            designed to offer comfort, value, and memorable travel experiences.
          </span>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-auto">
        {tourPackages.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default TourPackages;
