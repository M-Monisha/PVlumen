import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { branches, company } from "@/data/site";
import { useDocumentTitle } from "@/hooks/use-document-title";

export default function Contact() {
  useDocumentTitle("Contact", "Contact PV Lumens India — head office in Mumbai, 20 branches across India. Talk to our sales team.");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "General enquiry", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent", { description: "Our team will respond within one business day." });
    setForm({ name: "", company: "", email: "", phone: "", interest: "General enquiry", message: "" });
  };

  return (
    <>
      <section className="bg-surface py-20">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's talk about your next project."
            description="Whether you need a BOM, a demo, a roadshow, or just want to chat about a brand — we're here."
          />
        </div>
      </section>

      <section className="container-wide py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-6">Head Office</h2>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><span className="leading-relaxed">{company.address}</span></li>
              <li className="flex gap-3"><Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><a href={`tel:${company.phone}`} className="hover:text-accent">{company.phone}</a></li>
              <li className="flex gap-3"><Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" /><a href={`mailto:${company.email}`} className="hover:text-accent">{company.email}</a></li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-primary mt-12 mb-6">Regional Offices</h2>
            <div className="grid grid-cols-2 gap-5 text-sm">
              {Object.entries(branches).map(([region, cities]) => (
                <div key={region}>
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">{region}</div>
                  <ul className="space-y-1 text-primary">
                    {cities.map((c) => <li key={c}>{c}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="bg-white border border-border rounded-xl p-8 shadow-card">
            <h2 className="font-display text-xl font-bold text-primary mb-6">Send us a message</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Company" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
              <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <label className="block mt-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Interest</span>
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="mt-1.5 w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option>General enquiry</option>
                <option>Network Infrastructure</option>
                <option>Safety & Security</option>
                <option>Business Productivity</option>
                <option>Test & Measurement</option>
                <option>Drones & UAS</option>
                <option>Partner with PV Lumens</option>
              </select>
            </label>
            <label className="block mt-4">
              <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Message</span>
              <textarea
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="mt-1.5 w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </label>
            <button type="submit" className="w-full md:w-auto mt-6 px-8 py-3 rounded-md bg-gradient-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}{required && " *"}</span>
      <input
        required={required}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full border border-border rounded-md px-3 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </label>
  );
}
