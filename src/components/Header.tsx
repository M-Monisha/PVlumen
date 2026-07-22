import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { categories } from "@/data/categories";

const primaryLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/industries", label: "Industries" },
  { to: "/products", label: "Solutions", hasMenu: true },
  { to: "/brands", label: "Brands" },
  { to: "/products", label: "Products" },
  { to: "/blog", label: "Resources" },
  { to: "/newsletter", label: "Newsletter" },
];

export default function Header() {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  // On home page: transparent when at top, white when scrolled
  // On all other pages: always white
  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300 h-[88px]",
          transparent
            ? "bg-transparent"
            : "bg-white border-b border-border shadow-sm"
        )}
      >
        <div className="container-wide h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.jpeg"
              alt="PV Lumens"
              className={cn(
                "h-20 w-auto object-contain transition-all duration-300",
                transparent && "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {primaryLinks.map((link) =>
              link.hasMenu ? (
                <div
                  key={link.label + "-menu"}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <NavLink
                    to={link.to}
                    className={cn(
                      "px-3 py-2 text-[13px] font-medium flex items-center gap-1 rounded-md transition-colors",
                      transparent
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-primary"
                    )}
                  >
                    {link.label} <ChevronDown className="w-3 h-3" />
                  </NavLink>
                  <AnimatePresence>
                    {productsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-[480px] bg-white border border-border shadow-elevated rounded-xl p-4 grid grid-cols-2 gap-1"
                      >
                        {categories.map((c) => (
                          <Link
                            key={c.slug}
                            to={`/products/${c.slug}`}
                            className="block px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                          >
                            <div className="text-sm font-semibold text-primary">{c.name}</div>
                            <div className="text-xs text-muted-foreground mt-0.5">{c.short}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2 text-[13px] font-medium rounded-md transition-colors",
                      transparent
                        ? "text-white/90 hover:text-white"
                        : "text-foreground/80 hover:text-primary",
                      isActive && (transparent ? "text-white font-semibold" : "text-primary font-semibold")
                    )
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className={cn(
                "px-5 py-2.5 rounded-md text-sm font-semibold transition-all",
                transparent
                  ? "bg-white text-primary hover:bg-white/90"
                  : "bg-gradient-accent text-white hover:opacity-90 shadow-sm"
              )}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={cn("w-6 h-6", transparent ? "text-white" : "text-primary")} />
            ) : (
              <Menu className={cn("w-6 h-6", transparent ? "text-white" : "text-primary")} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-primary lg:hidden flex flex-col"
          >
            {/* Top bar inside overlay */}
            <div className="h-[88px] flex items-center justify-between px-6">
              <img src="/logo.jpeg" alt="PV Lumens" className="h-16 w-auto object-contain brightness-0 invert" />
              <button onClick={() => setMobileOpen(false)} className="p-2 text-white" aria-label="Close menu">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {primaryLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "block py-4 text-2xl font-semibold border-b border-white/10 transition-colors",
                        isActive ? "text-accent" : "text-white/90 hover:text-white"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: primaryLinks.length * 0.05 + 0.15 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block px-8 py-4 rounded-xl bg-accent text-white text-lg font-semibold"
                >
                  Contact Us
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
