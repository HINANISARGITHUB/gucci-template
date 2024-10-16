import React from 'react'
import image from '../../../public/hero.webp'
import Image from 'next/image'


const Hero = () => {
  return (
    <div>
      <Image className = "w-full h-[500px]"  src = {image} alt = "perfume" width = {1000} height = {150}/>
    </div>
  )
}

export default Hero

