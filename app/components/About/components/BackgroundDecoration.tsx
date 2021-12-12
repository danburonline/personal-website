export default function BackgroundDecoration() {
  return (
    <>
      <svg
        className="absolute left-0 transform -translate-y-24 top-full translate-x-80 lg:hidden"
        width={784}
        height={404}
        fill="none"
        viewBox="0 0 784 404"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-primary" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={784} height={404} fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)" />
      </svg>

      <svg
        className="absolute hidden transform translate-x-1/2 -translate-y-1/2 lg:block right-full top-1/2"
        width={404}
        height={784}
        fill="none"
        viewBox="0 0 404 784"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="56409614-3d62-4985-9a10-7ca758a8f4f0"
            x={0}
            y={0}
            width={20}
            height={20}
            patternUnits="userSpaceOnUse"
          >
            <rect x={0} y={0} width={4} height={4} className="text-primary" fill="currentColor" />
          </pattern>
        </defs>
        <rect width={404} height={784} fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
      </svg>
    </>
  )
}
