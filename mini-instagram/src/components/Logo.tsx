"use client"

import { cn } from "@/lib/utils";
import { TypingAnimation } from "./magicui/typing-animation";
import { Lobster } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function Logo() {
    return (
      <h1
        className={`${lobster.className} text-2xl font-bold text-[#00ffd5] h-20`}
      >
        <TypingAnimation
          className={cn(
            "text-5xl font-bold leading-[5rem] tracking-[-0.02em]",
            "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
            "bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
          )}
        >
          InstaPocket
        </TypingAnimation>
      </h1>
    );
}