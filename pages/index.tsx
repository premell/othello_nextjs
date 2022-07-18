import type { NextPage } from 'next'
import { GameBoard } from '../components/GameBoard'
import Disk from '../public/classes/Disk'

const Home: NextPage = () => {
  const disks: Disk[] = [
{
  player: 1,
  xPos: 3,
  yPos: 3,
  },
    {
  player: 0,
  xPos: 3,
  yPos: 4,
  },
    {
  player: 1,
  xPos: 4,
  yPos: 4,
  },
    {
  player: 0,
  xPos: 4,
  yPos: 3,
  },
  ]

  return (
    <>
      <GameBoard disks={disks}/>
    </>
  )
}

export default Home
