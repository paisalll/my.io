export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: "fulltime" | "freelance" | "internship";
  highlights: string[];
  tech: string[];
}

export interface TechCategory {
  label: string;
  icon: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: "sinergi",
    company: "PT. Sinergi Informatika Semen Indonesia",
    role: "Full-Stack Developer",
    period: "April 2022 – April 2025",
    type: "fulltime",
    highlights: [
      "Membangun & memelihara aplikasi procurement untuk WIKA GEDUNG (delivery warehouse module)",
      "Fullstack development untuk Sislatkernas — platform pelatihan kerja nasional",
      "Migrasi & optimasi SQL views dan materialized views untuk sistem PTPN VI",
      "Membangun RESTful API dengan Node.js dan Express untuk berbagai modul",
      "Mentoring junior developer dan code review rutin",
      "Implementasi autentikasi, role-based access control, dan data validation",
    ],
    tech: ["React.js", "Node.js", "Laravel", "YII", "MySQL", "PostgreSQL"],
  },
  {
    id: "len-telecom",
    company: "PT. LEN Telekomunikasi Indonesia",
    role: "Support Admin – Network Operation Center",
    period: "August 2021 – September 2022",
    type: "fulltime",
    highlights: [
      "Membangun user interface website perusahaan dengan Laravel, HTML & CSS",
      "Monitoring jaringan Palapa Ring Tengah",
    ],
    tech: ["Laravel", "HTML", "CSS"],
  },
];

export const techCategories: TechCategory[] = [
  {
    label: "Frontend",
    icon: "🎨",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  },
  {
    label: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Laravel", "YII Framework", "REST API"],
  },
  {
    label: "Database",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "Oracle", "MSSQL", "SQL Views"],
  },
  {
    label: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Figma", "CI/CD", "Agile / Scrum"],
  },
  {
    label: "Mobile",
    icon: "📱",
    skills: ["Flutter", "Dart"],
  },
  {
    label: "Languages",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "PHP", "Java", "Dart"],
  },
];

export const stats = [
  { label: "Tahun Pengalaman", value: "4+" },
  { label: "Project Selesai", value: "11+" },
  { label: "Client Puas", value: "100%" },
  { label: "Tech Stack", value: "20+" },
];

export const testimonials = [
  {
    id: "1",
    name: "Andi Kurniawan",
    role: "Project Manager",
    company: "PT. Sinergi Informatika",
    avatar: "AK",
    text: "Faizal adalah developer yang sangat solid — kode-nya bersih, delivery tepat waktu, dan selalu proaktif mengusulkan solusi yang lebih baik. Sangat merekomendasikan untuk project skala enterprise.",
  },
  {
    id: "2",
    name: "Dewi Rahmawati",
    role: "Product Owner",
    company: "Sislatkernas",
    avatar: "DR",
    text: "Kolaborasi dengan Faizal sangat menyenangkan. Beliau memahami kebutuhan bisnis kami dengan cepat dan mengubahnya menjadi fitur yang benar-benar berguna bagi pengguna.",
  },
  {
    id: "3",
    name: "Reza Pratama",
    role: "Tech Lead",
    company: "PT. WIKA GEDUNG",
    avatar: "RP",
    text: "Aplikasi Interest yang dibangun Faizal benar-benar mengubah cara tim gudang kami bekerja. Tidak ada lagi kesalahan pencatatan dan proses jadi jauh lebih cepat.",
  },
];
