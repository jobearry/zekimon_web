import { Block } from "../../components/common/block"
import { BlockContent } from "../../lib/constants/content.constants"
import { Profile } from "./components/Profile"

export const Home = () => {
  return (
    <section className="flex justify-center scroll-smooth p-8">
      <div>
        <Profile className=""></Profile>
        <div className="grid md:grid-cols-4">
          {BlockContent.map((block) => (
            <Block className={`border ${block.className}`}
              id={block.id} 
              title={block.title} 
              icon={block.icon} 
              description={block.description}
              gridClass={block.gridClass}>
                {block.children}
            </Block>
          ))}
        </div>
      </div>
    </section>
  )
}