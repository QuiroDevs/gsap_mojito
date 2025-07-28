import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

import Navbar from './components/Navbar';
import Hero from './components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react'

const App = () => {
    return (
        <main>
            <Navbar />
            <Hero />
            <div className='h-dvh bg-black' />
        </main>
    )
}

export default App