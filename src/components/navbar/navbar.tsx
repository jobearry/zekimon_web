import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "../ui/sheet"
import { FaBars } from "react-icons/fa6";

const navLinks: string[] = [
  "Home", "Projects", "About"
]

export function Navbar() {

  return (
    <section className="w-full grid place-items-center">
      <NavigationMenu className="rounded-md z-20 bg-transparent hidden sm:block">
        <NavigationMenuList>
          {
            navLinks.map(navLink =>
              <Link to={`${navLink.toLowerCase()}`}> 
                <NavigationMenuItem className={`${navigationMenuTriggerStyle()} backdrop-blur-lg cursor-pointer bg-transparent hover:bg-[#CECABB]`}>
                  {navLink} 
                </NavigationMenuItem>
              </Link>
            )
          }
        </NavigationMenuList>
      </NavigationMenu>
      <Sheet>
        <SheetTrigger className="block sm:hidden place-self-end">
          <FaBars className="h-8 w-8"/>
        </SheetTrigger>
        <SheetContent className="bg-[#ddd8c5]">
          <SheetHeader>
            <SheetDescription className="flex flex-col my-4">
              {
                navLinks.map(navLink =>
                  <Link to={`${navLink.toLowerCase()}`}> 
                    <NavigationMenuItem className={`${navigationMenuTriggerStyle()}
                      w-full my-2 backdrop-blur-lg cursor-pointer bg-transparent hover:bg-[#CECABB]`}>
                      {navLink} 
                    </NavigationMenuItem>
                  </Link>
                )
              }  
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

    </section>
  )
}

