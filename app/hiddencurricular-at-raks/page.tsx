import React from 'react'
import Hero from '@/components/sports/hero'
import Ourphilosophy from '@/components/sports/ourphilosophy'
import SportsBasedLearning from '@/components/sports/sportsbasedlearning'
import SportsArena from '@/components/sports/sportsarena'
import Pickleballgame from '@/components/sports/pickleballgame'
import Sportsforlife from '@/components/sports/sportsforlife'

const page = () => {
  return (
    <div>
        <Hero/>
        <Ourphilosophy/>
        <SportsBasedLearning/>
        <SportsArena/>
        <Pickleballgame/>
        <Sportsforlife/>
    </div>
  )
}

export default page