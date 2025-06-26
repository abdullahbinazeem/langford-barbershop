"use client";

import React from "react";
import Image from "next/image";

const BarbershopGallery = () => {
  const galleryItems = [
    {
      id: 1,
      src: "/assets/gallery/1.jpeg",
      alt: "Professional barber cutting hair with precision",
      title: "Precision Haircuts",
      description:
        "Experience expert craftsmanship with every detail. Our skilled barbers meticulously sculpt your hair, ensuring a sharp, refined look that perfectly complements your style and personality.",
    },
    {
      id: 2,
      src: "/assets/gallery/2.jpeg",
      alt: "Modern barbershop interior with vintage chairs",
      title: "Timeless Traditions, Modern Comfort",
      description:
        "Step into an authentic barbershop where classic techniques meet contemporary luxury. Enjoy a relaxing hot shave and a refined grooming experience in an atmosphere designed for your ultimate comfort.",
    },
    {
      id: 3,
      src: "/assets/gallery/3.webp",
      alt: "Professional barber cutting child's hair",
      title: "Family Friendly Excellence",
      description:
        "From first haircuts to fashionable fades, we cater to clients of all ages. Our friendly and patient barbers provide gentle care, making every visit a positive and stylish experience for our youngest clients.",
    },
    {
      id: 4,
      src: "/assets/gallery/4.webp",
      alt: "Barber working reflected in vintage mirror",
      title: "Your Reflection, Perfected",
      description:
        "Witness the transformation unfold. We believe in collaborative styling, ensuring your haircut is exactly as you envisioned, leaving you with a confident and impeccable reflection.",
    },
    {
      id: 6,
      src: "/assets/gallery/6.webp",
      alt: "Professional grooming services",
      title: "Where Style is Crafted",
      description:
        "Our dedicated team of professionals creates a welcoming environment where personalized service and exceptional haircuts are the standard.",
    },
    {
      id: 7,
      src: "/assets/gallery/5.webp",
      alt: "Skilled barber at work",
      title: "The Finishing Touch",
      description:
        "Our expert barbers use the finest products to enhance your hair's texture and hold, ensuring your sophisticated style lasts long after you leave our chair",
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-800 {
          animation-delay: 0.8s;
        }
        .delay-900 {
          animation-delay: 0.9s;
        }
      `}</style>

      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className={` overflow-hidden cursor-pointer group animate-fade-in-up delay-${Math.min(
                  900,
                  (index + 1) * 100
                )}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 transition-colors duration-300"></div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-blue-400 mb-2 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BarbershopGallery;
