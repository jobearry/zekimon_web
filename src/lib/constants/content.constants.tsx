import { BookOpen, Building, IdCard, Minus } from "lucide-react";
import { BlockProps } from "../../components/common/block";
import { Timeline } from "../../pages/Home/components/timeline";
import { Showcase } from "../../components/showcase/showcase";


export interface TimelineEvent{
  title: string,
  company: string,
  duration: string,
  description: string
}

export const TimelineEvents: TimelineEvent[] = [
  {
    "title": "Capcut Contributor",
    "company": "Capcut",
    "duration": "Feb 2025 – Present",
    "description": "Responsible in creation of assets that will be used in the Capcut platform, such as text templates, stickers, etc."
  },
  {
    "title": "Sr. Assistant, Digital Designer (Rehired)",
    "company": "Concentrix Daksh Services Philippines Corporation",
    "duration": "Dec 2023 – Present",
    "description": "Responsible for creating artworks for weekly/monthly campaigns. Handles online store/website configuration/design using tools/programs provided by the client."
  },
  {
    "title": "Graphic Artist",
    "company": "Vida Nutriscience Inc.",
    "duration": "Mar 2023 – Dec 2023",
    "description": "Responsible for creating various marketing collaterals and assets. Creates packaging designs for upcoming products and manages social media assets."
  },
  {
    "title": "Multi-Media Artist",
    "company": "Rook Digital Unlimited",
    "duration": "Oct 2022 – Mar 2023",
    "description": "Creates daily marketing artworks posted on social media. Responsible for creating Web3 and NFT posters/banner designs."
  },
  {
    "title": "Sr. Assistant, Digital Designer",
    "company": "Concentrix Daksh Services Philippines Corporation",
    "duration": "Feb 2021 – Sept 2022",
    "description": "Creates artworks for weekly/monthly campaigns. Performs online store and website configuration/design using client-provided tools. Creates and adapts various banner sizes/designs for the cluster."
  },
  {
    "title": "Freelance Illustrator / Graphic Designer",
    "company": "Social Media and Various Online Outsourcing Sites",
    "duration": "Jun 2014 – Present",
    "description": "Creates illustrations requested by various clients. Produces designs and artwork used for or by businesses and enthusiasts."
  },
  {
    "title": "Production Associate",
    "company": "Cybersoft Content Services (CCSI), Inc.",
    "duration": "Feb 2017 – Mar 2020",
    "description": "Financial data analyst for accounts from Duns & Bradstreet. Performs content/information research and analysis for startups and new businesses from Salesforce."
  },
  {
    "title": "Manager / Technician / Graphic Artist",
    "company": "Bitznest Playstation Cafe",
    "duration": "Feb 2014 – Jan 2017",
    "description": "Oversees store daily operations and assists customers. Handles maintenance and repair of peripherals and console units. Creates banners and poster designs."
  }
]

export interface Project{
  id: number,
  src: string,
  title: string
}
export const featuredProject: Project[] = [
  {id:1, src: './featured/Arkadia1.jpg', title: "image1"},
  {id:2, src: './featured/female_polo_shirt_v -.png', title: "image2"},
  {id:3, src: './featured/lanyard.jpg', title: "image3"},
  {id:4, src: './featured/Product1.jpg', title: "image4"},
]
export const personalProject: Project[] = [
  {id:1, src: './posters/COVIDPOSTER.png', title: "image1"},
  {id:2, src: './posters/MOVIE(A1 SIZE).png', title: "image2"},
  {id:3, src: './posters/PAGTALIMAv2.png', title: "image3"},
  {id:4, src: './posters/PAKIKIBAHAGI.jpg', title: "image4"},
  {id:5, src: './posters/STARWARSEMI.png', title: "image5"},
  {id:6, src: './posters/Tanging Bigkis7.jpg', title: "image6"},
]

export const BlockContent: BlockProps[] = [
  {
    id: "block_1",
    title: "About",
    icon: <IdCard size={20} strokeWidth={1.5}/>,
    description: `
      A highly driven graphic designer and artist with a strong mix of creativity, technical skill, and organization. I stay current with modern design trends and thrive in collaborative environments, consistently contributing meaningful value to any creative team.
    `,
    gridClass: "md:col-span-3"
  },
  {
    id: "block_2",
    title: "Recent Experience",
    icon: <BookOpen size={20} strokeWidth={1.5}/>,
    children: 
      <div className="">
        <Timeline events={TimelineEvents} />
        <button className="self-end cursor-pointer items-center justify-center rounded-sm
          px-3 py-1 text-xs text-gray-400 shadow-md transition-all duration-300 
          hover:transform-[translateY(-.2rem)] hover:shadow-xl m-1">
          <span className="flex items-center gap-2">
            <Minus strokeWidth={1}/>
              View nore
            <Minus strokeWidth={1}/>
          </span>
        </button>
      </div>,
    gridClass: "md:col-span-1 md:row-span-2 md:row-start-1 md:col-start-4"
  },
  {
    id: "block_3",
    title: "Projects",
    icon: <Building size={20} strokeWidth={1.5}/>,
    children: 
      <div className="">
        <div className="flex md:flex-row flex-col justify-around">
          <div className="">
            <h3 className="text-sm">Featured</h3>
            <Showcase carouselSyle="md:w-[14rem] w-[17rem]" className="flex justify-center p-3 text-end" projects={featuredProject}></Showcase>
          </div>
          <div className="">
            <h3 className="text-sm">Others</h3>
            <Showcase carouselSyle="md:w-[14rem] w-[17rem]" className="flex justify-center p-3 text-end" projects={personalProject}></Showcase>
          </div>
        </div>
        <button className="cursor-pointer self-center items-center justify-center rounded-sm
          px-3 py-1 text-xs text-gray-400 shadow-md transition-all duration-300 
          hover:transform-[translateY(-.2rem)] hover:shadow-xl m-1">
          <span className="flex items-center gap-2">
            <Minus strokeWidth={1}/>
              View nore
            <Minus strokeWidth={1}/>
          </span>
        </button>
      </div>,
    gridClass: "md:col-span-3"
  },
  // {
  //   id: "block_4",
  //   title: "Tech Stack",
  //   icon: <ToolCase size={20} strokeWidth={1.5}/>,
  //   children: <TechStack></TechStack>,
  //   gridClass: "md:col-span-1 md:row-start-3 md:col-start-3"
  // }
]
