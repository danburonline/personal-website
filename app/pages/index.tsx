import { BlitzPage } from "blitz"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

const Home: BlitzPage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <ambientLight />
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      </Canvas>
    </>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
