const contactMethods = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: "Email",
    value: "faizaltriasaa@gmail.com",
    href: "mailto:faizaltriasaa@gmail.com",
    cta: "Kirim Email",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14 19.79 19.79 0 0 1 1.61 5.48 2 2 0 0 1 3.58 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: "WhatsApp",
    value: "+62 896-4680-5434",
    href: "https://wa.me/6289646805434?text=Halo%20Faizal%2C%20saya%20tertarik%20untuk%20diskusi%20project.",
    cta: "Chat WhatsApp",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: "LinkedIn",
    value: "Muhammad Faizal Triasa",
    href: "https://linkedin.com/in/faizaltriasa",
    cta: "Connect LinkedIn",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="section-divider mb-28" />

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-4 font-outfit">
          Contact
        </p>
        <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mb-6">
          Punya Project di Kepala?
          <br />
          <span className="gradient-text">Mari Wujudkan Bersama.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed font-outfit">
          Saya membuka diskusi gratis untuk project baru. Ceritakan kebutuhan
          bisnis Anda dan saya akan berikan solusi terbaik.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card rounded-xl p-6 hover:border-blue-500/20 hover:bg-blue-500/5 transition-all duration-200 group flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors">
                {method.icon}
              </div>
              <span className="text-xs text-slate-600 uppercase tracking-wider mb-1 font-outfit">
                {method.label}
              </span>
              <span className="text-sm text-slate-300 font-medium mb-3 font-outfit">
                {method.value}
              </span>
              <span className="text-xs text-blue-400 group-hover:text-blue-300 transition-colors font-outfit">
                {method.cta} →
              </span>
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href="https://wa.me/6289646805434?text=Halo%20Faizal%2C%20saya%20tertarik%20untuk%20diskusi%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-0.5 text-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14 19.79 19.79 0 0 1 1.61 5.48 2 2 0 0 1 3.58 3h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          Let&apos;s Work Together
        </a>

        <p className="text-xs text-slate-700 mt-6 font-outfit">
          Saya biasanya merespons dalam 24 jam.
        </p>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-700 font-outfit">
          © 2025 Muhammad Faizal Triasa. Built with Next.js & Tailwind.
        </p>
        <div className="flex gap-6">
          {["GitHub", "LinkedIn", "WhatsApp"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm text-slate-700 hover:text-slate-400 transition-colors font-outfit"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
