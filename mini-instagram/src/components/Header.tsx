"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("auth");
    setIsLoggedIn(!!logged);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <header className="flex flex-col justify-between items-center mb-6 md:flex-row lg:flex-row">
      <Logo />

      <nav className="flex items-center gap-4 text-sm font-medium px-2 space-x-8">
        <Link
          href="/feed"
          className={`relative group transition duration-500 font-bold ${
            pathname === "/feed"
              ? "text-[#f09433]"
              : "text-gray-200 hover:text-[#dc2743]"
          }`}
        >
          FEED
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#bc1888] transition-all duration-500 ${
              pathname === "/feed" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>

        <Link
          href="/favorites"
          className={`relative group transitio duration-500 font-bold ${
            pathname === "/favorites"
              ? "text-[#f09433]"
              : "text-gray-200 hover:text-[#dc2743]"
          }`}
        >
          FAVORITOS
          <span
            className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#bc1888] transition-all duration-500 ${
              pathname === "/favorites" ? "w-full" : "w-0 group-hover:w-full"
            }`}
          ></span>
        </Link>

        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="relative group text-gray-200 hover:text-[#dc2743] transition duration-700 cursor-pointer font-bold"
          >
            SAIR
            <span
              className={`absolute -bottom-0.5 left-0 h-0.5 bg-[#bc1888] transition-all duration-700 w-0 group-hover:w-full`}
            ></span>
          </button>
        )}
      </nav>
    </header>
  );
}
