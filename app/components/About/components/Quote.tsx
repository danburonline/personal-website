import { Image } from "blitz"
import { useMediaQuery } from "react-responsive"

export default function Quote() {
  const isMobileWidth = useMediaQuery({
    query: "(max-width: 639px)",
  })

  return (
    <blockquote className="relative">
      <div className="text-2xl font-medium leading-9 text-gray-900">
        {!isMobileWidth ? (
          <h3>
            Strong background in software engineering with an eager curiosity in neuroscience,
            virtual reality and artificial intelligence. I believe in the concept of{" "}
            <a
              className="pointer-events-auto hover:underline"
              href="https://en.wikipedia.org/wiki/Physicalism"
              target="_blank"
              rel="noreferrer"
            >
              physicalism
            </a>{" "}
            and that we will one day be able to directly engineer our brain’s perception of reality
            for the benefit of humankind.
          </h3>
        ) : (
          <h3>
            Strong background in software engineering with an eager curiosity in neuroscience,
            virtual reality and artificial intelligence. I believe that we will one day be able to
            directly engineer our brain’s perception of reality.
          </h3>
        )}
      </div>
      <footer className="mt-8">
        <div className="flex">
          <div className="flex-shrink-0 lg:hidden">
            <Image
              className="w-12 h-12 rounded-full"
              src="/img/daniel-burger.jpg"
              alt="Portrait of Daniel Burger"
              height={"48px"}
              width={"48px"}
            />
          </div>
          <div className="ml-4 lg:ml-0">
            <div className="text-base font-bold text-gray-900">Daniel Burger</div>
            <div className="text-base font-medium text-gray-500">Software Engineer</div>
          </div>
        </div>
      </footer>
    </blockquote>
  )
}
