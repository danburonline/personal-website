import { BlitzConfig } from "blitz"
import withPWA from "next-pwa"

const config: BlitzConfig = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
})

export default config
