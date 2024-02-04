import React from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { AnimatePresence, motion } from "framer-motion"


function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <AnimatePresence exitBeforeEnter>
    <Component {...pageProps} />
  </AnimatePresence>;
}

export default MyApp;
