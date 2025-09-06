import { useState } from "react";
import { FiDownload } from "react-icons/fi";
import profilePic from "../assets/images/profil.png";
import API_BASE_URL from "../config";


export default function About() {
  const [loading, setLoading] = useState(false);

  const handleDownloadCV = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/cv/download/`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Failed to fetch CV");
      }

      const disposition = response.headers.get("Content-Disposition");
      let filename = "Abdellah_CV.pdf";
      if (disposition && disposition.includes("filename=")) {
        filename = disposition.split("filename=")[1].replace(/['"]/g, "");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
      alert("❌ Error downloading CV");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-20 text-gray-300"
    >
      {/* Intro */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <figure className="flex justify-center md:justify-start">
          <div className="relative w-56 h-56 rounded-full p-[3px] bg-gradient-to-tr from-blue-400 via-blue-600 to-cyan-400 shadow-xl shadow-blue-500/30 hover:shadow-blue-400/50 transition duration-500">
            <div className="w-full h-full rounded-full overflow-hidden bg-black">
              <img
                src={profilePic}
                alt="Abdellah — Backend Developer"
                className="w-full h-full rounded-full object-cover hover:scale-105 transition-transform duration-500"
                style={{ objectPosition: "center 20%" }} // pushes image down
              />
            </div>
          </div>

          <figcaption className="mt-4 text-center md:text-left text-sm text-gray-600 font-medium">
            CodeByAbdellah ©
          </figcaption>
        </figure>

        <h2 className="text-2xl md:text-3xl font-bold text-blue-400 mt-6">
          Backend Developer & CS Student
        </h2>

        <button
          onClick={handleDownloadCV}
          disabled={loading}
          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md transition-all duration-300 ease-in-out hover:from-blue-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Downloading...
            </>
          ) : (
            <>
              <FiDownload className="h-5 w-5 text-white" />
              Download CV
            </>
          )}
        </button>
      </div>

      {/* Terminal Style Box */}
      <div className="flex-1 mt-10 md:mt-0 bg-black border border-blue-700 rounded-lg p-4 shadow-lg w-full md:w-96">
        <pre className="text-blue-500 font-mono text-sm">
          {`// Terminal

$ py manage.py runserver
> Server running on http://127.0.0.1:8000/


$ npm run dev
➜ Local: http://localhost:5173/`}
        </pre>
      </div>
    </section>
  );
}
