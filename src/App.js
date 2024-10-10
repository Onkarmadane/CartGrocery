import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import Nav from './Components/Nav/Nav';
import Card from './Components/CardSwipers/Card';
import ProductCard from './Components/Products/ProductCards';
import DayCard from './Components/DayCard/DayCard';
import OfferImg from './Components/OfferImg/OfferImg';
import MobileNav from './Components/MobileNav/MobileNav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
 <Nav />
      <Hero />
      <Card />
      <ProductCard />
      <DayCard />
      <OfferImg />
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
