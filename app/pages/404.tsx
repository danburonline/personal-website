import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Page404(): void | null {
  const router = useRouter()

  useEffect(() => {
    router.push("/")
  }, [router])

  return null
}
