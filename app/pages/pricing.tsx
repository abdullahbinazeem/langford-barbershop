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
      "A classic haircut tailored precisely to your style and preferences, ensuring you leave looking sharp and confident.",
    price: 33,
    icon: ScissorIcon,
    id: "haircut",
  },
  {
    title: "Fade",
    description:
      "Expertly blended fade haircut that transitions smoothly from short to long, giving you a fresh and modern look.",
    price: 24,
    icon: ScissorIcon,
    id: "fade",
  },
  {
    title: "Buzz Cut",
    description:
      "A clean, low-maintenance buzz cut perfect for those who prefer a simple yet bold style.",
    price: 27,
    icon: ScissorIcon,
    id: "buzzcut",
  },
  {
    title: "Senior Cut",
    description:
      "Gentle and stylish haircut designed with seniors in mind, providing comfort and a timeless look.",
    price: 27,
    icon: ScissorIcon,
    id: "seniorcut",
  },
  {
    title: "Kids Cut",
    description:
      "A fun and comfortable haircut experience tailored for kids, ensuring they leave happy and looking great.",
    price: 27,
    icon: ScissorIcon,
    id: "kidscut",
  },
  {
    title: "Beard Trim",
    description:
      "Precision beard trimming to shape and maintain your facial hair, keeping you looking well-groomed and polished.",
    price: 20,
    icon: BeardIcon,
    id: "groom",
  },
  {
    title: "Hot Towel Shave",
    description:
      "Indulge in a relaxing hot towel shave that softens the skin and hair for a smooth, clean finish.",
    price: 45,
    icon: BeardIcon,
    id: "hottowelshave",
  },
  {
    title: "Haircut & Shave",
    description:
      "A complete grooming package including a stylish haircut and a soothing hot towel shave for an impeccable look.",
    price: 50,
    icon: BeardIcon,
    id: "haircutshave",
  },
  {
    title: "Hair Wash",
    description:
      "Refreshing hair wash paired with a gentle scalp massage to leave your hair clean and revitalized.",
    price: 15,
    icon: CleaningIcon,
    id: "wash",
  },
];

const Pricing = () => {
  return (
    <div className="bg-white text-black py-20 md:px-0 px-4" id="pricing">
      <Container className="items-center">
        <h1 className="text-center text-red-500 uppercase font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight">
          Pricing
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-sm sm:max-w-5xl mx-auto gap-12 gap-x-20 mt-12">
          {PricingItems.map((item, index) => (
            <div key={index} id={item.id ? item.id : undefined}>
              <div className="flex relative justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-5 sm:w-6 lg:w-8 aspect-square relative flex-shrink-0">
                    <Image src={item.icon} alt="Service Icon" fill />
                  </div>
                  <h2 className="text-xl text-red-500 sm:text-2xl font-extrabold uppercase">
                    {item.title}
                  </h2>
                </div>
                <span className="text-xl md:text-2xl font-extrabold">
                  ${item.price}
                </span>
                <div className="absolute -bottom-3 left-0 w-full h-[0.5px] sm:h-0.5 bg-neutral-300 rounded-3xl" />
              </div>
              <p className="mt-6 sm:mt-8 text-neutral-700">
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
