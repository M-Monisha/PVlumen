import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { posts } from "@/data/site";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Blog() {
  useDocumentTitle("Blog", "Industry insights, product spotlights, case studies and news from PV Lumens India.");
  return (
    <>
      <section className="bg-navy-deep text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, hsl(199 80% 51% / 0.4), transparent 60%)" }} />
        <div className="container-wide relative">
          <SectionHeading eyebrow="Blog" title="Ideas, product spotlights and field notes." description="From Wi-Fi 7 planning guides to warehouse rollouts, our team shares what we learn on the ground." light />
        </div>
      </section>
      <section className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-white rounded-xl border border-border overflow-hidden hover:border-accent transition-colors">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">{p.category}</div>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground">{p.date} · {p.author}</div>
                <h3 className="font-display font-bold text-primary text-lg mt-2 group-hover:text-accent transition-colors leading-snug">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
