import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { useMediaQuery } from "react-responsive"
import DanielModel from "./components/DanielModel"

export default function Daniel() {
  const isTabletWidth = useMediaQuery({
    query: "(max-width: 800px)",
  })

  const isMobileWidth = useMediaQuery({
    query: "(max-width: 639px)",
  })

  return (
    <div className="fixed w-screen h-screen bg-gray-900 z-5">
      {/* {isMobileWidth ? <p className="z-20">is only on mobile</p> : null} */}
      <div className="fixed z-10 w-screen h-screen bg-gray-900 pointer-events-none bg-opacity-60"></div>
      <Canvas>
        <ambientLight intensity={0.01} />
        <fog attach="fog" args={["#202020", 1, 10]} />
        <directionalLight color="white" position={[0, 3, 0]} intensity={0.5} />
        <directionalLight color="white" position={[-1, -3, 0]} intensity={0.2} />
        <Suspense fallback={null}>
          <DanielModel scale={isTabletWidth ? 1.15 : isMobileWidth ? 1.1 : 1.3} />
        </Suspense>
      </Canvas>
    </div>
  )
}
