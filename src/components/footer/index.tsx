import React from "react";
import Image from "next/image";
import { TextHead } from "@components/textHead";

export const Footer: React.FC = () => {
  return (
    <div className="flex flex-col text-center p-4 pt-8 m-8">
      <div className="md:flex">
        {/* Black logo */}
        <div className="2xl:hidden">
          <Image src="/assets/b-a-bl1.svg" alt="nextjs" width="180" height="60" className="" />
        </div>
        {/* White logo for 2xl screen*/}
        <div className="hidden 2xl:block">
          <Image src="/assets/b-a-wt1.svg" alt="nextjs" width="180" height="60" className="" />
        </div>

        {/* <div className="text-4xl uppercase font-mattone tracking-tighter">
          blip-a-industries
      </div> */}
      </div>
      <div className="flex justify-center gap-8 text-center flex-row md:justify-start 2xl:text-white">
        <div className="font-subtitle flex-1 text-left">
          © 2022 - Blip-A Industries
        </div>
        <div className="hidden font-subtitle flex-1 md:block">
          Made with 🤍 in 🇪🇺
        </div>
        <div className="font-subtitle flex-1">
        </div>
      </div>
    </div>
  );
};
