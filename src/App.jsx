import AboutMe from "./components/About";
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
      <div id="resume" className="h-screen bg-[#818cf8] pt-20 px-4">Resume Section</div>
      <div id="contact" className="h-screen bg-[#6366f1] pt-20 px-4 text-white">Contact Section</div>
    </div>
  );
}

export default App;
