import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-bold text-5xl sm:text-6xl  md:text-7xl lg:text-7xl">
          swole<span className="text-blue-400">normous</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become{" "}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous
        </span>{" "}
        and accept all risks of becoming local{" "}
        <span className="text-blue-400 font-medium">mass monstrosity</span>,
        afflicted with severe body dimorphism unable to fit through doors
      </p>
      <button className="px-8 py-4 rounded border-blue-400 border-solid border-2 bg-slate-950 blueShadow duration-200">
        <p>Accept and Begin</p>
      </button>
    </div>
  );
};

export default Hero;
