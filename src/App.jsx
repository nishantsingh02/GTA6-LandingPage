import { useState } from 'react'
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
import 'remixicon/fonts/remixicon.css'

function App() {
  const [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%" ,
    })
    .to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function() {
        if(this.progress() >= .9) {
          document.querySelector(".svg").remove()
          setShowContent(true)
          this.kill()
        }
      }
    })
  })

  useGSAP(() => {

    if(!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: -1,
      ease: "Expo.easeInOut"
    })

    gsap.to(".sky", {
      scale: 1.3,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut"
    })

    gsap.to(".bg", {
      scale: 1.2,
      rotate: 0,
      duration: 2,
      delay: -0.8,
      ease: "Expo.easeInOut"
    })

   

    const main = document.querySelector(".main");

    main ?.addEventListener("mousemove", function(e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
      gsap.to(".character", {
        x: xMove * 1.5,
      });
    });
  },[showContent])

  return (
    <>
    <div className='svg flex justify-center items-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000] '>
      <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice' >
        <defs>
          <mask id="viMask">
            <rect width="100%" height="100%" fill="black" />
            <g className='vi-mask-group'>
              <text
                x="50%"
                y="50%"
                fontSize="250"
                textAnchor="middle"
                fill="white"
                dominantBaseline="middle"
                fontFamily="Arial Black"
              >
                VI
              </text>
            </g>
          </mask>
        </defs>
        <image
        href="./bg.png"
        width="100%"
        height="100%"
        preserveAspectRatio='xMidYMid slice'
        mask="url(#viMask)"
        />
      </svg>
    </div>
    {showContent && <div className='main w-full rotate-[-10deg] scale-[1.7] '>
      <div className='landing overflow-hidden relative w-full h-screen bg-black'>
        <div className='navbar absolute z-[10] top-0 left-0 w-full py-10 px-10 '>
          <div className='logo flex gap-3'>
            <div className='lines flex flex-col gap-1'>
              <div className='lines w-10 h-1 bg-white'></div>
              <div className='lines w-8 h-1 bg-white'></div>
              <div className='lines w-5 h-1 bg-white'></div>
            </div>
            <h3 className='text-4xl -mt-3 leading-none text-amber-50'>Rockstar</h3>
          </div>
        </div>
        <div className='imagesdiv overflow-hidden relative w-full h-screen'>
          <img className='sky scale-[1.5] rotate-[-20deg] absolute left-0 top-0 w-full h-full object-cover' src="./sky.png" alt="" />
          <img className='bg scale-[1.8] rotate-[-3deg] absolute left-0 top-0 w-full h-full object-cover' src="./bg.png" alt="" />
          <div className='text flex flex-col gap-4 text-amber-50 absolute top-0 left-1/2 -translate-x-1/2 '>
          <h1 className="text-9xl -ml-20">grand</h1>
          <h1 className="text-9xl  ml-20">theft</h1>
          <h1 className="text-9xl -ml-20">auto</h1>
        </div>
          <img className='character absolute left-1/2 -translate-x-1/2 -bottom-[60%] scale-[0.7]' src="./girlbg.png" alt="" />
          
        </div>
          <div className='btmbar mt-30 text-amber-50 absolute bottom-0 left-0 z-[11] w-full py-15 px-10 bg-gradient-to-t from-black to-transparent'>
            <div className='flex gap-4 items-center'>
              <i className="text-4xl ri-arrow-down-line"></i>
              <h3 className='text-xl '>Scroll Down</h3>
            </div>
            <img className='h-[65px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src="./ps5.png" alt="" />
          </div>
        </div>
        <div className='w-full h-screen overflow-hidden flex px-10 items-center justify-center bg-black'>
          <div className='cntnr h-[80%] flex w-full '>
              <div className='limg w-1/2 relative h-full'>
            <img className='absolute top-1/2 left-1/2 -translate-x-1/2 ml-20  scale-[1.9] -translate-y-1/2' src="./imag.png" alt="" />
          </div>
          <div className='rg ml-50   text-amber-50'>
            <h1 className='text-8xl'>Still Running,</h1>
            <h1 className='text-7xl'>not Hunting</h1>
            <p className=' mt-10 text-xl w-[60%] font-[Helvetica_Now_Display]'>Step into the chaos of Vice City with GTA VI — where danger, power, and ambition collide. Experience a sprawling open world, dynamic characters, and a relentless storyline that puts you in control of your rise through the criminal underworld. The city never sleeps, and neither can you.</p>
            <p className='mt-3 text-xl w-[60%] font-[Helvetica_Now_Display]'>From high-speed chases to underground deals, immerse yourself in a next-gen experience where your actions shape the city around you. Whether you're climbing the criminal ladder or burning it all down, this is your empire to build—or destroy.</p>
            <button className='bg-yellow-500 mt-7 rounded-sm text-black text-4xl px-7 py-7'>Download Now</button>
          </div>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default App
