import type { IconDefinition } from "@fortawesome/fontawesome-common-types"
import {
  faResearchgate,
  faGithub,
  faMediumM,
  faLinkedin,
  faTwitter,
  faInstagram,
  faYoutube,
  faFigma,
} from "@fortawesome/free-brands-svg-icons"

export type socialMediaChannelType = {
  name: string
  href: string
  description: string
  bgColor: string
  icon: IconDefinition
}

const socialMediaChannels: socialMediaChannelType[] = [
  {
    name: "GitHub",
    description: "Source code, wikis and issues of all my public programming projects",
    href: "https://github.com/danburonline",
    icon: faGithub,
    bgColor: "#24292e",
  },
  {
    name: "ResearchGate",
    description: "Research papers and essays of all my public research projects",
    href: "https://www.researchgate.net/profile/Daniel-Burger-10",
    icon: faResearchgate,
    bgColor: "#00ccbb",
  },
  {
    name: "Medium",
    description: "Articles about technological discussions and other interesting ideas",
    href: "https://danburonline.medium.com",
    icon: faMediumM,
    bgColor: "#1A8917",
  },
  {
    name: "LinkedIn",
    description: "Curriculum vitae, qualifications, important updates and other random stuff",
    href: "https://www.linkedin.com/in/danburonline",
    icon: faLinkedin,
    bgColor: "#0077B5",
  },
  {
    name: "YouTube",
    description: "Videos about all my projects, interviews, demos and other interesting uploads",
    href: "https://www.youtube.com/@danburonline",
    icon: faYoutube,
    bgColor: "#fb000a",
  },
  {
    name: "Figma",
    description: "Visual designs, prototypes and mockups of all my public design projects",
    href: "https://www.figma.com/@danburonline",
    icon: faFigma,
    bgColor: "#212121",
  },
  {
    name: "Twitter",
    description: "Tweets about random thoughts, opinions, pictures and some videos",
    href: "https://twitter.com/danburonline",
    icon: faTwitter,
    bgColor: "#08a0e9",
  },
  {
    name: "Instagram",
    description: "Personal blog of my life with random pictures, videos and stories",
    href: "https://www.instagram.com/danburonline",
    icon: faInstagram,
    bgColor: "#d7155a",
  },
]

export default socialMediaChannels
