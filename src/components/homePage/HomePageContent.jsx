import React from "react";
import LeaveLetterBtn from "./LeaveLetterBtn";

function HomePageContent() {
  return (
    <div className="font-custom w-5/6 md:w-1/2 flex flex-col text-base gap-2">
      <h1 className="text-3xl md:text-5xl font-medium leading-normal md:leading-relaxed">
        Create Custom Letter&apos;s in Minutes
      </h1>
      <p className="text-sm md:text-base leading-normal">
        Unlock the power of effortless Pdf of letters creation with Letter Wizard - your
        path to a leave letter!
      </p>
      <LeaveLetterBtn />
    </div>
  );
}

export default HomePageContent;
