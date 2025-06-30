import { Play } from "lucide-react"

interface RecentItem {
  id: number
  title: string
  description: string
  image: string
}

interface RecentsProps {
  items: RecentItem[]
}

export default function Recents({ items }: RecentsProps) {
  return (
    <div className="w-full px-4 md:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="relative w-full h-56 rounded-2xl overflow-hidden bg-gradient-to-r from-blue-700/80 to-blue-400/60 flex flex-col justify-between shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 p-6 flex flex-col h-full justify-between">
              <h3 className="text-white text-2xl font-bold mb-2 max-w-[70%] leading-tight drop-shadow-lg">
                {item.title}
              </h3>
              <p className="text-white/80 text-base font-medium mb-4 max-w-[80%] drop-shadow">
                {item.description}
              </p>
              <button className="flex items-center gap-2 text-white font-medium bg-black/40 hover:bg-black/60 rounded-full px-4 py-2 w-fit transition">
                <Play className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
