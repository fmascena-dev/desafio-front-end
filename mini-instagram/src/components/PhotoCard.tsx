"use client";

import Image from "next/image";
import { Photo } from "@/types/photo";
import { useFavorites } from "@/store/useFavorites";
import { useState } from "react";
import Modal from "./Modal";

export default function PhotoCard({ photo }: { photo: Photo }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.some((f) => f.id === photo.id);

  const [isOpen, setIsOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleFavoriteClick = () => {
    if (!isFavorited) {
      toggleFavorite(photo);
    } else {
      setShowConfirm(true);
    }
  };

  const handleConfirmYes = () => {
    toggleFavorite(photo);
    setShowConfirm(false);
  };

  const handleConfirmNo = () => {
    setShowConfirm(false);
  };

  return (
    <>
      <div className="relative group cursor-pointer w-full max-w-sm mx-auto">
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded shadow-sm border transition duration-300 md:hover:border-[#bc1888]">
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description || "Foto"}
            fill
            className="object-cover"
            onClick={() => setIsOpen(true)}
            loading="lazy"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white font-bold p-2 rounded-b">
          {photo.user.name}
        </div>

        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 text-white text-xl hover:scale-y-125 hover:scale-x-125 transition duration-300"
          aria-label="Favoritar imagem"
        >
          {isFavorited ? "❤️" : "🤍"}
        </button>
      </div>

      {/* Modal de imagem */}
      {isOpen && <Modal photo={photo} onClose={() => setIsOpen(false)} />}

      {/* Modal de confirmação */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-sm text-center">
            <h2 className="text-xl font-bold mb-4">
              Deseja remover esta imagem dos favoritos?
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
    </>
  );
}
