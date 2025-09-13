import React from 'react';

export default function (){
    const Pages : string[] = ["Gallery","POTW","Contact"]

       return <>
       <div className="flex fixed top-0 left-0 w-full h-20 bg-black/15 backdrop-blur-md z-50 shadow-sm">
           <div className='flex justify-center align-items ml-8'>
               <h1 className="m-5 text-white font-monospace font-extrabold text-4xl">AttenFlow</h1>
           </div>
           <div className="flex fixed right-0 top-0 m-2 ">
               {
                   Pages.map((page : string) => {
                       return (
                           <div className="mx-8 m-5 h-4 pr-3 text-white text-xl font-monospace font-bold cursor-pointer">
                               {page}
                           </div>
                       )
                   })
               }
               <div className="flex items-center mr-8">
                    <button
                        type="button"
                        aria-label="Sign in"
                        className="m-3 inline-flex h-10 items-center justify-center rounded-md px-5 font-mono font-semibold text-gray-900 bg-white/90 shadow-sm ring-1 ring-white/60 backdrop-blur transition-colors duration-200 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                        Sign In
                    </button>
                </div>
           </div>
           
       </div>
       </>
   }