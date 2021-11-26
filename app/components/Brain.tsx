import * as THREE from "three"
import React, { Suspense, useRef } from "react"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { Canvas, useFrame } from "@react-three/fiber"
import { Mesh } from "three"

type BrainGLTFResult = GLTF & {
  nodes: {
    Pituitary: THREE.Mesh
    Cerebellum: THREE.Mesh
    Brain_Center: THREE.Mesh
    Stem: THREE.Mesh
    Brain_1: THREE.Mesh
    Brain_1001_Brain_1002: THREE.Mesh
  }
  materials: {
    wire_134110008: THREE.MeshStandardMaterial
    wire_028089177: THREE.MeshStandardMaterial
    wire_224198087: THREE.MeshStandardMaterial
    wire_134006006: THREE.MeshStandardMaterial
    wire_177028149: THREE.MeshStandardMaterial
    ["wire_177028149.002"]: THREE.MeshStandardMaterial
  }
}

function BrainModel(props) {
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

export default function Brain() {
  return (
    <div className="fixed w-screen h-screen bg-gray-900 z-5">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <Suspense fallback={null}>
          <BrainModel />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

useGLTF.preload("http://localhost:3000/models/brain-transformed.glb")
