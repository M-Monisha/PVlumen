import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { categories } from "@/data/categories";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Products() {
  useDocumentTitle("Products", "Explore PV Lumens' full product portfolio across five solution categories.");
  return (
    <>
      <section className="bg-navy-deep text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, hsl(199 80% 51% / 0.4), transparent 60%)" }} />
        <div className="container-wide relative">
          <SectionHeading
            eyebrow="Products"
            title="Everything we distribute, categorised."
            description="Five solution areas. Dozens of sub-categories. Hundreds of SKUs from the world's most trusted brands."
            light
          />
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group relative overflow-hidden rounded-xl bg-white border border-border hover:border-accent hover:shadow-elevated transition-all duration-500 min-h-[280px]"
            >
              <img src={cat.image} alt={cat.name} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/95 to-white/60" />
              <div className="relative p-10 h-full flex flex-col">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-primary">{cat.name}</h3>
                <p className="text-sm md:text-base text-muted-foreground mt-3 max-w-md leading-relaxed">{cat.description}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {cat.subCategories.slice(0, 4).map((s) => (
                    <span key={s.slug} className="text-[11px] px-2 py-1 rounded-full bg-secondary text-primary font-medium">
                      {s.name}
                    </span>
                  ))}
                  {cat.subCategories.length > 4 && (
                    <span className="text-[11px] px-2 py-1 text-muted-foreground font-medium">
                      +{cat.subCategories.length - 4} more
                    </span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-auto pt-6 group-hover:text-accent transition-colors">
                  Browse {cat.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
