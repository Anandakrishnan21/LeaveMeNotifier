import Link from "next/link";
import React from "react";

function LeaveLetterBtn() {
  return (
    <Link href="/form">
      <button className="w-1/2 bg-slate-500 hover:bg-slate-400 p-1.5 px-2 text-white border-2 duration-500 text-sm md:text-base rounded">
        Create Leave Letter
      </button>
    </Link>
  );
}

export default LeaveLetterBtn;
