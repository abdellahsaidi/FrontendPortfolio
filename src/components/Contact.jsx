import { useState } from "react";
import { Mail, Linkedin, Github, Phone, MapPin } from "lucide-react";
import API_BASE_URL from "../config";


export default function Contact() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/visitorMail/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      alert("✅ Message sent successfully!");
      setFormData({ full_name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 max-w-6xl mx-auto text-gray-300"
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left side - Static Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-blue-400 mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 mb-6">
            Interested in collaborating or discussing new opportunities? Feel
            free to reach out. I'm always open to exciting challenges.
          </p>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:abdellahsaidi310309@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  abdellahsaidi310309@gmail.com
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span>
                <strong className="text-white">LinkedIn:</strong>{" "}
                <a
                  href="https://www.linkedin.com/in/abdellah-saidi-61a54b271/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  https://www.linkedin.com/in/abdellah-saidi/
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Github className="w-5 h-5 text-blue-400" />
              <span>
                <strong className="text-white">GitHub:</strong>{" "}
                <a
                  href="https://github.com/abdellahsaidi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  https://github.com/abdellahsaidi
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>
                <strong className="text-white">Phone:</strong>{" "}
                <a
                  href="tel:+213553-3272-68"
                  className="text-blue-400 hover:underline"
                >
                  +213553-3272-68
                </a>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>
                <strong className="text-white">Address:</strong>{" "}
                <a
                  href="https://www.google.com/maps/search/Blida%2C%20Blida%20District%2C%20Blida%2C%2009000%2C%20Algeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Blida, Algeria
                </a>
              </span>
            </li>
          </ul>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-[#0a0a2e] border border-blue-700 rounded-xl p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="full_name"
              placeholder="Your Name"
              value={formData.full_name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-black border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
            ></textarea>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-medium transition disabled:opacity-50"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
