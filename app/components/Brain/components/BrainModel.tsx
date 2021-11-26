import * as THREE from "three"
import React, { useMemo, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useThree } from "@react-three/fiber"
import { Mesh } from "three"
import { a } from "@react-spring/three"

type BrainGLTFResult = GLTF & {
  nodes: {
    Cerebellum: THREE.Mesh
    Stem: THREE.Mesh
    Left: THREE.Mesh
    Right: THREE.Mesh
  }
}

export default function Model(props: JSX.IntrinsicElements["group"]) {
  const brainRef = useRef<Mesh>()
  const [rEuler, rQuaternion] = useMemo(() => [new THREE.Euler(), new THREE.Quaternion()], [])
  const { mouse } = useThree()

  useFrame(() => {
    if (brainRef && brainRef.current) {
      rEuler.set((-mouse.y * Math.PI) / 10, (mouse.x * Math.PI) / 6, 0)
      brainRef.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
    }
  })

  const { nodes } = useGLTF(
    "http://localhost:3000/models/brain-transformed.glb"
  ) as unknown as BrainGLTFResult

  return (
    <a.group scale={[0.5, 0.5, 0.5]} ref={brainRef} {...props} dispose={null}>
      <mesh geometry={nodes.Cerebellum.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.Stem.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh name="Left" geometry={nodes.Left.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.Right.geometry}>
        <meshStandardMaterial />
      </mesh>
    </a.group>
  )
}

useGLTF.preload("http://localhost:3000/models/brain-transformed.glb")
