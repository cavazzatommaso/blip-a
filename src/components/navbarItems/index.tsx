import React from "react";
import { motion } from "framer-motion"
import Link from "next/link";



export const NavbarItems: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 2.3,
        delay: 2.3,
        staggerChildren: .2,
      }
    }
  }

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  return (
    <motion.div className="hidden text-white font-mattone text-sm max-w-3xl justify-around flex-auto md:flex text-center" initial="hidden" animate="show" variants={container}>
      <motion.div className="flex-1" variants={item}>
        <Link href="/comingsoon">About Us</Link>
      </motion.div>
      <motion.div className="flex-1" variants={item}>
        <Link href="/comingsoon">Contact Us</Link>
      </motion.div>
      <motion.div className="flex-1" variants={item}>
        <Link href="/comingsoon">Login</Link>
      </motion.div>
    </motion.div>
  );
};
