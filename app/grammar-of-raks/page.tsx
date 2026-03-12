import Beyoudclassroom from '@/components/grammar-of-raks/beyoudclassroom'
import Curriculam from '@/components/grammar-of-raks/curriculam'
import Discovery from '@/components/grammar-of-raks/discovery'
import Hero from '@/components/grammar-of-raks/hero'
import Introducing from '@/components/grammar-of-raks/introducing'
import Raksvalue from '@/components/grammar-of-raks/raksvalue'
import Standout from '@/components/grammar-of-raks/standout'
import Storyandmission from '@/components/grammar-of-raks/storyandmission'
import Whatwedoatraks from '@/components/grammar-of-raks/whatwedoatraks'
import Raksinstitution from '@/components/grammar-of-raks/raksinstitution'
import React from 'react'

export const metadata = {
  title: "Grammar of RAKS | RAKS Pallikoodam",
  description: "Discover the grammar and foundation of RAKS Pallikoodam",
};

const page = () => {
  return (
    <div className=''>
      <Hero />
      <Standout />
      <Storyandmission />
      <Raksvalue />
      <Whatwedoatraks />
      <Raksinstitution />
       <Beyoudclassroom />
      {/* <Introducing /> */}
      {/* <Curriculam />
      <Discovery /> */}
    </div>
  )
}

export default page