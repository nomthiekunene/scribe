"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b-2 border-gray-800 h-20 flex items-center px-4 md:px-8  font-[inter] text-[rgb(255,255,255)]">
      
      <h1 className="text-2xl md:text-4xl text-emerald-300 font-serif font-medium ml-32 hover:text-gray-700">
        <Link href="/">Scribe</Link>
      </h1>

    
      <ul className="hidden md:flex gap-6 ml-18 text-2xl ">
        <li className="navy"><Link href="/articles">All articles</Link></li>
        <li  className="navy"><Link href="/culture">Culture</Link></li>
        <li  className="navy"><Link href="/lifestyle">Lifestyle</Link></li>
        <li  className="navy"><Link href="/people">People</Link></li>
        <li  className="navy"><Link href="/technology">Technology</Link></li>
      </ul>

      
      <ul className="hidden md:flex gap-5 ml-auto items-center text-2xl mr-36">
        <li className="navy"><Link href="/about">About</Link></li>
        <li>
          <Link href="/subscribe">
            <button className="h-12 px-6 rounded-xl bg-cyan-200 text-black hover:bg-cyan-800">
              Subscribe
            </button>
          </Link>
        </li>
      </ul>

     
      <button
        className="ml-auto md:hidden text-3xl text-gray-300"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        =
      </button>

      
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white flex flex-col items-center gap-6 py-6 md:hidden">
          <Link href="/articles" onClick={() => setMenuOpen(false)}>All articles</Link>
          <Link href="/culture" onClick={() => setMenuOpen(false)}>Culture</Link>
          <Link href="/lifestyle" onClick={() => setMenuOpen(false)}>Lifestyle</Link>
          <Link href="/people" onClick={() => setMenuOpen(false)}>People</Link>
          <Link href="/technology" onClick={() => setMenuOpen(false)}>Technology</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/subscribe" onClick={() => setMenuOpen(false)}>
            <button className="h-12 px-6 rounded-xl bg-cyan-200 text-black">
              Subscribe
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
