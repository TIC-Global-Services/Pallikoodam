import Curriculam from '@/components/grammar-of-raks/curriculam'
import Discovery from '@/components/grammar-of-raks/discovery'
import Hero from '@/components/grammar-of-raks/hero'
import Introducing from '@/components/grammar-of-raks/introducing'
import Standout from '@/components/grammar-of-raks/standout'
import Storyandmission from '@/components/grammar-of-raks/storyandmission'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Standout/>
      <Storyandmission/>
      <Introducing/>
      <Curriculam/>
      <Discovery/>
    </div>
  )
}

export default page