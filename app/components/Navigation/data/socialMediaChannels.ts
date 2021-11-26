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
  faTwitch,
  faTiktok,
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
    description: "Source code, wikis and issues of all my public programming projects.",
    href: "https://github.com/danburonline",
    icon: faGithub,
    bgColor: "#24292e",
  },
  {
    name: "ResearchGate",
    description: "Research papers and articles of all my public research projects.",
    href: "https://www.researchgate.net/profile/Daniel_Burger10",
    icon: faResearchgate,
    bgColor: "#82c91e",
  },
  {
    name: "Medium",
    description: "Blog posts about technological discussions and philosophical ideas.",
    href: "https://danburonline.medium.com/",
    icon: faMediumM,
    bgColor: "#fd7e14",
  },
  {
    name: "LinkedIn",
    description: "Curriculum vitae, qualifications, important updates and all blog posts.",
    href: "https://www.linkedin.com/in/danburonline",
    icon: faLinkedin,
    bgColor: "#0077B5",
  },
  {
    name: "YouTube",
    description: "Videos about all my projects, interviews, demos and other interesting uploads.",
    href: "https://www.youtube.com/c/DanielBurgerOnline",
    icon: faYoutube,
    bgColor: "#fb000a",
  },
  {
    name: "Instagram",
    description: "Photo blog from my life with random pictures, videos and more random stories.",
    href: "https://www.instagram.com/danburonline",
    icon: faInstagram,
    bgColor: "#d7155a",
  },
  {
    name: "Twitter",
    description: "Tweets about thoughts, opinions, random pictures and exciting retweets.",
    href: "https://twitter.com/danburonline",
    icon: faTwitter,
    bgColor: "#08a0e9",
  },
  {
    name: "TikTok",
    description: "Video summaries of interesting things that are currently happening in my life.",
    href: "https://www.tiktok.com/@danburonline",
    icon: faTiktok,
    bgColor: "#000000",
  },
  {
    name: "Facebook",
    description: "Profile with life updates that I use to engage myself in group discussions.",
    href: "https://www.facebook.com/danburonline",
    icon: faFacebook,
    bgColor: "#3b5998",
  },
  {
    name: "Discord",
    description: "Account that I use to engage myself in discussions in several servers.",
    href: "https://discordapp.com/users/372798921937780746",
    icon: faDiscord,
    bgColor: "#4e5d94",
  },
  {
    name: "Reddit",
    description: "Account that I use to share and discuss interesting content in subreddits.",
    href: "https://www.reddit.com/user/danburonline",
    icon: faRedditAlien,
    bgColor: "#ff5700",
  },
  {
    name: "Twitch",
    description: "Livestream channel when I think I have something cool to show or talk about.",
    href: "https://www.twitch.tv/danburonline",
    icon: faTwitch,
    bgColor: "#9146ff",
  },
]

export default socialMediaChannels
