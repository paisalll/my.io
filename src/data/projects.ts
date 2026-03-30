export type ProjectCategory = "enterprise" | "ecommerce" | "education" | "finance" | "social";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  client?: string;
  problem: string;
  solution: string;
  impact: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  color: string; // tailwind gradient
}

export const projects: Project[] = [
  {
    id: "adana-mega-panel",
    title: "Adana Mega Panel",
    subtitle: "Business Control Center",
    category: "enterprise",
    problem:
      "Manajemen perusahaan kesulitan memantau kinerja bisnis secara real-time karena data tersebar di berbagai sistem yang terpisah, memperlambat pengambilan keputusan strategis.",
    solution:
      "Membangun dashboard terpusat yang menampilkan semua data operasional perusahaan secara langsung (real-time) — lengkap dengan laporan otomatis, grafik interaktif, dan sistem keamanan akses berlapis.",
    impact: [
      "Waktu pembuatan laporan berkurang drastis",
      "Data rahasia perusahaan lebih aman dengan akses berlapis",
      "Pengambilan keputusan lebih cepat berbasis data",
    ],
    tags: ["React.js", "Tailwind CSS", "Node.js"],
    demoUrl: 'https://adanamegapanel.com/',
    featured: true,
    year: "2024",
    color: "from-blue-600 to-violet-600",
  },
  {
    id: "sislatkernas",
    title: "Sislatkernas",
    subtitle: "National Job Training Platform",
    category: "enterprise",
    client: "Kementerian Tenaga Kerja",
    problem:
      "Platform pelatihan kerja nasional mengalami masalah data ganda, performa lambat, dan komunikasi antar instansi yang tidak lancar — mengancam integritas data ribuan peserta.",
    solution:
      "Membangun ulang sistem fullstack dengan sistem validasi data otomatis, deduplikasi cerdas, dan sinkronisasi real-time antar instansi di seluruh Indonesia.",
    impact: [
      "Zero data duplikasi untuk ribuan pendaftar",
      "Komunikasi data antar instansi berjalan mulus",
      "Performa aplikasi meningkat signifikan",
    ],
    tags: ["React.js", "Laravel", "MySQL"],
    featured: true,
    year: "2023",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "interest-wika",
    title: "Interest",
    subtitle: "Warehouse & Logistics Management",
    category: "enterprise",
    client: "PT. WIKA GEDUNG",
    problem:
      "Pencatatan barang masuk dan keluar di gudang dilakukan secara manual, menyebabkan kesalahan data yang sering terjadi dan proses pelacakan aset yang lambat dan tidak akurat.",
    solution:
      "Membangun aplikasi pencatatan logistik digital dengan formulir cerdas, validasi otomatis, dan sistem global state management yang memastikan setiap pergerakan barang tercatat dengan presisi.",
    impact: [
      "Eliminasi kesalahan pencatatan manual (human error)",
      "Pelacakan aset real-time dan akurat",
      "Aset fisik perusahaan lebih terlindungi",
    ],
    tags: ["React.js", "Redux", "Axios", "React Hook Form"],
    featured: true,
    year: "2023",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: "ptpn-vi",
    title: "PTPN VI",
    subtitle: "Enterprise Data System Optimization",
    category: "enterprise",
    client: "PTPN VI (BUMN Perkebunan)",
    problem:
      "Sistem pengolahan data milik BUMN perkebunan berjalan lambat dan tidak efisien, menyebabkan laporan bisnis yang seharusnya cepat menjadi bottleneck dalam operasional perusahaan.",
    solution:
      "Melakukan migrasi dan optimasi menyeluruh pada SQL views, materialized views, dan database queries. Mengintegrasikan logika bisnis ke dalam framework YII dengan arsitektur yang lebih maintainable.",
    impact: [
      "Kecepatan pembuatan laporan meningkat drastis",
      "Performa database lebih optimal dan stabil",
      "Kode lebih mudah dikelola jangka panjang",
    ],
    tags: ["SQL", "YII Framework", "Oracle", "MSSQL"],
    featured: false,
    year: "2022",
    color: "from-slate-600 to-gray-700",
  },
  {
    id: "sneakersflash",
    title: "SneakersFlash",
    subtitle: "Premium Sneaker E-Commerce",
    category: "ecommerce",
    problem:
      "Toko sneakers online kehilangan pembeli karena tampilan kurang menarik, loading lambat saat menampilkan banyak produk, dan pengalaman belanja yang tidak mulus.",
    solution:
      "Membangun platform e-commerce premium dengan desain modern yang memanjakan mata, loading cepat meski ratusan gambar HD, dan alur belanja yang sangat mudah.",
    impact: [
      "Tingkat abandonment cart berkurang",
      "Pengalaman belanja lebih premium dan menyenangkan",
      "Performa tinggi dengan banyak produk",
    ],
    tags: ["Next.js", "Tailwind CSS", "React"],
    demoUrl: "https://sneakersflash.com/",
    featured: true,
    year: "2023",
    color: "from-pink-500 to-rose-600",
  },
  {
    id: "thundersports",
    title: "ThunderSports",
    subtitle: "Sports Equipment Store",
    category: "ecommerce",
    problem:
      "Platform penjualan perlengkapan olahraga tidak memiliki sistem pelacakan pesanan yang transparan, membuat pelanggan tidak percaya dan sering menghubungi customer service.",
    solution:
      "Membangun platform dengan sistem tracking status pesanan real-time, kategori produk yang terorganisir cerdas, dan UI yang memudahkan pencarian produk impian.",
    impact: [
      "Kepercayaan pelanggan meningkat dengan transparansi pesanan",
      "Pertanyaan ke customer service berkurang",
      "Pengalaman belanja lebih menyenangkan",
    ],
    tags: ["React.js", "Express.js", "Node.js"],
    demoUrl: "https://thundersports.id/",
    featured: false,
    year: "2023",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "lapak-umkm",
    title: "LapakUMKM",
    subtitle: "Local Business Marketplace",
    category: "social",
    problem:
      "Produk UMKM lokal Indonesia sulit menjangkau pasar yang lebih luas karena keterbatasan platform digital yang accessible, sementara calon pembeli kesulitan menemukan produk berkualitas lokal.",
    solution:
      "Membangun marketplace digital dengan login instan via Google (tanpa ribet daftar), tampilan premium yang membuat produk lokal tampil eksklusif, dan sistem yang mudah diakses siapapun.",
    impact: [
      "UMKM lokal mendapat pasar lebih luas",
      "Pembeli baru bisa bergabung dalam 1 klik",
      "Produk lokal tampil sekelas produk internasional",
    ],
    tags: ["React TypeScript", "Radix UI", "React OAuth"],
    featured: true,
    year: "2022",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: "educatix",
    title: "Educatix",
    subtitle: "Interactive Exam Simulation Platform",
    category: "education",
    problem:
      "Siswa tidak memiliki platform yang bisa mensimulasikan suasana ujian nyata, sehingga kurang siap menghadapi tekanan waktu dan kondisi ujian sesungguhnya.",
    solution:
      "Membangun platform tryout interaktif dengan timer akurat, penilaian instan, pembahasan soal lengkap, dan sistem yang mampu melayani ribuan siswa bersamaan tanpa gangguan.",
    impact: [
      "Siswa lebih siap menghadapi ujian sesungguhnya",
      "Transparansi nilai dan evaluasi real-time",
      "Sistem stabil untuk ribuan pengguna bersamaan",
    ],
    tags: ["React", "TailwindCSS"],
    githubUrl: "#",
    featured: false,
    year: "2022",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "al-hambra-wakaf",
    title: "Al-Hambra Wakaf",
    subtitle: "Digital Zakat & Waqf Platform",
    category: "finance",
    problem:
      "Masyarakat yang ingin berzakat dan berwakaf menghadapi kesulitan akses, ketidakpercayaan terhadap transparansi pengelolaan dana, dan proses yang rumit.",
    solution:
      "Membangun aplikasi keuangan islami dengan desain yang bersih dan terpercaya, aliran dana yang diawasi ketat secara digital, dan proses donasi semudah beberapa klik.",
    impact: [
      "Kepercayaan donatur meningkat dengan transparansi penuh",
      "Donasi bisa dilakukan kapan saja dan di mana saja",
      "Pengelolaan dana lebih terorganisir",
    ],
    tags: ["React TypeScript", "Ant Design", "Redux"],
    githubUrl: "#",
    featured: false,
    year: "2022",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: "airbnb-clone",
    title: "AirBnb Clone",
    subtitle: "Smart Accommodation Finder",
    category: "social",
    problem:
      "Mencari penginapan yang tepat sering membuang waktu karena platform yang ada tidak memberikan gambaran lokasi yang jelas dan akurat.",
    solution:
      "Membangun platform pencarian penginapan dengan integrasi peta digital interaktif — pengguna bisa langsung melihat lokasi akomodasi secara presisi sebelum memesan.",
    impact: [
      "Proses pencarian penginapan jauh lebih efisien",
      "Tidak ada kejutan lokasi saat check-in",
      "Pengalaman pencarian yang lebih menyenangkan",
    ],
    tags: ["React TypeScript", "Geocoding API", "DaisyUI"],
    githubUrl: "#",
    featured: false,
    year: "2022",
    color: "from-red-500 to-orange-600",
  },
  {
    id: "alta-dashboard",
    title: "Alta Dashboard",
    subtitle: "Digital Classroom Management",
    category: "education",
    problem:
      "Sekolah dan institusi pendidikan kesulitan mengelola tugas, pengumpulan, dan komunikasi antara guru dan siswa dalam satu platform yang terintegrasi.",
    solution:
      "Membangun ruang kelas digital lengkap dengan manajemen tugas otomatis, sistem pengumpulan yang mudah, dan forum diskusi interaktif yang menghidupkan proses belajar dari rumah.",
    impact: [
      "Partisipasi siswa meningkat secara signifikan",
      "Beban administratif guru berkurang",
      "Kolaborasi guru-siswa lebih efektif",
    ],
    tags: ["React TypeScript", "Daisy UI", "Redux"],
    githubUrl: "#",
    featured: false,
    year: "2022",
    color: "from-indigo-500 to-blue-600",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
