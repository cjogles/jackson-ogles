// app/components/ThemeSwitcher.tsx
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div style={{display: "flex", cursor: "pointer", alignItems: "center", gap: "8px"}}>
      <button
        onClick={() => setTheme('light')}
        style={{
          borderRadius: "50%", 
          cursor: "pointer", 
          height: "24px", 
          width: "24px", 
          boxShadow: "0 0 50px yellow", 
          backgroundColor: "yellow", 
          border: "1px solid orangered"
        }}
      />
      <div 
        style={{
          cursor: "pointer",
          paddingRight: "10px",
          display: "flex",
        }} 
        onClick={() => setTheme('dark')}
      >
        <button
          onClick={() => setTheme('dark')}
          style={{
            borderRadius: "50%", 
            cursor: "pointer", 
            height: "24px", 
            width: "24px", 
            backgroundColor: "#fff",  // Add background color
            border: "1px solid #666", // Add border
            // Remove transform that was causing positioning issues
          }} 
        />
      </div>
    </div>
  )
}