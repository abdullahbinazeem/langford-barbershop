"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BarbershopGallery = () => {
  const [hoveredItem, setHoveredItem] = useState<Number | null>(null);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-scale {
          animation: fadeInScale 0.6s ease forwards;
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

        .mustache {
          position: relative;
          width: 50px;
          height: 3px;
          background: #333;
          margin: 0 auto;
        }

        .mustache::before {
          content: "";
          position: absolute;
          left: -8px;
          top: -3px;
          width: 20px;
          height: 8px;
          background: #333;
          border-radius: 50% 50% 0 50%;
          transform: rotate(-15deg);
        }

        .mustache::after {
          content: "";
          position: absolute;
          right: -8px;
          top: -3px;
          width: 20px;
          height: 8px;
          background: #333;
          border-radius: 50% 50% 50% 0;
          transform: rotate(15deg);
        }
      `}</style>

      <div className="bg-gray-100 overflow-hidden">
        <div className="h-[75vh] w-full grid grid-cols-2 md:grid-cols-4 auto-rows-fr gap-0">
          {/* Left Panel - Large single image */}
          <div
            className="relative overflow-hidden cursor-pointer group animate-fade-in-scale delay-100"
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Image
              src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=1200&fit=crop&crop=faces&auto=format&q=80"
              alt="Professional barber cutting hair with precision"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="25vw"
              priority
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-400"></div>
          </div>

          {/* Center Panel - Content */}
          <div className="bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col justify-center items-center text-center px-6 md:px-12 py-12 md:py-20 relative animate-fade-in-scale delay-200">
            <div className="text-[10px] text-primary sm:text-xs tracking-[3px] sm:tracking-[4px] text-amber-700 mb-2 sm:mb-6 uppercase font-medium">
              APPOINTMENTS
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2 sm:mb-4 uppercase tracking-wide leading-tight">
              BOOK A
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 uppercase tracking-wide leading-tight">
              CHAIR
            </h1>

            <p className="text-[10px] sm:text-xs text-gray-600 mb-10 sm:mb-12 uppercase tracking-widest font-medium">
              THE BEST PLACE FOR A HAIRCUT
            </p>

            <Link
              href="tel:778-265-1444"
              className="bg-primary text-white px-5 sm:px-6 py-2.5 sm:py-3 text-[10px] sm:text-xs uppercase tracking-[1.5px] sm:tracking-[2px] font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              CONTACT US NOW
            </Link>
          </div>

          <div className="grid grid-rows gap-0">
            {/* Right Panel Column 1 - 2 stacked images */}
            <div className="grid grid-rows-2 gap-0">
              {/* Top Right - Barbershop interior */}
              <div
                className="relative overflow-hidden cursor-pointer group animate-fade-in-scale delay-300"
                onMouseEnter={() => setHoveredItem(2)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Image
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                  alt="Modern barbershop interior with vintage chairs"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-400"></div>
              </div>

              {/* Bottom Right - Child haircut */}
              <div
                className="relative overflow-hidden cursor-pointer group animate-fade-in-scale delay-500"
                onMouseEnter={() => setHoveredItem(4)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Image
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=600&fit=crop&crop=faces&auto=format&q=80"
                  alt="Professional barber cutting child's hair"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="25vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-400"></div>
              </div>
            </div>
          </div>
          {/* Right Panel Column 2 - 2 stacked images */}
          <div className="grid grid-rows-2 gap-0">
            {/* Top Far Right - Mirror reflection */}
            <div
              className="relative overflow-hidden cursor-pointer group animate-fade-in-scale delay-400"
              onMouseEnter={() => setHoveredItem(3)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                src="/assets/images/about/1.jpeg"
                alt="Barber working reflected in vintage mirror"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-400"></div>
            </div>

            {/* Bottom Far Right - Beard styling */}
            <div
              className="relative overflow-hidden cursor-pointer group animate-fade-in-scale delay-600"
              onMouseEnter={() => setHoveredItem(5)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Image
                src="https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?w=600&h=600&fit=crop&crop=faces&auto=format&q=80"
                alt="Professional beard styling and grooming"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-400"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarbershopGallery;
