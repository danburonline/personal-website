import skillsList from "./data/skillsList"
import { faCheck, faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useMediaQuery } from "react-responsive"

export default function Skills() {
  const isMobileWidth = useMediaQuery({
    query: "(max-width: 639px)",
  })

  return (
    <div className="bg-[#1A001A]">
      <div className="pt-12 sm:pt-16 lg:pt-24">
        <div className="px-4 mx-auto max-w-7xl text-center sm:px-6 lg:px-8">
          <div className="mx-auto space-y-2 max-w-3xl lg:max-w-none">
            <h2 className="text-lg font-semibold tracking-wider leading-6 text-gray-300 uppercase">
              My Expertise
            </h2>
            <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Software for the Brain
            </p>
            <p className="text-xl text-gray-300">
              Production-grade and {!isMobileWidth && "highly scalable"} with a focus on real-time
              and web tech
            </p>
          </div>
        </div>
      </div>
      <div className="pb-12 mt-8 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
        <div className="relative">
          <div className="absolute inset-0 h-3/4 bg-gray-900" />
          <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto space-y-4 max-w-md md:max-w-5xl md:grid md:grid-cols-2 md:gap-5 md:space-y-0">
              {skillsList.map((skill) => (
                <div
                  key={skill.skillTitle}
                  className="flex overflow-hidden flex-col rounded-lg shadow-lg"
                >
                  <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
                    <div className="flex items-baseline mt-4 text-4xl font-extrabold lg:text-5xl">
                      {skill.skillTitle}
                    </div>
                    <p className="mt-5 text-lg text-gray-500">{skill.description}</p>
                  </div>
                  <div className="flex flex-col flex-1 justify-between px-6 pt-6 pb-8 space-y-6 bg-gray-50 sm:p-10 sm:pt-6">
                    <ul className="space-y-4">
                      {skill.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="w-6 h-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base text-gray-700">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative px-4 mx-auto mt-4 max-w-7xl sm:px-6 lg:px-8 lg:mt-5">
          <div className="mx-auto max-w-md md:max-w-5xl">
            <div className="px-6 py-8 bg-gray-100 rounded-lg sm:p-10 lg:flex lg:items-center">
              <div className="flex-1">
                <div>
                  <h3 className="inline-flex px-4 py-1 text-sm font-semibold tracking-wide text-white uppercase bg-gray-800 rounded-full">
                    <span className="mr-2 align-baseline">
                      <FontAwesomeIcon className="text-red-500" icon={faHeart} />
                    </span>
                    Design-driven background
                  </h3>
                </div>
                <div className="mt-4 text-lg text-gray-700">
                  <span className="font-bold">
                    After a few years as an interactive media designer in the industry, I moved into
                    software engineering and later into neurotech.
                  </span>{" "}
                  When working on brain-computer interface software, I believe it’s advantageous to
                  apply a deep knowledge of design thinking and a constant focus on user experience,
                  particularly in the experimental field of virtual reality in combination with
                  neural interfaces.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
