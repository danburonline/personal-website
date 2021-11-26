import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Mesh } from "three"
import type { BrainGLTFResult } from "../types"

export default function BrainModel(props) {
  const { nodes, materials } = useGLTF(
    "http://localhost:3000/models/brain-transformed.glb"
  ) as unknown as BrainGLTFResult

  const brainRef = useRef<Mesh>()
  useFrame(() => {
    if (brainRef && brainRef.current) {
      brainRef.current!.rotation.y += 0.005
    }
  })

  return (
    <group ref={brainRef} {...props} dispose={null} scale={[0.05, 0.05, 0.05]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pituitary.geometry}
        material={materials.wire_134110008}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cerebellum.geometry}
        material={materials.wire_028089177}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Brain_Center.geometry}
        material={materials.wire_224198087}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stem.geometry}
        material={materials.wire_134006006}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Brain_1.geometry}
        material={materials.wire_177028149}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Brain_1001_Brain_1002.geometry}
        material={materials["wire_177028149.002"]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload("http://localhost:3000/models/brain-transformed.glb")
