'use client'

import Header from '@/app/components/Header';
import Navbar from '@/app/components/Navbar';
import About from '@/app/components/About';
import Services from '@/app/components/Services';
import Work from '@/app/components/Work';
import Reach from '@/app/components/Reach';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Work />
    <Reach />
    <Footer />
    </>
  );
}
