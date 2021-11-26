import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import BrainModel from "./components/BrainModel"

export default function Brain() {
  return (
    <div className="fixed w-screen h-screen bg-gray-900 z-5">
      <div className="fixed z-10 w-screen h-screen bg-gray-900 pointer-events-none opacity-80"></div>
      <Canvas>
        <ambientLight intensity={0.05} />
        <directionalLight color="#FFE000" position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <BrainModel />
        </Suspense>
      </Canvas>
    </div>
  )
}
