"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import LoginBtn from "./LeaveBtn";
import Link from "next/link";
import { HiBars3BottomLeft, HiXMark } from "react-icons/hi2";
import LeaveBtn from "./LeaveBtn";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div
      className={`w-full font-custom sticky top-0 z-[10] bg-white p-2 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <header className="max-w-7xl flex justify-between items-center p-1 mx-auto">
        <Link href="/">
          <h1 className="text-xl font-bold">LeaveMeNotifier</h1>
        </Link>
        <div className="hidden md:block">
          <ul className="flex items-center space-x-10">
            <li>
              <LeaveBtn />
            </li>
          </ul>
        </div>
        <div className="flex md:hidden">
          <button onClick={toggleButton}>
            {isOpen ? (
              <HiXMark className="w-6 h-6" />
            ) : (
              <HiBars3BottomLeft className="w-6 h-6 " />
            )}
          </button>
        </div>
      </header>
      {isOpen && (
        <motion.div className="md:hidden" animate={isOpen ? "open" : "closed"}>
          <motion.div
            variants={variants}
            className="bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 text-black p-2 rounded"
          >
            <ul className="flex flex-col space-y-5">
              <li>
                <LeaveBtn />
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

export default Header;
