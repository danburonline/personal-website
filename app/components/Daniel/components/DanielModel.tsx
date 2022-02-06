import { useEffect, useMemo, useRef, useState } from "react"
import { useGLTF } from "@react-three/drei"
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { useFrame, useThree } from "@react-three/fiber"
import { Euler, Mesh, Quaternion } from "three"
import useDeviceOrientation from "../hooks/useDeviceOrientation"
import { animated, useSpring, config } from "@react-spring/three"

type DanielModelGLTFResult = GLTF & {
  nodes: {
    Daniel: Mesh
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
        if (gamma > 0.45 || gamma < -0.45) {
          const newGamma = gamma > 0.45 ? 0.45 : gamma < -0.45 ? -0.45 : 0
          fiberEuler.set(0, newGamma * 0.5 * Math.PI, 0)
        } else if (gamma < 0.45) {
          fiberEuler.set(0, gamma * 0.5 * Math.PI, 0)
        }

        danielModelRef.current.quaternion.slerp(fiberQuaternion.setFromEuler(fiberEuler), 0.1)
      }
    }
  })

  const { nodes } = useGLTF("./models/daniel-transformed.glb") as unknown as DanielModelGLTFResult
  return (
    <animated.group scale={scale} position={[0.05, 0, 0]} ref={danielModelRef} dispose={null}>
      <mesh geometry={nodes.Daniel.geometry}>
        <meshStandardMaterial color={propsColor} />
      </mesh>
    </animated.group>
  )
}

useGLTF.preload("./models/daniel-transformed.glb")
