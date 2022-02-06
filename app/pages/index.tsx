import About from "../components/About"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"
import Skills from "../components/Skills"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { BlitzPage, dynamic } from "blitz"

// import { Waypoint } from "react-waypoint"
// import { useState } from "react"

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
