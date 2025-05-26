import React, { useLayoutEffect, useRef}  from 'react'
import { Car } from './Car'
import { Center, OrbitControls, Stage, useScroll } from '@react-three/drei'  
import Lights from './Lights' 
import Secondcam from './Secondcam'
      
export default function Scene({rotat, seat,setfratures}) { 
  const carref = useRef()

  return (
     <mesh>
      
        
        <mesh>
          
            
      <Stage adjustCamera={0.6}>
             <Center>
         <Car carref={carref}   /> 
         </Center>
      </Stage>
              
          

 
        
        <Secondcam  rotat={rotat} />
        <Lights
        rotat={rotat}
        seat={seat}
        setfratures={setfratures}
         />
         </mesh>         
     </mesh>
  )
}
