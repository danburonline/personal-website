import { Canvas } from "@react-three/fiber"
import Brain from "./Brain"

export default function Hero3D() {
  return (
    <div className="fixed w-screen h-screen bg-gray-900 z-5">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Brain />
      </Canvas>
    </div>
  )
}
