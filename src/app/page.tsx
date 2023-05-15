'use client'

import Layout from '@/components/Layout'
import Navbar from '@/components/Navbar'
import Headers from '@/components/Headers'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import '../styles/globals.css'
import Carousel from '@/components/Carousel'

export default function Home() {
  return (
      <Layout>
        <Navbar/>
          <Carousel/>
      </Layout>
  )
}
