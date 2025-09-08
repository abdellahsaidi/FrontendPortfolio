import { useEffect } from "react";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Details from "./components/Details";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    
    fetch(`${import.meta.env.VITE_API_URL}/notify-visit/`)
      .then((res) => {
        if (res.ok) {
          console.log("✅ Visit notification sent successfully");
        } else {
          console.error("⚠️ Failed to notify visit:", res.status);
        }
      })
      .catch((err) => console.error("❌ Error notifying visit:", err));
  }, []);

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
