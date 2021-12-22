import { Mesh } from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type BrainGLTFResult = GLTF & {
  nodes: {
    Mesh: Mesh
    Mesh_1: Mesh
    Mesh_2: Mesh
    Mesh_3: Mesh
    Mesh_4: Mesh
  }
}

// TODO Get a non low-poly version of the brain model

export default function Brain(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("./models/brain-transformed.glb") as unknown as BrainGLTFResult
  return (
    <group {...props} dispose={null} position={[0.14, -1.8, 0]} scale={0.425}>
      <ambientLight intensity={0.1} />
      <fog attach="fog" args={["#202020", 1, 10]} />
      <directionalLight color="white" position={[0, 10, 0]} intensity={1} />
      <directionalLight color="white" position={[-1, -10, 0]} intensity={1} />
      <mesh geometry={nodes.Mesh.geometry}>
        <meshStandardMaterial attach="material" color="#f1b69b" />
      </mesh>
      <mesh geometry={nodes.Mesh_1.geometry}>
        <meshStandardMaterial attach="material" color="#f1b69b" />
      </mesh>
      <mesh geometry={nodes.Mesh_2.geometry}>
        <meshStandardMaterial attach="material" color="#f1b69b" />
      </mesh>
      <mesh geometry={nodes.Mesh_3.geometry}>
        <meshStandardMaterial attach="material" color="#f1b69b" />
      </mesh>
      <mesh geometry={nodes.Mesh_4.geometry}>
        <meshStandardMaterial attach="material" color="#f1b69b" />
      </mesh>
    </group>
  )
}

useGLTF.preload("./models/brain-transformed.glb")
