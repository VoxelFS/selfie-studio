"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

function Footer() {
  return (
    <footer
      className="flex flex-col md:flex-row flex-wrap justify-between items-center bg-white h-full py-6 px-20 bottom-0 border-t-5 border-[#bbfcff]">
      <div className="flex flex-row justify-center md:justify-between items-center order-last md:order-first w-full md:w-auto">
        <Image
          src="/assets/LogoText.png"
          alt="logo"
          height={150}
          width={150}
          className="rounded-2xl"
        />
        <div className="hidden md:block flex-col ml-5">
          <p className="font-bold text-xl color-dark-red">Selfie Studio</p>
          <p className="color-dark-red text-lg">selfiestudio@gmail.com</p>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-20 mb-4 md:mb-0 w-full md:w-auto">
        {[
          { href: '/', label: 'home' },
          { href: '/about', label: 'about' },
          { href: '/locations', label: 'locations' },
          { href: '/gallery', label: 'gallery' },
          { href: '/contact', label: 'contact' },
        ].map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            whileHover={{ scale: 1.1, opacity: 0.7 }}
            transition={{ type: "tween", duration: 0.1 }}
            className="text-2xl font-semibold color-dark-red"
          >
            {item.label}
          </motion.a>
        ))}
      </div>
    </footer>
  )
}

export default Footer;