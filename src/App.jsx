import AboutMe from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SkillTree from "./components/Skills";

function App() {
  return (
    <div className="text-center">
      <Navbar/>
      <div id="home"> <Home/></div>
      <div id="about"><AboutMe/></div>
      <div id="skills"><SkillTree/></div>
      <div id="projects"><Projects/></div>
      <div id="events"><Events/></div>
      <div id="contact"><Contact/></div>

    </div>
  );
}

export default App;
