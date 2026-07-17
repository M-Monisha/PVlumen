import SectionHeading from "@/components/SectionHeading";
import { industries } from "@/data/site";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Factory, ShieldCheck, Truck, Zap, Store, Plane, Wifi } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

const icons: Record<string, any> = {
  "data-centre": Wifi,
  enterprise: Building2,
  transport: Truck,
  retail: Store,
  manufacturing: Factory,
  power: Zap,
  defense: ShieldCheck,
  "public-infra": Plane,
};

export default function Industries() {
  useDocumentTitle("Industries", "Vertical-specific solutions from PV Lumens for data centres, enterprise, retail, manufacturing, power, defence and public infrastructure.");
  return (
    <>
      <section className="bg-surface py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Industry Focus"
            title="Vertical expertise, backed by 25+ global brands."
            description="Wherever mission-critical infrastructure meets everyday operations — retail floors, factory shop-floors, defence perimeters, hyperscale halls — PV Lumens brings the right stack."
          />
        </div>
      </section>

      <section className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((i) => {
            const Icon = icons[i.slug] || Building2;
            return (
              <div key={i.slug} className="p-8 rounded-xl bg-white border border-border hover:border-accent hover:shadow-card transition-all">
                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center text-white mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary">{i.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{i.desc}</p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mt-5 hover:text-accent transition-colors">
                  Talk to a specialist <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
