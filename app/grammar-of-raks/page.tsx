import Curriculam from '@/components/grammar-of-raks/curriculam'
import Discovery from '@/components/grammar-of-raks/discovery'
import Hero from '@/components/grammar-of-raks/hero'
import Introducing from '@/components/grammar-of-raks/introducing'
import Standout from '@/components/grammar-of-raks/standout'
import Storyandmission from '@/components/grammar-of-raks/storyandmission'
import React from 'react'

export const metadata = {
  title: "Grammar of RAKS | RAKS Pallikoodam",
  description: "Discover the grammar and foundation of RAKS Pallikoodam",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Standout />
      <Storyandmission />
      <Introducing />
      <Curriculam />
      <Discovery />
    </div>
  )
}

export default page