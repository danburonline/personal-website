import { useEffect, useState } from "react"

export default function useDeviceOrientation() {
  const [deviceRotationCoordinates, setDeviceRotationCoordinates] = useState({
    alpha: 0,
    beta: 90,
    gamma: 0,
  })

  const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
    setDeviceRotationCoordinates((prevState) => ({
      ...prevState,
      alpha: event.alpha ? event.alpha : 0,
    }))
    setDeviceRotationCoordinates((prevState) => ({
      ...prevState,
      beta: event.beta ? event.beta : 0,
    }))
    setDeviceRotationCoordinates((prevState) => ({
      ...prevState,
      gamma: event.gamma ? event.gamma : 0,
    }))
  }

  useEffect(() => {
    window.addEventListener("deviceorientation", handleDeviceOrientation)
    return () => window.removeEventListener("deviceorientation", handleDeviceOrientation)
  }, [])

  return {
    alpha: deviceRotationCoordinates.alpha / 180,
    beta: deviceRotationCoordinates.beta / 180,
    gamma: deviceRotationCoordinates.gamma / 180,
  }
}
