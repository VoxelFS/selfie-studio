import Image from "next/image";
import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from 'next/link'

export const Navbar = forwardRef<HTMLDivElement>((_, ref) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "about us" },
    { href: "/locations", label: "locations" },
    { href: "/gallery", label: "gallery" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <>
      <nav
        className="bg-white px-6 sm:px-12 border-b-4 border-[#bbfcff] flex items-center justify-between"
        ref={ref}
      >
        {/* Desktop Left Links */}
        <div className="hidden md:flex gap-16 font-medium text-2xl color-dark-red">
          {links.slice(0, 2).map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              whileHover={{ scale: 1.1, opacity: 0.7 }}
              transition={{ type: "tween", duration: 0.1 }}
            >
              {label}
            </motion.a>
          ))}
        </div>

        {/* Logo */}
        <Link href="/" className="z-40">
          <Image src="/assets/logo.png" alt="logo" height={70} width={70} />
        </Link>

        {/* Desktop Right Links */}
        <div className="hidden md:flex gap-16 font-medium text-2xl color-dark-red">
          {links.slice(2).map(({ href, label }) => (
            <motion.a
              key={href}
              href={href}
              whileHover={{ scale: 1.1, opacity: 0.7 }}
              transition={{ type: "tween", duration: 0.1 }}
            >
              {label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center gap-10 z-40"
          >
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-bold color-dark-red"
              >
                {label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
