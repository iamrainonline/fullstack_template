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
    alt: "Imagine 4",
    className: "col-span-2 row-span-1",
  },

  {
    src: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg",
    alt: "Imagine 6",
    className: "row-span-1",
  },
  {
    src: "https://images.pexels.com/photos/8923267/pexels-photo-8923267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Imagine 6",
    className: "row-span-1",
  },
];

const ImageGallery = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galerie{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vizuală
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un colaj viu care surprinde momentele speciale, evenimentele și
            spiritul comunității Hortensia.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-md hover:scale-[1.03] transition-transform duration-300 ${image.className}`}
            >
              <img
                src={`${image.src}?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2`}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
