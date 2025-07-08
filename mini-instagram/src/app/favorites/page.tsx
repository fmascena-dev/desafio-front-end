"use client";

import Header from "@/components/Header";
import PhotoCard from "@/components/PhotoCard";
import { cn } from "@/lib/utils";
import { useFavorites, useFavoritesInit } from "@/store/useFavorites";
import { useState } from "react";

export default function FavoritesPage() {
  useFavoritesInit();
  const { favorites, clearFavorites } = useFavorites();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  const handleConfirmYes = () => {
    clearFavorites();
    setShowConfirm(false);
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
  };

  return (
    <main className="px-4 py-6 max-w-6xl mx-auto">
      <Header />
      <h1
        className={cn(
          "text-4xl text-center font-bold leading-[5rem] tracking-[-0.02em]",
          "bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]",
          "bg-[length:200%_200%] bg-clip-text text-transparent animate-gradient"
        )}
      >
        Fotos Favoritas ❤️
      </h1>

      {favorites.length === 0 ? (
        <p className="text-[#f09433] animate-pulse text-2xl font-bold flex justify-center items-center mt-6">
          Nenhuma imagem favoritada
        </p>
      ) : (
        <>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleDeleteClick}
              className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-md font-bold transition duration-300 cursor-pointer"
            >
              Excluir todos
            </button>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
            {favorites.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </>
      )}

      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm text-center">
            <h2 className="text-xl font-bold mb-4">
              Tem certeza que deseja excluir todos os favoritos?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleConfirmYes}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-bold"
              >
                Sim
              </button>
              <button
                onClick={handleConfirmNo}
                className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-md font-bold"
              >
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
