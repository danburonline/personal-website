import { BlitzPage } from "blitz"
import { dynamic } from "blitz"
import { config } from "@fortawesome/fontawesome-svg-core"
// import { Waypoint } from "react-waypoint"
// import { useState } from "react"
import "@fortawesome/fontawesome-svg-core/styles.css"
import Hero from "../components/Hero"
import About from "../components/About"
import Navigation from "../components/Navigation"
import Skills from "../components/Skills"

const LazyDaniel = dynamic(() => import("../components/Daniel"), {
  ssr: false,
})

const Home: BlitzPage = () => {
  // const [loadBelowTheFold, setLoadBelowTheFold] = useState(false)

  return (
    <>
      <LazyDaniel />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      {/* <Waypoint onEnter={() => setLoadBelowTheFold(true)}>
        <div>{loadBelowTheFold && <Skills />}</div>
      </Waypoint> */}
    </>
  )
}

config.autoAddCss = false
Home.suppressFirstRenderFlicker = true

export default Home
