import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

export function SimpleFooterWithFourGrids() {
  const pages = [
    {
      title: "Anasayfa",
      href: "/",
    },
    {
      title: "Etkinlikler",
      href: "https://etkinlik.devmultigroup.com/",
    },
    {
      title: "Konuşmacılar",
      href: "/icerik#konusmacilar",
    },
    {
      title: "Biletler",
      href: "https://kommunity.com/devmultigroup/events/modern-ios-bootcamp-18857d79/tickets/",
    },
  ];

  const socials = [
    {
      title: "Kommunity",
      href: "https://kommunity.com/devmultigroup",
    },
    {
      title: "Github",
      href: "https://github.com/Developer-MultiGroup",
    },
  ];
  const legals = [
    {
      title: "Modern iOS Bootcamp",
      href: "https://modern-ios-bootcamp.devmultigroup.com",
    },
    {
      title: "GenAI Fundamentals",
      href: "https://genai.devmultigroup.com",
    },
    {
      title: "Data Science Awesome",
      href: "https://github.com/Developer-MultiGroup/DMG-Data-Science-Awesome",
    },
  ];
  
  return (
    <div className="px-4 sm:px-8 py-12 sm:py-20 bg-[#1C1C1C] w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start  md:px-8">
        <div>
          <div className="mr-0 md:mr-4  md:flex mb-4">
            <Logo />
          </div>

          <div className="mt-2 ml-2 font-montserrat-mid">
            &copy; copyright Developer MultiGroup 2020–2025
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-end items-start mt-10 sm:mt-0 md:mt-0 gap-8 sm:gap-16">
          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Sayfalar
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4 font-montserrat-mid">
              {pages.map((page, idx) => (
                <li key={"pages" + idx} className="list-none hover:text-accent">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={page.href}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Topluluk
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4 font-montserrat-mid">
              {socials.map((social, idx) => (
                <li key={"social" + idx} className="list-none hover:text-accent">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={social.href}
                  >
                    {social.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">
              Projeler
            </p>
            <ul className="transition-colors hover:text-text-neutral-800 text-neutral-600 dark:text-neutral-300 list-none space-y-4 font-montserrat-mid">
              {legals.map((legal, idx) => (
                <li key={"legal" + idx} className="list-none hover:text-accent">
                  <Link
                    className="transition-colors hover:text-text-neutral-800 "
                    href={legal.href}
                  >
                    {legal.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
             <p className="text-center mt-12 sm:mt-20 text-3xl sm:text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-t from-neutral-50/75 via-neutral-50/50 to-neutral-50/0 dark:from-neutral-950 dark:via-neutral-950/50 dark:to-neutral-950/0 inset-x-0">
        ACADEMY
       </p>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-white px-2 py-1 relative z-20"
    >
      <Image
        src="/images/dmg-logo.webp"
        alt="MultiGroup Logo"
        width={240}
        height={40}
      />
    </Link>
  );
};
