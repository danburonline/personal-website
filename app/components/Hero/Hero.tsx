import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faCalendar } from "@fortawesome/free-solid-svg-icons"
import HeroDecorations from "./components/HeroDecorations"

export default function Hero() {
  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-gray-900 min-h-small">
      <HeroDecorations />
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="px-6 mx-auto mt-16 max-w-7xl sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              <span className="block">Daniel Burger,</span>
              <span className="block text-primary xl:inline">neurotech engineer</span>
            </h1>
            <h2 className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Building brain-machine interface software at IDUN Technologies and combining spatial
              computing with artificial intelligence at Middlesex University.
            </h2>
            <div className="max-w-lg mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="mailto:public@danielburger.online"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-800 transition-colors border border-transparent rounded-md bg-primary hover:bg-primaryDark md:py-4 md:text-lg md:px-10"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                  Contact me
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="https://calendly.com/danburonline/meet"
                  target="_blank"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-800 transition-colors bg-white border border-transparent rounded-md hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faCalendar} className="mr-3" />
                  Book a meeting
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
