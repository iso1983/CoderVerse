import React from "react";
import {  useLoader } from "@react-three/fiber"
// drei is a library that provides functions like camera,shaders...
import * as THREE from 'three' 
import EarthDayMap from '../../assets/textures/8k_earth_daymap.jpg'
import EarthNormalMap from '../../assets/textures/8k_earth_normal_map.jpg'
import EarthSpecularMap from '../../assets/textures/8k_earth_specular_map.jpg'
import EarthCloudsMap from '../../assets/textures/8k_earth_clouds.jpg'
import { TextureLoader} from 'three'
import Zillboard from "../billboard/billboard";
// import { OrbitControls } from "@react-three/drei";


export function Earth(props: any) {

    const [colorMap,normalMap,specularMap,cloudsMap]=useLoader(TextureLoader,[EarthDayMap,EarthNormalMap,EarthSpecularMap,EarthCloudsMap]);


  return (
    <>
    {/* ambientLigh lights the whole world but it does not exist in space ,only sun points light to space*/}
    {/* <ambientLight intensity={1}/> */}
    <pointLight color='#f6f3ea' position={[2,0,2]} intensity={1.6}/>

    <mesh position={[4,1,-3]}>
        {/* cloud is another mesh that will be outside of the world and the side argument helps us with that and we make cloud sphere a little bigger 1.0005 because this sphere is outside of the world */}
        <sphereGeometry args={[1.005,32,32]}/>
        <meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
    </mesh>
 

 <ambientLight></ambientLight>
    <mesh position={[4,1,-3]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={1.5} roughness={0.7} />
    </mesh>

    <Zillboard/>
 
    </>
  );
}
