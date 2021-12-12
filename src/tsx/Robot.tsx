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
  materials: {
    Material_1: THREE.MeshStandardMaterial
    Material_2: THREE.MeshStandardMaterial
    Material_3: THREE.MeshStandardMaterial
    Material_4: THREE.MeshStandardMaterial
    Material_5: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/robot-transformed.glb") as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh.geometry} material={materials.Material_1} />
      <mesh geometry={nodes.Mesh_1.geometry} material={materials.Material_2} />
      <mesh geometry={nodes.Mesh_2.geometry} material={materials.Material_3} />
      <mesh geometry={nodes.Mesh_3.geometry} material={materials.Material_4} />
      <mesh geometry={nodes.Mesh_4.geometry} material={materials.Material_5} />
    </group>
  )
}

useGLTF.preload("/robot-transformed.glb")
