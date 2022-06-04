import { Billboard,RoundedBox ,Text } from "@react-three/drei"


interface Propstext{
    text:string
}

const Billy=(props:Propstext)=>{
    return(
        <group>
        <Billboard follow={true} lockX={false} lockY={false} lockZ={false} position={[4,2.30,-3]} scale={[1,1,1]}>
              <Text fontSize={0.2} outlineWidth={'15%'} outlineColor="#000000" outlineOpacity={1}>
               {props.text}
              </Text>
        </Billboard>
        <RoundedBox  position={[4,2.1,-3]} args={[0.1,0.2,0.2]} radius={0.05} smoothness={4}>
            <meshStandardMaterial color="white" />
        </RoundedBox >
        </group>
    )
}




export default function Zillboard(){
    return(
        <>
                <Billy text="Javascript"/>
        </>
    )
}