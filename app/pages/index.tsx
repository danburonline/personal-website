import Navigation from "app/components/Navigation"
import { BlitzPage } from "blitz"
import Hero from "../components/Hero"

const Home: BlitzPage = () => {
  return (
    <>
      <Navigation />
      <Hero />
    </>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
