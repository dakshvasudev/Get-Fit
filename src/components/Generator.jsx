import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/swoldier";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

function updateMuscles(muscleGroup) {
  if (muscles.includes(muscleGroup)) {
    setMuscles(muscles.filter((val) => val !== muscleGroup));
    return;
  }

  if (muscles.length > 2) {
    return;
  }

  if (poison !== "individual") {
    setMuscles([muscleGroup]);
    setShowModal(false);
    return;
  }

  setMuscles([...muscles, muscleGroup]);
  if (muscles.length === 2) {
    setShowModal(false);
  }
}

const Generator = () => {
  const [showModal, setShowModal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your workout"}
        description={"Select the workout you wish to endure."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setPoison(type);
              }}
              className={
                type == poison
                  ? "bg-blue-400 border border-slate-950 py-3 rounded-lg duration-200 hover:border-slate-600"
                  : "bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600"
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>

      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annihilation."}
      />
      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg flex flex-col">
        <button
          onClick={toggleModal}
          className="relative flex items-center justofy-center p-3"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid fa-caret-down absolute top-1/2 right-3 -translate-y-1/2"></i>
        </button>
        {showModal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-blue-400 duration-200 " +
                    (muscles.includes(muscleGroup) ? " text-blue-400" : " ")
                  }
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>

      <Header
        index={"03"}
        title={"Become Juggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-3 gap-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                scheme == goal
                  ? "bg-blue-400 border border-slate-950 py-3 rounded-lg duration-200 hover:border-slate-600"
                  : "bg-slate-950 border border-blue-400 py-3 rounded-lg duration-200 hover:border-blue-600"
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Generator;
