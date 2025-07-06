"use client";

import { FormEvent, useState } from "react";

interface Props {
  onSearch: (searchTerm: string) => void;
}

export default function SearchBar({onSearch}: Props) {
  const [term, setTerm] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSearch(term)
  }


  return (
    <form onSubmit={handleSubmit} className="flex gap-4 mb-6">
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Buscar por: natureza, cidades, animais..."
        className="flex-1 px-4 py-2 rounded-md text-gray-50 border border-gray-300 shadow-sm focus:outline-none focus:border-[#f09433] transition duration-300"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white rounded-md font-bold cursor-pointer bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] bg-[length:200%_200%] animate-gradient"
      >
        Buscar
      </button>
    </form>
  );
}
