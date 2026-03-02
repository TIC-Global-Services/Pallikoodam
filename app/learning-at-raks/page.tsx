import React from 'react'
import Hero from '@/components/learningsatraks/hero'
import Educationfortoday from '@/components/learningsatraks/educationfortoday'
import Empowering from '@/components/learningsatraks/Empowering'
import Environments from '@/components/learningsatraks/Environments'
import Developement from '@/components/learningsatraks/developement'
import Gettingstarted from '@/components/learningsatraks/gettingstarted'

export const metadata = {
  title: "Learning @ RAKS | RAKS Pallikoodam",
  description: "Experience learning environments and philosophy at RAKS Pallikoodam",
};

const page = () => {
  return (
    <div>
      <Hero />
      <Educationfortoday />
      <Empowering />
      <Environments />
      <Gettingstarted />
      {/* <Developement/> */}
    </div>
  )
}

export default page