import React from "react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { MovieRow } from "../../components/MovieRow";

export default function Inicio() {
  const trendingMovies = [
    { id: 1, title: "Movie 1", imageUrl: "https://images.unsplash.com/photo-1739891251370-05b62a54697b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 2, title: "Movie 2", imageUrl: "https://images.unsplash.com/photo-1595171694538-beb81da39d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 3, title: "Movie 3", imageUrl: "https://images.unsplash.com/photo-1715322608224-a9efaeeffaf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ];

  const popularMovies = [
    { id: 7, title: "Movie 7", imageUrl: "https://images.unsplash.com/photo-1627964464837-6328f5931576?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 8, title: "Movie 8", imageUrl: "https://images.unsplash.com/photo-1603016129004-c7539f86b53f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ];

  const newReleases = [
    { id: 13, title: "Movie 13", imageUrl: "https://images.unsplash.com/photo-1686474057987-9b32824344f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
    { id: 14, title: "Movie 14", imageUrl: "https://images.unsplash.com/photo-1715322608224-a9efaeeffaf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" },
  ];

  return (
    <div className="min-h-screen bg-[#141414]">
      <Header />
      <Hero imageUrl="https://images.unsplash.com/photo-1673095288333-ac62dbbad575?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" />
      <div className="relative -mt-32">
        <MovieRow title="Tendencias ahora" movies={trendingMovies} />
        <MovieRow title="Populares en Neflis" movies={popularMovies} />
        <MovieRow title="Nuevos lanzamientos" movies={newReleases} />
      </div>
    </div>
  );
}
