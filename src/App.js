import Aim from "./components/Aim";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Aim />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
