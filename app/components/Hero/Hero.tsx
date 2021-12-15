import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons"
import { dynamic } from "blitz"
import { useMediaQuery } from "react-responsive"
import HeroDecorations from "./components/HeroDecorations"
import { motion } from "framer-motion"

const TypeWriter = dynamic(() => import("./components/TypeWriter"), {
  ssr: false,
})

export default function Hero() {
  const isMobileWidth = useMediaQuery({
    query: "(max-width: 639px)",
  })

  return (
    <div className="relative z-20 flex items-center justify-center w-full h-screen overflow-hidden pointer-events-none min-h-small">
      <HeroDecorations />
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="px-6 mx-auto mt-16 max-w-7xl sm:mt-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              <span className="block">Daniel Burger</span>
              <TypeWriter />
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="mx-auto mt-3 text-base text-gray-300 md: sm:text-lg md:mt-5 md:text-xl sm:max-w-xl"
            >
              Building brain-machine interface software at{" "}
              <a
                href="https://iduntechnologies.ch"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto hover:underline"
              >
                IDUN Technologies
              </a>{" "}
              {isMobileWidth ? null : "in Zürich"} and combining spatial computing with artificial
              intelligence at{" "}
              <a
                href="https://www.mdx.ac.uk"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto hover:underline"
              >
                Middlesex University
              </a>
              {isMobileWidth ? null : ", London"}.
            </motion.h2>

            <div className="max-w-lg mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-md shadow pointer-events-auto"
              >
                <a
                  href="mailto:public@danielburger.online"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-800 transition-colors border border-transparent rounded-md bg-primary hover:bg-primaryDark md:py-4 md:text-lg md:px-10"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                  Contact me
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="mt-3 rounded-md shadow pointer-events-auto sm:mt-0 sm:ml-3"
              >
                <a
                  href="https://calendly.com/danburonline/meet"
                  target="_blank"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-800 transition-colors bg-white border border-transparent rounded-md hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faCalendar} className="mr-3" />
                  Book a meeting
                </a>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
