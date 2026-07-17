import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed!", { description: "We'll keep you posted." });
    setEmail("");
  };

  return (
    <section className="container-wide">
      <div className="relative overflow-hidden bg-navy-deep text-white rounded-2xl p-10 md:p-16">
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, hsl(199 80% 51% / 0.4), transparent 60%)" }} />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] font-semibold text-accent mb-3">Stay In The Loop</div>
            <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
              Quarterly insights from India's leading VAD.
            </h3>
            <p className="text-white/70 mt-4 max-w-md">
              Product launches, roadshow schedules, case studies, and industry perspectives — delivered once a quarter, never spammy.
            </p>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 bg-white/10 border border-white/20 rounded-md px-4 py-3">
              <Mail className="w-4 h-4 text-white/70" />
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent flex-1 text-sm placeholder:text-white/50 focus:outline-none text-white"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-md bg-gradient-accent text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
