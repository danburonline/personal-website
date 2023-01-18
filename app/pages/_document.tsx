import { Document, Html, Main, BlitzScript, DocumentHead } from "blitz"

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-gray-900">
        <DocumentHead>
          <title>Daniel Burger — Software Engineer</title>
          <meta
            name="description"
            content="Versatile software engineer with interdisciplinary professional experience in a technologically diverse environment dedicated to clean code and lean architectures. I am currently developing brain-computer interface software at IDUN Technologies and studying machine learning with a focus on spatial computing in a handful of boot camps."
          />
          <meta name="robots" content="follow, index" />
          <link rel="canonical" href="https://danielburger.online/" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
          <meta name="theme-color" content="#111827" />
          <meta property="og:locale" content="en_GB" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Daniel Burger — Software Engineer" />
          <meta property="og:site_name" content="Daniel Burger" />
          <meta
            property="og:description"
            content="Versatile software engineer with interdisciplinary professional experience in a technologically diverse environment."
          />
          <meta name="author" content="Daniel Burger" />
          <meta property="og:url" content="https://danielburger.online" />
          <meta property="og:updated_time" content="2022-02-04T09:55:23-05:00" />
          <meta property="og:image" content="https://danielburger.online/img/metaog-image.png" />
          <meta
            property="og:image:secure_url"
            content="https://danielburger.online/img/metaog-image.png"
          />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="600" />
          <meta property="og:image:alt" content="Portrait of Daniel Burger" />
          <meta property="og:image:type" content="image/png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@danburonline" />
          <style>{`
        ::-moz-selection {
          background: #FFE000;
          color: black;
        }
        ::-webkit-selection {
          background: #FFE000;
          color: black;
        }
        ::selection {
          background: #FFE000;
          color: black;
        }

        body {
          height: 100vh;
          width: 100vw;
          max-height: -webkit-fill-available;
          overflow-y: scroll;
          overflow-x: hidden;
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
