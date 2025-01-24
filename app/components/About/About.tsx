import BackgroundDecoration from "./components/BackgroundDecoration"
import QuotationMarks from "./components/QuotationMarks"
import Quote from "./components/Quote"
import { Image } from "blitz"

export default function About() {
  return (
    <section className="overflow-hidden bg-[#FFF7FF]">
      <div className="relative px-4 pt-20 pb-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-20">
        <BackgroundDecoration />
        <div className="relative lg:flex lg:items-center">
          <div className="hidden lg:block lg:flex-shrink-0">
            <Image
              className="w-64 h-64 rounded-full pointer-events-none xl:h-80 xl:w-80"
              src="/img/daniel-burger.jpg"
              alt="Portrait of Daniel Burger"
              width={"320px"}
              height={"320px"}
            />
          </div>

          <div className="relative lg:ml-10">
            <QuotationMarks />
            <Quote />
          </div>
        </div>
      </div>
    </section>
  )
}
