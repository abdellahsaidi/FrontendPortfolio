import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {
  const [active, setActive] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "details", "projects", "skills", "contact"];
      let current = "about";

      const scrollPosition = window.scrollY + 200; 

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            current = id;
            break;
          }
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About" },
    { id: "details", label: "Details" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#010033]/95 backdrop-blur-md border-b border-blue-700 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-lg font-mono text-blue-400 tracking-wide hover:text-blue-300 transition">
          &lt;CodeByAbdellah /&gt;
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`px-3 py-1 rounded-md transition-all duration-300 ${
                  active === link.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-blue-400 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#010033]/95 border-t border-blue-700">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`px-3 py-2 block rounded-md text-base transition-all duration-300 ${
                    active === link.id
                      ? "bg-blue-500 text-white"
                      : "text-gray-300 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
