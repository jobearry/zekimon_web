import type { ReactNode } from "react"
export interface BlockProps {
  id: string
  title: string
  icon?: ReactNode
  description?: string
  children?: ReactNode
  className?: string
  gridClass?: string
}

export const Block: React.FC<BlockProps> = ({id, title, icon, description, children, className, gridClass}) => {
  return (
    <div key={id} className={`
        border-gray-500 rounded-sm bg-[#141414] m-2
        ${gridClass} 
        ${className}`
      } >
      <div className="m-4 flex items-center gap-3">
        <span className="font-bold text-lg text-start flex items-center gap-2">
          {icon}
          {title}
        </span>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>
      <p className="text-start mx-5 my-4 text-sm">
        {description}
      </p>

      <div>
        {children}
      </div>
    </div>
  )
}