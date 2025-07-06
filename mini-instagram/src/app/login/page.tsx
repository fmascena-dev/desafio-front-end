"use client";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import { cn } from "@/lib/utils";
import { Lobster } from "next/font/google";
// import { useRouter } from "next/navigation"

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function LoginPage() {
  // const router = useRouter()

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-foreground text-background px-4">
      <h1
        className={`${lobster.className} text-4xl font-bold text-primary h-24`}
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

      <form className="bg-gray-900 p-8 rounded shadow-md w-full max-w-md">
        <h2
          className={cn(
            "text-4xl text-center font-bold leading-[5rem] tracking-[-0.02em]",
            "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
            "bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
          )}
        >
          Login
        </h2>

        <label htmlFor="">Email:</label>
        <input type="email" />

        <label htmlFor="">Senha:</label>
        <input type="password" name="" id="" />

        <button>ENTRAR</button>
      </form>
    </main>
  );
}
