import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      
      <h1>Homepage</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit voluptas quidem exercitationem. Ratione nemo et fuga modi molestiae dolorem, minima quasi, ducimus unde asperiores aliquid cumque minus, error nihil?</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet assumenda, tempora animi veniam aut ratione tenetur! Fugiat maxime, nesciunt minima, amet ratione incidunt cumque, sunt expedita quam consequuntur corporis et!</p>
      <Link href="/ninjas"><a>See Ninja Listing</a></Link>
      
    </div>
  )
}

export default Home
