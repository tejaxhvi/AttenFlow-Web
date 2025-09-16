import React from 'react';

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Middle from '../components/Middle';
import Footer from '../components/Footer';

export default function Home() {

    return(<>
        <div className="h-screen w-screen">
            <Navbar/>
            <Hero/>
            <Middle/>
            <Footer/>
        </div>
    </> )
}