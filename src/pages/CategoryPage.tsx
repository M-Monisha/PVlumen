import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { getCategory } from "@/data/categories";
import { productsBySubCategory } from "@/data/products";
import { brandsByCategory } from "@/data/brands";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const cat = getCategory(category || "");
  useDocumentTitle(cat?.name || "Category", cat?.description);
  if (!cat) return <Navigate to="/products" replace />;

  const cbrands = brandsByCategory(cat.slug);

  return (
    <>
      <section className="bg-surface py-16 relative overflow-hidden">
        <img src={cat.image} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="container-wide relative">
          <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6">
            <ArrowLeft className="w-4 h-4" /> All categories
          </Link>
          <SectionHeading eyebrow="Category" title={cat.name} description={cat.description} />
        </div>
      </section>

      <section className="container-wide py-16">
        <h2 className="font-display text-2xl font-bold text-primary mb-8">Sub-categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cat.subCategories.map((sub) => {
            const count = productsBySubCategory(cat.slug, sub.slug).length;
            return (
              <Link
                key={sub.slug}
                to={`/products/${cat.slug}/${sub.slug}`}
                className="group flex items-center justify-between p-5 rounded-xl bg-white border border-border hover:border-accent hover:shadow-card transition-all"
              >
                <div>
                  <div className="font-display font-semibold text-primary group-hover:text-accent transition-colors">{sub.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{count} {count === 1 ? "product" : "products"}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all" />
              </Link>
            );
          })}
        </div>

        {cbrands.length > 0 && (
          <>
            <h2 className="font-display text-2xl font-bold text-primary mt-20 mb-8">Brands in this category</h2>
            <div className="flex flex-wrap gap-3">
              {cbrands.map((b) => (
                <Link key={b.slug} to={`/brands/${b.slug}`} className="px-4 py-2.5 bg-white border border-border rounded-lg text-sm font-medium text-primary hover:border-accent transition-colors">
                  {b.name}
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
