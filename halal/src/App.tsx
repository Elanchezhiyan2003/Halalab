import React from "react";
import Header from "./components/header"; 
import Footer from "./components/footer";
import Home from "./components/Home";
import Aboutus from "./components/aboutus";
import AutomationToolbox from "./components/AutomationToolbox"; 
import Testimonials from './components/Testimonials/Testimonials';


const App: React.FC = () => {
  return (
    <div>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main>
        <Home />
        <Aboutus />
        <AutomationToolbox />
        <Testimonials />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
