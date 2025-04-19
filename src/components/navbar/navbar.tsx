import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"
// import { Label } from "../ui/label"
// import { Switch } from "../ui/switch"

const navLinks: string[] = [
  "Home", "Projects", "About"
]

export function Navbar() {


  return (
    <NavigationMenu className="rounded-md z-20 bg-transparent ">
      <NavigationMenuList>
        {
          navLinks.map(navLink =>
            <Link to={`${navLink.toLowerCase()}`}> 
              <NavigationMenuItem className={`${navigationMenuTriggerStyle()} backdrop-blur-lg cursor-pointer bg-transparent border-[#397c34] border-[.15rem] `}>
                {navLink} 
              </NavigationMenuItem>
            </Link>
          )
        }
        {/* <NavigationMenuItem>
          <div className="flex items-center space-x-2">
            <Switch id="dark-mode" />
            <Label htmlFor="dark-mode">Dark Mode</Label>
          </div>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>

  )
}

