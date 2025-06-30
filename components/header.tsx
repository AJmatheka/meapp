"use client"

import { useState } from "react"
import { Search, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export default function Header() {
  const [activeTab, setActiveTab] = useState("Movie")
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between px-8 py-6">
        {/* Left Spacer */}
        <div className="w-32" />
        {/* Centered Navigation Tabs */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center bg-[#10151C]/60 backdrop-blur-md border border-white/10 rounded-full px-2 py-1 shadow-md relative min-w-[340px] transition-colors duration-300">
            {/* Animated Search Icon & Input */}
            <div
              className={`flex items-center transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-56 ml-0' : 'w-8 ml-2'} bg-[#181F29]/60 backdrop-blur-sm rounded-full px-2 overflow-hidden`}
              style={{ minWidth: isSearchOpen ? 220 : 32 }}
            >
              <button
                onClick={() => setIsSearchOpen((v) => !v)}
                className="focus:outline-none"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-gray-400 transition-transform duration-300" style={{ transform: isSearchOpen ? 'translateX(-8px)' : 'translateX(0)' }} />
              </button>
              <input
                type="text"
                placeholder="Search movies, shows..."
                className={`bg-transparent text-white placeholder-gray-400 outline-none flex-1 ml-2 transition-all duration-300 ${isSearchOpen ? 'opacity-100 w-full' : 'opacity-0 w-0'}`}
                style={{ width: isSearchOpen ? 160 : 0 }}
                autoFocus={isSearchOpen}
                onBlur={() => setIsSearchOpen(false)}
                tabIndex={isSearchOpen ? 0 : -1}
              />
            </div>
            {/* Nav Tabs */}
            <div className={`flex items-center transition-all duration-300 ${isSearchOpen ? 'ml-4' : 'ml-2'}`}>
              {["Movie", "Series", "Originals"].map((tab) => (
                <button
                  key={tab}
                  className={`px-6 py-2 rounded-full text-sm font-medium focus:outline-none transition-colors ${
                    activeTab === tab
                      ? "bg-[#181F29]/80 text-white shadow"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab)}
                  tabIndex={isSearchOpen ? -1 : 0}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Notification Bell with badge */}
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full">
              <Bell className="w-5 h-5" />
            </Button>
            {/* Aesthetic notification dot */}
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#10151C] shadow-md animate-pulse" />
          </div>
          {/* User Profile */}
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="Sarah J" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <span className="text-white text-sm font-medium leading-none">Sarah J</span>
              <span className="text-xs text-gray-400">Premium</span>
            </div>
            <svg width="16" height="16" fill="none" viewBox="0 0 16 16" className="ml-1 text-gray-400"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </header>
  )
}
