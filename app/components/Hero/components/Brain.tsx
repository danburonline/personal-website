import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { Mesh } from "three"

export default function Brain() {
  const brainRef = useRef<Mesh>()
  useFrame(() => {
    if (brainRef && brainRef.current) {
      brainRef.current!.rotation.y += 0.005
    }
  })

  return (
    <mesh ref={brainRef}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  )
}
