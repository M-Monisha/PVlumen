import { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Package, Layers, Tag, Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { products, productsByBrand, productsByCategory } from "@/data/products";
import { industries } from "@/data/site";
import { cn } from "@/lib/utils";
import { useDocumentTitle } from "@/hooks/use-document-title";

// Map each industry slug to relevant category slugs
const industryCategories: Record<string, string[]> = {
  "data-centre": ["network-infrastructure"],
  "enterprise": ["network-infrastructure", "safety-security", "business-productivity"],
  "transport": ["business-productivity", "safety-security"],
  "retail": ["business-productivity", "safety-security"],
  "manufacturing": ["business-productivity", "test-measurement", "safety-security"],
  "power": ["test-measurement", "network-infrastructure"],
  "defense": ["drones-uas", "safety-security"],
  "public-infra": ["safety-security", "network-infrastructure", "drones-uas"],
};

type Tab = "all" | "brand" | "solution" | "industry";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  { id: "all", label: "All Products", icon: <Package className="w-4 h-4" /> },
  { id: "brand", label: "By Brand", icon: <Tag className="w-4 h-4" /> },
  { id: "solution", label: "By Solution", icon: <Layers className="w-4 h-4" /> },
  { id: "industry", label: "By Industry", icon: <Building2 className="w-4 h-4" /> },
];

