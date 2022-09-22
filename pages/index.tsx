import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
    <Head> 
      <title> Ninja List | Home </title>
      <meta name='keywords' content='about'></meta>
      </Head>
    <div>
      
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit voluptas quidem exercitationem. Ratione nemo et fuga modi molestiae dolorem, minima quasi, ducimus unde asperiores aliquid cumque minus, error nihil?</p>
      <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet assumenda, tempora animi veniam aut ratione tenetur! Fugiat maxime, nesciunt minima, amet ratione incidunt cumque, sunt expedita quam consequuntur corporis et!</p>
      <Link href="/ninjas"><a className={styles.btn}>See Ninja Listing</a></Link>
      
    </div>
    </>
  )
}

export default Home
