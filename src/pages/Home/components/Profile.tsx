interface ProfileProps{
  className?: string
}
export const Profile: React.FC<ProfileProps> = ({className}) => {
  return (
    <section className={`flex my-6 ${className}`}>
      <div>
        <img className="rounded-full" src="/pfp.jpg" alt="graphic" />
      </div>
      
      <div className='grid'>
        <span className='text-start m-2'>
        <p className='text-[1.35rem] font-bold'>Ezekiel Montes</p>
        <span className='flex items-center text-sm gap-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            Philippines
        </span>
        <span className='text-xs'>Graphic Designer</span>
      </span>
      </div>
    </section>
  )
}