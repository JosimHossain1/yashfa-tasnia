"use client";

import React from "react";
import Link from "next/link";
import { Instagram, Twitter, Mail, Camera, Video, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-text-primary/10 bg-bg-primary pt-16 pb-8">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-2">
            <Link
              href="/"
              className="font-dancing text-3xl font-bold text-text-primary"
            >
              Yashfa Tasnia
            </Link>
            <p className="max-w-md font-inter text-sm leading-relaxed text-text-primary/70">
              Capturing life&apos;s most precious moments through an artistic lens. Specialized in professional photography and cinematic videography tailored to your unique story.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
                { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
                { icon: <Mail size={20} />, href: "mailto:hello@yashfatasnia.com", label: "Email" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-text-primary/5 text-text-primary transition-all hover:bg-text-primary hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-inter text-sm font-bold uppercase tracking-widest text-text-primary">
              Navigation
            </h4>
            <ul className="space-y-3 font-inter text-sm text-text-primary/70">
              {[
                { name: "Home", href: "/" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About Me", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition-colors hover:text-text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact/Services */}
          <div className="space-y-6">
            <h4 className="font-inter text-sm font-bold uppercase tracking-widest text-text-primary">
              Services
            </h4>
            <ul className="space-y-3 font-inter text-sm text-text-primary/70">
              <li className="flex items-center gap-2">
                <Camera size={16} />
                <span>Wedding Photography</span>
              </li>
              <li className="flex items-center gap-2">
                <Video size={16} />
                <span>Cinematic Videography</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} />
                <span>Product Shoots</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact"
                className="group flex items-center gap-2 font-inter text-sm font-bold text-text-primary"
              >
                Book a Session
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-text-primary/10 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="font-inter text-[12px] text-text-primary/50 text-center md:text-left">
            © {currentYear} Yashfa Tasnia Portfolio. All Rights Reserved.
          </p>
          <div className="flex space-x-6 font-inter text-[12px] text-text-primary/50">
            <Link href="#" className="hover:text-text-primary">Privacy Policy</Link>
            <Link href="#" className="hover:text-text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
