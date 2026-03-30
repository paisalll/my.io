const services = [
  {
    icon: "🏢",
    title: "Sistem Enterprise",
    desc: "Dashboard, sistem manajemen, dan aplikasi internal untuk perusahaan skala besar.",
  },
  {
    icon: "🛒",
    title: "Platform E-Commerce",
    desc: "Toko online yang cepat, cantik, dan mengoptimalkan konversi penjualan.",
  },
  {
    icon: "⚡",
    title: "Optimasi Sistem",
    desc: "Refactor, migrasi database, dan peningkatan performa sistem yang sudah ada.",
  },
  {
    icon: "📱",
    title: "Aplikasi Web Modern",
    desc: "Web app full-featured dengan UX yang intuitif dan arsitektur yang scalable.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-6 relative">
      {/* Subtle divider */}
      <div className="section-divider mb-28" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-3 font-outfit">
              About
            </p>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-white mb-6 leading-tight">
              Developer yang{" "}
              <span className="gradient-text">Bicara Bisnis,</span>
              <br />
              Bukan Cuma Kode.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed font-outfit">
              <p>
                Halo! Saya{" "}
                <strong className="text-white">Muhammad Faizal Triasa</strong>,
                Full-Stack Developer dengan 4 tahun pengalaman membangun
                aplikasi web untuk perusahaan enterprise hingga startup.
              </p>
              <p>
                Saya memahami bahwa teknologi bukan tujuan akhir — melainkan{" "}
                <strong className="text-slate-200">
                  alat untuk menyelesaikan masalah bisnis nyata
                </strong>
                . Itulah mengapa setiap project dimulai dari pemahaman mendalam
                tentang kebutuhan bisnis klien.
              </p>
              <p>
                Lulusan{" "}
                <strong className="text-slate-200">Alterra Academy</strong>,
                saya terlatih dengan standar industri yang ketat — 60-70
                jam/minggu selama bootcamp intensif. Pengalaman nyata saya
                meliputi sistem enterprise skala nasional, e-commerce, hingga
                optimasi database perusahaan BUMN.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Lokasi", value: "Jakarta, Indonesia" },
                { label: "Ketersediaan", value: "Buka untuk project" },
                { label: "Bahasa", value: "Indonesia, English" },
                { label: "Response time", value: "< 24 jam" },
              ].map((fact) => (
                <div key={fact.label} className="flex flex-col">
                  <span className="text-xs text-slate-600 uppercase tracking-wider mb-1 font-outfit">
                    {fact.label}
                  </span>
                  <span className="text-sm text-slate-200 font-medium font-outfit">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/paisalll"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors font-outfit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:faizaltriasaa@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors font-outfit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* Right: Services */}
          <div>
            <h3 className="font-sora font-semibold text-xl text-white mb-6">
              Yang Bisa Saya Bantu
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="glass-card rounded-xl p-5 hover:border-white/10 transition-all duration-200 group"
                >
                  <div className="text-2xl mb-3">{service.icon}</div>
                  <h4 className="font-sora font-semibold text-white text-sm mb-2">
                    {service.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-outfit">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Work process */}
            <div className="mt-6 glass-card rounded-xl p-5">
              <h4 className="font-sora font-semibold text-white text-sm mb-4">
                Cara Kerja Saya
              </h4>
              <div className="space-y-3">
                {[
                  { step: "01", label: "Pahami kebutuhan bisnis" },
                  { step: "02", label: "Rancang solusi & estimasi" },
                  { step: "03", label: "Bangun dengan standar tinggi" },
                  { step: "04", label: "Deliver & support pasca launch" },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3">
                    <span className="text-xs font-bold text-blue-500 w-6 font-outfit">
                      {item.step}
                    </span>
                    <div className="w-px h-4 bg-slate-700" />
                    <span className="text-sm text-slate-400 font-outfit">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
