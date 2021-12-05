import "@fortawesome/fontawesome-svg-core/styles.css"
import { BlitzPage } from "blitz"
import { dynamic } from "blitz"
import { config } from "@fortawesome/fontawesome-svg-core"
import Hero from "../components/Hero"
import Navigation from "app/components/Navigation"

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

config.autoAddCss = false
Home.suppressFirstRenderFlicker = true

export default Home
