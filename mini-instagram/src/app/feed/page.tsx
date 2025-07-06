"use client"
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";

export default function Feed() {
    return (
        <main className="w-full max-w-6xl px-4 py-6 mx-auto overflow-x-hidden">
            <Header />
            <SearchBar />
        </main>
    )
}