 import React, { useRef } from 'react'
import { Car } from './Car'
import { Center, OrbitControls, Stage, Text } from '@react-three/drei'
import Lights from './Lights'
import Secondcam from './Secondcam'

export default function Scene({ rotat, seat, setfratures }) {
  const carref = useRef()

  return (
    <>
      <Stage>
        <Center>
          <Car carref={carref} />
        </Center>
      </Stage>
      <Secondcam rotat={rotat} />
      <Lights
        rotat={rotat}
        seat={seat}
        setfratures={setfratures}
      />
     
    </>
  )
}