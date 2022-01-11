import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { neuroscienceList, artificialIntelligenceList, virtualRealityList } from "./data/skillLists"
import Header from "./components/Header"
import { Canvas } from "@react-three/fiber"
import Brain from "./components/Brain"
import Headset from "./components/Headset"
import Robot from "./components/Robot"
import { Environment, OrbitControls } from "@react-three/drei"
import { Suspense } from "react"

// TODO Add different component (see draft in Figma)

export default function Skills() {
  return (
    <div className="pt-10 bg-gray-900">
      <Header />
      <div className="pb-12 mt-16 bg-white lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 bg-gray-900 h-5/6 lg:h-2/3" />
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-l-lg">
                  <div className="flex flex-col flex-1">
                    <div className="bg-[#f1b69b] h-80">
                      <Canvas>
                        <Brain />
                        <OrbitControls enableZoom={false} />
                      </Canvas>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {neuroscienceList.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="flex-shrink-0 w-6 h-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto mt-10 lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    aria-hidden="true"
                  />
                  <div className="bg-[#343ef3] rounded-t-lg lg:h-96 h-80">
                    <Canvas>
                      <Suspense fallback={null}>
                        <Robot />
                        <OrbitControls enableZoom={false} />
                        <Environment preset="dawn" />
                      </Suspense>
                    </Canvas>
                  </div>
                  <div className="px-6 pt-10 pb-8 border-t-2 border-gray-100 rounded-b-lg bg-gray-50 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {virtualRealityList.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <FontAwesomeIcon
                              icon={faCheck}
                              className="flex-shrink-0 w-6 h-6 text-green-500"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto mt-10 lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg lg:rounded-none lg:rounded-r-lg">
                  <div className="flex flex-col flex-1">
                    <div className="bg-[#17171b] h-80">
                      <Canvas>
                        <Suspense fallback={null}>
                          <Headset />
                          <ambientLight intensity={0.25} />
                          <directionalLight
                            castShadow
                            intensity={2}
                            position={[10, 6, 6]}
                            shadow-mapSize={[1024, 1024]}
                          />
                          <OrbitControls enableZoom={false} />
                          <fog attach="fog" args={["#17171b", 5, 10]} />
                          <color attach="background" args={["#17171b"]} />
                          <Environment preset="dawn" />
                        </Suspense>
                      </Canvas>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-6 border-t-2 border-gray-100 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {artificialIntelligenceList.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="flex-shrink-0 w-6 h-6 text-green-500"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
