import React from 'react'
import ContactHero from '@/components/Contact/Contacthero copy'
import ContactDetails from '@/components/Contact/contactDetails'
import Map from '@/components/admission/map'

export const metadata = {
  title: "Contact Us | RAKS Pallikoodam",
  description: "Get in touch with RAKS Pallikoodam",
};

const page = () => {
  return (
    <div>
      <ContactHero />
      <ContactDetails />
      <Map />
    </div>
  )
}

export default page