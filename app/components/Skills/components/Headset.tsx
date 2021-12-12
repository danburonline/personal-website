import { Mesh } from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type HeadsetGLTFResult = GLTF & {
  nodes: {
    Mesh: Mesh
    Mesh_1: Mesh
    Mesh_2: Mesh
    Mesh_3: Mesh
  }
}

export default function Headset(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("./models/headset-transformed.glb") as unknown as HeadsetGLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh.geometry} material={nodes.Mesh.material} />
      <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material} />
      <mesh geometry={nodes.Mesh_2.geometry} material={nodes.Mesh_2.material} />
      <mesh geometry={nodes.Mesh_3.geometry} material={nodes.Mesh_3.material} />
    </group>
  )
}

useGLTF.preload("./models/headset-transformed.glb")
