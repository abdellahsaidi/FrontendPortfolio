export default function Footer() {
  return (
    <footer className="bg-[#010033] border-t border-blue-700 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="text-blue-400 font-medium">CodeByAbdellah</span>.  
          Built with passion for clean code.
        </p>
      </div>
    </footer>
  );
}
