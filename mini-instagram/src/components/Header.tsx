"use client"
import { Lobster } from "next/font/google";
import { TypingAnimation } from "./magicui/typing-animation";
import { cn } from "@/lib/utils";
// import Link from "next/link";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function Header() {




    return (
      <header className="flex flex-col justify-between items-center mb-6 md:flex-row lg:flex-row">
        <h1
          className={`${lobster.className} text-2xl font-bold text-[#00ffd5] h-20`}
        >
          <TypingAnimation
            className={cn(
              "text-4xl font-bold leading-[5rem] tracking-[-0.02em]",
              "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
              "bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
            )}
          >
            InstaPocket
          </TypingAnimation>
        </h1>

        <nav className="flex items-center gap-4 text-sm font-medium px-2 space-x-8">
            <a>
            FEED
            </a>

            <a>
            FAVORITOS
            </a>
            
            <a>
            SAIR
            </a>
        </nav>
      </header>
    );
}