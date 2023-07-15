import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Contact />
        {/* <Qualification /> */}
      </main>
    </>
  );
}

export default App;
