 import React,{useState} from 'react'
 import { Canvas } from '@react-three/fiber' 
 import { Suspense } from 'react'
 import Scene from './components/Scene'
 import { Environment, Preload, RoundedBox, Scroll, ScrollControls } from '@react-three/drei'
 import Loaderr from './components/Loaderr'
 import './App.css'
import Headerrr from './components/Headerrr'
import Titleupdate from './components/Titleupdate'
import Features from './components/Features'
import Ui from './components/Ui' 
 export default function App() {
   const [features,setfratures]=useState(true);
    const [rotat,setRotate]=useState(false);
   
   return (
     <div className='w-screen h-screen'>
      <Canvas shadows>
        <Suspense fallback={<Loaderr />}>
          
         
          <ambientLight intensity={2} />
         
         
         <color attach={"background"} args={["#F8F8F8"]}/>
        
         <ScrollControls pages={6} horizontal={false}>
          <Scene rotat={rotat}
          setfratures={setfratures}
          />
        <Scroll html >
          {
            !rotat? <Ui />: null
          }
        </Scroll>

          </ScrollControls>
      
        </Suspense>
      <Preload all />
        
      </Canvas>
     <Headerrr />
     {!features? <Features
     rotat={rotat}
     setRotate={setRotate} />: null}
     <Titleupdate />
      
     </div>
   )
 }



// import { Canvas } from '@react-three/fiber'
// import React from 'react' 

// function App() {
//   return (
//     <div className="bg-yellow-300 w-screen h-screen">
//       <Canvas className="w-full h-full" >
//         <mesh>
           
//         </mesh>
//       </Canvas>
//     </div>
//   )
// }

// export default App
 