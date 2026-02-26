import React from 'react'
import Hero from '@/components/sports/hero'
import Ourphilosophy from '@/components/sports/ourphilosophy'
import SportsBasedLearning from '@/components/sports/sportsbasedlearning'
import SportsArena from '@/components/sports/sportsarena'
import Pickleballgame from '@/components/sports/pickleballgame'

const page = () => {
  return (
    <div>
        <Hero/>
        <Ourphilosophy/>
        <SportsBasedLearning/>
        <SportsArena/>
        <Pickleballgame/>
    </div>
  )
}

export default page