"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full bg-cream z-50 shadow-sm">
        <div className="flex items-center justify-between h-32 px-6 md:px-10">
          <Logo />
          <button
            onClick={toggleMenu}
            className="text-[#4A4A4A] hover:opacity-75 transition-opacity block md:hidden"
            aria-label="Toggle menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-cream z-[100] flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between h-32 px-6 md:px-10">
              <Logo />
              <button
                onClick={toggleMenu}
                className="text-[#4A4A4A] hover:opacity-75 transition-opacity"
                aria-label="Close menu"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex-grow flex items-center justify-center">
              {/* Future navigation links can go here */}
              <p className="text-[#4A4A4A]">Navigation coming soon</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 