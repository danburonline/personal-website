import * as THREE from "three"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"

type GLTFResult = GLTF & {
  nodes: {
    Daniel: THREE.Mesh
  }
}

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/daniel-transformed.glb") as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Daniel.geometry} />
    </group>
  )
}

useGLTF.preload("/daniel-transformed.glb")
