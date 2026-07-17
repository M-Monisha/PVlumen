import { Link, useParams, Navigate } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { getBrand } from "@/data/brands";
import { productsByBrand } from "@/data/products";
import { getCategory } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function BrandDetail() {
  const { slug } = useParams<{ slug: string }>();
  const brand = getBrand(slug || "");
  useDocumentTitle(brand?.name || "Brand", brand?.about);
  if (!brand) return <Navigate to="/brands" replace />;

  const items = productsByBrand(brand.slug);
  // group by sub-category name
  const grouped = items.reduce<Record<string, typeof items>>((acc, p) => {
    const cat = getCategory(p.category);
    const sub = cat?.subCategories.find((s) => s.slug === p.subCategory);
    const key = sub?.name || "Other";
    (acc[key] ||= []).push(p);
    return acc;
  }, {});

  return (
    <>
      <section className="bg-surface py-16">
        <div className="container-wide">
          <Link to="/brands" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Brands
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
            <div className="bg-white rounded-xl border border-border p-8 flex items-center justify-center h-48">
              <img src={brand.logo} alt={brand.name} className="max-h-24 max-w-full object-contain" />
            </div>
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {brand.categories.map((c) => {
                  const cat = getCategory(c);
                  return cat ? (
                    <Link key={c} to={`/products/${c}`} className="text-[11px] px-2.5 py-1 rounded-full bg-white border border-border text-primary font-medium hover:border-accent">
                      {cat.name}
                    </Link>
                  ) : null;
                })}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary text-balance">{brand.name}</h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 leading-relaxed max-w-2xl">{brand.about}</p>
              {brand.website && brand.website !== "#" && (
                <a
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-md border border-border bg-white text-sm font-semibold hover:border-accent transition-colors"
                >
                  Visit {brand.name} website <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide py-20">
        <SectionHeading
          eyebrow={`${brand.name} at PV Lumens`}
          title={items.length ? `${items.length} products across ${Object.keys(grouped).length} categories` : "Product listing coming soon"}
          description={items.length ? undefined : "We stock the full portfolio from this brand. Reach out to our sales team for an updated line card."}
        />

        {items.length === 0 ? (
          <div className="mt-10">
            <Link to="/contact" className="inline-flex px-6 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity">Contact Sales</Link>
          </div>
        ) : (
          <div className="space-y-14 mt-14">
            {Object.entries(grouped).map(([subName, list]) => (
              <div key={subName}>
                <h3 className="font-display text-xl font-bold text-primary mb-6 pb-3 border-b border-border">
                  {subName} <span className="text-sm text-muted-foreground font-normal ml-2">({list.length})</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {list.map((p) => <ProductCard key={p.slug} product={p} />)}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
