import { Document, Html, Main, BlitzScript, DocumentHead } from "blitz"

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-[#1A001A]">
        <DocumentHead>
          <title>Daniel Burger — Neuroengineer</title>
          <meta
            name="description"
            content="Interdisciplinary neuroengineer developing augmented progressive brain replacement — a radical procedure for treating neurodegeneration, brain injuries, and ageing through patient-specific neural grafts designed for piece-wise replacement and neuronal-level modulation. I lead Eightsix Science, an applied neuroscience startup I founded, to combine neural tissue engineering, biohybrid brain-computer interfaces, and microsurgery to seamlessly integrate these optimised grafts with the host’s brain. Ultimately, we aim to achieve ectopic cognitive preservation, an approach to sustain cognition outside its original biological context and potentially within virtual reality."
          />
          <meta name="robots" content="follow, index" />
          <link rel="canonical" href="https://danielburger.online/" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#1A001A" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Daniel Burger — Neuroengineer" />
          <meta property="og:site_name" content="Daniel Burger" />
          <meta
            property="og:description"
            content="Interdisciplinary neuroengineer developing augmented progressive brain replacement and ectopic cognitive preservation."
          />
          <meta name="author" content="Daniel Burger" />
          <meta property="og:url" content="https://danielburger.online" />
          <meta property="og:updated_time" content="2022-02-04T09:55:23-05:00" />
          <meta property="og:image" content="https://danielburger.online/img/metaog-image.jpg" />
          <meta
            property="og:image:secure_url"
            content="https://danielburger.online/img/metaog-image.jpg"
          />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="600" />
          <meta property="og:image:alt" content="Portrait of Daniel Burger" />
          <meta property="og:image:type" content="image/png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@danburonline" />
          <style>{`
        ::-moz-selection {
          background: #FF40FF;
          color: black;
        }
        ::-webkit-selection {
          background: #FF40FF;
          color: black;
        }
        ::selection {
          background: #FF40FF;
          color: black;
        }

        body {
          height: 100vh;
          width: 100vw;
          max-height: -webkit-fill-available;
          overflow-y: scroll;
          overflow-x: hidden;
          overscroll-behavior-y: contain;
        }
        html {
          height: -webkit-fill-available;
        }

        `}</style>
        </DocumentHead>
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
