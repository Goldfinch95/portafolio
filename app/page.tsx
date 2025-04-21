'use client'

import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import About from '@/app/components/About';
import Services from '@/app/components/Services'

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    </>
  );
}
