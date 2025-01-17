import {useState} from "react"
import {cn} from '@/lib/utils'
import {NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink} from '@/components/ui/navigation-menu'
import {Button} from '@/components/ui/button'
//import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
//import {Menu} from "lucide-react"

type NavigationItem = {title: string; href: string}

const navigationItems: NavigationItem[] = [
  {title: 'Nosotros', href: '/nosotros'},
  {title: 'Contacto', href: '/contacto'},
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  /** Toggle mobile menu */
  const toggleMenu = () => setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Barra de navegacion para tamaño de pantalla grande (desktop) */}
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="flex items-center space-x-2"><span className="font-bold">Cool Morning Lights</span></a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img src={isMenuOpen ? "/assets/icons/close.svg" : "/assets/icons/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>
          {/* Menu de links de navegacion para tamaño de pantalla grande (desktop) */}
          <NavigationMenu className="sm:flex hidden">
            <NavigationMenuList className="flex space-x-4">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuLink
                    href={item.href}
                    className={cn('group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm ' +
                      'font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ' +
                      'focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50'
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              <Button variant="outline">Ingresar</Button>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      {/* Barra de navegacion para tamaño de pantalla pequeño (mobile) */}
      <div className={`nav-sidebar ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        {/* Menu de links de navegacion para tamaño de pantalla pequeño (mobile) */}
        {/* TODO: Cambiar por Dropdown menu de shadcn y ver si se ve mejor */}
        <nav className="p-5">
          <ul className="nav-ul">
            {navigationItems.map((link) => (
              <li key={link.title} className="nav-li">
                <a href={link.href} className="nav-li_a" onClick={toggleMenu}>
                  {link.title}
                </a>
              </li>
            ))}
            <Button variant="outline">Ingresar</Button>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar