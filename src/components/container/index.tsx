import { motion } from "framer-motion"


export const Container: React.FC<{}>  = ({ children }) => {
  const animation = {
    hidden:{
      opacity:0
    },
    visible:{
      opacity:1,
      transition: { delayChildren: 0.5,duration: 4 }
    }
  }
  return <motion.div className="flex flex-col bg-bgGradient bg-contain bg-no-repeat bg-positionSm bg-scroll md:bg-cover md:bg-top-25" initial="hidden" animate="visible" variants={animation}>{children}</motion.div>;
};
