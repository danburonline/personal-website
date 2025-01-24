import Hero from "../components/Hero"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { dynamic } from "blitz"
import type { BlitzPage } from "blitz"

// import About from "../components/About";
// import Navigation from "../components/Navigation";
// import Skills from "../components/Skills";
// import { Waypoint } from "react-waypoint"
// import { useState } from "react"

const LazyBrainModel = dynamic(() => import("../components/Daniel"), {
  ssr: false,
})

const Home: BlitzPage = () => {
  // const [loadBelowTheFold, setLoadBelowTheFold] = useState(false)

  return (
    <>
      <LazyBrainModel />
      {/* <Navigation /> */}
      <Hero />
      {/* <About /> */}
      {/* <Skills />
      <Waypoint onEnter={() => setLoadBelowTheFold(true)}>
        <div>{loadBelowTheFold && <Skills />}</div>
      </Waypoint> */}
    </>
  )
}

config.autoAddCss = false
Home.suppressFirstRenderFlicker = true

export default Home
