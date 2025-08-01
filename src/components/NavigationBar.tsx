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
    { name: "Who's Who", path: "/whos-who" },
    { name: "Gallery", path: "/gallery" },
    { name: "Articles", path: "/articles" },
    { name: "Partners", path: "/partner" },
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav
      className={`w-full bg-white border-b border-slate-200 shadow-sm ${className}`}
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
              <div className="ml-3">
                <span className="text-lg font-semibold text-slate-800">
                  AP Youth Parliament
                </span>
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
                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
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
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link, index) => {
                    return (
                      <Link
                        key={link.name}
                        to={link.path}
                        className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
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
