import Image from "next/image";
import React from "react";
import Container from "../components/container";

import BarberIcon from "@/public/assets/icons/barber.svg";
import RazorIcon from "@/public/assets/icons/razor.svg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-neutral-900 text-white pt-20 pb-50">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h1 className="text-primary uppercase font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Why Choose Us
            </h1>
            <p className="text-neutral-300 text-base md:text-lg leading-relaxed max-w-xl">
              With over 10 years of combined experience, our team is passionate
              about quality grooming and building a space where everyone feels
              welcome.
            </p>
          </div>

          {/* Feature 1 */}
          <div className="flex items-center gap-6">
            <div className="w-10 sm:w-12 lg:w-16 aspect-square relative flex-shrink-0">
              <Image src={BarberIcon} alt="Barber Icon" fill />
            </div>
            <div className="space-y-1">
              <h2 className="text-primary uppercase font-semibold text-xl lg:text-2xl">
                Professional Barbers
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                All of our hairdressers are incredibly experienced and qualified
                in hair styling services.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-6">
            <div className="w-10 sm:w-12 lg:w-16 aspect-square relative flex-shrink-0">
              <Image src={RazorIcon} alt="Razor Icon" fill />
            </div>
            <div className="space-y-1">
              <h2 className="text-primary uppercase font-semibold text-xl lg:text-2xl">
                Any Cut, Any Style
              </h2>
              <p className="text-neutral-300 leading-relaxed">
                From clean fades to classic trims, we’ve got you covered. Our
                barbershop delivers fresh, personalized cuts that match your
                style every time.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-full">
          {/* Top-left image */}
          <div className="absolute top-0 left-0 w-[60%] aspect-[4/5]">
            <Image
              src="/assets/images/about/1.jpg"
              alt="Tattoo image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom-right image with slight overlap */}
          <div className="absolute top-[30%] left-[40%] w-[60%] aspect-[4/5] transform scale-x-[-1]">
            <Image
              src="/assets/images/about/2.jpg"
              alt="Tattoo image 1"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
