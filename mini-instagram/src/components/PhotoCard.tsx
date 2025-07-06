"use client";

import Image from "next/image";
import { Photo } from "@/types/photo";
import { useFavorites } from "@/store/useFavorites";
// import { useState } from "react";

export default function PhotoCard({ photo }: { photo: Photo }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorited = favorites.some((f) => f.id === photo.id);

  return (
    <>
      <div>
        <div>
          <Image
            src={photo.urls.regular}
            alt={photo.alt_description || "Foto"}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white font-bold p2 rounded-b">
          {photo.user.name}
        </div>

        <button
          onClick={() => toggleFavorite(photo)}
          className="absolute top-2 right-2 text-white text-xl hover:scale-y-125 hover:scale-x-125 transition duration-300"
          aria-label="Favoritar imagem"
        >
          {isFavorited ? "❤️" : "🤍"}
        </button>
      </div>
    </>
  );
}
