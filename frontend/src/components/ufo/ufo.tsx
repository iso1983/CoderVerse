// drei is a library that provides functions like camera,shaders...
import {  useGLTF, useHelper } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three' 
import { useRef } from "react";
import { Group, PointLight, PointLightHelper } from "three";



type GLTFResult = GLTF & {
  nodes: {
    ufo_low_poly_ufo_base_color_0: THREE.Mesh
  }
  materials: {
    ufo_base_color: THREE.MeshStandardMaterial
  }
}

export default function Model({ ...props }: JSX.IntrinsicElements['group']) {
  const group = useRef<Group>(null!)
  const { nodes, materials } = useGLTF('/ufo1/scene.gltf') as GLTFResult

  ////These 2 lines of code help to align light
  // const lightRef= useRef<PointLight>(null!)
  // If you change 0 to 1 below ,you will get a red pyramid 
  // useHelper(lightRef,PointLightHelper,1,"red")


  return (
    <group ref={group} {...props} dispose={null} position={[2.4,-1.1,1.2]} scale={[0.2,0.2,0.2]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}  >
    <pointLight  position={[0, 0, 1.7]} distance={0.4} intensity={9.7} />
            <mesh geometry={nodes.ufo_low_poly_ufo_base_color_0.geometry} material={materials.ufo_base_color} />
          </group>
        </group>
      </group>
    </group>
  )
}