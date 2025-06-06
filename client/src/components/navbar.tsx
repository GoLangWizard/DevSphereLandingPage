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
    <nav className="fixed w-full bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <span className="text-primary font-bold text-xl cursor-pointer">
                DevSphere
                <span className="text-gray-700 font-normal">.info</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection("services")}
                variant="ghost"
                className="text-gray-700 hover:text-primary hover:bg-gray-100"
              >
                Services
              </Button>
              <Button
                onClick={() => scrollToSection("portfolio")}
                variant="ghost"
                className="text-gray-700 hover:text-primary hover:bg-gray-100"
              >
                Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("about")}
                variant="ghost"
                className="text-gray-700 hover:text-primary hover:bg-gray-100"
              >
                About Us
              </Button>
              <Button
                onClick={() => scrollToSection("testimonials")}
                variant="ghost"
                className="text-gray-700 hover:text-primary hover:bg-gray-100"
              >
                Testimonials
              </Button>
              <Link href="/careers">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-gray-700 hover:text-primary hover:bg-gray-100"
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
          <div className="md:hidden">
            <Button
              onClick={toggleMenu}
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              className="text-gray-700 hover:text-primary hover:bg-gray-100"
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

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <Button
              onClick={() => scrollToSection("services")}
              variant="ghost"
              className="w-full justify-start text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              Services
            </Button>
            <Button
              onClick={() => scrollToSection("portfolio")}
              variant="ghost"
              className="w-full justify-start text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              Portfolio
            </Button>
            <Button
              onClick={() => scrollToSection("about")}
              variant="ghost"
              className="w-full justify-start text-gray-700 hover:text-primary hover:bg-gray-100"
            >
              About Us
            </Button>
            <Button
              onClick={() => scrollToSection("testimonials")}
              variant="ghost"
              className="w-full justify-start text-gray-700 hover:text-primary hover:bg-gray-100"
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
