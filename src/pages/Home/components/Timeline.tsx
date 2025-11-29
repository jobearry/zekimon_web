import { TimelineEvent } from "../../../lib/constants/content.constants"

interface TimelineProps {
  events: TimelineEvent[]
}

export const Timeline: React.FC<TimelineProps> = ({events}) => {
  return (              
    <div className="relative border-l-2 border-gray-500  ml-5">
      {events.slice(0,3).map((event, index) => (
        <div key={index} className="mb-8 ml-[1.93rem] relative group">
          {/* Dot */}
          <span className="absolute -left-10 w-4 h-4 rounded-full border-2 transition-all duration-300 border-gray-500 bg-[#141414] group-hover:bg-gray-500"></span>
          
          {/* Content */}
          <div className="rounded mr-5 text-start ">
            <h3 className="font-bold text-sm">{event.company}</h3>
            <h3 className="font-italic text-xs">{event.title}</h3>
            <span className="text-xs text-gray-500">{event.duration}</span>
            <p className="text-xs text-gray-500">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}