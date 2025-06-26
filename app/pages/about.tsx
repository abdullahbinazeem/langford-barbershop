"use client";

import React, { useState, useEffect, useRef } from "react";
import { Scissors, Award, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import Container from "../components/container";

const FeatureCard = ({ imageSrc, title, description, index }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 200);
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`flex items-center gap-6 transition-all duration-700 transform ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
      } ${isHovered ? "scale-105" : "scale-100"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-14 lg:w-20 aspect-square flex-shrink-0 transition-all duration-500 ${
          isHovered ? "rotate-12 scale-110" : "rotate-0 scale-100"
        }`}
      >
        <div
          className={`absolute inset bg-gradient-to-br from-red-400 via-red-500 to-blue-500 rounded-2xl transition-all duration-500 ${
            isHovered
              ? "blur-md opacity-80 scale-110"
              : "blur-sm opacity-60 scale-100"
          }`}
        />
        <div className="absolute inset-1 bg-white rounded-xl flex items-center justify-center border border-neutral-200 shadow-md">
          <Image
            src={imageSrc}
            alt="Icon"
            width={40}
            height={40}
            className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain transition-all duration-300 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
        </div>
      </div>
      <div className="space-y-2 flex-1">
        <h2
          className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-blue-400 uppercase font-black text-xl lg:text-2xl transition-all duration-300 ${
            isHovered ? "text-shadow-glow" : ""
          }`}
        >
          {title}
        </h2>
        <p
          className={`text-neutral-700 leading-relaxed transition-colors duration-300 ${
            isHovered ? "text-black" : ""
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const About = () => {
  const [titleVisible, setTitleVisible] = useState(false);
  const [commitmentVisible, setCommitmentVisible] = useState(false);
  const titleRef = useRef(null);
  const commitmentRef = useRef(null);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const commitmentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCommitmentVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) titleObserver.observe(titleRef.current);
    if (commitmentRef.current)
      commitmentObserver.observe(commitmentRef.current);

    return () => {
      titleObserver.disconnect();
      commitmentObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative bg-white text-black py-20 md:px-0 px-4 overflow-hidden">
      <Container className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div ref={titleRef} className="space-y-6">
            <div className="relative">
              <h1
                className={`inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-blue-400 uppercase font-black text-3xl sm:text-4xl lg:text-6xl leading-tight transition-all duration-1000 transform ${
                  titleVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                Why Choose Us
              </h1>
            </div>
            <p
              className={`text-neutral-700 text-base md:text-lg leading-relaxed max-w-xl transition-all duration-1000 delay-300 transform ${
                titleVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              With over 10 years of combined experience, our team is passionate
              about quality grooming and building a space where everyone feels
              welcome.
            </p>
          </div>

          <div className="space-y-8">
            <FeatureCard
              imageSrc="/assets/icons/barber.svg"
              title="Professional Barbers"
              description="All of our hairdressers are incredibly experienced and qualified in hair styling services."
              index={0}
            />

            <FeatureCard
              imageSrc="/assets/icons/razor.svg"
              title="Any Cut, Any Style"
              description="From clean fades to classic trims, we've got you covered. Our barbershop delivers fresh, personalized cuts that match your style every time."
              index={1}
            />
          </div>
        </div>

        <div
          ref={commitmentRef}
          className={`relative transition-all duration-1000 transform ${
            commitmentVisible
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-95"
          }`}
        >
          <div className="relative bg-gradient-to-br from-white via-neutral-100 to-blue-50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-neutral-200 shadow-xl">
            <div className="absolute top-4 right-4">
              <Sparkles
                className="w-6 h-6 text-red-500 animate-spin"
                style={{ animationDuration: "3s" }}
              />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Star className="w-8 h-8 text-red-500 animate-pulse" />
              <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 uppercase font-black text-2xl lg:text-3xl">
                Our Commitment
              </h2>
            </div>

            <p className="text-neutral-700 text-lg leading-relaxed max-w-2xl">
              We're committed to providing an exceptional experience from the
              moment you walk through our doors. Whether you're here for a quick
              trim or a complete style transformation, we guarantee you'll leave
              feeling confident and looking sharp.
            </p>

            <div className="mt-8 flex gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 text-red-400 transition-all duration-300 delay-${
                    i * 100
                  }`}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    filter: commitmentVisible
                      ? "drop-shadow(0 0 6px rgb(239 68 68))"
                      : "none",
                  }}
                  fill="currentColor"
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
