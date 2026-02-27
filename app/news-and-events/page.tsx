import React from 'react'
import Hero from '@/components/newsandevents/hero'
import WhatHappening from '@/components/newsandevents/whathappeing'
import WhatsComing from '@/components/newsandevents/whatscoming'
import Academics from '@/components/newsandevents/academics'
import Media from '@/components/newsandevents/media'
import Downloads from '@/components/newsandevents/downloads'

const page = () => {
  return (
    <div>
        <Hero/>
        <WhatsComing/>
        <WhatHappening/> 
        <Academics/>
        <Media/>
        <Downloads/>
    </div>
  )
}

export default page