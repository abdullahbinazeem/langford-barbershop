import React from "react";
import { Clock } from "lucide-react"; // optional icon

const Directions = () => {
  return (
    <section
      className="relative text-white bg-black/70 bg-blend-darken bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/assets/directions.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row  justify-between gap-12 text-center lg:text-left">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              TEAM OF PROFESSIONALS
              <br />
              IS WAITING FOR YOU
            </h2>
            <p className="mt-4 text-base sm:text-lg text-neutral-200 max-w-md mx-auto lg:mx-0">
              Open every day to keep you looking sharp and feeling great - no
              appointment needed!
            </p>
            <a
              href="https://maps.app.goo.gl/J11RWaEKgiJBKM8e6"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-3 text-sm sm:text-base bg-primary hover:scale-105 transition-all font-bold rounded"
            >
              GET DIRECTIONS
            </a>
          </div>

          <div className="flex-1 max-w-md mx-auto">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <Clock className="w-6 h-6 text-white/80" />
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                OPEN HOURS
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              <p className="md:text-lg">
                <strong>Monday - Friday:</strong> 9:00 am – 7:00 pm
              </p>
              <p className="md:text-lg">
                <strong>Saturday - Sunday:</strong> 9:00 am – 5:00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
