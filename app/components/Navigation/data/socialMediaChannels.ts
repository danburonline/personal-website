import {
  faGithub,
  faMediumM,
  faBehance,
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faTwitch,
  faTiktok,
  faDribbble,
} from "@fortawesome/free-brands-svg-icons"
import type { IconDefinition } from "@fortawesome/fontawesome-common-types"
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons"

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
    name: "Academia",
    description: "Research papers and articles of all my public research projects",
    href: "https://mdx.academia.edu/danburonline",
    icon: faGraduationCap,
    bgColor: "#0c3bc9",
  },
  {
    name: "Medium",
    description: "Blog posts about technological discussions and philosophical ideas",
    href: "https://danburonline.medium.com",
    icon: faMediumM,
    bgColor: "#fd7e14",
  },
  {
    name: "Behance",
    description: "Work portfolio about all public projects related to interaction design.",
    href: "https://www.behance.net/danburonline",
    icon: faBehance,
    bgColor: "#0057ff",
  },
  {
    name: "LinkedIn",
    description: "Curriculum vitae, qualifications, important updates and all blog posts",
    href: "https://www.linkedin.com/in/danburonline",
    icon: faLinkedin,
    bgColor: "#0077B5",
  },
  {
    name: "Facebook",
    description: "Profile with life updates that I use to engage myself in group discussions",
    href: "https://www.facebook.com/danburonline",
    icon: faFacebook,
    bgColor: "#3b5998",
  },
  {
    name: "Twitter",
    description: "Tweets about thoughts, opinions, random pictures and exciting retweets",
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
  {
    name: "YouTube",
    description: "Videos about all my projects, interviews, demos and other interesting uploads",
    href: "https://www.youtube.com/c/DanielBurgerOnline",
    icon: faYoutube,
    bgColor: "#fb000a",
  },
  {
    name: "Twitch",
    description: "Livestream channel when I think I have something cool to show or talk about",
    href: "https://www.twitch.tv/danburonline",
    icon: faTwitch,
    bgColor: "#9146ff",
  },
  {
    name: "TikTok",
    description: "Video summaries of interesting things that are currently happening in my life",
    href: "https://www.tiktok.com/@danburonline",
    icon: faTiktok,
    bgColor: "#000000",
  },
  {
    name: "Dribbble",
    description: "Shots of my work and personal projects based on UI design, 3D and illustration",
    href: "https://dribbble.com/danburonline",
    icon: faDribbble,
    bgColor: "#ea4c89",
  },
]

export default socialMediaChannels
