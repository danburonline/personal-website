import { Popover } from "@headlessui/react"
import DesktopNavigation from "./components/DesktopNavigation"
import MobileNavigation from "./components/MobileNavigation"

export default function Navigation() {
  return (
    <Popover className="fixed z-20 w-screen">
      <DesktopNavigation />
      <MobileNavigation />
    </Popover>
  )
}
