import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mt-32 bg-white mx-auto w-full max-w-4/6 min-h-fit md:h-[100vh] px-3 md:px-10">

      <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-8">
        <h1 className="font-bold text-gray-900 leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Malaysia</h1>

        <p className="text-gray-600 max-w-md leading-relaxed text-left text-lg">
          Explore carefully curated local and international tour packages designed for every type of traveler.
        </p>
      </div>

      {/* IMAGES GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">

        {/* LEFT IMAGE */}
        <div className="rounded-xl overflow-hidden">
          <Image
            src="/details-malaysia1.webp"
            alt="Bangkok river view"
            width={800}
            height={500}
            className="w-full h-[38rem] object-cover"
            priority
          />
        </div>

        {/* RIGHT IMAGES */}
        <div className=" space-y-4">

          {/* Top wide image */}
          <div className="rounded-xl overflow-hidden">
            <Image
              src="/details-malaysia2.webp"
              alt="Bangkok skyline night"
              width={800}
              height={260}
              className="w-full h-[20rem] object-cover"
            />
          </div>

          {/* Bottom two images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden">
              <Image
                src="/details-malaysia3.webp"
                alt="Temple architecture"
                width={400}
                height={260}
                className="w-full h-[17rem] object-cover"
              />
            </div>

            <div className="rounded-xl overflow-hidden">
              <Image
                src="/details-malaysia4.webp"
                alt="Wat Arun sunset"
                width={400}
                height={260}
                className="w-full h-[17rem] object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
