import React from 'react'

export default function Features({rotat,setRotate }) {
   console.log(rotat)
  return (
    <div className='absolute bottom-0 left-[-1rem] w-screen h-auto text-white  '>
     <div className='flex flex-col items-end justify-end w-full h-auto p-1 '>
        <div className=' rounded-lg p-1  bg-white/10 backdrop-blur-sm shadow-lg'>
        
        <div className='flex items-center justify-center flex-col gap-2 p-1 text-white rounded-lg '>
          
 
 <div
     onClick={() => setRotate(!rotat)} 
  className={`cursor-pointer p-1 w-32 text-center rounded-md transition duration-300 
    ${rotat ? "bg-red-500 text-white border border-blue-700 font-mono" : "font-mono bg-gray-300 text-black border border-gray-500 hover:bg-gray-400 hover:border-gray-600 active:bg-gray-500 active:border-gray-700"}`}>
  {!rotat ? "360 view" : "stop view"}
</div>


                 

             
   
   
 
             
        </div>
        </div>
        
     </div>

    </div>
  )
}
