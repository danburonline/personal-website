import { useEffect, useMemo, useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useThree } from "@react-three/fiber"
import { Euler, Mesh, Quaternion } from "three"
import useDeviceOrientation from "../hooks/useDeviceOrientation"
import { animated, useSpring, config } from "@react-spring/three"

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
  color?: string
  rotateByDeviceOrientation?: boolean
}

export default function DanielModel({
  scale: propsScale = 1.3,
  color: propsColor = "#FFE000",
  rotateByDeviceOrientation = false,
}: DanielModelProps) {
  const danielModelRef = useRef<Mesh>()
  const [doneLoading, setDoneLoading] = useState(false)
  const [fiberEuler, fiberQuaternion] = useMemo(() => [new Euler(), new Quaternion()], [])
  const { mouse } = useThree()
  const { gamma } = useDeviceOrientation()
  const { scale } = useSpring({
    scale: doneLoading ? propsScale : 0,
    config: config.stiff,
  })

  useEffect(() => {
    setDoneLoading(true)
  }, [setDoneLoading])

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

  // TODO Add a more compressed version of the model
  // TODO Add more interesting post-processing effects and filters

  const { nodes } = useGLTF("./models/daniel-transformed.glb") as unknown as DanielModelGLTFResult
  return (
    <animated.group scale={scale} ref={danielModelRef} dispose={null}>
      <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
      <mesh geometry={nodes.Eyebrows.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
      <mesh geometry={nodes.Nose.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
      <mesh geometry={nodes.Ears.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
      <mesh geometry={nodes.Eyes.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
      <mesh geometry={nodes.Glasses.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
      <mesh geometry={nodes.Head.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
      <mesh geometry={nodes.SideHair.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
      <mesh geometry={nodes.TopHair.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
    </animated.group>
  )
}

useGLTF.preload("./models/daniel-transformed.glb")
