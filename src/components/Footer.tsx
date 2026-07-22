import { Link } from "react-router-dom";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { categories } from "@/data/categories";
import { company } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 mt-24">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo.jpeg" alt="PV Lumens" className="h-20 w-auto object-contain brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-white/70 max-w-sm">
              Nation-wide value added distributor for Network Infrastructure, Safety & Security, Business Productivity, Test & Measurement and Drone solutions.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-md bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={`mailto:${company.email}`} aria-label="Email" className="w-9 h-9 rounded-md bg-white/10 hover:bg-accent flex items-center justify-center transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Explore</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link to="/brands" className="hover:text-accent transition-colors">Brands</Link></li>
              <li><Link to="/products" className="hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/industries" className="hover:text-accent transition-colors">Industries</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/newsletter" className="hover:text-accent transition-colors">Newsletter</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Categories</h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              {categories.map((c) => (
                <li key={c.slug}>
                  <Link to={`/products/${c.slug}`} className="hover:text-accent transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-4">Head Office</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex gap-2.5"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /><span>{company.address}</span></li>
              <li className="flex gap-2.5"><Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /><a href={`tel:${company.phone}`} className="hover:text-accent transition-colors">{company.phone}</a></li>
              <li className="flex gap-2.5"><Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" /><a href={`mailto:${company.email}`} className="hover:text-accent transition-colors">{company.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} PV Lumens India Pvt Ltd. All rights reserved.</div>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
            <a href="#" className="hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
