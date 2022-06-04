import { useGLTF,useHelper } from '@react-three/drei'
import { useRef } from 'react'
import { GLTF } from 'three-stdlib'
import { Group, PointLight, PointLightHelper } from "three";


type GLTFResult = GLTF & {
  nodes: {
    defaultMaterial: THREE.Mesh
  }
  materials: {
    material: THREE.MeshStandardMaterial
  }
}

export default function UFOSecond({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<Group>(null!)
  const { nodes, materials } = useGLTF('/ufo2/scene.gltf') as GLTFResult
  const lightRef= useRef<PointLight>(null!)
  // If you change 0 to 1 below ,you will get a red pyramid 
  useHelper(lightRef,PointLightHelper,0,"red")


  return (
    <group ref={group} {...props} dispose={null} position={[-3.5,2,1.2]}  scale={[0.2,0.2,0.2]}> 
    <pointLight ref={lightRef} position={[0, 1, 0]} distance={.4} intensity={90.7} />
    <mesh geometry={nodes.defaultMaterial.geometry} material={materials.material} >
    </mesh>
    </group>
  )
}