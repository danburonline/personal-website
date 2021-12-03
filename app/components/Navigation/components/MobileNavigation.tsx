import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import socialMediaChannels from "../data/socialMediaChannels"

export default function MobileNavigation() {
  return (
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
  )
}
