import React, { useEffect, useState } from "react";
import "./index.css";

export default function Card() {

  const [MotionDiv,setMotionDiv]=useState();
  const [clicked,setClicked]=useState(false);

  useEffect(()=>{
    import('framer-motion').then((mod)=>setMotionDiv(mod.motion.div));
  },[])

  if(!MotionDiv) return;

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <MotionDiv
      initial={{y:150,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:0.8}}
      onClick={()=>setClicked(prev=>!prev)} className="group -rotate-12  w-[300px] h-[180px] [perspective:1000px] font-sans">
        <div className={`relative w-full h-full text-center transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${clicked && "[transform:rotateY(180deg)]"}`}>
          
          {/* Front Side */}
          <div className="bg-image absolute w-full h-full flex flex-col justify-center border border-white shadow-lg [backface-visibility:hidden]">
            <div className="flex items-center justify-center w-full h-full gap-x-0.5">
              
              {/* Circle */}
              <div className="w-[45px] h-[45px] border-[6px] border-black rounded-full"></div>

              {/* Triangle (outline only, SVG) */}
              <svg width="45" height="45" viewBox="0 0 55 55" className="mr-2">
                <polygon
                  points="27.5,5 5,50 50,50"
                  fill="none"
                  stroke="black"
                  strokeWidth="6"
                />
              </svg>

              {/* Square */}
              <div className="w-[45px] h-[45px] border-[6px] border-black"></div>
            </div>
          </div>

          {/* Back Side */}
          <div className="bg-image absolute w-full h-full flex flex-col justify-center border border-black shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] text-black">
            <div className="flex items-center justify-center w-full h-full gap-x-3.5">
              <img src="/sg-logo.png" className="w-15" alt="SG Logo" />
              <span className="font-medium text-xl cursor-pointer hover:underline underline-offset-2">Click here</span>
            </div>
          </div>
          
        </div>
      </MotionDiv>
    </div>
  );
}