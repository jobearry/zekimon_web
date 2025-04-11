import { Showcase } from "../../components/showcase/showcase"

export const Main = () => {
  return (
    <section className="h-screen grid sm:grid-cols-1 grid-cols-1 w-full lg:w-[80rem] place-items-center">
      {/* <h2 className="text-5xl tracking-widest absolute top-0 font-nunito m-3  ">zekimon</h2> */}

      <div className="  h-screen w-full grid grid-cols-1 place-items-center">
        <div className="w-full flex flex-col place-items-center justify-center">
          <div className="sm:h-[30rem] sm:w-[30rem]
            min-h-[10rem] min-w-[10rem] 
            flex place-items-center justify-center rotate-15 bg-slate-400">
            <div className="sm:h-[30rem] sm:w-[30rem]
              min-h-[14rem] min-w-[14rem] 
              flex place-items-center justify-center text-white -rotate-15 bg-slate-600">
              insert image here
            </div>
          </div>
          <div className="flex flex-col place-items-center justify-center z-10 m-10">
            <h1 className="text-3xl sm:text-2xl lg:text-4xl font-semibold font-nunito">Ezekiel Montes</h1>
            <h2 className="text-sm sm:text-sm italic">Graphic Designer from Philippines</h2>
          </div>
        </div>
      </div>

      <div className="grid place-items-center h-screen">
        <div className=" w-full grid place-items-center">
          <div className="w-full sm:w-auto">
            <h2 className="text-2xl text-center sm:text-start font-bold  ">Posters Showcase</h2>
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