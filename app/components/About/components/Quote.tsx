import { Image } from "blitz"
import { useMediaQuery } from "react-responsive"

export default function Quote() {
  const isMobileWidth = useMediaQuery({
    query: "(max-width: 639px)",
  })

  return (
    <blockquote className="relative">
      <div className="text-2xl font-medium leading-9 text-gray-900">
        <h3>
          <span className="font-bold">
            I’m a software engineer specializing in {!isMobileWidth && "non-invasive"} neural
            interfaces and {!isMobileWidth && "web-based"} virtual reality.
          </span>{" "}
          I’m fascinated by machine learning and neuroscience, and I believe that one day we’ll be
          able to directly engineer our brains’ perception of reality for the benefit of humanity.
        </h3>
      </div>
      <footer className="mt-8">
        <div className="flex">
          <div className="flex-shrink-0 lg:hidden">
            <Image
              className="w-12 h-12 rounded-full pointer-events-none"
              src="/img/daniel-burger.jpg"
              alt="Portrait of Daniel Burger"
              height={"48px"}
              width={"48px"}
            />
          </div>
          <div className="ml-4 lg:ml-0">
            <div className="text-base font-bold text-gray-900">Daniel Burger</div>
            <div className="text-base font-medium text-gray-500">@danburonline</div>
          </div>
        </div>
      </footer>
    </blockquote>
  )
}
