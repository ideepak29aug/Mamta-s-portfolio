import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {

 
  return (
    <div className="background z-0">
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Contact />
    </div>
  );
}

export default App;
