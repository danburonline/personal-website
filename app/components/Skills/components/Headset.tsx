import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type HeadsetGLTFResult = GLTF & {
  nodes: {
    Mesh: THREE.Mesh
    Mesh_1: THREE.Mesh
    Mesh_2: THREE.Mesh
    Mesh_3: THREE.Mesh
  }
}

const bottleMaterial = new THREE.MeshPhysicalMaterial({
  color: "#efefef",
  transmission: 1,
  roughness: 0.35,
  // @ts-ignore
  thickness: 500,
  envMapIntensity: 4,
})

export default function Headset(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF("./models/headset-transformed.glb") as unknown as HeadsetGLTFResult
  return (
    <group {...props} dispose={null} scale={3.5}>
      <mesh geometry={nodes.Mesh.geometry} material={bottleMaterial} />
      <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material} />
      <mesh geometry={nodes.Mesh_2.geometry} material={nodes.Mesh_2.material} />
      <mesh geometry={nodes.Mesh_3.geometry} material={nodes.Mesh_3.material} />
    </group>
  )
}

useGLTF.preload("./models/headset-transformed.glb")
