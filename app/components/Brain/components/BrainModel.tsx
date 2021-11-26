import { useMemo, useRef } from "react"
import { useGLTF, Shadow } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useThree } from "@react-three/fiber"
import { Mesh, Euler, Quaternion } from "three"
import { a } from "@react-spring/three"

type BrainGLTFResult = GLTF & {
  nodes: {
    Cerebellum: Mesh
    Stem: Mesh
    Left: Mesh
    Right: Mesh
  }
}

export default function Model() {
  const brainRef = useRef<Mesh>()
  const [rEuler, rQuaternion] = useMemo(() => [new Euler(), new Quaternion()], [])
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
    <a.group ref={brainRef} dispose={null}>
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
      <Shadow opacity={0.5} scale={[8, 5, 1]} position={[0, -4.5, 0]} />
    </a.group>
  )
}

useGLTF.preload("http://localhost:3000/models/brain-transformed.glb")
