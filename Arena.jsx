import 'boxicons/css/boxicons.min.css';

const Arena = () => {
  return (
    // Container
    <div className="md:min-h-[90%] p-0 lg:p-8 md:mt-0 mt-60">
        <div className="relative z-10 pt-6 text-center">
            <h1 className="text-5xl font-bold tracking-widest mb-28"
            style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(167, 139, 250,0.5) "}}
            >
                Arena
            </h1>

        </div>

        {/* Main container with grid layout */}
        <div className="lg:max-w-[90%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/*left columm (takes 1/3 of the space on desktop)*/}
            <div className="md:col-span-1 space-y-4 md:space-y-6">

                {/* Card 1 - Top Left */}
                <div className="relative overflow-hidden rounded-3xl border border-white aspect-[4.4/4] transform transition-transform duration-300 hover:scale-105">

                    {/* Card background With Gradient */}
                    <div className="absolute h-full w-full">
                        <img src="\Images\Glacier-Giveaway-1024x576.png" 
                        alt="card-1"></img>

                        <button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap'>
                            <i class='bx bx-store' >NFT STORE</i>
                        </button>
                    </div>

                </div>

                {/* Card 2 - Bottom Left */}
                <div className='relative overflow-hidden rounded-3xl border border-white aspect-[4.5/4] transform transition-transform duration-300 hover:scale-105'>

                <video className='w-full h-full object-cover' autoPlay loop muted playsInline src="\Videos\Map.mp4"></video>

                </div>

            </div>
            {/* Right column (takes 2/3 of the space on desktop) */}
            <div className="md:col-span-2 space-y-4 md:space-y-6">

                {/* Top row with 3 small Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6'>
                    {/* card 3 - first small card */}
                        <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105'>
                            <video className='w-full h-full object-cover' autoPlay loop muted playsInline 
                            src="\Videos\Suit 1.mp4"></video>

                            <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl'></h1>

                        </div>

                    {/* card 4 - Second small card */}
                        <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105'>
                            <video className='w-full h-full object-cover' autoPlay loop muted playsInline 
                            src="\Videos\Suit 2.mp4"></video>

                            <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl'></h1>
                            
                        </div>

                    {/* card 5 - Third small card */}
                        <div className='relative overflow-hidden rounded-3xl border border-white aspect-square transform transition-transform duration-300 hover:scale-105'>
                            <video className='w-full h-full object-cover' autoPlay loop muted playsInline 
                            src="\Videos\Suit 3.mp4"></video>

                            <h1 className='absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 font-extrabold text-2xl'></h1>
                            
                        </div>
                </div>


                {/* Card 6 - Bottom Large Card */}
                <div className='relative overflow-hidden rounded-3xl border border-white aspect-[16/9] md:col-span-2 transform transition-transform duration-300 hover:scale-[1.02]'>
                <video className='w-full h-full object-cover' autoPlay loop muted playsInline src="\Videos\Transformmer.mp4"></video>
                
                <button className='absolute bottom-0 h-16 w-full bg-black bg-opacity-70 text-2xl font-bold hover:text-yellow-400 transition-all duration-300 text-nowrap'>
                    <i class='bx bx-link-external' ></i>
                </button>

                </div>

            </div>    
               

        </div>
    </div>
  )
}

export default Arena
