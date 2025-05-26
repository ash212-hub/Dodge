 import React,{useRef} from "react";
import { Center, PerspectiveCamera } from "@react-three/drei";  
import { useThree ,useFrame} from "@react-three/fiber";
import * as THREE from 'three'
export default function SecondCam({rotat}) {
  const { width, height } = useThree((state) => state.viewport);
    const cameraRef = useRef(); 
   useFrame(({ clock }) => {
    if (rotat) {  
      const t = clock.getElapsedTime();
      const radius = 2.5;
      const x = Math.cos(t) * radius;
      const z = Math.sin(t) * radius;
      cameraRef.current.position.set(x, 0.2, z);
      cameraRef.current.lookAt(0, 0, 0);
    }
  });
 
  return (
    <>
      {/* Secondary Camera */}
   <PerspectiveCamera position={[0, 0, 2]} resolution={5024} frames={6000000} ref={cameraRef}>
  {(texture) => (
     
       <mesh position={[0,0.2,5]}>
      <planeGeometry args={[width/0.6,height/0.7]} />
      <meshBasicMaterial map={texture} />
    </mesh>
    
  )}
</PerspectiveCamera>

    
    
    </>
  );
}
