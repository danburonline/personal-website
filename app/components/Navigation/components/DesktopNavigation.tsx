import classNames from "../../../utils/classNames"
import socialMediaChannels from "../data/socialMediaChannels"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Popover, Transition } from "@headlessui/react"
import { motion } from "framer-motion"
import { Fragment } from "react"

export default function DesktopNavigation(props: { adjustBodyScroll: (arg0: boolean) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className="items-center justify-between hidden px-4 py-6 md:flex"
    >
      <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
        <Popover.Group as="nav" className="flex ml-4 space-x-10">
          <Popover className="relative">
            {({ open }) => {
              props.adjustBodyScroll(open)
              return (
                <>
                  <Popover.Button>
                    <div
                      className={classNames(
                        open ? "text-gray-400" : "text-gray-500",
                        "inline-flex items-center text-base font-medium rounded-md group hover:text-gray-400 transition-colors"
                      )}
                    >
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={classNames(
                          open ? "transform -rotate-180" : "transform rotate-0",
                          "w-5 h-5 mr-3 transition-transform z-20"
                        )}
                        aria-hidden="true"
                      />
                      <span className="z-20">Follow me</span>
                    </div>
                  </Popover.Button>
                  <Popover.Overlay
                    className={`${open ? "opacity-50 fixed inset-0" : "opacity-0"} bg-black`}
                  />

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-3xl">
                      <div className="h-full overflow-y-auto rounded-lg shadow-lg sm:max-h-[80vh] ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {socialMediaChannels.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              target="_blank"
                              className="flex items-start p-3 -m-3 transition-colors rounded-lg hover:bg-gray-50"
                              rel="noreferrer"
                            >
                              <div
                                style={{ backgroundColor: item.bgColor }}
                                className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md sm:h-12 sm:w-12"
                              >
                                <FontAwesomeIcon
                                  icon={item.icon}
                                  className="w-6 h-6"
                                  aria-hidden="true"
                                  size="lg"
                                />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )
            }}
          </Popover>
        </Popover.Group>
      </div>
    </motion.div>
  )
}
