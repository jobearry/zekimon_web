import { Showcase } from "../../components/showcase/showcase"

export const Main = () => {
  return (
    <section className="h-screen grid sm:grid-cols-1 grid-cols-1 w-full lg:w-[80rem]">
      <h2 className="text-5xl tracking-widest absolute top-0">zekimon</h2>

      <div className="border h-screen w-full grid grid-cols-2">

        <div className="w-full border flex flex-col place-items-center justify-center">
          <h1>Ezekiel Montes</h1>
          <h2>Graphic Designer</h2>
          <h2>from Philippines</h2>
        </div>

        <div className="w-full flex flex-col place-items-center justify-center">
          <div className="border h-[30rem] w-[30rem] flex place-items-center justify-center rotate-15">
            <div className="border h-[30rem] w-[30rem] flex place-items-center justify-center -rotate-15">
              insert image here
            </div>
          </div>
        </div>

      </div>
      
      <div className="grid place-items-center">
        <div className="h-full w-full grid place-items-center">
          <div className="w-[30rem] sm:w-auto">
            <h2 className="text-2xl text-center sm:text-start font-bold">Posters Showcase</h2>
            <div className="m-5">
              <Showcase></Showcase>
            </div>
          </div>
        </div>

        
        {/* <div className="h-full w-full grid place-items-center mt-80">
          <div className="w-[30rem] sm:w-auto">
            <h2 className="text-2xl text-center sm:text-start font-bold">Posters Showcase</h2>
            <div className="m-5">
              <Showcase></Showcase>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}