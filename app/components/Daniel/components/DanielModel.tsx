import * as THREE from "three"
import React, { useMemo, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { Euler, Mesh, Quaternion } from "three"
import { useFrame, useThree } from "@react-three/fiber"

type DanielModelGLTFResult = GLTF & {
  nodes: {
    Body: THREE.Mesh
    Mouth: THREE.Mesh
    Eyebrows: THREE.Mesh
    Nose: THREE.Mesh
    Ears: THREE.Mesh
    Eyes: THREE.Mesh
    Glasses: THREE.Mesh
    Head: THREE.Mesh
    SideHair: THREE.Mesh
    TopHair: THREE.Mesh
  }
}

export default function Model() {
  const danielRef = useRef<Mesh>()
  const [rEuler, rQuaternion] = useMemo(() => [new Euler(), new Quaternion()], [])
  const { mouse } = useThree()

  useFrame(() => {
    if (danielRef && danielRef.current) {
      rEuler.set((-mouse.y * Math.PI) / 10, (mouse.x * Math.PI) / 6, 0)
      danielRef.current.quaternion.slerp(rQuaternion.setFromEuler(rEuler), 0.1)
    }
  })

  const { nodes } = useGLTF(
    "http://localhost:3000/models/daniel-transformed.glb"
  ) as unknown as DanielModelGLTFResult
  return (
    <group dispose={null} ref={danielRef} scale={6} position={[0, -0.5, 0]}>
      <mesh
        geometry={nodes.Body.geometry}
        material={nodes.Body.material}
        position={[0, -0.16, 0.02]}
        scale={[0.14, 0.16, 0.15]}
      />
      <mesh
        geometry={nodes.Mouth.geometry}
        material={nodes.Mouth.material}
        position={[-0.01, 0.12, 0.23]}
        rotation={[0.21, 0, 0]}
        scale={[0.03, 0, 0]}
      />
      <mesh
        geometry={nodes.Eyebrows.geometry}
        material={nodes.Eyebrows.material}
        position={[-0.01, 0.29, -0.07]}
        scale={[0.67, 0.06, 0.13]}
      />
      <mesh
        geometry={nodes.Nose.geometry}
        material={nodes.Nose.material}
        position={[-0.01, 0.2, 0.23]}
        scale={[0.04, 0.04, 0.05]}
      />
      <mesh
        geometry={nodes.Ears.geometry}
        material={nodes.Ears.material}
        position={[-0.01, 0.77, 0.18]}
        scale={0.81}
      />
      <mesh
        geometry={nodes.Eyes.geometry}
        material={nodes.Eyes.material}
        position={[-0.01, 0.25, 0.13]}
        rotation={[0, 0, 0]}
        scale={[0.03, 0.04, 0.03]}
      />
      <mesh
        geometry={nodes.Glasses.geometry}
        material={nodes.Glasses.material}
        position={[-0.01, 0.26, 0.23]}
        rotation={[-0.23, 0, -Math.PI / 2]}
        scale={0.0075}
      />
      <mesh
        geometry={nodes.Head.geometry}
        material={nodes.Head.material}
        position={[-0.01, 0.22, 0.13]}
        scale={[0.63, 0.74, 0.69]}
      />
      <mesh
        geometry={nodes.SideHair.geometry}
        material={nodes.SideHair.material}
        position={[-0.01, 0.18, 0.05]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.68, -0.91, -0.73]}
      />
      <mesh
        geometry={nodes.TopHair.geometry}
        material={nodes.TopHair.material}
        position={[-0.01, 0.18, 0.05]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.74, 0.85, 0.73]}
      />
    </group>
  )
}

useGLTF.preload("http://localhost:3000/models/daniel-transformed.glb")
