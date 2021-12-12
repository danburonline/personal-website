import { useMediaQuery } from "react-responsive"

export default function Quote() {
  const isMobileWidth = useMediaQuery({
    query: "(max-width: 639px)",
  })

  return (
    <blockquote className="relative">
      <div className="text-2xl font-medium leading-9 text-gray-900">
        <h3>
          {`Strong background in software engineering with an eager curiosity in neuroscience, virtual
        reality and artificial intelligence. I believe ${
          !isMobileWidth
            ? `in the concept of
          physicalism and`
            : ""
        }  that we will one day be able to directly engineer our brain's
        perception of reality${!isMobileWidth ? ` for the benefit of humankind.` : "."}`}
        </h3>
      </div>
      <footer className="mt-8">
        <div className="flex">
          <div className="flex-shrink-0 lg:hidden">
            <img
              className="w-12 h-12 rounded-full"
              src="/img/daniel-burger.jpg"
              alt="Portrait of Daniel Burger"
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