function EmptyState({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mb-4">
        <Package className="w-6 h-6 text-muted-foreground" />
      </div>
      <div className="font-display font-semibold text-primary text-lg">0 Products</div>
      <p className="text-sm text-muted-foreground mt-2 max-w-xs">
        No products listed for <span className="font-medium">{label}</span> yet.{" "}
        Contact our sales team for the full line card.
      </p>
      <Link
        to="/contact"
        className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:opacity-90 transition-opacity"
      >
        Contact Sales <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

// ── By Brand tab ─────────────────────────────────────────────────────────────
function ByBrandView({ activeBrand, setActiveBrand }: {
  activeBrand: string | null;
  setActiveBrand: (s: string | null) => void;
}) {
  const brandProducts = useMemo(
    () => activeBrand ? productsByBrand(activeBrand) : [],
    [activeBrand]
  );

  const selectedBrand = brands.find(b => b.slug === activeBrand);

  // If no brand selected, show grid of brand cards
  if (!activeBrand) {
    return (
      <div>
        <div className="mb-8">
          <h3 className="font-display text-2xl font-bold text-primary mb-2">Browse by Brand</h3>
          <p className="text-muted-foreground text-sm">Select a brand to view its product portfolio</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((b) => {
            const count = productsByBrand(b.slug).length;
            return (
              <button
                key={b.slug}
                onClick={() => setActiveBrand(b.slug)}
                className="group bg-white border border-border rounded-xl p-5 hover:border-accent hover:shadow-card transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="h-16 flex items-center justify-center mb-3">
                  <img
                    src={b.logo}
                    alt={b.name}
                    className="max-h-14 max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <div className="text-xs font-semibold text-primary group-hover:text-accent transition-colors line-clamp-2 mb-2">
                  {b.name}
                </div>
                <div className="text-[11px] text-muted-foreground">
                  {count} product{count !== 1 ? "s" : ""}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Brand selected - show products
  return (
    <div>
      <button
        onClick={() => setActiveBrand(null)}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to all brands
      </button>

      {brandProducts.length === 0 ? (
        <div className="bg-white border border-border rounded-xl p-6">
          <EmptyState label={selectedBrand?.name || activeBrand} />
        </div>
      ) : (
        <div>
          {/* Brand header */}
          <div className="flex items-center gap-4 mb-8 bg-white border border-border rounded-xl p-6">
            <img
              src={selectedBrand?.logo}
              alt={activeBrand}
              className="h-12 max-w-[140px] object-contain"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <div>
              <div className="font-display font-bold text-primary text-xl">
                {selectedBrand?.name}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {brandProducts.length} product{brandProducts.length !== 1 ? "s" : ""} available
              </div>
            </div>
            <Link
              to={`/brands/${activeBrand}`}
              className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              Full brand page <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {brandProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── By Solution tab ───────────────────────────────────────────────────────────
function BySolutionView({ activeCat, setActiveCat }: {
  activeCat: string | null;
  setActiveCat: (s: string | null) => void;
}) {
  const catProducts = useMemo(
    () => activeCat ? productsByCategory(activeCat) : [],
    [activeCat]
  );
  const cat = categories.find(c => c.slug === activeCat);

  // If no category selected, show grid of category cards
  if (!activeCat) {
    return (
      <div>
        <div className="mb-8">
          <h3 className="font-display text-2xl font-bold text-primary mb-2">Browse by Solution</h3>
          <p className="text-muted-foreground text-sm">Select a solution area to view products</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((c) => {
            const count = productsByCategory(c.slug).length;
            return (
              <button
                key={c.slug}
                onClick={() => setActiveCat(c.slug)}
                className="group relative overflow-hidden rounded-xl bg-white border border-border hover:border-accent hover:shadow-card transition-all duration-300 text-left"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-primary group-hover:text-accent transition-colors leading-snug">
                    {c.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                    {c.short}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[11px] text-muted-foreground">
                      {count} product{count !== 1 ? "s" : ""}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Category selected - show products
  return (
    <div>
      <button
        onClick={() => setActiveCat(null)}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to all solutions
      </button>

      {catProducts.length === 0 ? (
        <div className="bg-white border border-border rounded-xl p-6">
          <EmptyState label={cat?.name || activeCat} />
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">{cat?.name}</div>
            <h3 className="font-display text-2xl font-bold text-primary">{catProducts.length} products</h3>
            <p className="text-sm text-muted-foreground mt-2">{cat?.description}</p>
          </div>
          {/* Group by sub-category */}
          {cat?.subCategories.map((sub) => {
            const subProducts = catProducts.filter(p => p.subCategory === sub.slug);
            if (subProducts.length === 0) return null;
            return (
              <div key={sub.slug} className="mb-10">
                <h4 className="font-display font-semibold text-primary text-base mb-5 pb-3 border-b border-border flex items-center justify-between">
                  {sub.name}
                  <span className="text-sm font-normal text-muted-foreground">{subProducts.length}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {subProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── By Industry tab ───────────────────────────────────────────────────────────
function ByIndustryView({ activeIndustry, setActiveIndustry }: {
  activeIndustry: string | null;
  setActiveIndustry: (s: string | null) => void;
}) {
  const industryProducts = useMemo(() => {
    if (!activeIndustry) return [];
    const cats = industryCategories[activeIndustry] || [];
    return products.filter(p => cats.includes(p.category));
  }, [activeIndustry]);

  const ind = industries.find(i => i.slug === activeIndustry);

  // Industry card image mapping
  const industryImages: Record<string, string> = {
    "data-centre": "/datacentre.avif",
    "enterprise": "/enterprise.jpg",
    "transport": "/werahouse.webp",
    "retail": "/retail.webp",
    "manufacturing": "/manufacturing.jpg",
    "power": "/power.jpg",
    "defense": "/defense.jpg",
    "public-infra": "/publicinfrastructure.webp",
  };

  // If no industry selected, show grid of industry cards
  if (!activeIndustry) {
    return (
      <div>
        <div className="mb-8">
          <h3 className="font-display text-2xl font-bold text-primary mb-2">Browse by Industry</h3>
          <p className="text-muted-foreground text-sm">Select an industry to see relevant products</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {industries.map((ind) => {
            const cats = industryCategories[ind.slug] || [];
            const count = products.filter(p => cats.includes(p.category)).length;
            return (
              <button
                key={ind.slug}
                onClick={() => setActiveIndustry(ind.slug)}
                className="group relative overflow-hidden rounded-xl min-h-[160px] flex flex-col justify-end hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-card"
              >
                {/* Background image */}
                <img
                  src={industryImages[ind.slug] ?? "/datacentre.avif"}
                  alt={ind.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
                {/* Text */}
                <div className="relative p-4 z-10">
                  <div className="font-display font-bold text-white text-sm md:text-[15px] leading-snug drop-shadow">
                    {ind.name}
                  </div>
                  <div className="text-[11px] text-white/80 mt-1.5 leading-relaxed line-clamp-2">
                    {ind.desc}
                  </div>
                  <div className="text-[11px] text-white/70 mt-2">
                    {count} product{count !== 1 ? "s" : ""}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Industry selected - show products
  return (
    <div>
      <button
        onClick={() => setActiveIndustry(null)}
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
      >
        <ArrowRight className="w-4 h-4 rotate-180" />
        Back to all industries
      </button>

      {industryProducts.length === 0 ? (
        <div className="bg-white border border-border rounded-xl p-6">
          <EmptyState label={ind?.name || activeIndustry} />
        </div>
      ) : (
        <div>
          <div className="mb-8">
            <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">{ind?.name}</div>
            <h3 className="font-display text-2xl font-bold text-primary">{industryProducts.length} products</h3>
            <p className="text-sm text-muted-foreground mt-2">{ind?.desc}</p>
          </div>
          {/* Group by category */}
          {(industryCategories[activeIndustry] || []).map((catSlug) => {
            const cat = categories.find(c => c.slug === catSlug);
            const catProducts = industryProducts.filter(p => p.category === catSlug);
            if (catProducts.length === 0) return null;
            return (
              <div key={catSlug} className="mb-10">
                <h4 className="font-display font-semibold text-primary text-base mb-5 pb-3 border-b border-border flex items-center justify-between">
                  {cat?.name}
                  <span className="text-sm font-normal text-muted-foreground">{catProducts.length}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {catProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── All Products tab ──────────────────────────────────────────────────────────
function AllProductsView() {
  return (
    <div className="space-y-12">
      {categories.map((cat) => {
        const catProducts = productsByCategory(cat.slug);
        return (
          <div key={cat.slug}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">{cat.name}</div>
                <h3 className="font-display text-lg font-bold text-primary">
                  {catProducts.length} product{catProducts.length !== 1 ? "s" : ""}
                </h3>
              </div>
              <Link
                to={`/products/${cat.slug}`}
                className="text-xs font-semibold text-primary inline-flex items-center gap-1 hover:text-accent transition-colors"
              >
                Browse all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            {catProducts.length === 0 ? (
              <EmptyState label={cat.name} />
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {catProducts.slice(0, 4).map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            )}
            {catProducts.length > 4 && (
              <div className="mt-4 text-center">
                <Link
                  to={`/products/${cat.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-md border border-border text-sm font-medium hover:border-accent transition-colors"
                >
                  +{catProducts.length - 4} more in {cat.name} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function Products() {
  useDocumentTitle("Products", "Explore PV Lumens' full product portfolio by brand, solution or industry.");

  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = (searchParams.get("view") as Tab) || "all";
  const activeTab = tabs.find(t => t.id === tabParam) ? tabParam : "all";

  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [activeCat, setActiveCat] = useState<string | null>(null);
  const [activeIndustry, setActiveIndustry] = useState<string | null>(null);

  const setTab = (t: Tab) => {
    setSearchParams({ view: t }, { replace: true });
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-deep text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, hsl(199 80% 51% / 0.4), transparent 60%)" }} />
        <div className="container-wide relative">
          <SectionHeading
            eyebrow="Products"
            title="Everything we distribute."
            description={`${products.length} products across ${categories.length} solution areas, ${brands.length} brands and 8 industries.`}
            light
          />
        </div>
      </section>

      {/* Tab bar */}
      <div className="sticky top-[88px] z-30 bg-white border-b border-border shadow-sm">
        <div className="container-wide">
          <div className="flex gap-1 overflow-x-auto py-2 no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setTab(tab.id)}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium whitespace-nowrap transition-all",
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-foreground/70 hover:text-primary hover:bg-surface"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="container-wide py-10 pb-20">
        {activeTab === "all" && <AllProductsView />}
        {activeTab === "brand" && (
          <ByBrandView activeBrand={activeBrand} setActiveBrand={setActiveBrand} />
        )}
        {activeTab === "solution" && (
          <BySolutionView activeCat={activeCat} setActiveCat={setActiveCat} />
        )}
        {activeTab === "industry" && (
          <ByIndustryView activeIndustry={activeIndustry} setActiveIndustry={setActiveIndustry} />
        )}
      </section>
    </>
  );
}
