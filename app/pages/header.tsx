import React from "react";
import Container from "../components/container";
import Link from "next/link";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="relative bg-black overflow-hidden">
      <Container className="h-[50vh]">
        <video
          preload="none"
          src="/assets/hero-2.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-[1] left-0 top-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative h-full grid items-center text-white z-[2] ">
          <div className="flex flex-col gap-4">
            <h1 className="tracking-tight uppercase font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[120%]">
              <span className="text-[#F5A623]"> {title}</span> <br />
              <span className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Langford Barbershop
              </span>
            </h1>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
