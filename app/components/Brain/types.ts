import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
import { Mesh, MeshStandardMaterial } from "three"

export type BrainGLTFResult = GLTF & {
  nodes: {
    Pituitary: Mesh
    Cerebellum: Mesh
    Brain_Center: Mesh
    Stem: Mesh
    Brain_1: Mesh
    Brain_1001_Brain_1002: Mesh
  }
  materials: {
    wire_134110008: MeshStandardMaterial
    wire_028089177: MeshStandardMaterial
    wire_224198087: MeshStandardMaterial
    wire_134006006: MeshStandardMaterial
    wire_177028149: MeshStandardMaterial
    ["wire_177028149.002"]: MeshStandardMaterial
  }
}
