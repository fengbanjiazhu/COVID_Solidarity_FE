import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Link } from "react-router-dom";

const linkStyle = navigationMenuTriggerStyle();

function Header() {
  return (
    <header className="border-b border-slate-200 mb-4 flex items-center">
      <Link to="/" className="font-bold font-vanilla text-vanilla-pink">
        Covid Solidarity 'syd'
      </Link>

      <NavigationMenu className="mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/" className={linkStyle}>
              Home
            </Link>
          </NavigationMenuItem>
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            <Link to="/about" className={linkStyle}>
              About
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/news" className={linkStyle}>
              News
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/news" className={linkStyle}>
              News
            </Link>
          </NavigationMenuItem>
          {/*  */}
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;
