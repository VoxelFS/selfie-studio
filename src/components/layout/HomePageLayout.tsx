"use client";

import { HtmlHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react'
import { Navbar } from '@/components/navigation/Navbar';

interface StandardPageLayoutProps extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode;
}

export default function HomePageLayout({ children }: StandardPageLayoutProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
    console.log(navRef.current);
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="z-50 relative">
          <Navbar ref={navRef} />
        </div>
        <main className="responsive-fullwidth grow z-10 relative" style={{ marginTop: -navHeight }}>{children}</main>
      </div>
    </>
  );
}
