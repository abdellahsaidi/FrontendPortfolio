import { FaGithub } from "react-icons/fa";
import DentalClinicImg from "../assets/images/dentalclinic.jpg";
import nextjob from "../assets/images/nextjob.jpg";
import restaurant from "../assets/images/restaurant.png";
import eshop from "../assets/images/eshop.png";
import travel from "../assets/images/travel.png";
import yalidine from "../assets/images/yalidine.jpg";

export default function Projects() {
  const projects = [
    {
      id: 1,
      category: "Django & Html",
      title: "Dental Clinic Management System",
      description:
        "A comprehensive web application to manage patient records, appointments, and billing.",
      technologies: ["Django", "HTML", "CSS", "JS", "Postgresql"],
      image: DentalClinicImg,
      github: "https://github.com/abdellahsaidi/miniProjetWeb",
    },
    {
      id: 2,
      category: "Django Rest Api & ReactJS",
      title: "Recruitment Platform",
      description:
        "A web app for managing job postings and candidate applications.",
      technologies: ["Django", "PostgreSQL", "ReactJs"],
      image: nextjob,
      github: "https://github.com/abdellahsaidi/Projet-Fin-Cycle",
    },
    {
      id: 3,
      category: "Django & Html",
      title: "Restaurant Webapp",
      description:
        "A restaurant management system with online ordering and reservation features.",
      technologies: ["Django", "HTML", "CSS", "JS", "SQLite"],
      image: restaurant,
      github: "https://github.com/abdellahsaidi/Restaurant-Website",
    },
    {
      id: 4,
      category: "Html",
      title: "Eshop",
      description:
        "A modern e-commerce website template with responsive design and smooth animations.",
      technologies: ["Html", "Css", "JS"],
      image: eshop,
      github: "https://github.com/abdellahsaidi/front-e-commerce",
    },
    {
      id: 5,
      category: "Django Rest Api",
      title: "Travel ",
      description:
        "a web app that provides travel recommendations and itineraries based on discover preferences.",
      technologies: ["Python", "Html", "CSS", "JS", "PostgreSQL"],
      image: travel,
      github: "https://github.com/abdellahsaidi/travel-repo",
    },
    {
      id: 6,
      category: "React & NLP",
      title: "Yalidine Transport Statistics",
      description:
        "A web app that analyzes and visualizes transportation data using NLP techniques.",
      technologies: ["Python", "NLP", "Pandas", "Matplotlib"],
      image: yalidine,
      github: "https://github.com/abdellahsaidi/algeria-fleet-insight",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a0a1a] text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-400 mb-10 text-center">
          Featured Projects
        </h2>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="p-6 bg-[#111122] border border-blue-700 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4 border border-blue-800"
              />

              <span className="inline-block text-xs font-semibold text-blue-300 mb-2">
                {project.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 text-xs text-gray-300 mb-4">
                {project.technologies.map((tech, idx) => (
                  <li
                    key={idx}
                    className="px-2 py-1 bg-[#1a1a2e] border border-blue-600 rounded"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex justify-end mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
               bg-[#1a1a2e] text-blue-400 border border-blue-600
               hover:bg-blue-600 hover:text-white transition-all duration-300
               shadow-md hover:shadow-blue-700/40"
                >
                  <FaGithub className="text-lg" />
                  <span className="text-sm font-medium">View Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* More Button */}
        <div className="mt-10 text-center">
          <a
            href="https://github.com/abdellahsaidi?tab=repositories"
            className="px-5 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium transition"
          >
            More projects …
          </a>
        </div>
      </div>
    </section>
  );
}
