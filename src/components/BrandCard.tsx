import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import type { Brand } from "@/data/brands";
import { getCategory } from "@/data/categories";

interface Props {
  brand: Brand;
}

export default function BrandCard({ brand }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group bg-white border border-border rounded-xl p-6 flex items-center justify-center h-32 hover:border-accent hover:shadow-elevated transition-all duration-300"
      >
        <img
          src={brand.logo}
          alt={`${brand.name} logo`}
          className="max-h-14 max-w-[80%] object-contain opacity-80 group-hover:opacity-100 transition-opacity"
          loading="lazy"
          onError={(e) => {
            const parent = (e.currentTarget.parentElement as HTMLElement);
            e.currentTarget.style.display = "none";
            const fallback = document.createElement("span");
            fallback.textContent = brand.name;
            fallback.className = "font-display font-semibold text-primary text-sm text-center";
            parent.appendChild(fallback);
          }}
        />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <div className="w-full h-24 bg-secondary rounded-lg flex items-center justify-center mb-3">
              <img src={brand.logo} alt={brand.name} className="max-h-16 max-w-[70%] object-contain" />
            </div>
            <DialogTitle className="font-display text-2xl">{brand.name}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground leading-relaxed">{brand.about}</p>
          <div className="flex flex-wrap gap-1.5 my-1">
            {brand.categories.map((c) => {
              const cat = getCategory(c);
              return cat ? (
                <span key={c} className="text-[11px] px-2 py-1 rounded-full bg-secondary text-primary font-medium">
                  {cat.name}
                </span>
              ) : null;
            })}
          </div>
          <div className="flex flex-col sm:flex-row gap-2.5 mt-4">
            {brand.website && brand.website !== "#" && (
              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-border rounded-md text-sm font-medium hover:bg-secondary transition-colors"
              >
                Visit Company Website <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <Link
              to={`/brands/${brand.slug}`}
              onClick={() => setOpen(false)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              View Products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
