"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../utils/cn";
import Link from "next/link";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/clerk-react";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }

    const handleSignOut = () => {
      window.location.reload();
    };
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex items-center justify-between fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-gray-500 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-8 pl-8 py-2 w-full max-w-2xl",
          className
        )}
      >
        <div className="flex items-center p-1 px-2 bg-black rounded-full">
          <img
            src="https://i.postimg.cc/13JnbbKX/ggf-high-resolution-logo-transparent.png"
            alt=""
            width={30}
          />
        </div>

        <div className="flex items-center space-x-4">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-200 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-100 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          {/* Profile image */}
          <SignedIn>
            <UserButton afterSignOutUrl="/"/>
          </SignedIn>
          {/* Login image */}
          <SignedOut>
            <SignInButton afterSignInUrl="/">
              <a href="/sign-in">
                <button className="block md:inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-200 transition-all duration-200 hover:bg-blue-600 hover:text-gray-100 bg-blue-500">
                  Sign In
                </button>
              </a>
            </SignInButton>
          </SignedOut>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
