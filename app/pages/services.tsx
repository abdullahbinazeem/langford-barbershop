import React from "react";
import Image from "next/image";

import Container from "../components/container";

import ScissorIcon from "@/public/assets/icons/scissor.svg";
import CleaningIcon from "@/public/assets/icons/cleaning.svg";
import BeardIcon from "@/public/assets/icons/beard.svg";
import Link from "next/link";

const services = [
  {
    title: "Hair Cuts",
    description:
      "Choose from classic to modern cuts—our stylists customize each look to suit your face shape and personal style.",
    price: "$27",
    icon: ScissorIcon,
    link: "#pricing",
  },
  {
    title: "Grooming",
    description:
      "Expert shaping and detailing to keep your beard looking sharp—includes precision edge-ups and fade blending for a flawless finish.",
    price: "$20",
    icon: BeardIcon,
    link: "#groom",
  },
  {
    title: "Hair Washing",
    description:
      "Relax under a soothing shampoo and scalp massage—deep-cleanse, hydrate, and revitalize your hair with premium products.",
    price: "$15",
    icon: CleaningIcon,
    link: "#wash",
  },
];

const Services = () => {
  return (
    <div className="bg-white text-black py-20 md:px-0 px-4">
      <Container className="items-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-blue-400 ml-[50%] translate-x-[-50%] inline-block uppercase font-extrabold  text-3xl sm:text-4xl lg:text-6xl leading-tight">
          Our Services
        </h1>
        <p className="text-center text-neutral-700 text-base lg:text-lg leading-relaxed max-w-4xl mx-auto mt-4">
          At Langford Barbershop, we offer a wide range of grooming services to
          keep you looking sharp. From classic cuts to modern styles, our
          experienced barbers are here to provide the perfect look for you.
        </p>

        <div className="sm:grid flex items-center flex-col sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              className="h-full group items-stretch max-w-sm sm:max-w-none py-10 px-8 border cursor-pointer border-neutral-200 rounded-sm bg-neutral-50 shadow-sm hover:shadow-md transition-shadow duration-300 flex"
              key={index}
            >
              <Link
                href={service.link}
                className="text-center flex flex-col items-center gap-2 md:gap-4 group-hover:scale-105 transition-all"
              >
                <div className="w-12 sm:w-16 lg:w-20 aspect-square relative flex-shrink-0">
                  <Image src={service.icon} alt="Service Icon" fill />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-red-500">
                  {service.title}
                </h2>
                <p className="text-neutral-700 mb-2">{service.description}</p>
                <div className="mt-auto">
                  <p className="text-neutral-500">Starting from</p>
                  <span className="font-black text-xl md:text-2xl text-black">
                    {service.price}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Services;
