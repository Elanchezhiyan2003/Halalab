import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/Home";
import Aboutus from "./components/aboutus";
import AutomationToolbox from "./components/AutomationToolbox";
import Testimonials from './components/Testimonials/Testimonials';
import { Button } from './components/ui/button'
import PUBLIC from '@/components/public'


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <Aboutus />
      <AutomationToolbox />
      <PUBLIC />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
