import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from '../Components/Hero/Hero';
import Nav from '../Components/Nav/Nav';
import Card from '../Components/CardSwipers/Card';
import ProductCard from '../Components/Products/ProductCards';
import DayCard from '../Components/DayCard/DayCard';
import OfferImg from '../Components/OfferImg/OfferImg';
import MobileNav from '../Components/MobileNav/MobileNav';
import Footer from '../Components/Footer/Footer';
import Marquee from '../Components/Marquee';
const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Card />
      <ProductCard />
      <Marquee />
      <DayCard />
      <OfferImg />
      <Footer />
      <MobileNav />
    </>
  )
}

export default Home