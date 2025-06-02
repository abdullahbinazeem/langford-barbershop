import Image from "next/image";
import React from "react";
import Container from "../components/container";

import BarberIcon from "@/public/assets/icons/barber.svg";
import RazorIcon from "@/public/assets/icons/razor.svg";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-neutral-900 text-white py-20">
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
        <div className="w-full h-full bg-neutral-800 rounded-2xl flex items-center justify-center text-neutral-500 text-xl">
          {/* Replace with actual images or carousel later */}
          Gallery / Images Placeholder
        </div>
      </Container>
    </div>
  );
};

export default About;
