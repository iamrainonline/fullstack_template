import React from "react";

const images = [
  {
    src: "https://images.pexels.com/photos/8087870/pexels-photo-8087870.jpeg",
    alt: "Imagine 1",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/8088087/pexels-photo-8088087.jpeg",
    alt: "Imagine 2",
    className: "row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/9872296/pexels-photo-9872296.jpeg",
    alt: "Imagine 3",
    className: "row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/8423353/pexels-photo-8423353.jpeg",
    alt: "Imagine 4",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/8923262/pexels-photo-8923262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Imagine 5",
    className: "col-span-2 row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg",
    alt: "Imagine 6",
    className: "row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/8923267/pexels-photo-8923267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Imagine 7",
    className: "row-span-1",
  },
];

const ImageGallery = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-gray-100 py-20 md:py-24 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`,
          }}
        ></div>
      </div>

      {/* Content Container - EXACT ca la Hero */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--color-text)] mb-6">
            Galerie{" "}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] bg-clip-text text-transparent">
              Vizuală
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-text)] max-w-3xl mx-auto leading-relaxed">
            Un colaj viu care surprinde momentele speciale, evenimentele și
            spiritul comunității Hortensia.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] md:auto-rows-[300px] gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-500 group ${image.className}`}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

              {/* Image */}
              <img
                src={`${image.src}?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2`}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 md:mt-20 text-center">
          <p className="text-lg md:text-xl text-[var(--color-text)] mb-8">
            Fiecare imagine spune o poveste despre comunitatea noastră vibrantă
          </p>
          <button className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-full font-medium text-base md:text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Vezi Mai Multe
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--color-primary)]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--color-accent)]/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default ImageGallery;
