import SectionHeading from "@/components/SectionHeading";
import { strengths, branches, awards, stats, company } from "@/data/site";
import { Award } from "lucide-react";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function About() {
  useDocumentTitle("About Us", "PV Lumens India — founded in 2012, backed by 35+ years of promoter distribution expertise across networking, safety, security and instrumentation.");
  return (
    <>
      <section className="bg-navy-deep text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 20% 30%, hsl(199 80% 51% / 0.4), transparent 60%)" }} />
        <div className="container-wide relative">
          <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-4">About PV Lumens</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-balance max-w-4xl leading-[1.05]">
            A nation-wide distribution enterprise, built for a connected India.
          </h1>
          <p className="text-lg text-white/70 mt-6 max-w-3xl leading-relaxed">
            Founded in 2012 by promoters with 35+ years of distribution heritage, PV Lumens has grown into a pan-India value added distributor for the world's most respected technology brands.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="container-wide py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading eyebrow="Our Story" title="Distribution with purpose, at scale." />
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-[15px]">
              <p>
                PV Lumens India Pvt Ltd was founded in 2012 with a single conviction: that India's rapidly digitising economy deserved a distribution partner that could do more than move boxes. Backed by promoters carrying over three decades of technology distribution experience, we set out to build an enterprise that would connect the world's best OEMs with India's growing network of channel partners — with depth, accountability and speed.
              </p>
              <p>
                Today, PV Lumens is one of India's foremost value added distributors, operating from 20 branch offices that collectively cover 300+ cities across every region of the country. Our portfolio spans five solution pillars — Network Infrastructure, Safety &amp; Security, Business Productivity, Test &amp; Measurement, and Drone &amp; UAV Systems — representing 25+ authorised global brands. Every branch operates on a unified SAP HANA platform, giving our 120+ team members and 2,000+ channel partners real-time visibility into inventory, logistics and commercial schemes.
              </p>
              <p>
                Beyond geography and scale, what truly defines PV Lumens is our commitment to value addition. We invest heavily in pre-sales engineering, technical certification programmes, joint go-to-market initiatives and partner enablement — because we believe that the best distribution is indistinguishable from a trusted advisor. Awards from Zebra, Honeywell, Axis Communications, Vertiv, Megger and BICSI are a reflection of this philosophy, recognising not just revenue performance but the quality of our ecosystem and the outcomes we help create for end-customers across data centres, enterprises, airports, factories and beyond.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-4">
            {stats.map((s) => (
              <div key={s.label} className="p-6 rounded-xl border border-border bg-white text-center">
                <div className="font-display text-4xl font-bold text-primary">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-wide">
          <SectionHeading eyebrow="Leadership" title="Steered by seasoned distribution veterans." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {[
              { name: "Chaman Pansari", role: "Director" },
              { name: "Varun Bajaj", role: "Director" },
            ].map((p) => (
              <div key={p.name} className="p-8 bg-white border border-border rounded-xl flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-gradient-accent flex items-center justify-center text-white font-display font-bold text-2xl">
                  {p.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-primary">{p.name}</div>
                  <div className="text-sm text-muted-foreground">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-24">
        <SectionHeading eyebrow="Core Strengths" title="Six pillars that define the PVL advantage." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {strengths.map((s) => (
            <div key={s.title} className="p-7 rounded-xl border border-border">
              <h3 className="font-display font-bold text-primary text-lg">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="container-wide">
          <SectionHeading eyebrow="Pan-India Presence" title="20 branches. Four regions. 300+ cities." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            {Object.entries(branches).map(([region, cities]) => (
              <div key={region} className="p-6 bg-white rounded-xl border border-border">
                <div className="text-xs uppercase tracking-wider text-accent font-semibold">{region} Region</div>
                <ul className="mt-4 space-y-2 text-sm text-primary">
                  {cities.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-24">
        <SectionHeading eyebrow="Awards & Recognition" title="Recognised by the brands we distribute." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {awards.map((a) => (
            <div key={a.brand + a.year} className="p-6 rounded-xl border border-border bg-white flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-accent font-semibold">{a.brand}</div>
                <div className="font-display font-semibold text-primary mt-1">{a.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{a.year}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
