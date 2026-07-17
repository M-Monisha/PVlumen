import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/brands", label: "Brands" },
  { to: "/products", label: "Products", hasMenu: true },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/newsletter", label: "Newsletter" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 h-[88px] bg-white border-b border-border shadow-sm">
      <div className="container-wide h-full flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src="/logo.jpeg" alt="PV Lumens" className="h-20 w-auto object-contain" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {primaryLinks.map((link) =>
            link.hasMenu ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={cn(
                    "px-3 py-2 text-sm font-medium flex items-center gap-1 rounded-md transition-colors text-foreground/80 hover:text-primary"
                  )}
                >
                  {link.label} <ChevronDown className="w-3.5 h-3.5" />
                </NavLink>
                {productsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[520px] bg-white border border-border shadow-elevated rounded-lg p-4 grid grid-cols-2 gap-1">
                    {categories.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/products/${c.slug}`}
                        className="block px-3 py-2.5 rounded-md hover:bg-secondary transition-colors"
                      >
                        <div className="text-sm font-semibold text-primary">{c.name}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{c.short}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 text-sm font-medium rounded-md transition-colors text-foreground/80 hover:text-primary",
                    isActive && "text-primary font-semibold"
                  )
                }
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-md bg-gradient-accent text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Contact
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className="w-6 h-6 text-primary" />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border max-h-[calc(100vh-88px)] overflow-y-auto">
          <nav className="container-wide py-6 flex flex-col gap-1">
            {primaryLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-3 rounded-md text-base font-medium",
                    isActive ? "bg-secondary text-primary" : "text-foreground/80"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-3 px-5 py-3 rounded-md bg-gradient-accent text-white text-center font-semibold"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
