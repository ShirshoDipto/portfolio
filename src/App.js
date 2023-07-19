import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";
import { useState } from "react";

function App() {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <>
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />
      <main className="main">
        <Home setActiveNav={setActiveNav} />
        <About setActiveNav={setActiveNav} />
        <Skills setActiveNav={setActiveNav} />
        {/* <Services setActiveNav={setActiveNav} /> */}
        <Project setActiveNav={setActiveNav} />
        <Contact setActiveNav={setActiveNav} />
        {/* <Qualification setActiveNav={setActiveNav} /> */}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
