import Navigation from "app/components/Navigation"
import { BlitzPage } from "blitz"
import { dynamic } from "blitz"
import Hero from "../components/Hero"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"

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
