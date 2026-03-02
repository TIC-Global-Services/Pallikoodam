import React from 'react'
import Hero from '@/components/careers/hero'
import Workwithus from '@/components/careers/workwithus'
import Whowelookingfor from '@/components/careers/whowelookingfor'
import Currentopenings from '@/components/careers/currentopenings'
import Teachingphilosophy from '@/components/careers/teachingphilosophy'

export const metadata = {
  title: "Careers | RAKS Pallikoodam",
  description: "Explore career opportunities at RAKS Pallikoodam",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Workwithus />
      <Whowelookingfor />
      <Currentopenings />
      <Teachingphilosophy />
    </div>
  )
}

export default page