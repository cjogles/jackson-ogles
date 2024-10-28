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
    <div style={{display: "flex", cursor: "pointer"}}>
      <button
        onClick={() => setTheme('light')}
        style={{all: "unset", display: "inline-block", borderRadius: "50%", cursor: "pointer", height: "24px", width: "24px", transition: "all 0.3s ease-in-out 0s", boxShadow: "0 0 50px yellow", backgroundColor: "yellow", border: "1px solid orangered"}}
      />
      <div style={{cursor: "pointer", paddingRight: "10px"}} onClick={() => setTheme('dark')}>
        <button
          onClick={() => setTheme('dark')}
          style={{all: "unset", display: "inline-block", borderRadius: "50%", cursor: "pointer", height: "24px", width: "24px", transition: "all 0.3s ease-in-out 0s", boxShadow: "calc(24px / 4) calc(24px / -4) calc(24px / 8)", inset: "#fff", rotate: "50deg" }}
        />

      </div>
    </div>
  )
};