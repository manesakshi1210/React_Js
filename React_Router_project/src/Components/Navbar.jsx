import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link to="/">MyApp</Link>
      </div>

      {/* Links */}
      <div className="flex gap-6 text-sm font-medium">
        <Link to="/" className="hover:text-yellow-300 transition">
          Home
        </Link>

        <Link to="/about" className="hover:text-yellow-300 transition">
          About
        </Link>

        <Link to="/contact" className="hover:text-yellow-300 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;