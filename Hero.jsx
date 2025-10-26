import React from 'react'

const Hero = () => {
  return (
    <main className='relative w-full h-screen overflow-hidden flex justify-center items-center'>
      {/* Background Video */}
      <video
        src="\Videos\Main Vedio.mp4"
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-full object-cover absolute top-0 left-0 -z-10'
      ></video>

         {/* Overlay Content */}
        <div className='absolute bottom-[20%] flex flex-col items-center gap-5 w-full'>
            <img src="\Images\Image.jpg.png" alt="Pubg-text"
            className='md:w-[30rem] w-[20rem]'
            />

            <h1 className='md:text-2xl text-lg font-bold text-white'>
                Explore, Capture, Conquer
            </h1>

             {/* Button + Logo + Notice */}
            <div className='flex flex-col items-center gap-4 w-full'>
            <button className="h-10 px-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300 text-white">
                Play Now
            </button>

                <div className='flex items-center gap-5 text-3xl font-extrabold text-gray-200'>
                    <img className='md:h-16 h-12' src='\Images\pubg_PNG40-removebg-preview.png' alt='Pubg-logo'/> Pubg Mobile
                </div>

                <p className='max-w-[80%] text-center text-[#babaff] text-sm'>
                    Notice: This is a fan-made website and is not affiliated with Pubg Mobile. All rights reserved to the respective owners.
                </p>
            </div>

            <div className='absolute bottom-6 right-6 animate-bounce sm:inline-block hidden'>
                <div className='flex flex-col items-center'>
                    {/* Outer mouse-like shape */}
                    <div className='w-8 h-12 border-2 border-[#babaff] rounded-full flex justify-center pt-1'>
                        {/* Inner animated dot */}
                        <div className='w-1 h-3 bg-[#babaff] rounded-full animate-pulse'></div>
                    </div>

                    <p className='text-[#babaff] mt-2 text-sm'>Scroll Down</p>
                </div>
            </div>




        </div>
    </main>
  )
}

export default Hero
