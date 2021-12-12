import "@fortawesome/fontawesome-svg-core/styles.css"
import { BlitzPage } from "blitz"
import { dynamic } from "blitz"
import { config } from "@fortawesome/fontawesome-svg-core"
import Hero from "../components/Hero"
import About from "../components/About"
import Navigation from "app/components/Navigation"
import Skills from "app/components/Skills"

const LazyDaniel = dynamic(() => import("../components/Daniel"), {
  ssr: false,
})

// TODO Add initial animations for the Hero component

const Home: BlitzPage = () => {
  return (
    <>
      <LazyDaniel />
      <Navigation />
      <Hero />
      <About />
      <Skills />
    </>
  )
}

config.autoAddCss = false
Home.suppressFirstRenderFlicker = true

export default Home
