import { useState, useMemo } from "react";
import SectionHeading from "@/components/SectionHeading";
import BrandCard from "@/components/BrandCard";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";
import { cn } from "@/lib/utils";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Brands() {
  useDocumentTitle("Brands", "Explore 25+ global brands distributed by PV Lumens India across networking, security, productivity, test & measurement and drones.");
  const [filter, setFilter] = useState<string>("all");

  const visible = useMemo(
    () => (filter === "all" ? brands : brands.filter((b) => b.categories.includes(filter))),
    [filter]
  );

  return (
    <>
      <section className="bg-navy-deep text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, hsl(199 80% 51% / 0.4), transparent 60%)" }} />
        <div className="container-wide relative">
          <SectionHeading
            eyebrow="Brand Partners"
            title="25+ global OEMs, one accountable distributor."
            description="Click any brand to learn what they do, visit their website, or view the products PV Lumens carries from them in India."
            light
          />
        </div>
      </section>

      <section className="container-wide py-16">
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
              filter === "all" ? "bg-primary text-white border-primary" : "bg-white border-border text-primary hover:border-accent"
            )}
          >
            All Brands
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => setFilter(c.slug)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                filter === c.slug ? "bg-primary text-white border-primary" : "bg-white border-border text-primary hover:border-accent"
              )}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {visible.map((b) => (
            <BrandCard key={b.slug} brand={b} />
          ))}
        </div>
      </section>
    </>
  );
}
