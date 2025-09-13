import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Middle from '../components/Middle';

export default function Home() {

    return(<>
        <div className="h-screen w-screen">
            <Navbar/>
            <Hero/>
            <Middle/>
        </div>
    </> )
}