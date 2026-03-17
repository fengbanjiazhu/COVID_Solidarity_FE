import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { cn } from "@/lib/utils";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

import { Link } from "react-router-dom";
import DarkModeSwitch from "./DarkModeSwitch";

import { IoSettingsSharp } from "react-icons/io5";

const linkStyle = navigationMenuTriggerStyle();

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "News",
    href: "/news",
  },
  {
    label: "Venues",
    href: "/venues",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function Header() {
  const { loggedIn } = useContext(AppContext);

  return (
    <header className="border-b border-slate-200 mb-4 flex items-center py-4 px-10 justify-between ">
      {/* Logo */}
      <Link to="/" className="font-bold font-vanilla text-vanilla-pink text-2xl">
        Covid Solidarity 'syd'
      </Link>

      {/* Navigation links */}
      <NavigationMenu className="">
        <NavigationMenuList>
          {links.map((link) => (
            <LinkItems link={link} key={link.label} />
          ))}

          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <IoSettingsSharp />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col">
                {!loggedIn && (
                  <Link to={"/admin"} className={linkStyle}>
                    Admin Login
                  </Link>
                )}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <DarkModeSwitch />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

function LinkItems({ link }) {
  const { label, href } = link;
  return (
    <NavigationMenuItem>
      <Link to={href} className={cn(linkStyle, "text-base")}>
        {label}
      </Link>
    </NavigationMenuItem>
  );
}

export default Header;
