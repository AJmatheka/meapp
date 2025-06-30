"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import MovieRow from "@/components/movie-row"
import Recents from "@/components/recents"

// Sample movie data
const featuredMovie = {
  id: 1,
  title: "Stellar Odyssey",
  description:
    "An epic journey through the cosmos as humanity discovers ancient alien technology that could either save or destroy civilization. Follow Captain Sarah Chen and her crew as they navigate political intrigue, cosmic mysteries, and the ultimate question of humanity's place in the universe.",
  backdrop: "/placeholder.svg?height=720&width=1280",
  logo: "/placeholder.svg?height=200&width=400",
  year: 2024,
  rating: "PG-13",
  duration: "2h 28m",
}

const recents = [
  {
    id: 1,
    title: "The Adventure of Blue Sword",
    description: "Let Play Moviev",
    image: "/placeholder.jpg", // Replace with actual image if available
  },
  {
    id: 2,
    title: "Recalling the journey of Dol's exciting story",
    description: "Let Play Moviev",
    image: "/placeholder.jpg", // Replace with actual image if available
  },
]

const movieCategories = [
  {
    title: "Trending Now",
    movies: [
      { id: 1, title: "Quantum Realm", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 2, title: "Digital Dreams", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 3, title: "Neon Nights", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 4, title: "Silent Echo", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 5, title: "Midnight Protocol", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 6, title: "Crystal Horizon", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
    ],
  },
  {
    title: "Sci-Fi Favorites",
    movies: [
      { id: 7, title: "Void Walker", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 8, title: "Neural Link", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 9, title: "Cosmic Dawn", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 10, title: "Binary Soul", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 11, title: "Stellar Wind", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 12, title: "Quantum Leap", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
    ],
  },
  {
    title: "Drama Collection",
    movies: [
      { id: 13, title: "Autumn Leaves", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 14, title: "City Lights", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 15, title: "Whispered Secrets", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 16, title: "Golden Hour", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 17, title: "Paper Hearts", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 18, title: "Ocean Waves", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
    ],
  },
  {
    title: "Action & Thriller",
    movies: [
      { id: 19, title: "Shadow Strike", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 20, title: "Steel Rain", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 21, title: "Night Hunter", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 22, title: "Code Black", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 23, title: "Phoenix Rising", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 24, title: "Storm Front", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
    ],
  },
  {
    title: "Adventure",
    movies: [
      { id: 25, title: "Jungle Quest", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 26, title: "Lost Island", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 27, title: "Mountain Spirit", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 28, title: "Desert Mirage", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 29, title: "River Run", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 30, title: "Skyward Bound", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
    ],
  },
  {
    title: "Animation",
    movies: [
      { id: 31, title: "Pixel Pals", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 32, title: "Dreamscape", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 33, title: "Magic Canvas", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 34, title: "Colorful World", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 35, title: "Tiny Heroes", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 36, title: "Starlight Tales", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
    ],
  },
  {
    title: "Comedy",
    movies: [
      { id: 37, title: "Laugh Factory", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 38, title: "Joke's On You", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 39, title: "Family Fiasco", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 40, title: "Office Pranks", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 41, title: "Holiday Hiccups", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 42, title: "Roommates", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
    ],
  },
  {
    title: "Mystery & Documentary",
    movies: [
      { id: 43, title: "Mystery Manor", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 44, title: "Romantic Escape", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 45, title: "Horror Night", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 46, title: "Documentary Now", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
      { id: 47, title: "Classic Cinema", poster: "/placeholder.svg?height=300&width=200", year: 2024 },
      { id: 48, title: "Indie Gems", poster: "/placeholder.svg?height=300&width=200", year: 2023 },
    ],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero movie={featuredMovie} />
      {/* Recents Section */}
      <div className="mt-6 mb-10">
        <h2 className="text-2xl font-bold px-4 md:px-8 mb-4">Recents</h2>
        <Recents items={recents} />
      </div>
      <div className="pb-20">
        {movieCategories.map((category, index) => (
          <MovieRow key={index} title={category.title} movies={category.movies} />
        ))}
      </div>
    </div>
  )
}
