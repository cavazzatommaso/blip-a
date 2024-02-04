import { TextHead } from "@components/textHead";
import { TextParagraph } from "@components/textParagraph";
import { motion } from "framer-motion"
import Link from "next/link";

function Comingsoon() {
    return <motion.div className="w-screen h-screen flex flex-col justify-center items-center text-left" initial={{opacity:0}} animate={{opacity:1,transition:{delay:.5,duration:2}}} exit={{opacity:0}} >
        <div className="w-1/2">
            <TextHead children="Coming Soon" />
            <div className="w-full text-left font-subtitle text-white">
                <Link href="/">
                    Go Back
                </Link>
            </div>
        </div>
    </motion.div>
}

export default Comingsoon