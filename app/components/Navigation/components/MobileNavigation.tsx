import socialMediaChannels from "../data/socialMediaChannels"
import { faTimes, faBars, faInbox } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"

export default function MobileNavigation(props: { adjustBodyScroll: (arg0: boolean) => void }) {
  return (
    <Popover className="flex items-center justify-between px-4 py-6">
      {({ open }) => {
        props.adjustBodyScroll(open)
        return (
          <>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-500 transition-colors rounded-md hover:text-gray-400 ">
                <span className="w-6 h-6 mr-2" aria-hidden="true">
                  <FontAwesomeIcon icon={faBars} size="lg" />
                </span>
                <span>Socials</span>
              </Popover.Button>
            </div>
            <Popover.Overlay
              className={`${open ? "opacity-75 fixed inset-0" : "opacity-0"} bg-black`}
            />
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
                className="fixed inset-x-0 top-0 p-3 overflow-hidden transition transform origin-top-center md:hidden"
              >
                <div className="pb-3 max-h-[85vh] overflow-x-hidden overflow-y-scroll bg-white rounded-lg shadow-lg">
                  <div className="items-center justify-between">
                    <div className="fixed flex pt-6 pb-5 -mr-2 bg-white rounded-lg w-full max-w-[calc(100%-1.5rem)]">
                      <Popover.Button className="inline-flex items-center justify-center p-2 pr-3 ml-6 text-gray-400 transition-colors bg-gray-100 rounded-md hover:text-gray-500">
                        <span className="w-6 h-6 mr-2" aria-hidden="true">
                          <FontAwesomeIcon icon={faTimes} size="lg" />
                        </span>
                        <span>Close socials</span>
                      </Popover.Button>
                    </div>
                  </div>
                  <nav className="flex flex-col content-center justify-center pl-3 pr-3 mt-20">
                    {socialMediaChannels.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        className="flex items-center pl-3 rounded-lg hover:bg-gray-50"
                        rel="noreferrer"
                      >
                        <div
                          style={{ backgroundColor: item.bgColor }}
                          className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-3 mb-3 text-white rounded-md"
                        >
                          <FontAwesomeIcon
                            className="w-6 h-6"
                            aria-hidden="true"
                            icon={item.icon}
                          />
                        </div>
                        <div>
                          <p className="ml-4 text-base font-medium text-gray-900">{item.name}</p>
                          <p className="mt-1 ml-4 text-sm text-gray-500">{item.description}</p>
                        </div>
                      </a>
                    ))}
                    <a
                      key="newsletter"
                      href="https://medium.com/danielburger-news/newsletters/daniel-burgers-newsletter"
                      target="_blank"
                      className="flex items-center pl-3 mt-4 bg-gray-100 rounded-lg hover:bg-gray-50"
                      rel="noreferrer"
                    >
                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-3 mb-3 rounded-md">
                        <FontAwesomeIcon
                          className="w-6 h-6 text-black"
                          aria-hidden="true"
                          icon={faInbox}
                        />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        Subscribe my Newsletter
                      </div>
                    </a>
                  </nav>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )
      }}
    </Popover>
  )
}
