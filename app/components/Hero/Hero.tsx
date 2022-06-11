import HeroDecorations from "./components/HeroDecorations"
import { faEnvelope, faCalendar, faSortDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { dynamic } from "blitz"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
              Building brain-computer interface software at{" "}
              <a
                href="https://iduntechnologies.com"
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto hover:underline"
              >
                IDUN Technologies
              </a>{" "}
              {isMobileWidth ? null : "in Zürich"} and combining spatial computing with machine
              learning at{" "}
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 }}
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
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 }}
                className="mt-3 rounded-md shadow pointer-events-auto sm:mt-0 sm:ml-3"
              >
                <a
                  href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ06eblMW7_iQq2HWz2e7I7SJcYE1Z-m9HrCw9tgbiwBqIirhAwIaKWjIVUbCBgDiuzeKYbbjQwd"
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
      <motion.div
        initial={{ translateY: 0, opacity: 0 }}
        animate={{ translateY: -20, opacity: 0.25 }}
        transition={{
          repeat: Infinity,
          repeatDelay: 0.05,
          repeatType: "reverse",
          ease: "easeOut",
          delay: 0.05,
        }}
        className="absolute bottom-0 mb-12 text-center text-white opacity-50 lg:right-0 z-100 right-50 mx-14"
      >
        <FontAwesomeIcon icon={faSortDown} size="lg" />
      </motion.div>
    </div>
  )
}
