import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";
import { getBrand } from "@/data/brands";

export default function ProductCard({ product }: { product: Product }) {
  const brand = getBrand(product.brandSlug);
  return (
    <Link
      to={`/product/${product.slug}`}
      className="group bg-white border border-border rounded-xl overflow-hidden hover:border-accent hover:shadow-elevated transition-all duration-300 flex flex-col"
    >
      <div className="aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="text-4xl font-display font-bold text-primary/20">{brand?.name.charAt(0)}</div>
        )}
      </div>
      <div className="p-5 flex-1 flex flex-col">
        {brand && (
          <div className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-1.5">
            {brand.name}
          </div>
        )}
        <h3 className="font-display font-semibold text-primary text-base leading-snug mb-2">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-1">
          {product.shortSpec}
        </p>
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-accent transition-colors">
          View details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
