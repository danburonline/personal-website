import { Document, Html, DocumentHead, Main, BlitzScript } from "blitz"

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en" className="bg-gray-900">
        <DocumentHead />
        <title>Daniel Burger — Software Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="canonical" href="https://danielburger.online" />
        <meta name="robots" content="all" />
        <meta property="og:site_name" content="Daniel Burger — Software Engineer" />
        <meta property="og:title" content="Daniel Burger — Software Engineer" />
        <meta property="twitter:site" content="@danburonline" />
        <meta
          property="og:description"
          content="Full-stack neurotech software engineer with several years of interdisciplinary work experience in a technologically diverse background."
        />
        <meta property="og:url" content="https://danielburger.online" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://danielburger.online/img/opengraph/default-social-card.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://danielburger.online/img/opengraph/default-social-card.jpg"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
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
