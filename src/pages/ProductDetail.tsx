import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProduct } from "@/data/products";
import { getBrand } from "@/data/brands";
import { getCategory } from "@/data/categories";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { toast } from "sonner";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProduct(slug || "");
  useDocumentTitle(product?.name || "Product", product?.shortSpec);
  if (!product) return <Navigate to="/products" replace />;

  const brand = getBrand(product.brandSlug);
  const cat = getCategory(product.category);
  const sub = cat?.subCategories.find((s) => s.slug === product.subCategory);

  return (
    <section className="container-wide py-14">
      <div className="text-sm text-muted-foreground mb-6">
        <Link to="/products" className="hover:text-primary">Products</Link>
        <span className="mx-2">›</span>
        <Link to={`/products/${cat?.slug}`} className="hover:text-primary">{cat?.name}</Link>
        <span className="mx-2">›</span>
        <Link to={`/products/${cat?.slug}/${sub?.slug}`} className="hover:text-primary">{sub?.name}</Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="aspect-square bg-white rounded-xl border border-border flex items-center justify-center p-12">
          {product.image ? (
            <img src={product.image} alt={product.name} className="max-w-full max-h-full object-contain" />
          ) : (
            <div className="text-9xl font-display font-bold text-primary/10">{brand?.name.charAt(0)}</div>
          )}
        </div>

        <div>
          {brand && (
            <Link to={`/brands/${brand.slug}`} className="text-xs uppercase tracking-[0.14em] font-semibold text-accent">{brand.name}</Link>
          )}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 text-balance">{product.name}</h1>
          <p className="text-lg text-muted-foreground mt-4">{product.shortSpec}</p>
          <p className="text-base leading-relaxed mt-6">{product.description}</p>

          <div className="grid grid-cols-2 gap-4 mt-8 p-5 bg-secondary rounded-lg">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Category</div>
              <div className="font-semibold text-primary mt-1">{cat?.name}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Sub-category</div>
              <div className="font-semibold text-primary mt-1">{sub?.name}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <button
              onClick={() => toast.success("Enquiry received", { description: "Our sales team will get back to you shortly." })}
              className="px-6 py-3 rounded-md bg-primary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Request Quote
            </button>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-md border border-border bg-white font-semibold text-sm hover:border-accent transition-colors"
            >
              Talk to Sales
            </Link>
            {brand && brand.website !== "#" && (
              <a href={brand.website} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-md border border-border bg-white font-semibold text-sm hover:border-accent inline-flex items-center gap-2 transition-colors">
                Datasheet <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
