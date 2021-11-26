import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import DanielModel from "./components/DanielModel"

export default function Daniel() {
  return (
    <div className="fixed w-screen h-screen bg-gray-900 z-5">
      <div className="fixed z-10 w-screen h-screen bg-gray-900 bg-opacity-50 pointer-events-none"></div>
      <Canvas>
        <ambientLight intensity={0.01} />
        <directionalLight color="#FFE000" position={[0, 0, 5]} intensity={0.5} />
        <Suspense fallback={null}>
          <DanielModel />
        </Suspense>
      </Canvas>
    </div>
  )
}
