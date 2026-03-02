import React from 'react'
import Hero from '@/components/admission/hero'
import AdmissionAt from '@/components/admission/admissionat'
import Programs from '@/components/admission/programs'
import Map from '@/components/admission/map'
import StartYourJourney from '@/components/admission/startyourjourney'

export const metadata = {
  title: "Admissions | RAKS Pallikoodam",
  description: "Admissions and enrollment information for RAKS Pallikoodam",
};
const page = () => {
  return (
    <div>
      <Hero />
      <AdmissionAt />
      <StartYourJourney />
      <Programs />
      <Map />
    </div>
  )
}

export default page