
import { React } from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Featured from './Components/Featured/Featured';
import Signup from './Components/Signup/Signup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Signup/>
      <Footer/>
    </>
  );
}

export default App;
