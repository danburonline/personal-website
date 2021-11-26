import Navigation from "app/components/Navigation"
import { BlitzPage } from "blitz"
import Hero from "../components/Hero"
import Daniel from "../components/Daniel"

const Home: BlitzPage = () => {
  return (
    <>
      <Daniel />
      <Navigation />
      <Hero />
    </>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
