import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-military shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 md:py-6 md:px-6">
        {/* Centered Navigation Links */}
        <nav className="flex justify-center space-x-8 text-lg font-normal">
          <Link to="/" className="text-white hover:text-olive transition">
            Home
          </Link>
          <Link to="/gallery" className="text-white hover:text-olive transition">
            Gallery
          </Link>
        </nav>
      </div>
    </header>
  );
}
