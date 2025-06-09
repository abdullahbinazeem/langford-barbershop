import Link from "next/link";
import Container from "../components/container";

import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <Container>
        <div className="px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:place-items-center ">
            <div className="md:col-span-1">
              <img
                src="/assets/logo.png"
                alt="Langford Barber Shop Logo"
                className="h-14 w-auto mb-4"
              />
              <p className="max-w-md">
                We offer a vast range of barbering services for numerous types
                of hairstyles, preferences, and interests. Contrary to many
                other barbershops...
              </p>
            </div>

            <div className="font-bold">
              <h3 className="text-xl font-bold text-primary mb-4">
                Contact us
              </h3>
              <p className="mb-2">Phone: 778-265-1444</p>
              <p className="">
                Address: 757 Goldstream Ave
                <br />
                Victoria, BC V9B 2X4
              </p>
            </div>

            <div className="font-bold">
              <h3 className="text-xl font-bold text-primary mb-4">
                Open Hours
              </h3>
              <p className="mb-2">Open Every Day:</p>
              <p className="">9 am - 7 pm</p>
              <p className="">7 Days a Week</p>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-400 mt-8">
          <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
            <p className="text-neutral-400 text-center md:text-left mb-4 md:mb-0">
              © Langford Barber Shop All Rights Reserved 2025 Powered by Xamaa
              Technologies
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/profile.php?id=100063519942901"
                target="_blank"
                aria-label="Facebook"
                className="text-neutral-400 hover:text-white transition-colors "
              >
                <Facebook size={20} strokeWidth={1.5} />
              </Link>
              <Link
                href="https://www.instagram.com/langfordbarbershop"
                target="_blank"
                aria-label="Instagram"
                className="text-neutral-400 hover:text-white transition-colors "
              >
                <Instagram size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
