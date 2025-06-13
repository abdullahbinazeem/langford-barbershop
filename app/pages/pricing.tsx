import React from "react";
import Image from "next/image";

import Container from "../components/container";

import ScissorIcon from "@/public/assets/icons/scissor.svg";
import BeardIcon from "@/public/assets/icons/beard.svg";
import CleaningIcon from "@/public/assets/icons/cleaning.svg";

const PricingItems = [
  {
    title: "Haircut",
    description:
      "Different haircut styles are available to accommodate all types of people and preferences.",
    price: 33,
    icon: ScissorIcon,
    id: "haircut",
  },
  {
    title: "Fade",
    description:
      "Different haircut styles are available to accommodate all types of people and preferences.",
    price: 24,
    icon: ScissorIcon,
  },
  {
    title: "Buzz Cut",
    description:
      "Different haircut styles are available to accommodate all types of people and preferences.",
    price: 27,
    icon: ScissorIcon,
  },
  {
    title: "Senior Cut",
    description:
      "Different haircut styles are available to accommodate all types of people and preferences.",
    price: 27,
    icon: ScissorIcon,
  },
  {
    title: "Kids Cut",
    description:
      "Different haircut styles are available to accommodate all types of people and preferences.",
    price: 27,
    icon: ScissorIcon,
  },
  {
    title: "Beard Trim",
    description:
      "Different haircut styles are available to accommodate all types of people and preferences.",
    price: 20,
    icon: BeardIcon,
    id: "groom",
  },
  {
    title: "Hot Towel Shave",
    description:
      "Different haircut styles are available to accommodate all types of people and preferences.",
    price: 45,
    icon: BeardIcon,
  },
  {
    title: "Haircut & Shave",
    description:
      "Different haircut styles are available to accommodate all types of people and preferences.",
    price: 45,
    icon: BeardIcon,
  },
  {
    title: "Hair Wash",
    description:
      "Different haircut styles are available to accommodate all types of people and preferences.",
    price: 15,
    icon: CleaningIcon,
    id: "wash",
  },
];

const Pricing = () => {
  return (
    <div className="bg-neutral-900 text-white py-20 md:px-0 px-4" id="pricing">
      <Container className="items-center">
        <h1 className="text-center text-primary uppercase font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Pricing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-sm sm:max-w-5xl mx-auto gap-12 gap-x-20 mt-12">
          {PricingItems.map((item, index) => (
            <div key={index} id={item.id ? item.id : undefined}>
              <div className="flex relative justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-5 sm:w-6 lg:w-8 aspect-square relative flex-shrink-0">
                    <Image src={item.icon} alt="Scissor Icon" fill />
                  </div>
                  <h2 className="text-xl text-primary sm:text-2xl font-extrabold uppercase">
                    {item.title}
                  </h2>
                </div>
                <span className="text-xl md:text-2xl font-extrabold">
                  ${item.price}
                </span>
                <div className="absolute -bottom-3 left-0 w-full h-[0.5px] sm:h-0.5 bg-neutral-500 rounded-3xl" />
              </div>
              <p className="mt-6 sm:mt-8 text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
