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
    <nav className="fixed w-full z-50 bg-transparent backdrop-blur-sm shadow-none dark:bg-black/70 dark:shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                src="/logo.png" // Replace with the actual path to your logo
                alt="DevSphere Logo"
                className="h-14 w-auto"

              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection("services")}
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-red-800"
              >
                Services
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="ghost"
                className="text-red-300 hover:text-white hover:bg-red-800"
              >
                Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="ghost"
                className="text-red-300 hover:text-white hover:bg-red-800"
              >
                About Us
              </Button>
              <Button
                onClick={() => scrollToSection("testimonials")}
                variant="ghost"
                className="text-red-300 hover:text-white hover:bg-red-800"
              >
                Testimonials
              </Button>
              <Link href="/careers">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-300 hover:text-white hover:bg-red-800"
                >
                  Careers
                </Button>
              </Link>
              <Button
                onClick={() => scrollToSection("contact")}
                className="ml-4 text-white bg-primary hover:bg-primary/90"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="text-gray-300 hover:text-white hover:bg-gray-800"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/70 shadow-md">
            <Button
              onClick={() => scrollToSection("services")}
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Services
            </Button>
            <Button
              onClick={() => scrollToSection("portfolio")}
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Portfolio
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
            >
              About Us
            </Button>
            <Button
              onClick={() => scrollToSection("testimonials")}
              variant="ghost"
              className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Testimonials
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full text-white bg-primary hover:bg-primary/90"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
