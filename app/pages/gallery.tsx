import Image from "next/image";
import React from "react";

type Props = {};

const Gallery = (props: Props) => {
  return (
    <div className="w-full bg-neutral-900">
      <div className="grid grid-cols-12 auto-rows-[200px] sm:auto-rows-[250px] lg:auto-rows-[300px] w-full">
        <div className="col-span-12 sm:col-span-6 lg:col-span-5 row-span-2 group relative overflow-hidden">
          <Image
            src="/assets/gallery/1.jpeg"
            width={800}
            height={600}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
            alt="Featured gallery image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="text-white text-xl font-bold mb-2">
              Featured Image
            </h3>
            <p className="text-gray-200 text-sm">Discover your best cut</p>
          </div>
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-3 row-span-1 group relative overflow-hidden">
          <Image
            width={400}
            height={400}
            src="/assets/gallery/2.jpeg"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            alt="Gallery image 2"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2 group relative overflow-hidden">
          <Image
            width={400}
            height={400}
            src="/assets/gallery/3.jpeg"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:saturate-150"
            alt="Gallery image 3"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2 group relative overflow-hidden">
          <Image
            width={400}
            height={400}
            src="/assets/gallery/4.jpeg"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:hue-rotate-15"
            alt="Gallery image 4"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-3 row-span-1 group relative overflow-hidden">
          <Image
            width={400}
            height={400}
            src="/assets/images/about/1.jpeg"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            alt="Gallery image 2"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2 group relative overflow-hidden">
          <Image
            width={400}
            height={400}
            src="/assets/images/about/2.jpeg"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:saturate-150"
            alt="Gallery image 3"
          />
        </div>

        <div className="col-span-6 sm:col-span-3 lg:col-span-2 group relative overflow-hidden">
          <Image
            width={400}
            height={400}
            src="/assets/images/about/4.jpeg"
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:hue-rotate-15"
            alt="Gallery image 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
