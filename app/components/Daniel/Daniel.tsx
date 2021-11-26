import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import DanielModel from "./components/DanielModel"

export default function Daniel() {
  return (
    <div className="fixed w-screen h-screen bg-gray-900 z-5">
      <div className="fixed z-10 w-screen h-screen bg-gray-900 pointer-events-none bg-opacity-60"></div>
      <Canvas>
        <ambientLight intensity={0.01} />
        <fog attach="fog" args={["#202020", 5, 20]} />
        <directionalLight color="white" position={[0, 3, 0]} intensity={0.5} />
        <directionalLight color="white" position={[-1, -3, 0]} intensity={0.2} />
        <Suspense fallback={null}>
          <DanielModel />
        </Suspense>
      </Canvas>
    </div>
  )
}
