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
import { faSmileBeam } from "@fortawesome/free-solid-svg-icons"

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
    description: "Papers, articles etc.",
    href: "https://www.researchgate.net/profile/Daniel-Burger-10",
    icon: faResearchgate,
    bgColor: "#00ccbb",
  },
  {
    name: "Hugging Face",
    description: "Models, datasets etc.",
    href: "https://huggingface.co/danburonline",
    icon: faSmileBeam,
    bgColor: "#F8D44E",
  },
  {
    name: "GitHub",
    description: "Code, wikis etc.",
    href: "https://github.com/danburonline",
    icon: faGithub,
    bgColor: "#24292e",
  },
  {
    name: "Medium",
    description: "Essays, newsletter etc.",
    href: "https://danburonline.medium.com",
    icon: faMediumM,
    bgColor: "#1A8917",
  },
  {
    name: "YouTube",
    description: "Demos, tutorials etc.",
    href: "https://www.youtube.com/@danburonline",
    icon: faYoutube,
    bgColor: "#fb000a",
  },
  {
    name: "Behance",
    description: "Designs etc. ",
    href: "https://www.behance.net/danburonline",
    icon: faBehance,
    bgColor: "#2356F6",
  },
  {
    name: "LinkedIn",
    description: "Resume, skills etc.",
    href: "https://www.linkedin.com/in/danburonline",
    icon: faLinkedin,
    bgColor: "#0077B5",
  },
  {
    name: "Twitter",
    description: "Random tweets etc.",
    href: "https://twitter.com/danburonline",
    icon: faTwitter,
    bgColor: "#08a0e9",
  },
  {
    name: "Instagram",
    description: "Random pics etc.",
    href: "https://instagram.com/danburonline",
    icon: faInstagram,
    bgColor: "#e4405f",
  },
]

export default socialMediaChannels
