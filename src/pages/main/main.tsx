import { Navbar } from "../../components/navbar/navbar"
import { Showcase } from "../../components/showcase/showcase"

export const Main = () => {
  return (
    <section className="h-[100vh] border grid sm:grid-cols-3 grid-cols-1">
      <div className="border col-span-2 grid place-items-center overflow-y-scroll">
        <div className="absolute top-6">
          <Navbar></Navbar>
        </div>
        <div className="h-full border w-full grid place-items-center">
          <Showcase></Showcase>
        </div>
      </div>
      <div className="border m-4 sm:block hidden">
        <h1>Resume</h1>
      </div>
    </section>
  )
}