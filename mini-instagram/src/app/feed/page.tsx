"use client";

import { useEffect, useState } from "react";
import { Photo } from "@/types/photo";
import { fetchPhotos } from "@/utils/unsplash";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import PhotoCard from "@/components/PhotoCard";
import { useFavoritesInit } from "@/store/useFavorites";

export default function Feed() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cachedPhotos = localStorage.getItem("photos");

    if (cachedPhotos) {
      setPhotos(JSON.parse(cachedPhotos));
    } else {
      loadPhotos();
    }
  }, []);

  const loadPhotos = async (searchTerm?: string) => {
    try {
      setLoading(true);

      const data = await fetchPhotos(searchTerm);
      setPhotos(data);

      if (!searchTerm) {
        localStorage.setItem("photos", JSON.stringify(data));
      }
    } catch (error: unknown) {
      console.error("Erro ao carregar fotos!", error);

      const message =
        error instanceof Error &&
        error.message.includes("Erro ao buscar imagens")
          ? "Você atingiu o limite de requisições da API do Unsplash ou houve um erro na conexão. Por favor, tente novamente em alguns minutos."
          : "Ocorreu um erro inesperado. Tente novamente.";

      alert(message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm: string) => {
    loadPhotos(searchTerm);
  };

  useFavoritesInit();

  return (
    <main className="w-full max-w-6xl px-4 py-6 mx-auto overflow-x-hidden">
      <Header />
      <SearchBar onSearch={handleSearch} />

      {loading ? (
        <p className="text-gray-200 font-bold text-2xl flex justify-center items-center mt-6">
          Carregando imagens...
        </p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6">
          {photos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      )}
    </main>
  );
}
