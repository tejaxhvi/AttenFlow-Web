import React from 'react';
import mobileAppImage from '../assets/MobileImage.png';

export default function Middle(){
    return(
        <div className='h-[80vh] w-screen flex flex-col justify-center items-center px-8 bg-black'>
            <div className="relative w-full max-w-6xl h-2/5 flex items-center justify-between rounded-2xl bg-black/30 backdrop-blur-md z-50 shadow-sm overflow-hidden">
                {/* Left side - Text content */}
                <div className='flex-1 p-12'>
                    <h1 className="text-white text-5xl font-mono font-bold mb-6 leading-tight">
                        Lorem ipsum dolor sit amet literally god
                    </h1>
                    <h2 className="text-xl font-mono text-white/90 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquid blanditiis nam 
                    </h2>
                </div>
                
                <div className='flex-1 flex justify-center items-center p-8 '>
                    <img 
                        src={mobileAppImage}
                        alt="Mobile-App" 
                        className="max-h-full max-w-sm object-contain select-none transform rotate-6 transition-transform duration-500 ease-out hover:rotate-3 hover:-translate-y-1 hover:scale-105 drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
    )
}