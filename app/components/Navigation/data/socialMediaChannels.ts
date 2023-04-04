import type { IconDefinition } from "@fortawesome/fontawesome-common-types"
import {
  faResearchgate,
  faGithub,
  faMediumM,
  faLinkedin,
  faTwitter,
  faYoutube,
  faInstagram,
  faBehance,
} from "@fortawesome/free-brands-svg-icons"
import { faDatabase } from "@fortawesome/free-solid-svg-icons"

export type socialMediaChannelType = {
  name: string
  href: string
  description: string
  bgColor: string
  icon: IconDefinition
}

const socialMediaChannels: socialMediaChannelType[] = [
  {
    name: "ResearchGate",
    description: "Research papers and essays of all my public research projects",
    href: "https://www.researchgate.net/profile/Daniel-Burger-10",
    icon: faResearchgate,
    bgColor: "#00ccbb",
  },
  {
    name: "GitHub",
    description: "Source code, wikis and issues of all my public programming projects",
    href: "https://github.com/danburonline",
    icon: faGithub,
    bgColor: "#24292e",
  },
  {
    name: "Hugging Face",
    description: "Models, datasets and other resources of all my public ML projects",
    href: "https://huggingface.co/danburonline",
    icon: faDatabase,
    bgColor: "#F8D44E",
  },
  {
    name: "Medium",
    description: "Articles about technological discussions and other interesting ideas",
    href: "https://danburonline.medium.com",
    icon: faMediumM,
    bgColor: "#1A8917",
  },
  {
    name: "YouTube",
    description: "Videos about all my projects, interviews, demos and other interesting uploads",
    href: "https://www.youtube.com/@danburonline",
    icon: faYoutube,
    bgColor: "#fb000a",
  },
  {
    name: "Behance",
    description: "Designs, 3D models and other creative stuff of all my public creative work",
    href: "https://www.behance.net/danburonline",
    icon: faBehance,
    bgColor: "#2356F6",
  },
  {
    name: "LinkedIn",
    description: "Curriculum vitae, qualifications, important updates and other random stuff",
    href: "https://www.linkedin.com/in/danburonline",
    icon: faLinkedin,
    bgColor: "#0077B5",
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
    description: "Pictures, videos and stories about my life, travels and other random stuff",
    href: "https://instagram.com/danburonline",
    icon: faInstagram,
    bgColor: "#e4405f",
  },
]

export default socialMediaChannels
