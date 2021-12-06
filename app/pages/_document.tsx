import { Document, Html, DocumentHead, Main, BlitzScript } from "blitz"

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-gray-900">
        <DocumentHead />
        <title>Daniel Burger — Software Engineer</title>
        <meta name="author" content="Daniel Burger" />
        <meta property="article:published_time" content="2021-12-6" />
        <meta property="article:modified_time" content="2021-12-6T11:45:30+00:00" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#111827" />
        <link rel="canonical" href="https://danielburger.online" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content="Daniel Burger — Software Engineer" />
        <meta property="og:title" content="Daniel Burger — Software Engineer" />
        <meta property="twitter:site" content="@danburonline" />
        <meta
          property="og:description"
          content="Full-stack neurotech software engineer with several years of interdisciplinary work experience in a technologically diverse background dedicated to clean code and lean architectures. Currently, I'm developing brain-machine interface software at IDUN Technologies and studying web development with a focus on spatial computing at Middlesex University."
        />
        {/* TODO Create a better social card image as soon as I finish the hero 3D model part */}
        <meta
          name="image"
          property="og:image"
          content="https://danielburger.online/img/opengraph/default-social-card.jpg"
        />
        <meta property="og:url" content="https://danielburger.online" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:image"
          content="https://danielburger.online/img/opengraph/default-social-card.jpg"
        />
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
          max-height: -webkit-fill-available;
        }
        html {
          height: -webkit-fill-available;
        }

        `}</style>
        <meta
          name="description"
          content="Full-stack neurotech software engineer with several years of interdisciplinary work experience in a technologically diverse background dedicated to clean code and lean architectures. Currently, I'm developing brain-machine interface software at IDUN Technologies and studying web development with a focus on spatial computing at Middlesex University."
        />
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default CustomDocument
