import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type GLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh
    Mesh_1: THREE.Mesh
    Mesh_2: THREE.Mesh
    Mesh_3: THREE.Mesh
    Mesh_4: THREE.Mesh
  }
}

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/brain-transformed.glb") as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh.geometry} material={nodes.Mesh.material} />
      <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material} />
      <mesh geometry={nodes.Mesh_2.geometry} material={nodes.Mesh_2.material} />
      <mesh geometry={nodes.Mesh_3.geometry} material={nodes.Mesh_3.material} />
      <mesh geometry={nodes.Mesh_4.geometry} material={nodes.Mesh_4.material} />
    </group>
  )
}

useGLTF.preload("/brain-transformed.glb")
