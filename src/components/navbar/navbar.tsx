"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../../components/ui/navigation-menu"
// import { Label } from "../ui/label"
// import { Switch } from "../ui/switch"

const navLinks: string[] = [
  "Home", "Projects", "Resume"
]

export function Navbar() {


  return (
    <NavigationMenu className="border rounded-md z-10 bg-white">
      <NavigationMenuList>
        {navLinks.map(navLink => <NavigationMenuItem className={`${navigationMenuTriggerStyle()} cursor-pointer`}>{navLink}</NavigationMenuItem>)}
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

