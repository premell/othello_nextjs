import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { GameBoard } from '../components/GameBoard'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <>
      <GameBoard/>
      <div>hello</div>
    </>
  )
}

export default Home
