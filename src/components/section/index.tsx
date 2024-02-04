import { TextHead } from "@components/textHead";
import styles from "./index.module.scss"
import Image from "next/image";
import React, { useEffect } from "react";
import { TextParagraph } from "..";
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer";



export const Section: React.FC = () => {
    const controls = useAnimation();
    const {ref, inView} = useInView();

    const animation = {
        visible: { opacity: 1,transition:{duration:1}},
        hidden: { opacity: 0}
      };
    
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
    
    return (
        <motion.div className={`flex flex-col text-center ${styles.neu} p-4 pt-8 m-8 md:p-8 md:m-0 md:flex-row`} ref={ref} initial="hidden" animate={controls} variants={animation}  >
            {/* Left panel */}
            <div className="md:flex-1"></div>
            {/* Right panel */}
            <div className="md:flex md:flex-col md:flex-1 md:p-4 md:text-left">
                {/* Title */}
                <div className="mb-10 md:pb-4 md:m-0" >
                    <TextHead children="Security" />
                    <TextHead children="reliability" />
                </div>
                {/* Description */}
                <div className="">
                    <TextParagraph children="Every server is setup in accordance with the latest industry standards, with Open Source software code only on high-end hardware." />
                </div>
                {/* Socials */}
                <div className="flex justify-between mt-10 md:flex-1 md:items-end md:m-0">
                    <div className=" md:flex-1">
                        <Image src="/assets/corner2.webp" alt="nextjs" width="100%" height="50%" layout="responsive" className="hidden md:block"/>

                    </div>
                    <div className={`flex w-5/12 p-2 m-2 md:w-1/3`}>
                        
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
