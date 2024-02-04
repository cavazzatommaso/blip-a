import { TextHead } from "@components/textHead";
import { useForm, ValidationError } from '@formspree/react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TextParagraph } from "..";
import styles from "./index.module.scss"


export const Form: React.FC = () => {
    const [state, handleSubmit] = useForm("xvolzerd");
    if (state.succeeded) {
        return <motion.div className="w-full flex justify-center text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <TextHead children="On its way!" />
        </motion.div>
    }
    return (
        <div className="flex flex-col text-center p-4 pt-8 m-8 md:m-0 md:text-left">
            {/* Title */}
            <div className="flex flex-col items-center md:flex-row justify-between">
                <TextHead children="get in touch" /><br />
                <div className={`flex ${styles.neuOut} w-1/2 p-2 m-2 justify-between items-center md:w-1/6 md:justify-around  md:backdrop-blur-sm`}>
                    <div className="cursor-pointer">
                        <Link href="REDACTED">
                            <Image src="/icons/telegram-icon.webp" alt="telegram social" width="42" height="42" className="" />
                        </Link>
                    </div>
                    {/* <div className="w-px h-10 bg-gray-200"></div>
                    <div className="cursor-pointer">
                        <Link href="">
                            <Image src="/icons/discord-icon.webp" alt="discord social" width="50" height="50" className="" />
                        </Link>
                    </div> */}
                </div>
            </div>
            {/* SubTitle */}
            <div className="md:w-1/2">
                <TextParagraph children="Questions? We have answers!" />
            </div>
            {/* Section with form */}
            <div className="flex flex-col mt-12 md:flex-row">
                {/* Left panel */}
                <div className="md:flex-1">

                </div>
                {/* Right panel */}
                <motion.div className="w-full flex-1" initial="initial" animate="animate" exit={{ opacity: 0 }}>
                    <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-8 text-black">
                        <input type="text" name="name" className="w-full bg-white rounded-md p-2 focus:outline-none" placeholder="Name" />
                        <ValidationError field="name" errors={state.errors} />
                        <input type="email" name="email" className="w-full bg-white rounded-md p-2 focus:outline-none" placeholder="Email" />
                        <ValidationError field="email" errors={state.errors} />
                        <textarea name="message" className="h-40 w-full bg-white rounded-md p-2 text-black focus:outline-none" placeholder="Write your message here..."></textarea>
                        <ValidationError field="message" errors={state.errors} />
                        <div className="flex justify-start">
                            <button type="submit" disabled={state.submitting} className="bg-black text-white py-2 px-4 rounded-lg font-mattone uppercase">
                                Send it!
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};
