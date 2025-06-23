import React from "react";
import Container from "../components/container";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-black overflow-hidden] bg-cover bg-center">
      <Container className="h-[80vh]">
        <video
          preload="none"
          src="/assets/hero-2.mp4"
          poster="/assets/hero.jpg"
          autoPlay
          muted
          loop
          playsInline
          className="absolute z-[2] left-0 top-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative h-full grid items-center text-white z-[2] ">
          <div className="flex flex-col gap-4">
            <h1 className="tracking-tight uppercase font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[120%]">
              Langford’s{" "}
              <span className="text-primary">
                Trusted
                <br className="hidden  sm:block" /> Barber{" "}
              </span>
              Since 2012
            </h1>
            <p className="md:text-lg lg:text-xl font-light">
              Located in the heart of Langford,{" "}
              <span className="font-black font-white lg:text-2xl md:text-xl text-lg">
                707 Goldstream Ave
              </span>
            </p>
            <div className="flex gap-6 mt-4 items-center">
              <Link
                href="#pricing"
                className="py-2 px-4 bg-primary font-semibold rounded-xs md:text-lg hover:scale-105 transition-all cursor-pointer"
              >
                Pricing
              </Link>
              <a className="font-semibold md:text-lg hover:scale-105 transition-all cursor-pointer underline underline-offset-2">
                View Photos
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
