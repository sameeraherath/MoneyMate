import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">MoneyMate</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-200 transition">
              Dashboard
            </Link>
            <Link to="/transactions" className="hover:text-blue-200 transition">
              Transactions
            </Link>
            <Link to="/categories" className="hover:text-blue-200 transition">
              Categories
            </Link>
            <Link to="/reports" className="hover:text-blue-200 transition">
              Reports
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2 hover:bg-blue-400 rounded">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
