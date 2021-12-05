import Navigation from "app/components/Navigation"
import { BlitzPage } from "blitz"
import { dynamic } from "blitz"
import Hero from "../components/Hero"

const LazyDaniel = dynamic(() => import("../components/Daniel"), {
  ssr: false,
})

const Home: BlitzPage = () => {
  return (
    <>
      <LazyDaniel />
      <Navigation />
      <Hero />
    </>
  )
}

Home.suppressFirstRenderFlicker = true

export default Home
