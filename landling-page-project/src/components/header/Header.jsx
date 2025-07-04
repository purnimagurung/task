import  { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        <Logo />
        <NavMenu />
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-6 border-t">
          <NavMenu mobile />
        </div>
      )}
    </header>
  );
};

export default Header;
