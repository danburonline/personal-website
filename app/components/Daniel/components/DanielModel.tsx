import { useMemo, useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useThree } from "@react-three/fiber"
import { Euler, Mesh, Quaternion } from "three"
import useDeviceOrientation from "../hooks/useDeviceOrientation"

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

type DanielModelProps = {
  scale?: number
  rotateByDeviceOrientation?: boolean
}

export default function DanielModel({
  scale = 1.3,
  rotateByDeviceOrientation = false,
}: DanielModelProps) {
  const danielModelRef = useRef<Mesh>()
  const [fiberEuler, fiberQuaternion] = useMemo(() => [new Euler(), new Quaternion()], [])
  const { mouse } = useThree()
  const { gamma } = useDeviceOrientation()

  useFrame(() => {
    if (danielModelRef && danielModelRef.current) {
      fiberEuler.set((-mouse.y * Math.PI) / 10, (mouse.x * Math.PI) / 6, 0)
      danielModelRef.current.quaternion.slerp(fiberQuaternion.setFromEuler(fiberEuler), 0.1)

      if (rotateByDeviceOrientation) {
        fiberEuler.set(0, gamma * 0.5 * Math.PI, 0)
        danielModelRef.current.quaternion.slerp(fiberQuaternion.setFromEuler(fiberEuler), 0.1)
      }
    }
  })

  const { nodes } = useGLTF("./models/daniel-transformed.glb") as unknown as DanielModelGLTFResult
  return (
    <group scale={scale} ref={danielModelRef} dispose={null}>
      <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial color={"#FFE000"} />
      </mesh>
      <mesh geometry={nodes.Eyebrows.geometry}>
        <meshStandardMaterial color={"#FFE000"} />
      </mesh>
      <mesh geometry={nodes.Nose.geometry}>
        <meshStandardMaterial color={"#FFE000"} />
      </mesh>
      <mesh geometry={nodes.Ears.geometry}>
        <meshStandardMaterial color={"#FFE000"} />
      </mesh>
      <mesh geometry={nodes.Eyes.geometry}>
        <meshStandardMaterial color={"#FFE000"} />
      </mesh>
      <mesh geometry={nodes.Glasses.geometry}>
        <meshStandardMaterial color={"#FFE000"} />
      </mesh>
      <mesh geometry={nodes.Head.geometry}>
        <meshStandardMaterial color={"#FFE000"} />
      </mesh>
      <mesh geometry={nodes.SideHair.geometry}>
        <meshStandardMaterial color={"#FFE000"} />
      </mesh>
      <mesh geometry={nodes.TopHair.geometry}>
        <meshStandardMaterial color={"#FFE000"} />
      </mesh>
    </group>
  )
}

useGLTF.preload("./models/daniel-transformed.glb")
