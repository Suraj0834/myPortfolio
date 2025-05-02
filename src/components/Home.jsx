import React from 'react'
import HomeImage from '../assets/me.png'
import { TypeAnimation } from 'react-type-animation'

const Home = () => {
    const url = "https://docs.google.com/document/d/1vJosJOMtXJZoVPOg0YiUVVXuJxyyJBwx/" //add resume google drive link here

  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HomeImage} alt="" 
        className='mx-auto mb-12 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Suraj Kumar Singh Kushwaha</span>
            , <TypeAnimation
                sequence={[
                     // wait 1s before replacing "Mice" with "Hamsters"
                    'Android developer',
                    1500,
                    'Cyber Security Engineer',
                    1500,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block' }}
                repeat={Infinity}
            />
        </h1>
        <p className='mt-6 text-lg text-gray-300'>
        I have expertise in cybersecurity and in developing cutting-edge, responsive Android applications.
        </p>
        <div className='mt-12 space-x-4'>
            <button
            className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' onClick={() => window.open(url, '_blank')}>Resume</button>
        </div>

    </div>
  )
}

export default Home