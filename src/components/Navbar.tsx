export default function (){
    const Pages : string[] = ["Collaborators","POTW"]

       return <>
       <div className="flex fixed top-0 left-0 w-full h-20 bg-black/15 backdrop-blur-md z-50 shadow-sm justify-between items-center">
           <div className="ml-10">
               <h1 className="text-white font-mono font-extrabold text-3xl">AttenFlow</h1>
           </div>
           <div className="flex m-2 pr-10">
               {
                   Pages.map((page : string) => {
                       return (
                           <div className="mx-8 m-5 h-4 pr-3 text-white text-xl font-mono font-bold cursor-pointer">
                               {page} 
                           </div>
                       )
                   })
               }
                <div className="flex items-center ">
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