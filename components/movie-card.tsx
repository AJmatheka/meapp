"use client"

import { useState } from "react"
import { Play, Plus, ThumbsUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Movie {
  id: number
  title: string
  poster: string
  year: number
}

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative flex-shrink-0 w-48 md:w-56 transition-transform duration-300 hover:scale-105 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Movie Poster */}
      <div className="relative rounded-md overflow-hidden">
        <img src={movie.poster || "/placeholder.svg"} alt={movie.title} className="w-full h-72 object-cover" />

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <Button size="icon" className="bg-white/20 hover:bg-white/30 text-white rounded-full w-12 h-12">
              <Play className="w-6 h-6 fill-current" />
            </Button>
          </div>
        )}
      </div>

      {/* Movie Info - Shows on Hover */}
      {isHovered && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 rounded-b-md p-4 z-20 shadow-xl">
          <h3 className="text-white font-semibold mb-2">{movie.title}</h3>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Button size="icon" className="bg-white text-black hover:bg-gray-200 w-8 h-8 rounded-full">
                <Play className="w-4 h-4 fill-current" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-400 text-white hover:bg-white/10 w-8 h-8 bg-transparent rounded-full"
              >
                <Plus className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="border-gray-400 text-white hover:bg-white/10 w-8 h-8 bg-transparent rounded-full"
              >
                <ThumbsUp className="w-4 h-4" />
              </Button>
            </div>
            <Button
              size="icon"
              variant="outline"
              className="border-gray-400 text-white hover:bg-white/10 w-8 h-8 bg-transparent rounded-full"
            >
              <ChevronDown className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-sm text-gray-400">
            <span>{movie.year}</span>
          </div>
        </div>
      )}
    </div>
  )
}
