import React from "react";

const SectionWrapper = (props) => {
  const { children, header, title, id } = props;
  return (
    <section id={id} className="min-h-screen flex flex-col gap-10">
      <div className="bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center p-4">
        <p className="uppercase font-medium">{header}</p>
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title[0]}{" "}
          <span className="uppercase bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text text-transparent ">
            {title[1]}
          </span>{" "}
          {title[2]}
        </h2>
      </div>
      <div className="max-w-[800px] w-full flex flex-col mx-auto gap-10 p-4">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
