import SectionHeading from "@/components/SectionHeading";
import NewsletterSignup from "@/components/NewsletterSignup";
import { newsletters } from "@/data/site";
import { ArrowRight } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Newsletter() {
  useDocumentTitle("Newsletter", "Subscribe to PVL Insider — quarterly insights, product launches and case studies from PV Lumens India.");
  return (
    <>
      <section className="bg-surface py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="PVL Insider"
            title="Quarterly. Focused. Never spam."
            description="Product launches, roadshow schedules, case studies and the odd industry perspective — sent once a quarter to a curated list of partners and specifiers."
          />
        </div>
      </section>

      <div className="py-12">
        <NewsletterSignup />
      </div>

      <section className="container-wide py-16">
        <h2 className="font-display text-2xl font-bold text-primary mb-8">Past editions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {newsletters.map((n) => (
            <div key={n.slug} className="p-6 bg-white border border-border rounded-xl hover:border-accent transition-colors">
              <div className="text-xs text-muted-foreground">{n.date}</div>
              <h3 className="font-display font-bold text-primary text-lg mt-2">{n.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{n.summary}</p>
              <a href="#" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary mt-4 hover:text-accent">
                Read edition <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
