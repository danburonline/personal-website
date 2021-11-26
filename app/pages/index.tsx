import Navigation from "app/components/Navigation"
import { BlitzPage } from "blitz"
import { Suspense } from "react"
import Hero from "../components/Hero"
import Brain from "../components/Brain"

const Home: BlitzPage = () => {
  return (
    <>
      <Brain />
      <Navigation />
      <Hero />
    </>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
