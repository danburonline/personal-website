import { useEffect, useState } from "react"

export default function useSupportsDeviceOrientation() {
  const [supportsIt, setSupportsIt] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.DeviceOrientationEvent && "ontouchstart" in window) {
        setSupportsIt(true)
      } else {
        setSupportsIt(false)
      }
    }
  }, [setSupportsIt])

  return supportsIt
}
