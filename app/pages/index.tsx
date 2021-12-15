import { BlitzPage } from "blitz"
import { dynamic } from "blitz"
import { config } from "@fortawesome/fontawesome-svg-core"
import { Waypoint } from "react-waypoint"
import { useState } from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Hero from "../components/Hero"
import About from "../components/About"
import Navigation from "app/components/Navigation"

const LazyDaniel = dynamic(() => import("../components/Daniel"), {
  ssr: false,
})
const LazySkills = dynamic(() => import("app/components/Skills"), {
  ssr: false,
})

const Home: BlitzPage = () => {
  const [loadBelowTheFold, setLoadBelowTheFold] = useState(false)

  return (
    <>
      <LazyDaniel />
      <Navigation />
      <Hero />
      <About />
      <Waypoint onEnter={() => setLoadBelowTheFold(true)}>
        <div>{loadBelowTheFold && <LazySkills />}</div>
      </Waypoint>
    </>
  )
}

config.autoAddCss = false
Home.suppressFirstRenderFlicker = true

export default Home
