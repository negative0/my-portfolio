import { HashRouter } from "react-router-dom";
import {
  Navbar,
  Hero,
  About,
  Experience,
  Feedbacks,
  Contact,
  StarsCanvas,
  Tech,
} from "./components";

function App() {
  return (
    <HashRouter>
      <div className="relative z-0 bg-primary pb-20">
        <div className="bg-hero-pattern bg-cover bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Feedbacks />
        <Experience />
        <Tech />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
