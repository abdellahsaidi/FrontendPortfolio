import NavBar from "./components/Navbar";
import About from "./components/About";
import Details from "./components/Details";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-purple-900 min-h-screen text-white">
      <NavBar />
      <main className="pt-20">
        <About />
        <hr className="border-purple-600" />
        <Details experience={3} educationYear={2025} />
        <hr className="border-purple-600" />
        <Projects />
        <hr className="border-purple-600" />
        <Skills />
        <hr className="border-purple-600" />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
