import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface NavigationBarProps {
  className?: string;
}

const NavigationBar = ({ className = "" }: NavigationBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Research Papers", path: "/research-papers" },
    { name: "Articles", path: "/articles" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav
      className={`w-full md:bg-white md:border-b md:border-slate-200 md:shadow-sm ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src="/ayp-new-logo-circular.png"
                  alt="Arunachal Pradesh Youth Parliament Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="ml-3 flex items-center">
                <img src="/bird-1.png" alt="Bird 1" className="h-8 w-8 mr-2" />
                <span className="text-base md:text-lg font-semibold text-slate-800">
                  AP Youth Parliament
                </span>
                <img src="/bird-2.png" alt="Bird 2" className="h-8 w-8 ml-2" />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            <div className="flex space-x-1">
              {navLinks.map((link, index) => {
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-slate-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-gradient-to-b from-flag-saffron-100/80 via-flag-white-200/90 to-flag-green-100/80 backdrop-blur-xl border-0 shadow-2xl"
              >
                <nav className="flex flex-col gap-3 mt-8">
                  {navLinks.map((link, index) => {
                    const isEven = index % 2 === 0;
                    const flagColorClass = isEven
                      ? "bg-gradient-to-r from-flag-saffron-100/60 to-flag-saffron-50/40 hover:from-flag-saffron-200/70 hover:to-flag-saffron-100/50 border-flag-saffron-200/40 hover:border-flag-saffron-300/60"
                      : "bg-gradient-to-r from-flag-green-100/60 to-flag-green-50/40 hover:from-flag-green-200/70 hover:to-flag-green-100/50 border-flag-green-200/40 hover:border-flag-green-300/60";

                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className={`px-4 py-3 text-sm font-bold text-slate-800 hover:text-flag-navy-600 rounded-xl transition-all duration-300 backdrop-blur-sm border shadow-md ${flagColorClass}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    );
                  })}

                  {/* Add the provided image at the bottom */}
                  <div className="mt-8 flex justify-center">
                    <img
                      src="/mobile-nav-image-new.png"
                      alt="Arunachal Pradesh Cultural Image"
                      className="w-56 h-56 object-contain brightness-110 contrast-110"
                    />
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Government accent strip */}
      <div className="w-full h-1 bg-gradient-to-r from-rose-500 via-white to-green-500"></div>
    </nav>
  );
};

export default NavigationBar;
