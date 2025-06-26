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
      "A classic haircut, styled just how you like it. We focus on the details to make sure you walk out looking sharp and feeling great, with a cut that really suits you.",
    price: 33,
    icon: ScissorIcon,
    id: "haircut",
  },
  {
    title: "Fade",
    description:
      "Get that perfectly smooth fade, blended seamlessly from short to longer. It's a clean, modern look that'll have you feeling fresh and on point.",
    price: 24,
    icon: ScissorIcon,
    id: "fade",
  },
  {
    title: "Buzz Cut",
    description:
      "A straightforward, easy-to-manage buzz cut. Great for folks who like a clean, no-fuss style that's bold and always looks good.",
    price: 27,
    icon: ScissorIcon,
    id: "buzzcut",
  },
  {
    title: "Senior Cut",
    description:
      "A comfortable, easy haircut designed for our senior clients. We take our time to ensure a gentle service that leaves you looking classic and feeling relaxed.",
    price: 27,
    icon: ScissorIcon,
    id: "seniorcut",
  },
  {
    title: "Kids Cut",
    description:
      "We make haircuts fun and easy for the little ones! Our barbers are patient and friendly, making sure kids feel comfortable and leave with a cool new look.",
    price: 27,
    icon: ScissorIcon,
    id: "kidscut",
  },
  {
    title: "Beard Trim",
    description:
      "Give your beard the attention it deserves. We'll shape it up, clean the lines, and make sure it looks well-groomed and complements your face perfectly.",
    price: 20,
    icon: BeardIcon,
    id: "groom",
  },
  {
    title: "Hot Towel Shave",
    description:
      "Treat yourself to our classic hot towel shave. Warm towels, a close shave, and skin that feels incredibly smooth and refreshed afterward. Pure relaxation.",
    price: 45,
    icon: BeardIcon,
    id: "hottowelshave",
  },
  {
    title: "Haircut & Shave",
    description:
      "The full package: a sharp haircut combined with a soothing hot towel shave. It's the ultimate way to refresh your look and feel completely polished.",
    price: 50,
    icon: BeardIcon,
    id: "haircutshave",
  },
  {
    title: "Hair Wash",
    description:
      "A quick refresh for your hair and scalp. Includes a good wash and a relaxing head massage to leave your hair feeling clean and revitalized.",
    price: 15,
    icon: CleaningIcon,
    id: "wash",
  },
];

const Pricing = () => {
  return (
    <div className="bg-white text-black py-20 md:px-0 px-4" id="pricing">
      <Container className="items-center">
        <h1 className="ml-[50%] translate-x-[-50%] inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-blue-400  uppercase font-extrabold  text-3xl sm:text-4xl lg:text-6xl leading-tight">
          Pricings
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-sm sm:max-w-5xl mx-auto gap-12 gap-x-20 mt-12">
          {PricingItems.map((item, index) => (
            <div key={index} id={item.id ? item.id : undefined}>
              <div className="flex relative justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-6 lg:w-8 aspect-square relative flex-shrink-0">
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
