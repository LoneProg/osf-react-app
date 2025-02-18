import './App.css';
import Navbar from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Router from './Router';
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Carousel />
      <Router />
    </div>
  );
}

export default App;
