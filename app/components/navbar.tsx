"use client";

import Image from "next/image";
import React from "react";
import Container from "./container";

import { usePathname } from "next/navigation";

const routes = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Prices",
    route: "/prices",
  },
  {
    name: "Photos",
    route: "/photos",
  },
  {
    name: "Reviews",
    route: "/reviews",
  },
  {
    name: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className=" bg-neutral-900 shadow-2xl text-white py-6 absolute w-full top-0 z-50">
      <Container className="flex items-center justify-between">
        {/* logo item */}
        <div className="relative w-32 lg:w-50 h-auto aspect-[4/1]">
          <Image
            src="/assets/logo.png"
            alt="Langford Barbershop Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* nav items */}
        <div className="flex items-center gap-8">
          {routes.map((route) => (
            <div className="group relative" key={route.name}>
              {pathname === route.route ? (
                <div className="h-3 w-full absolute -top-10 left-0 bg-red-600" />
              ) : null}
              <div className="h-3 w-full absolute -top-10 left-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-all" />

              <a
                href={route.route}
                className="font-bold uppercase cursor-pointer"
              >
                {route.name}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
