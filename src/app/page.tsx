import Scene from './components/Scene'

export default function Home() {
  return (
    <section className="py-10">
      <header>
        <div className="max-w-7xl mx-4 sm:mx-6 lg:mx-8 mb-6">
          <h1 className="text-3xl font-semibold font-serif">Example</h1>
          <h2 className="text-xl">Next.js and React-Three-Fiber with Bun</h2>
        </div>
      </header>
      <main>
        <div className="sm:mx-6 lg:mx-8 bg-bright mx-4 aspect-video rounded-xl">
          <Scene />
        </div>
      </main>
    </section>
  )
}
