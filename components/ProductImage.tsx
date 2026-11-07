"use client"
import { useState } from "react"
import { ImageIcon } from "lucide-react"
export default function ProductImage({ id, url, title }: { id?: string, url?: string, title: string }) {
  const [failed, setFailed] = useState(false)
  // Use the provided URL, or construct it from the ID if the backend requires it
  const imageUrl = url || (id ? `https://honest-mercedes-school1660440-a2fe48e2.koyeb.app/api/images/${id}` : null)
  if (failed || !imageUrl) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-400">
        <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
        <span className="text-xs font-medium">Image Unavailable</span>
      </div>
    )
  }
  return (
    <img
      src={imageUrl}
      alt={title}
      onError={() => setFailed(true)}
      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
    />
  )
}
