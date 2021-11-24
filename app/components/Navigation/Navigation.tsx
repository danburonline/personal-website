import { Fragment, useState } from "react"
import { Popover, Transition } from "@headlessui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes, faChevronDown } from "@fortawesome/free-solid-svg-icons"
import socialMediaChannels from "./data/socialMediaChannels"
import classNames from "../../utils/classNames"

export default function Navigation() {
  return (
    <Popover className="fixed z-20 w-screen">
      <div className="flex items-center justify-between px-4 py-6">
        <div className="-my-2 -mr-2 md:hidden">
          <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 transition-colors rounded-md hover:text-gray-500 hover:bg-gray-100">
            <span className="w-6 h-6 mr-2" aria-hidden="true">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </span>
            <span>Menu</span>
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex ml-4 space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button>
                    <div
                      className={classNames(
                        open ? "text-gray-400" : "text-gray-500",
                        "inline-flex items-center text-base font-medium rounded-md group hover:text-gray-400"
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
                    className={`${open ? "opacity-20 fixed inset-0" : "opacity-0"} bg-black`}
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
                      <div className="overflow-scroll rounded-lg shadow-lg h-full sm:h-[80vh] ring-1 ring-black ring-opacity-5">
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
                        <div className="p-5 rounded-b-lg bg-gray-50 sm:p-8">
                          <a
                            href="https://www.linkedin.com/posts/danburonline_backend-software-engineer-iot-job-opening-activity-6868611198162755585-fzHp"
                            target="_blank"
                            className="flow-root p-3 -m-3 rounded-md hover:bg-gray-100"
                            rel="noreferrer"
                          >
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900">
                                <span className="font-bold">Now hiring:</span> Backend software
                                engineer
                              </div>
                              <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-primary text-gray-800">
                                New
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Looking for a talented backend software engineer to join my team at
                              IDUN →
                            </p>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 p-2 transition transform origin-top-center md:hidden"
        >
          <div className="h-[95vh] overflow-scroll bg-white divide-y-2 rounded-lg shadow-lg divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 transition-colors bg-gray-100 rounded-md hover:text-gray-500">
                    <span className="w-6 h-6 mr-2" aria-hidden="true">
                      <FontAwesomeIcon icon={faTimes} size="lg" />
                    </span>
                    <span>Close menu</span>
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {socialMediaChannels.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                      rel="noreferrer"
                    >
                      <div
                        style={{ backgroundColor: item.bgColor }}
                        className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md"
                      >
                        <FontAwesomeIcon className="w-6 h-6" aria-hidden="true" icon={item.icon} />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
