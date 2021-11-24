import {
  faGithub,
  faResearchgate,
  faMediumM,
  faYoutube,
  faLinkedin,
  faInstagram,
  faTwitter,
  faFacebook,
  faDiscord,
  faRedditAlien,
  faQuora,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons"
import type { IconDefinition } from "@fortawesome/fontawesome-common-types"

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
    description: "Get a better understanding of where your traffic is coming from.",
    href: "https://github.com/danburonline",
    icon: faGithub,
    bgColor: "#24292e",
  },
  {
    name: "ResearchGate",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: faResearchgate,
    bgColor: "#82c91e",
  },
  {
    name: "Medium",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: faMediumM,
    bgColor: "#fd7e14",
  },
  {
    name: "YouTube",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: faYoutube,
    bgColor: "#fb000a",
  },
  {
    name: "LinkedIn",
    description: "Build strategic funnels that will drive your customers to convert",
    href: "#",
    icon: faLinkedin,
    bgColor: "#0077B5",
  },
  {
    name: "Instagram",
    description: "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: faInstagram,
    bgColor: "#7e1caf",
  },
  {
    name: "Twitter",
    description: "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: faTwitter,
    bgColor: "#08a0e9",
  },
  {
    name: "Facebook",
    description: "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: faFacebook,
    bgColor: "#3b5998",
  },
  {
    name: "Discord",
    description: "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: faDiscord,
    bgColor: "#4e5d94",
  },
  {
    name: "Reddit",
    description: "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: faRedditAlien,
    bgColor: "#ff5700",
  },
  {
    name: "Quora",
    description: "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: faQuora,
    bgColor: "#a71b22",
  },
  {
    name: "Twitch",
    description: "Get detailed reports that will help you make more informed decisions ",
    href: "#",
    icon: faTwitch,
    bgColor: "#9146ff",
  },
]

export default socialMediaChannels
