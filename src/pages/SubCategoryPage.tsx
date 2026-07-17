import { useState, useMemo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { getCategory, getSubCategory } from "@/data/categories";
import { productsBySubCategory } from "@/data/products";
import { getBrand } from "@/data/brands";
import { cn } from "@/lib/utils";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function SubCategoryPage() {
  const { category, sub } = useParams<{ category: string; sub: string }>();
  const cat = getCategory(category || "");
  const subcat = getSubCategory(category || "", sub || "");
  useDocumentTitle(subcat?.name || "Sub Category", cat?.description);
  const items = useMemo(() => productsBySubCategory(category || "", sub || ""), [category, sub]);
  const brandList = useMemo(() => Array.from(new Set(items.map((p) => p.brandSlug))), [items]);
  const [brandFilter, setBrandFilter] = useState<string>("all");

  if (!cat || !subcat) return <Navigate to="/products" replace />;

  const visible = brandFilter === "all" ? items : items.filter((p) => p.brandSlug === brandFilter);

  return (
    <>
      <section className="bg-surface py-14">
        <div className="container-wide">
          <div className="text-sm text-muted-foreground mb-4">
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">›</span>
            <Link to={`/products/${cat.slug}`} className="hover:text-primary">{cat.name}</Link>
          </div>
          <SectionHeading eyebrow={cat.name} title={subcat.name} description={`${items.length} ${items.length === 1 ? "product" : "products"} from ${brandList.length} ${brandList.length === 1 ? "brand" : "brands"}.`} />
        </div>
      </section>

      <section className="container-wide py-14">
        {brandList.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setBrandFilter("all")}
              className={cn("px-3.5 py-1.5 rounded-full text-xs font-medium border", brandFilter === "all" ? "bg-primary text-white border-primary" : "bg-white border-border text-primary hover:border-accent")}
            >All Brands</button>
            {brandList.map((bs) => {
              const b = getBrand(bs);
              return (
                <button
                  key={bs}
                  onClick={() => setBrandFilter(bs)}
                  className={cn("px-3.5 py-1.5 rounded-full text-xs font-medium border", brandFilter === bs ? "bg-primary text-white border-primary" : "bg-white border-border text-primary hover:border-accent")}
                >
                  {b?.name || bs}
                </button>
              );
            })}
          </div>
        )}

        {visible.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Product catalog for this sub-category is being expanded.</p>
            <Link to="/contact" className="inline-flex mt-6 px-6 py-3 rounded-md bg-primary text-white text-sm font-semibold">Contact for line card</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {visible.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </section>
    </>
  );
}
