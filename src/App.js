import Aim from "./components/Aim";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Privacy from "./components/Privacy";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Aim />
      <Services />
      <Privacy />
      <Contact />
    </div>
  );
}

export default App;
