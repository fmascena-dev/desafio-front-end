"use client";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import { cn } from "@/lib/utils";
import { Lobster } from "next/font/google";
import { useState } from "react";
// import { useRouter } from "next/navigation"

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

export default function LoginPage() {
  // const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setErro("Digite um email válido!");
      return;
    }

    if (password.length < 6) {
      setErro("A senha deve ter pelo menos 6 caracteres!");
      return;
    }
  };

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

      <form
        onSubmit={handleLogin}
        className="bg-gray-900 p-8 rounded-md shadow-md w-full max-w-md"
      >
        <h2
          className={cn(
            "text-4xl text-center font-bold leading-[5rem] tracking-[-0.02em]",
            "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
            "bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
          )}
        >
          Login
        </h2>

        {erro && (
          <div className="absolute z-50 top-8 bg-red-500 text-white px-6 py-4 rounded-md shadow-lg max-w-sm w-full animate-fade-in">
            <p className="text-md text-center font-bold">{erro}</p>
            <button
              onClick={() => setErro("")}
              className="mt-3 block mx-auto bg-white text-red-600 px-4 py-1 rounded hover:bg-gray-100 font-bold"
            >
              OK
            </button>
          </div>
        )}

        <label className="block mb-2 text-sm font-medium">Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="w-full px-3 py-2 mb-4 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#bc1888] transition"
          placeholder="seuemail@exemplo.com"
        />

        <label className="block mb-2 text-sm font-medium">Senha:</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="w-full px-3 py-2 mb-6 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-[#bc1888] transition"
          placeholder="Mínimo 6 caracteres"
        />

        <button
          type="submit"
          className="w-full py-2 rounded text-white font-semibold transition duration-300 cursor-pointer 
             bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] 
             bg-[length:200%_200%] animate-gradient"
        >
          ENTRAR
        </button>
      </form>
    </main>
  );
}
