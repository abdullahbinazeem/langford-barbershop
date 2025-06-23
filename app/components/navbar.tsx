"use client";

import Image from "next/image";
import React, { useState } from "react";
import Container from "./container";
import Link from "next/link";
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
    name: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-white shadow-2xl text-black py-6 w-full z-50">
      <Container className="flex items-center justify-between">
        {/* logo item */}
        <Link href="/" className="relative w-42 md:w-50 h-auto aspect-[4/1]">
          <Image
            src="/assets/logo.png"
            alt="Langford Barbershop Logo"
            fill
            className="object-cover"
          />
        </Link>

        {/* nav items */}
        <div className="hidden md:flex items-center gap-8">
          {routes.map((route) => (
            <div className="group relative" key={route.name}>
              {pathname === route.route ? (
                <div className="h-3 w-full absolute -top-10 left-0 bg-red-500" />
              ) : null}
              <div className="h-3 w-full absolute -top-10 left-0 bg-red-500 opacity-0 group-hover:opacity-100 transition-all" />
              <a
                href={route.route}
                className={`font-bold uppercase cursor-pointer ${
                  pathname === route.route
                    ? "text-red-500"
                    : "hover:text-blue-500"
                }`}
              >
                {route.name}
              </a>
            </div>
          ))}
        </div>

        {/* mobile menu icon */}
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
          "fixed top-0 left-0 w-64 h-screen bg-white text-black z-50 shadow-lg transition-transform",
          sidebarOpen ? "md:-translate-x-full" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-neutral-300">
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
            <Link
              key={route.name}
              href={route.route}
              className={`uppercase font-semibold ${
                pathname === route.route
                  ? "text-red-500"
                  : "hover:text-blue-500"
              }`}
              onClick={() => setSidebarOpen(false)}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={cn(
          "bg-black w-full h-full fixed top-0 left-0 transition-all duration-300",
          sidebarOpen ? "opacity-30 z-[10]" : "opacity-0 z-[-1] hidden"
        )}
      />
    </div>
  );
};

export default Navbar;
