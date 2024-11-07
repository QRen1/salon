// src/components/Desktop.tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import model from "../assets/model.jpg";

const modelVariant: Variants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 1,
    },
  },
};

const descriptionVariant: Variants = {
  offscreen: {
    x: 400,
    opacity: 0,
  },
  onscreen: {
    x: 170,
    opacity: 1,
    transition: {
      type: "easeIn",
      duration: 1,
    },
  },
};

const Desktop: React.FC = () => {
  return (
    <div className=" ">
      <div className="heroContainer absolute left-1/2 top-[60%] h-[70%] w-[40%] -translate-x-[80%] -translate-y-1/2 transform">
        <motion.img
          src={model}
          alt="Beautiful Girl"
          className="desktop hidden h-full w-full border-[15px] border-white object-cover object-center grayscale third:flex"
          variants={modelVariant}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }} // Optional: only animate once when in view
        />
        <motion.div
          variants={descriptionVariant}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          className="desktop description absolute left-1/2 top-[15%] hidden h-[70%] w-[60%] transform flex-col items-center justify-between gap-5 border-[15px] border-white bg-[#fcdebe] py-5 third:flex"
        >
          <p className="flex items-center justify-center border text-center leading-none">
            sample description
          </p>
          <button className="float-bottom flex w-3/4 items-center justify-evenly bg-[#fcdebe] text-[20px]">
            BOOK AN APPOINTMENT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>
      <div className="coloredSide float-end hidden h-full w-[50%] bg-[#fcdebe] third:block"></div>
    </div>
  );
};

export default Desktop;
