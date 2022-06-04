import { Bounds, OrbitControls, Stars, useBounds } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import styled from "styled-components";
import Zillboard from "../../components/billboard/billboard";
import Space from "../../components/space/space";

const HomeDiv=styled.div`
    position:absolute;
    margin:0;
    padding:0;
    width: 100%;
    height: 100%;
    color:white;
    font-weight:700;
    font-size:35px
`;

const Menu=styled.div`
    display:flex;
    flex-direction:row;
    margin:30px;
    widhth:100%;
`;

const Kid=styled.div`
    margin:30px;
`;

//HOC for zooming into objects
function SelectToZoom(props:any) {
    const api = useBounds()
    return (
      <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit())} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
        {props.children}
      </group>
    )
  }

export default function Home(){
    return (
        <>
          <HomeDiv>
            <Menu>
                <Kid>Question</Kid> 
                <Kid>Hello</Kid> 
            </Menu>
          </HomeDiv>
            {/* camera={{ fov: 86, position: [20, 10, 40] }} */}
            <Canvas camera={{ position: [-20, 10, 90], fov: 50 }} dpr={[1, 2]}>
            <Suspense fallback={null}>
          {/* factor means star sizes from 1 to 7 */}
        <Stars
          radius={300}
          depth={60}
          count={50000}
          factor={7}
          saturation={0}
          fade={true}
        />
            <Bounds fit clip observe margin={1.2}>
            <SelectToZoom>
               <Space/>

{/* add maxPolarAngle={Math.PI / 1.75} to OrbitControls if you want to limit rotating */}
               <OrbitControls makeDefault minPolarAngle={0}  />
               </SelectToZoom>
            </Bounds>
            </Suspense>
           
            </Canvas>
        </>
    )
}