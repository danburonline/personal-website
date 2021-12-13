import { Popover } from "@headlessui/react"
import DesktopNavigation from "./components/DesktopNavigation"
import MobileNavigation from "./components/MobileNavigation"

export default function Navigation() {
  function adjustBodyScroll(scroll: any) {
    if (typeof window === "object") {
      scroll ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto")
    }
  }

  return (
    <Popover className="absolute z-30 w-screen">
      <DesktopNavigation adjustBodyScroll={adjustBodyScroll} />
      <MobileNavigation adjustBodyScroll={adjustBodyScroll} />
    </Popover>
  )
}
