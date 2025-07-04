import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const navItems = [
  { name: "Find Jobs", path: "/find-jobs" },
  { name: "Service", path: "/service" },
  { name: "Offers", path: "/offers" },
  { name: "Blog", path: "/blog" },
  { name: "About Us", path: "/about" },
];

const NavMenu = ({ mobile = false }) => (
  <nav
    className={
      mobile
        ? "flex flex-col space-y-4 pt-4"
        : "hidden md:flex items-center space-x-8"
    }
  >
    {navItems.map((item) => (
      <Link
        key={item.name}
        to={item.path}
        className="text-gray-800 hover:text-green-700 font-medium transition"
      >
        {item.name}
      </Link>
    ))}

    <Button
      to="/kostenlos-testen"
      className={`mt-${
        mobile ? "4" : "0"
      } flex items-center text-sm font-semibold bg-secondary hover:bg-secondary-dark text-white`}
    >
      Kostenlos Testen <ArrowRight className="w-4 h-4 ml-2" />
    </Button>
  </nav>
);

export default NavMenu;
