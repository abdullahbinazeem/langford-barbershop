"use client";

import Image from "next/image";
import React, { useState } from "react";
import Container from "./container";

import { usePathname } from "next/navigation";

import { Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className=" bg-neutral-900 shadow-2xl text-white py-6 absolute w-full top-0 z-50">
      <Container className="flex items-center justify-between">
        {/* logo item */}
        <div className="relative w-42 md:w-50 h-auto aspect-[4/1]">
          <Image
            src="/assets/logo.png"
            alt="Langford Barbershop Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* nav items */}
        <div className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <div className="group relative" key={route.name}>
              {pathname === route.route ? (
                <div className="h-3 w-full absolute -top-10 left-0 bg-[#F5A623]" />
              ) : null}
              <div className="h-3 w-full absolute -top-10 left-0 bg-[#F5A623] opacity-0 group-hover:opacity-100 transition-all" />

              <a
                href={route.route}
                className="font-bold uppercase cursor-pointer"
              >
                {route.name}
              </a>
            </div>
          ))}
        </div>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </Container>

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 w-64 h-screen bg-neutral-800 text-white z-50 shadow-lg transition-transform",
          sidebarOpen ? "md:-translate-x-full" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-700">
          <span className="font-bold text-lg">Menu</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className="cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-4 p-6">
          {routes.map((route) => (
            <a
              key={route.name}
              href={route.route}
              className={`uppercase font-semibold ${
                pathname === route.route ? "text-[##F5A623]" : ""
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              {route.name}
            </a>
          ))}
        </div>
      </div>
      <div
        className={cn(
          "bg-black w-full h-full transition-all fixed top-0 left-0 ",
          sidebarOpen ? "opacity-70 z-[10]" : "opacity-0 z-[-1]"
        )}
      />
    </div>
  );
};

export default Navbar;
