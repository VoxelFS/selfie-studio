import Image from "next/image";
import { forwardRef } from 'react'

export const Navbar = forwardRef<HTMLDivElement>((_, ref) => {
  // TODO make mobile friendly
  return (
    <>
      <nav className="bg-white px-12 border-b-5 border-[#bbfcff] justify-between flex items-center" ref={ref}>
        <div className="flex-row font-medium text-2xl color-dark-red">
          <a>about us</a>
          <a className="ml-16 ">locations</a>
        </div>
        <Image src="/assets/logo.png" alt="logo" height={70} width={70} />
        <div className="flex-row font-medium text-2xl color-dark-red">
          <a className="mr-16">gallery</a>
          <a>contact</a>
        </div>
      </nav>
    </>
  );
});