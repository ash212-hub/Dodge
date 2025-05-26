 import React, { useEffect, useRef, useLayoutEffect } from "react";
import { OrbitControls, useScroll, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";  
import { gsap } from "gsap"; 

export default function Lights({ rotat, setfratures }) { 
  const scroll = useScroll();
  const timeline = useRef(null);
  const camref = useRef(); 

  useLayoutEffect(() => {
    // Create GSAP context for safe animation management
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true });

      // Lift
      timeline.current.to(camref.current.position, {
        y: 0.2, duration: 0.5, 
        onUpdate: () => camref.current.lookAt(0, 0, 0),
      });

      // First 1/4
      timeline.current.to(camref.current.position, {
        x: 1.2, z: 0, duration: 1, 
        onUpdate: () => {
          camref.current.lookAt(0, 0, 0);
          setfratures(true);
        }
      });

      // Second 2/4
      timeline.current.to(camref.current.position, {
        x: 0, z: -2, duration: 1, 
        onUpdate: () => {
          camref.current.lookAt(0, 0, 0);
          setfratures(true);
        }
      });

      // Third 3/4
      timeline.current.to(camref.current.position, {
        x: -1.2, z: 0, duration: 1, 
        onUpdate: () => {
          camref.current.lookAt(0, 0, 0);
          setfratures(true);
        }
      });

      // Fourth 4/4 (Full circle)
      timeline.current.to(camref.current.position, {
        x: 0, z: 2, duration: 1, 
        onUpdate: () => {
          camref.current.lookAt(0, 0, 0);
          setfratures(true);
        }
      });

      // Down
      timeline.current.to(camref.current.position, {
        y: 0, duration: 0.5, 
        onUpdate: () => {
          camref.current.lookAt(0, 0, 0);
          setfratures(false);
        }
      });

      
     
              
      
    }, camref);

    return () => ctx.revert(); // Cleanup GSAP animations properly
  }, []);

  useFrame(() => {
    
      timeline.current.time(scroll.offset * timeline.current.duration());
       if (rotat) {
    gsap.to(camref.current.position, {
      z: 8,
      onUpdate: () => {
        camref.current.lookAt(0, 1, 0);
        
      }
    });
  } else {
    gsap.to(camref.current.position, {
      z: 2,
      ease: "power1.inOut",
      
    });
  }
   
  });

 
 
 

  return (
    <>
      <PerspectiveCamera makeDefault position={[0,0,2]} fov={50} ref={camref} /> 
    
      <OrbitControls enabled={false} />   
      
    </>
  );
}
