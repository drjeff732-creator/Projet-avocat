import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const services = [
  { to: "/services/levee-de-fonds", label: "Levée de fonds" },
  { to: "/services/droit-des-societes", label: "Droit des sociétés" },
  { to: "/services/nouvelles-technologies", label: "Droit des nouvelles technologies" },
  { to: "/services/propriete-intellectuelle", label: "Droit de la propriété intellectuelle" },
  { to: "/services/droit-des-contrats", label: "Droit des contrats" },
  { to: "/services/droit-fiscal", label: "Droit fiscal" },
  { to: "/services/rgpd", label: "Droit du RGPD" },
  { to: "/services/droit-social-travail", label: "Droit social & travail à Paris" },
];

const Header = () => {
  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Hashtag Avocat - Accueil">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary font-bold">#</span>
          <span className="font-semibold">Hashtag Avocat</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
            }
          >
            Accueil
          </NavLink>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                  <div className="grid gap-1 p-2 min-w-[280px]">
                    {services.map((s) => (
                      <NavLink
                        key={s.to}
                        to={s.to}
                        className={({ isActive }) =>
                          `rounded-md px-3 py-2 text-sm transition-colors ${isActive ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground"}`
                        }
                      >
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavLink
            to="/tarifs"
            className={({ isActive }) =>
              `text-sm transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
            }
          >
            Tarifs
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `text-sm transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
            }
          >
            Qui sommes-nous ?
          </NavLink>

          <NavLink
            to="/actualites"
            className={({ isActive }) =>
              `text-sm transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`
            }
          >
            Blog
          </NavLink>

          <a href="tel:+33185735666" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
            <Phone className="h-4 w-4" /> 01 85 73 56 66
          </a>

          <Button asChild variant="cta" size="wide">
            <Link to="/contact">Prendre rendez-vous</Link>
          </Button>
        </nav>

        {/* Mobile nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Ouvrir le menu">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="mt-8 flex flex-col gap-4">
                <NavLink to="/" className={({ isActive }) => `text-base ${isActive ? "text-primary" : "text-foreground"}`}>Accueil</NavLink>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Services</p>
                  <div className="flex flex-col gap-2">
                    {services.map((s) => (
                      <NavLink key={s.to} to={s.to} className={({ isActive }) => `text-base ${isActive ? "text-primary" : "text-foreground"}`}>
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
                <NavLink to="/tarifs" className={({ isActive }) => `text-base ${isActive ? "text-primary" : "text-foreground"}`}>Tarifs</NavLink>
                <NavLink to="/a-propos" className={({ isActive }) => `text-base ${isActive ? "text-primary" : "text-foreground"}`}>Qui sommes-nous ?</NavLink>
                <NavLink to="/actualites" className={({ isActive }) => `text-base ${isActive ? "text-primary" : "text-foreground"}`}>Blog</NavLink>
                <a href="tel:+33185735666" className="text-base">01 85 73 56 66</a>
                <Button asChild variant="cta" size="wide">
                  <Link to="/contact">Prendre rendez-vous</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
