import React, {  useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
// drei is a library that provides functions like camera,shaders...
import  { Mesh } from "three";
import UFO from "../ufo/ufo";
import { Earth } from "../earth/earth";
import UFOSecond from "../ufo2/ufo-second";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


export default function Space() {

const [clicked,setClicked]=useState(false)

////This below is an external camera module
// const CameraController = () => {
//     const { camera, gl } = useThree();
//     useEffect(
//         () => {
//         const controls = new OrbitControls(camera, gl.domElement);
//         controls.minDistance = 4;
//         controls.maxDistance = 180;
//         return () => {
//             controls.dispose();
//         };
//         },
//         [camera, gl]
//     );
//     return null;
//     };


  //React's useRef won't automatically infer types despite pointing it to a typed ref. You can type the ref yourself by passing an type through useRef's generics:
    const earthRef = useRef<Mesh>(null!);
    const cloudsRef = useRef<Mesh>(null!);
    const ufoOneRef = useRef<Mesh>(null!);
    const ufoTwoRef = useRef<Mesh>(null!);



  useFrame((state: any) => {
    if (earthRef.current && cloudsRef && ufoOneRef) {

      const elapsedTime = state.clock.getElapsedTime();
      earthRef.current.children[1].rotation.y = elapsedTime / 30;
      earthRef.current.children[3].rotation.y = elapsedTime / 30;
     // The reason why the ufoRef will turn around the earth is that by default react-fiber-three groups elements
      ufoOneRef.current.rotation.y -= 0.002;
      ufoOneRef.current.children[0].rotation.y += 1;
      ufoTwoRef.current.rotation.y += 0.002;
      ufoTwoRef.current.children[0].rotation.y += 4;
    }


  });

  return (
    <>
      {/* Anything related to Three.js/react-three-fiber must go into the "Canvas" component AND YOU CAN NOT USE regular HTML element like,DIV etc.. ELEMENTS IN Canvas of react-three/fiber*/}
   
    {/* <CameraController /> */}
{/* 
        <OrbitControls
          enableZoom={true}
          maxDistance={4}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4} position={[0,3.1,0.5]}
        /> */}
        
        
          <mesh ref={earthRef} onClick={()=>setClicked(!clicked)}>
              <Earth/>
          </mesh>
          
         <mesh ref={ufoOneRef}>
            <UFO/>
        </mesh> 

        <mesh ref={ufoTwoRef}>
            <UFOSecond />
        </mesh>    
    </>
  );
}
