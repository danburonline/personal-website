import { BlitzPage } from "blitz"
import Hero from "../components/Hero"

const Home: BlitzPage = () => {
  return <Hero />
}

Home.suppressFirstRenderFlicker = true

export default Home
