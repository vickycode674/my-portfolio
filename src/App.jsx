import AboutMe from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-center">
      <Navbar/>
      <div id="home"> <Home/></div>
      <div id="about"><AboutMe/></div>
      <div id="skills" className="h-screen bg-[#c7d2fe] pt-20 px-4">Skills Section</div>
      <div id="projects" className="h-screen bg-[#a5b4fc] pt-20 px-4">Projects Section</div>
      <div id="resume" className="h-screen bg-[#818cf8] pt-20 px-4">Resume Section</div>
      <div id="contact" className="h-screen bg-[#6366f1] pt-20 px-4 text-white">Contact Section</div>
    </div>
  );
}

export default App;
