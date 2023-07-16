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

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Services /> */}
        <Project />
        <Contact />
        {/* <Qualification /> */}
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
