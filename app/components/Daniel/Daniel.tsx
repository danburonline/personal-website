import useSupportsDeviceOrientation from "../../hooks/useSupportsDeviceOrientation"
import DanielModel from "./components/DanielModel"
import { Canvas } from "@react-three/fiber"
import React, { Suspense } from "react"
import { useMediaQuery } from "react-responsive"

export default function Daniel() {
  const isTabletWidth = useMediaQuery({
    query: "(max-width: 799px)",
  })

  const isMobileWidth = useMediaQuery({
    query: "(max-width: 639px)",
  })

  const supportsDeviceOrientation = useSupportsDeviceOrientation()

  return (
    <div className="absolute w-full h-full overflow-hidden bg-gray-900 z-5">
      <div className="absolute z-10 w-full h-full bg-gray-900 pointer-events-none bg-opacity-60"></div>
      <Canvas>
        <ambientLight intensity={0.02} />
        <fog attach="fog" args={["#202020", 1, 10]} />
        <directionalLight color="white" position={[0, 3, 0]} intensity={0.5} />
        <directionalLight color="white" position={[-1, -3, 0]} intensity={0.2} />
        <Suspense fallback={null}>
          <DanielModel
            scale={isTabletWidth ? 1.15 : isMobileWidth ? 1.1 : 1.3}
            rotateByDeviceOrientation={supportsDeviceOrientation ? true : false}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
