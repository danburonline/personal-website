import { useMemo, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useThree } from "@react-three/fiber"
import { Euler, Mesh, Quaternion } from "three"

type DanielModelGLTFResult = GLTF & {
  nodes: {
    Body: Mesh
    Eyebrows: Mesh
    Nose: Mesh
    Ears: Mesh
    Eyes: Mesh
    Glasses: Mesh
    Head: Mesh
    SideHair: Mesh
    TopHair: Mesh
  }
}

export default function DanielModel() {
  const danielModelRef = useRef<Mesh>()
  const [fiberEuler, fiberQuaternion] = useMemo(() => [new Euler(), new Quaternion()], [])
  const { mouse } = useThree()

  useFrame(() => {
    if (danielModelRef && danielModelRef.current) {
      fiberEuler.set((-mouse.y * Math.PI) / 10, (mouse.x * Math.PI) / 6, 0)
      danielModelRef.current.quaternion.slerp(fiberQuaternion.setFromEuler(fiberEuler), 0.1)
    }
  })

  const { nodes } = useGLTF("./models/daniel-transformed.glb") as unknown as DanielModelGLTFResult
  return (
    <group ref={danielModelRef} dispose={null}>
      <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.Eyebrows.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.Nose.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.Ears.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.Eyes.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.Glasses.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.Head.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.SideHair.geometry}>
        <meshStandardMaterial />
      </mesh>
      <mesh geometry={nodes.TopHair.geometry}>
        <meshStandardMaterial />
      </mesh>
    </group>
  )
}

useGLTF.preload("./models/daniel-transformed.glb")
