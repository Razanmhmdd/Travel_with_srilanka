import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Components/ContactUs/Contact';
import NavbarActionButton from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Cards2 from './Components/Cards/Cards2';
import DestinationGuide from './Components/Destination/DestinationGuide';
import AboutUs from './Components/AboutUs/AboutUs';
import gallery from './Components/Gallery/Gallery';
import Packages from './Components/Packages/Packages';
const PageComponent = ({ Page }) => {
  return (
    <>
      <NavbarActionButton />
      <Page />
      <Footer />
    </>
  );
};


const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="/contact" element={<PageComponent Page={Contact} />} />
        <Route path="/desi" element={<PageComponent Page={DestinationGuide} />} />
        <Route path="/pack" element={<PageComponent Page={Packages} />} />
        <Route path="/gallery" element={<PageComponent Page={gallery} />} />
        <Route path="/aboutus" element={<PageComponent Page={AboutUs} />} />
      </Routes>
    </Router>
  );
};

export default App;
