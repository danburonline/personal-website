import DesktopNavigation from "./components/DesktopNavigation"
import MobileNavigation from "./components/MobileNavigation"
import { Popover } from "@headlessui/react"

export default function Navigation() {
  function adjustBodyScroll(scroll: any) {
    if (typeof window === "object") {
      scroll
        ? (document.body.style.position = "fixed")
        : (document.body.style.position = "relative")
    }
  }

  return (
    <Popover className="absolute z-30 w-full">
      <DesktopNavigation adjustBodyScroll={adjustBodyScroll} />
      <MobileNavigation adjustBodyScroll={adjustBodyScroll} />
    </Popover>
  )
}
