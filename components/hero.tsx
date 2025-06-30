"use client"

import { Play, Info, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Movie {
  id: number
  title: string
  description: string
  backdrop: string
  logo: string
  year: number
  rating: string
  duration: string
}

interface HeroProps {
  movie: Movie
}

export default function Hero({ movie }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true)

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={movie.backdrop || "/placeholder.svg"} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-4 md:px-8">
        <div className="max-w-2xl">
          {/* Movie Logo/Title */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{movie.title}</h1>
          </div>

          {/* Movie Info */}
          <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
            <span className="text-green-400 font-semibold">New</span>
            <span>{movie.year}</span>
            <span className="border border-gray-400 px-1 text-xs">{movie.rating}</span>
            <span>{movie.duration}</span>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-xl">{movie.description}</p>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button className="bg-white text-black hover:bg-gray-200 px-8 py-3 text-lg font-semibold rounded-full">
              <Play className="w-5 h-5 mr-2 fill-current" />
              Play
            </Button>
            <Button
              variant="outline"
              className="border-gray-400 text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent rounded-full"
            >
              <Info className="w-5 h-5 mr-2" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Volume Control */}
      <div className="absolute bottom-24 right-8 z-10">
        <Button
          variant="outline"
          size="icon"
          className="border-gray-400 text-white hover:bg-white/10 rounded-full bg-transparent w-12 h-12"
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
        </Button>
      </div>
    </div>
  )
}
