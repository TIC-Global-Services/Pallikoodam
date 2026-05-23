import React from 'react'
import Hero from '@/components/newsandevents/hero'
import WhatHappening from '@/components/newsandevents/whathappeing'
import WhatsComing from '@/components/newsandevents/whatscoming'
import Academics from '@/components/newsandevents/academics'
import Media from '@/components/newsandevents/media'
import Downloads from '@/components/newsandevents/downloads'
import NewslettersBlogs from '@/components/newsandevents/NewslettersBlogs'

export const metadata = {
  title: "News & Events | RAKS Pallikoodam",
  description: "Stay up to date with the latest news, events and media at RAKS Pallikoodam",
};

const page = () => {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <WhatsComing />
      <WhatHappening />
      <Academics />
      <Media />
      {/* <Downloads /> */}
      <NewslettersBlogs />
    </div>
  )
}

export default page