import { Navbar } from "../../components/navbar/navbar"
import { Showcase } from "../../components/showcase/showcase"

export const Main = () => {
  return (
    <section className="h-dvh border grid grid-cols-3">
      <div className="border col-span-2 grid place-items-center overflow-y-scroll">
        <div className="absolute top-6">
          <Navbar></Navbar>
        </div>
        <div className="h-dvh border w-full grid place-items-center">
          <Showcase></Showcase>
        </div>
      </div>
      <div className="border m-4">
        <h1>Resume</h1>
      </div>
    </section>
  )
}