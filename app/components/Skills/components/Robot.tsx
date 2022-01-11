import { Mesh, MeshStandardMaterial } from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type RobotGLTFResult = GLTF & {
  nodes: {
    Mesh: Mesh
    Mesh_1: Mesh
    Mesh_2: Mesh
    Mesh_3: Mesh
    Mesh_4: Mesh
  }
  materials: {
    Material_1: MeshStandardMaterial
    Material_2: MeshStandardMaterial
    Material_3: MeshStandardMaterial
    Material_4: MeshStandardMaterial
    Material_5: MeshStandardMaterial
  }
}

export default function Robot(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "./models/robot-transformed.glb"
  ) as unknown as RobotGLTFResult
  return (
    <group {...props} dispose={null} position={[0, -2.25, 0]} scale={2.1}>
      <ambientLight intensity={0.1} />
      <fog attach="fog" args={["#202020", 1, 10]} />
      <directionalLight color="white" position={[2, 5, 0]} intensity={1} />
      <directionalLight color="white" position={[-2, -5, 5]} intensity={1} />
      <mesh geometry={nodes.Mesh.geometry} material={materials.Material_1} />
      <mesh geometry={nodes.Mesh_1.geometry} material={materials.Material_2} />
      <mesh geometry={nodes.Mesh_2.geometry} material={materials.Material_3} />
      <mesh geometry={nodes.Mesh_3.geometry} material={materials.Material_4} />
      <mesh geometry={nodes.Mesh_4.geometry} material={materials.Material_5} />
    </group>
  )
}

useGLTF.preload("./models/robot-transformed.glb")
