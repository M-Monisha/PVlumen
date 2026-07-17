import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/site";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  useDocumentTitle(post?.title || "Article", post?.excerpt);
  if (!post) return <Navigate to="/blog" replace />;

  return (
    <article className="container-narrow py-16">
      <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-8">
        <ArrowLeft className="w-4 h-4" /> All articles
      </Link>
      <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent">{post.category}</div>
      <h1 className="font-display text-4xl md:text-5xl font-bold text-primary text-balance mt-4 leading-[1.1]">{post.title}</h1>
      <div className="text-sm text-muted-foreground mt-5">{post.date} · {post.author}</div>
      <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl my-10" />
      <div className="prose prose-lg max-w-none text-foreground/85 leading-relaxed space-y-5">
        <p className="text-xl text-foreground/80 leading-relaxed">{post.excerpt}</p>
        <p>
          Distribution in India is entering a new era. Channel partners no longer buy on price alone — they buy on availability, pre-sales depth, and the confidence that comes from a distributor who understands the technology as well as the OEM does.
        </p>
        <p>
          At PV Lumens, we've spent the last decade building exactly that: certified pre-sales engineers in every region, localised stock in 20 branches, and a technology stack (SAP HANA, integrated CRM) that keeps every deal traceable end-to-end.
        </p>
        <h2 className="font-display text-2xl font-bold text-primary pt-4">What this means for our partners</h2>
        <p>
          Faster BOMs. Cleaner logistics. Better post-sales support. And a growing catalog of brands that lets a single distributor cover the full stack of a modern infrastructure project — from cabling to cameras to compute.
        </p>
        <p className="text-sm text-muted-foreground italic">
          This is a seeded sample article. Real editorial content will be published by the PV Lumens team.
        </p>
      </div>
    </article>
  );
}
