export default function Box(props: any) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FF40FF" />
    </mesh>
  )
}
