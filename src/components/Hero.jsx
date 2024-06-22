import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-bold text-5xl sm:text-6xl  md:text-7xl lg:text-7xl">
          swole
          <span className="bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text text-transparent">
            normous
          </span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming local{" "}
        <span className="text-blue-400 font-medium">mass monstrosity</span>,
        afflicted with severe body dimorphic unable to fit through doors
      </p>
      <Button text="Accept and begin" />
    </div>
  );
};

export default Hero;
