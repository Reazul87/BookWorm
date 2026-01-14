import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-neutral text-secondary-content pt-8 pb-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <Logo />
          <p className="text-sm text-gray-400">
            Discover books, track your reading, and build your personal library
            with ease.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/books">Browse Books</Link>
            </li>
            <li>
              <Link href="/library">My Library</Link>
            </li>
            <li>
              <Link href="/tutorials">Tutorials</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <FaTwitter />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-primary">
              <FaGithub />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t mt-6 pt-4 text-sm text-center text-gray-400">
        © {new Date().getFullYear()} BookWorm. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
