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

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Brand list sidebar */}
      <div className="lg:w-64 flex-shrink-0">
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-surface">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {brands.length} Brands
            </span>
          </div>
          <ul className="divide-y divide-border max-h-[70vh] overflow-y-auto">
            {brands.map((b) => {
              const count = productsByBrand(b.slug).length;
              return (
                <li key={b.slug}>
                  <button
                    onClick={() => setActiveBrand(activeBrand === b.slug ? null : b.slug)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-surface",
                      activeBrand === b.slug && "bg-accent/10 border-l-2 border-accent"
                    )}
                  >
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="w-10 h-7 object-contain flex-shrink-0"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-primary truncate">{b.name}</div>
                      <div className="text-[11px] text-muted-foreground">
                        {count} product{count !== 1 ? "s" : ""}
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Products panel */}
      <div className="flex-1 min-w-0">
        {!activeBrand ? (
          <div className="flex flex-col items-center justify-center h-64 text-center bg-white border border-border rounded-xl">
            <Tag className="w-8 h-8 text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground text-sm">Select a brand from the list to view its products</p>
          </div>
        ) : brandProducts.length === 0 ? (
          <div className="bg-white border border-border rounded-xl p-6">
            <EmptyState label={brands.find(b => b.slug === activeBrand)?.name || activeBrand} />
          </div>
        ) : (
          <div>
            {/* Brand header */}
            <div className="flex items-center gap-4 mb-6 bg-white border border-border rounded-xl p-5">
              <img
                src={brands.find(b => b.slug === activeBrand)?.logo}
                alt={activeBrand}
                className="h-10 max-w-[120px] object-contain"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
              <div>
                <div className="font-display font-bold text-primary">
                  {brands.find(b => b.slug === activeBrand)?.name}
                </div>
                <div className="text-xs text-muted-foreground mt-0.5">
                  {brandProducts.length} product{brandProducts.length !== 1 ? "s" : ""} listed
                </div>
              </div>
              <Link
                to={`/brands/${activeBrand}`}
                className="ml-auto inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-accent transition-colors"
              >
                Full brand page <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {brandProducts.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
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

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Category sidebar */}
      <div className="lg:w-64 flex-shrink-0">
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-surface">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              5 Solution Areas
            </span>
          </div>
          <ul className="divide-y divide-border">
            {categories.map((c) => {
              const count = productsByCategory(c.slug).length;
              return (
                <li key={c.slug}>
                  <button
                    onClick={() => setActiveCat(activeCat === c.slug ? null : c.slug)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-surface",
                      activeCat === c.slug && "bg-accent/10 border-l-2 border-accent"
                    )}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-primary">{c.name}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{count} products</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Products panel */}
      <div className="flex-1 min-w-0">
        {!activeCat ? (
          <div className="flex flex-col items-center justify-center h-64 text-center bg-white border border-border rounded-xl">
            <Layers className="w-8 h-8 text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground text-sm">Select a solution area to view products</p>
          </div>
        ) : catProducts.length === 0 ? (
          <div className="bg-white border border-border rounded-xl p-6">
            <EmptyState label={cat?.name || activeCat} />
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">{cat?.name}</div>
              <h3 className="font-display text-xl font-bold text-primary">{catProducts.length} products</h3>
              <p className="text-sm text-muted-foreground mt-1">{cat?.description}</p>
            </div>
            {/* Group by sub-category */}
            {cat?.subCategories.map((sub) => {
              const subProducts = catProducts.filter(p => p.subCategory === sub.slug);
              if (subProducts.length === 0) return null;
              return (
                <div key={sub.slug} className="mb-10">
                  <h4 className="font-display font-semibold text-primary text-sm mb-4 pb-2 border-b border-border flex items-center justify-between">
                    {sub.name}
                    <span className="text-xs font-normal text-muted-foreground">{subProducts.length} products</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {subProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
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

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Industry sidebar */}
      <div className="lg:w-64 flex-shrink-0">
        <div className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-border bg-surface">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {industries.length} Industries
            </span>
          </div>
          <ul className="divide-y divide-border">
            {industries.map((ind) => {
              const cats = industryCategories[ind.slug] || [];
              const count = products.filter(p => cats.includes(p.category)).length;
              return (
                <li key={ind.slug}>
                  <button
                    onClick={() => setActiveIndustry(activeIndustry === ind.slug ? null : ind.slug)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors hover:bg-surface",
                      activeIndustry === ind.slug && "bg-accent/10 border-l-2 border-accent"
                    )}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-medium text-primary">{ind.name}</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">{count} products</div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Products panel */}
      <div className="flex-1 min-w-0">
        {!activeIndustry ? (
          <div className="flex flex-col items-center justify-center h-64 text-center bg-white border border-border rounded-xl">
            <Building2 className="w-8 h-8 text-muted-foreground/40 mb-3" />
            <p className="text-muted-foreground text-sm">Select an industry to see relevant products</p>
          </div>
        ) : industryProducts.length === 0 ? (
          <div className="bg-white border border-border rounded-xl p-6">
            <EmptyState label={ind?.name || activeIndustry} />
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-1">{ind?.name}</div>
              <h3 className="font-display text-xl font-bold text-primary">{industryProducts.length} products</h3>
              <p className="text-sm text-muted-foreground mt-1">{ind?.desc}</p>
            </div>
            {/* Group by category */}
            {(industryCategories[activeIndustry] || []).map((catSlug) => {
              const cat = categories.find(c => c.slug === catSlug);
              const catProducts = industryProducts.filter(p => p.category === catSlug);
              if (catProducts.length === 0) return null;
              return (
                <div key={catSlug} className="mb-10">
                  <h4 className="font-display font-semibold text-primary text-sm mb-4 pb-2 border-b border-border flex items-center justify-between">
                    {cat?.name}
                    <span className="text-xs font-normal text-muted-foreground">{catProducts.length} products</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {catProducts.map((p) => <ProductCard key={p.slug} product={p} />)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
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
