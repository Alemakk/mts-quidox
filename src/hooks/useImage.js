import { useState, useEffect } from 'react'

export default function useBackgroundImage (path) {
  const [src, setSrc] = useState(null)
  useEffect(() => {
    const imageLoader = new window.Image()
    imageLoader.src = path
    imageLoader.onload = () => {
      setSrc(path)
    }
  }, [path])

  return { src }
}