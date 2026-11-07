"use client";
import { useState } from "react";
import { Mail, MapPin, MessageSquare, Send, CheckCircle2, Twitter, Github } from "lucide-react";

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-gray-700 bg-white dark:bg-gray-950 text-stone-900 dark:text-gray-100 placeholder:text-stone-400 dark:placeholder:text-gray-500 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`[AgriAgent] ${form.subject || "Message"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:hello@agriagent.app?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div className="bg-[#FDFBF6] dark:bg-gray-950">

      {/* ───── Hero ───── */}
      <section className="border-b border-stone-200 dark:border-gray-800 bg-gradient-to-br from-emerald-50 via-[#FDFBF6] to-amber-50 dark:from-emerald-950/40 dark:via-gray-950 dark:to-amber-950/20">
        <div className="max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 text-xs font-semibold mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            Get in touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-900 dark:text-gray-100">
            We read every message
          </h1>
          <p className="mt-5 text-lg text-stone-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Whether it's a bug, a feature idea, or just feedback — tell us what you think.
          </p>
        </div>
      </section>

      {/* ───── Grid: form + sidebar ───── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">

          {/* Form */}
          <div className="md:col-span-3">
            <div className="rounded-2xl border border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/40 mb-5">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-xl font-bold mb-2 text-stone-900 dark:text-gray-100">
                    Message opened
                  </h2>
                  <p className="text-stone-600 dark:text-gray-400 text-sm mb-6">
                    Your email app should open with the message pre-filled. If it didn't, write to us directly:
                  </p>
                  <a href="mailto:hello@agriagent.app" className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline">
                    hello@agriagent.app
                  </a>
                  <div className="mt-8">
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="text-sm text-stone-500 dark:text-gray-400 hover:text-stone-900 dark:hover:text-gray-100"
                    >
                      ← Write another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-xl font-bold mb-1 text-stone-900 dark:text-gray-100">
                    Send a message
                  </h2>
                  <p className="text-sm text-stone-500 dark:text-gray-400 mb-4">
                    We usually reply within 2 business days.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 dark:text-gray-300 mb-1.5">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange("name")}
                        placeholder="Ramesh Kumar"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 dark:text-gray-300 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange("email")}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-gray-300 mb-1.5">
                      Subject
                    </label>
                    <select value={form.subject} onChange={handleChange("subject")} className={inputClass}>
                      <option value="">Choose a topic…</option>
                      <option value="General question">General question</option>
                      <option value="Report a bug">Report a bug</option>
                      <option value="Feature request">Feature request</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Press">Press</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 dark:text-gray-300 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="Tell us what's on your mind…"
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send message
                  </button>
                  <p className="text-xs text-stone-500 dark:text-gray-500 text-center">
                    By sending, you agree to our simple rule: be kind.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-2 space-y-4">
            <a
              href="mailto:hello@agriagent.app"
              className="block rounded-2xl border border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 hover:border-emerald-300 dark:hover:border-emerald-800 transition-colors"
            >
              <Mail className="w-6 h-6 text-emerald-600 mb-3" />
              <h3 className="font-bold mb-1 text-stone-900 dark:text-gray-100">Email</h3>
              <p className="text-sm text-stone-600 dark:text-gray-400">hello@agriagent.app</p>
              <p className="text-xs text-stone-500 dark:text-gray-500 mt-1">Best for detailed questions</p>
            </a>

            <div className="rounded-2xl border border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
              <MapPin className="w-6 h-6 text-emerald-600 mb-3" />
              <h3 className="font-bold mb-1 text-stone-900 dark:text-gray-100">Based in</h3>
              <p className="text-sm text-stone-600 dark:text-gray-400">Hyderabad, India</p>
              <p className="text-xs text-stone-500 dark:text-gray-500 mt-1">Working across AP & Telangana</p>
            </div>

            <div className="rounded-2xl border border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
              <h3 className="font-bold mb-3 text-stone-900 dark:text-gray-100">Also on</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="flex items-center gap-2 text-stone-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                  <Twitter className="w-4 h-4" /> @agriagent
                </a>
                <a href="#" className="flex items-center gap-2 text-stone-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                  <Github className="w-4 h-4" /> github.com/agriagent
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ───── FAQ ───── */}
      <section className="border-t border-stone-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-black tracking-tight mb-8 text-center text-stone-900 dark:text-gray-100">
            Common questions
          </h2>
          <div className="space-y-3">
            {[
              { q: "Is AgriAgent free?", a: "Yes — the app is free to download and use. The marketplace takes no commission from buyers." },
              { q: "Where is it available?", a: "Currently across Andhra Pradesh and Telangana. We are expanding to more states." },
              { q: "Can I list my products?", a: "Yes. Once you sign up as a seller, you can list produce, equipment, or fertilizer shops." },
              { q: "Is my data safe?", a: "We never share your phone number or location with other users. All profiles are verified." },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-stone-200 dark:border-gray-800 bg-[#FDFBF6] dark:bg-gray-950 open:bg-white dark:open:bg-gray-900 transition-colors">
                <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-sm text-stone-900 dark:text-gray-100 flex items-center justify-between">
                  {q}
                  <span className="text-emerald-600 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-4 text-sm text-stone-600 dark:text-gray-400 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
