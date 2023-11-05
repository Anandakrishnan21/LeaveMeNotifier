"use client";
import React from "react";
import PDF from "../../../public/PDF.json";
import Lottie from "lottie-react";

function PDFLottie() {
  return (
    <div className="flex items-center justify-center">
      <Lottie
        className="w-5/6 md:w-96 h-96 shadow-cyan-500/50"
        animationData={PDF}
      />
    </div>
  )
}

export default PDFLottie
