import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Zap, Award, Users2, Building2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import NewsletterSignup from "@/components/NewsletterSignup";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { stats, industries, strengths, posts } from "@/data/site";
import { useDocumentTitle } from "@/hooks/use-document-title";

const strengthIcons = [Building2, Zap, Award, ShieldCheck, Users2, Award];

// Map industry slugs to images in /public
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

export default function Index() {
  useDocumentTitle(
    "Distribution Redefined",
    "PV Lumens India — pan-India value added distributor of Network Infrastructure, Safety & Security, Business Productivity, Test & Measurement and Drone solutions from 25+ global brands."
  );

  const featuredBrands = brands.slice(0, 12);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <>
      {/* Hero — video background, content centred */}
      <section className="relative -mt-[88px] min-h-screen flex items-center justify-center overflow-hidden">
        {/* Poster shown immediately — replaced by video once it plays */}
        <img
          src="/datacentre.avif"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
          aria-hidden="true"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container-wide text-center text-white px-4 pt-[88px]">
          <div className="animate-fade-up max-w-4xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl lg:text-[68px] font-bold leading-[1.05]">
              Distribution, <span className="text-accent">Redefined</span><br />
              for a connected India.
            </h1>
            <p className="text-base md:text-lg text-white/85 mt-6 max-w-2xl mx-auto leading-relaxed">
              India's trusted value-added distributor — connecting 2,000+ channel partners with 25+ global technology leaders,
              with reach extending across Sri Lanka, Bangladesh, Nepal &amp; the Maldives.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Link
                to="/brands"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-gradient-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-elevated"
              >
                Explore Brands <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-white/10 border border-white/40 text-white font-semibold text-sm hover:bg-white/20 transition-colors backdrop-blur"
              >
                Browse Products
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 mt-12 pt-8 border-t border-white/20 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-xl md:text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/60 mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Pillars */}
      <section className="container-wide py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionHeading
            eyebrow="Solutions Portfolio"
            title="Five pillars. One trusted partner."
            description="From copper and fiber to AI-powered surveillance and unmanned aerial systems — a single point of accountability for your infrastructure stack."
          />
          <Link to="/products" className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:text-accent transition-colors flex-shrink-0">
            View all categories <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group relative overflow-hidden rounded-lg bg-white border border-border hover:border-accent hover:shadow-card transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={cat.image} alt={cat.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-3">
                <h3 className="font-display text-sm font-bold text-primary group-hover:text-accent transition-colors leading-snug">{cat.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">{cat.short}</p>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary mt-2 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brands marquee */}
      <section className="bg-surface py-20 overflow-hidden">
        <div className="container-wide">
          <SectionHeading
            align="center"
            eyebrow="Trusted Brand Partners"
            title="25+ global OEMs. One distributor."
            description="Authorised distributor for the world's most respected technology brands across networking, safety, security, productivity and instrumentation."
          />
        </div>
        <div className="relative mt-14">
          <div className="flex gap-6 marquee" style={{ width: "max-content" }}>
            {[...featuredBrands, ...featuredBrands].map((b, i) => (
              <div key={i} className="w-40 h-24 flex-shrink-0 bg-white border border-border rounded-lg flex items-center justify-center p-4">
                <img src={b.logo} alt={b.name} className="max-h-12 max-w-full object-contain opacity-70" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="/brands" className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-border bg-white text-sm font-semibold text-primary hover:border-accent transition-colors">
            View all brands <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Industries — cards with image background, dark text overlay */}
      <section className="container-wide py-20">
        <SectionHeading
          eyebrow="Industry Focus"
          title="Purpose-built solutions for every vertical."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              to="/industries"
              className="group relative overflow-hidden rounded-xl min-h-[140px] flex flex-col justify-end hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-card"
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
              <div className="relative p-4">
                <div className="font-display font-bold text-white text-sm md:text-[15px] leading-snug drop-shadow">{ind.name}</div>
                <div className="text-[11px] text-white/80 mt-1 leading-relaxed">{ind.desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Strengths — straight single column, centred */}
      <section className="bg-surface py-16">
        <div className="container-wide">
          <SectionHeading
            align="center"
            eyebrow="Why PV Lumens"
            title="Six reasons partners choose us — again and again."
          />
          <div className="flex flex-col gap-3 mt-10 max-w-2xl mx-auto">
            {strengths.map((s, i) => {
              const Icon = strengthIcons[i % strengthIcons.length];
              return (
                <div
                  key={s.title}
                  className="flex items-start gap-4 p-5 rounded-xl border border-border bg-white hover:shadow-card hover:border-accent transition-all"
                >
                  <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center text-primary flex-shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="font-display font-bold text-primary text-sm">{s.title}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="bg-white py-24">
        <div className="container-wide">
          <div className="flex justify-between items-end mb-12 gap-6 flex-wrap">
            <SectionHeading eyebrow="From The Blog" title="Ideas, product news & field notes." />
            <Link to="/blog" className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:text-accent">
              All articles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.slice(0, 3).map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-white rounded-xl border border-border overflow-hidden hover:border-accent transition-colors">
                <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">{p.category}</div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-muted-foreground">{p.date}</div>
                  <h3 className="font-display font-bold text-primary text-lg mt-2 group-hover:text-accent transition-colors leading-snug">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="py-16">
        <NewsletterSignup />
      </div>
    </>
  );
}
