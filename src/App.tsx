import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import AboutUs from './components/AboutUs/AboutUs';


const App: React.FC = () => {
  return (
    <div>
      <Header /> 
      <Navbar />
      <Slider />
      <AboutUs/>  
    </div>
  );
};

export default App;
