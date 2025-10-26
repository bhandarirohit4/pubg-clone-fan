import React, { useEffect } from 'react'
import { Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Spline from '@splinetool/react-spline';

// The CustomCursor component to accept isHovering3D as a prop
function CustomCursor({ isHovering3D }) {
  const[position, setPosition] = React.useState({ x: 0, y: 0 });
  const cursorRef = React.useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <motion.div
      ref={cursorRef}
      className='fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference'
      animate={{
        x: position.x - (isHovering3D ? 12 : 15),
        y: position.y - (isHovering3D ? 12 : 15),
        scale: isHovering3D ? 1.5 : 1,
      }}
      transition={{ 
        type: 'spring',
        stiffness: 500, 
        damping: 28, 
        mass: 0.5,
      }}
    >

      <motion.div
      className={`rounded-full ${isHovering3D ? "bg-violet-500" : "bg-white"}`}
        animate={{
          width: isHovering3D ? "24px" : "40px",
          height: isHovering3D ? "24px" : "40px",
        }}
        transition={{ duration: 0.2 }} 
        />
        {isHovering3D && (
          <motion.div
          className='absolute top-0 inset-0 rounded-full bg-transition border border-violet-500'
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 2, opacity: 0.5 }}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
          />
        )}
    </motion.div>
  )
}
  








const Character = () => {

    // Track Witch Character is selected
    const [selectedCharacter, setSelectedCharacter] = React.useState("carlo");
    const [cursorInModelArea, setCursorInModelArea] = React.useState(false);

    // Simplfied Character Data
    const characters = [
        { name: "carlo", power: 80, stable: 70, penetrate: 60, portable: 90, Stars: 3 },
        { name: "Sara", power: 75, stable: 65, penetrate: 70, portable: 85, Stars: 2 },
    ];

    // Get Current Character Data
    const currentCharacter = characters.find(char => char.name === selectedCharacter);

    const handel3DAreaMouseEnter = () => {
        setCursorInModelArea(true);
    } 
    const handel3DAreaMouseLeave = () => {
        setCursorInModelArea(false);
    }

  return (
    <div className='relative w-full h-screen overflow-hidden mb-[10%]'>
      <CustomCursor isHovering3D={cursorInModelArea} />

      
      
      {/* Section title */}
      <div className='relative z-10 pt-6 text-center'>
        <h1
          className='text-5xl font-bold tracking-widest md:-mb-14 mb-8'
          style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7)" }}
        >
          Characters
        </h1>
      </div>

      {/* Main Content Area */}
      <div className='relative z-10 flex md:flex-row flex-col items-center w-full h-full p-4'>
        
        {/* Left Side - Character info and selection */}
        <div className='w-full md:w-2/4 flex flex-col md:ml-10'>
          
          {/* Selected Character Info Card */}
          <div className='bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 mb-4 border border-gray-800 shadow-[0_0_15px_rgba(167, 139, 250 ,0.2)]'>
            <h1 className='text-2xl font-semibold mb-2'>{currentCharacter.name}</h1>
            
            {/* Character Statistics */}
            <div className='space-y-3 mb-16'>

              {/* Power */}
              <div className='flex items-center'>
                <span className='w-24 text-gray-400'>Power</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden ml-2'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{ width: `${currentCharacter.power}%`}}></div>
                </div>
                <span className='ml-2'>{currentCharacter.power}</span>
              </div>

              {/* Stable */}
              <div className='flex items-center'>
                <span className='w-24 text-gray-400'>Stable</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden ml-2'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{width: `${currentCharacter.stable}%`}}></div>
                </div>
                <span className='ml-2'>{currentCharacter.stable}</span>
              </div>

              {/* Penetrate */}
              <div className='flex items-center'>
                <span className='w-24 text-gray-400'>Penetrate</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden ml-2'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{width: `${currentCharacter.penetrate}%`}}></div>
                </div>
                <span className='ml-2'>{currentCharacter.penetrate}</span>
              </div>

              {/* Portable */}
              <div className='flex items-center'>
                <span className='w-24 text-gray-400'>Portable</span>
                <div className='flex-1 h-4 bg-gray-800 rounded-full overflow-hidden ml-2'>
                  <div className='h-full bg-gradient-to-r from-violet-600 to-white' style={{width: `${currentCharacter.portable}%`}}></div>
                </div>
                <span className='ml-2'>{currentCharacter.portable}</span>
              </div>

            </div>

            {/* Action Buttons */}
            <div className='flex gap-3'>
                <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                    Porficient
                </button>

                <button className='px-4 py-1 bg-violet-900 text-white rounded-md font-semibold hover:opacity-70 transition-all duration-300'>
                    Redemption
                </button>

            </div>

          </div>

          {/* Character Selection Card */}
            <div className='grid grid-cols-2 gap-4'>

                {/* Carlo Card */}
                <div className='relative bg-gray-800/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300'
                onClick={() => setSelectedCharacter("carlo")}
                >
                    <div className='text-lg mb-2'>Carlo</div>

                    {/* Character Visual Placeholder */}

                    <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                        <img src="\Images\Screenshot 2025-07-22 094044.png" alt="Carlo" />
                    </div>
                    
                    {/* Stars Rating */}
                    <div className='flex'>
                    {[...Array(3)].map((_,i) => (
                        <Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500' />
                    ))}
                    </div>

                    {/* Highlight For Selected Character */}
                    {selectedCharacter === "Carlo" && (
                        <div className='absolute inset-0 border-2  rounded-lg pointer-events-none'></div>
                    )}
                </div>

                {/* Sara Card */}
                <div className='relative bg-gray-800/70 backdrop-blur-sm rounded-lg p-3 border flex lg:flex-row flex-col justify-between px-12 items-center cursor-pointer transition-all duration-300'
                onClick={() => setSelectedCharacter("Sara")}
                >
                    <div className='text-lg mb-2'>Sara</div>

                    {/* Character Visual Placeholder */}

                    <div className='w-20 h-20 bg-gray-800/50 rounded-md flex items-center justify-center mb-2'>
                        <img src="\Images\EVA.png" alt="Sara" />
                    </div>
                    
                    {/* Stars Rating */}
                    <div className='flex'>
                    {[...Array(3)].map((_,i) => (
                        <Star key={i} className='w-4 h-4 fill-violet-400 text-violet-500' />
                    ))}
                    </div>

                    {/* Highlight For Selected Character */}
                    {selectedCharacter === "Sara" && (
                        <div className='absolute inset-0 border-2  rounded-lg pointer-events-none'></div>
                    )}
                </div>

            </div>

        </div>


        {/* Right Side - 3D Model */}
        <div className='relative md:w-2/4 w-full md:h-full h-80 flex items-center justify-center overflow-hidden'
          onMouseEnter={handel3DAreaMouseEnter}
          onMouseLeave={handel3DAreaMouseLeave}
        >
      
      <AnimatePresence mode='wait'>
        {selectedCharacter === "carlo" ? (
        <motion.div
          key="carlo"
          className='absolute inset-0'
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.5 }}
        >
         <Spline scene="https://prod.spline.design/E9YwybZWyNRnagnj/scene.splinecode" />
        </motion.div>

        ) : (
          <motion.div
            key="sara"
            className='absolute inset-0'
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
           <Spline scene="https://prod.spline.design/GLpJ5NL0MvV5FqUk/scene.splinecode" />
          </motion.div>
        ) }
        </AnimatePresence>

        </div>
      </div>
    </div>
  )
}

export default Character
