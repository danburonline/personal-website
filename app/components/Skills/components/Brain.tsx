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

export default function Brain(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("./models/brain-transformed.glb") as unknown as BrainGLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh.geometry} />
      <mesh geometry={nodes.Mesh_1.geometry} />
      <mesh geometry={nodes.Mesh_2.geometry} />
      <mesh geometry={nodes.Mesh_3.geometry} />
      <mesh geometry={nodes.Mesh_4.geometry} />
    </group>
  )
}

useGLTF.preload("./models/brain-transformed.glb")
