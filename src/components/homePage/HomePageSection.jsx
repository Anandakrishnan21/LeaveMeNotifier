import React from "react";
import HomePageContent from "./HomePageContent";
import PDFLottie from "./PDFLottie";

function HomePageSection() {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 md:h-screen flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col-reverse md:flex-row justify-around items-center">
          <HomePageContent />
          <PDFLottie />
        </div>
      </div>
    </>
  );
}

export default HomePageSection;
