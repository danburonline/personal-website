import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import BrainModel from "./components/BrainModel"

export default function Brain() {
  return (
    <div className="fixed w-screen h-screen bg-gray-900 z-5">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <BrainModel />
        </Suspense>
      </Canvas>
    </div>
  )
}
