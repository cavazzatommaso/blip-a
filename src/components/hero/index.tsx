import { TextHead } from "@components/textHead";
import { TextParagraph } from "@components/textParagraph";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"


export const Hero: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        delayChildren: .3,
        staggerChildren: .4,
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

  const itemPlusScale = {
    hidden: { opacity: 0, scale: 1 },
    show: { opacity: 1, scale: 1 }
  }

  const revealImage = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }


  return (
    <div className="md:h-heroDiv 2xl:h-heroDiv2xl md:overflow-hidden">
      <motion.div className="flex flex-col items-center justify-center h-screen text-center p-8 md:items-start md:text-left md:p-0" initial="hidden" animate="show" variants={container} exit={{ opacity: 0 }}>
        {/* Title */}
        <div className="flex flex-col flex-wrap" >
          <motion.div variants={itemPlusScale}>
            <TextHead children="bespoke" />
          </motion.div>
          <motion.div variants={itemPlusScale}>
            <TextHead children="validators" />
          </motion.div>
        </div>
        {/* Center */}
        <div className="h-1/6" />
        {/* subTitle */}
        <motion.div className={`md:flex md:justify-between md:w-full md:relative`} variants={item}>
          <motion.div className={`md:w-1/3`} >
            <TextParagraph children="We design, setup and maintain custom solution for Validators in for Proof of Stake networks." />
          </motion.div>
          <motion.div className="md:w-8/12 md:absolute md:right-0 md:top-0 hidden md:block" >
            <Image src="/assets/corner1.webp" alt="nextjs" width="100%" height="100%" layout="responsive" className="hidden md:block" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
