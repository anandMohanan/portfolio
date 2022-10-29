import { AnimatePresence } from "framer-motion";
import { Router } from "next/router";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
function MyApp({ Component, pageProps, router }) {
  return (
    <>
      {/* <head></head> */}
      <div className="  overflow-hidden">
        {/* <Navbar /> */}
        <AnimatePresence initial={false}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
      </div>
    </>
  );
}

export default MyApp;
