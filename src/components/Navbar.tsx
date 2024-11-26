import React, { useState, useEffect } from 'react'
import { Menu, Rocket, Wallet, ChevronDown } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { 
    title: "Home", 
    href: "/",
    description: "Explore the MoonEX dashboard and latest features"
  },
  { 
    title: "Trade", 
    href: "/trade",
    description: "Multi-chain trading platform with lowest fees"
  },
  { 
    title: "Products", 
    href: "/products",
    description: "Comprehensive crypto trading and earning solutions"
  },
  { 
    title: "Learn", 
    href: "/learn",
    description: "Educational resources and crypto insights"
  }
]

const communityLinks = [
  { title: "Blog", href: "/blog", description: "Latest news and updates" },
  { title: "Community", href: "/community", description: "Join our global network" },
  { title: "Governance", href: "/governance", description: "Participate in platform decisions" }
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-gray-900/80 backdrop-blur-md border-b border-gray-800 shadow-lg" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Rocket className="w-8 h-8 text-yellow-400" />
            <span className="text-xl font-bold text-white">MoonEX</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuTrigger 
                      className="bg-transparent text-gray-300 hover:text-yellow-400 hover:bg-gray-800 focus:text-yellow-400"
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[300px] gap-3 p-4 bg-gray-900 border border-gray-800 rounded-xl shadow-lg">
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 focus:bg-gray-800"
                            >
                              <div className="text-sm font-medium text-white">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {/* Community Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className="bg-transparent text-gray-300 hover:text-yellow-400 hover:bg-gray-800 focus:text-yellow-400"
                  >
                    Community
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 bg-gray-900 border border-gray-800 rounded-xl shadow-lg">
                      {communityLinks.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={item.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 focus:bg-gray-800"
                            >
                              <div className="text-sm font-medium text-white">{item.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                                {item.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuViewport className="bg-gray-900 border border-gray-800" />
            </NavigationMenu>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-gray-300 hover:text-yellow-400 md:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-gray-900 border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  {[...navItems, ...communityLinks].map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      className="text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Connect Wallet Button */}
            <Button 
              className="hidden md:inline-flex bg-yellow-400 text-black hover:bg-yellow-500 group"
            >
              <Wallet className="mr-2 h-4 w-4 group-hover:rotate-6 transition-transform" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}