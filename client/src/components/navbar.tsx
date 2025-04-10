import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      if (isMobile && isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="fixed z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 bg-transparent backdrop-blur-md rounded-full px-6 shadow-lg transition-all duration-300 ease-in-out">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/logo.png" // Replace with the actual path to your logo
                alt="Logo"
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Button
              onClick={() => scrollToSection("home")}
              variant="ghost"
              className="text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"            >
              Home
            </Button>
            <Button
              onClick={() => scrollToSection("blogs")}
              variant="ghost"
              className="text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"            >
              Blogs
            </Button>
            <Button
              onClick={() => scrollToSection("projects")}
              variant="ghost"
              className="text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"            >
              Projects
            </Button>
            <Button
              onClick={() => scrollToSection("content")}
              variant="ghost"
              className="text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"            >
              Content
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="ghost"
              className="text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="text-white hover:text-gray-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg mt-2 px-4 py-3">
          <Button
            onClick={() => scrollToSection("home")}
            variant="ghost"
            className="w-full text-left text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"
          >
            Home
          </Button>
          <Button
            onClick={() => scrollToSection("experience")}
            variant="ghost"
            className="w-full text-left text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"
          >
            Experience
          </Button>
          <Button
            onClick={() => scrollToSection("skills")}
            variant="ghost"
            className="w-full text-left text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"
          >
            Skills
          </Button>
          <Button
            onClick={() => scrollToSection("blogs")}
            variant="ghost"
            className="w-full text-left text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"
          >
            Blogs
          </Button>
          <Button
            onClick={() => scrollToSection("projects")}
            variant="ghost"
            className="w-full text-left text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"
          >
            Projects
          </Button>
          <Button
            onClick={() => scrollToSection("content")}
            variant="ghost"
            className="w-full text-left text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"
          >
            Content
          </Button>
          <Button
            onClick={() => scrollToSection("contact")}
            variant="ghost"
            className="w-full text-left text-white hover:text-gray-300 text-lg font-medium bg-red-500 rounded-full"
          >
            Contact
          </Button>
        </div>
      )}
    </nav>
  );
}
