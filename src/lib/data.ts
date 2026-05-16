import {
  Globe,
  Shield,
  Layout,
  Database,
  Server,
  Code2,
  Palette,
  GitBranch,
  KanbanSquare,
  Wifi,
  Monitor,
  PenTool,
  MousePointer2,
  Search,
  RefreshCw,
  FileText,
} from "lucide-react";

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 10, suffix: "+", label: "Proyek Mandiri" },
  { value: 3.3, suffix: "/4.0", label: "IPK", decimals: 1 },
  { value: 2, suffix: "+", label: "Thn Belajar Dev" },
  { value: 25, suffix: "+", label: "Repositori GitHub" },
];

export const aboutText = {
  paragraphs: [
    "Saya adalah mahasiswa D3 Sistem Informasi di Universitas Telkom dengan fokus utama pada Frontend Development dan UI/UX Design. Saya memiliki minat besar dalam menciptakan antarmuka pengguna yang estetis, responsif, dan berpusat pada kenyamanan pengguna.",
    "Perjalanan belajar saya terdokumentasi melalui lebih dari 25 repositori di GitHub, yang mencakup berbagai eksplorasi menggunakan CSS, Blade Templating, serta library modern seperti React dan Next.js. Selain fokus pada sisi visual, saya juga seorang antusias di bidang Keamanan Siber yang sedang aktif mempelajari dasar-dasar perlindungan data pada aplikasi web.",
    "Terbiasa menerapkan metodologi Scrum dalam tim, saya berkomitmen untuk menggabungkan kreativitas desain dengan kesadaran akan keamanan untuk menciptakan solusi digital yang handal.",
  ],
};

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React / Next.js", icon: Globe },
      { name: "CSS & Responsive Design", icon: Layout },
      { name: "Blade Templating (PHP)", icon: Code2 },
      { name: "REST API Integration", icon: Server },
    ],
  },
  {
    title: "Network Security Enthusiast",
    icon: Shield,
    skills: [
      { name: "Web Security Fundamentals", icon: Shield },
      { name: "Network Infrastructure", icon: Wifi },
      { name: "Basic Server Administration", icon: Server },
      { name: "Traffic Monitoring", icon: Monitor },
    ],
  },
  {
    title: "UI/UX Design",
    icon: PenTool,
    skills: [
      { name: "High-Fidelity Design (Figma)", icon: Palette },
      { name: "User Interface Structure", icon: Layout },
      { name: "Prototyping & Interaction", icon: MousePointer2 },
      { name: "User Research & Usability", icon: Search },
    ],
  },
  {
    title: "Management & Tools",
    icon: KanbanSquare,
    skills: [
      { name: "Git & GitHub (25+ Repos)", icon: GitBranch },
      { name: "Trello / TorMonitor", icon: KanbanSquare },
      { name: "Agile / Scrum Methodology", icon: RefreshCw },
      { name: "Technical Documentation", icon: FileText },
    ],
  },
];

export const projects = [
  {
    title: "Campify",
    slug: "campify",
    role: "Project Manager & Frontend Developer",
    description:
      "Platform marketplace penyewaan dan jual-beli alat camping yang komprehensif. Dilengkapi dengan sistem escrow, fitur pengembalian, manajemen sengketa, dan dashboard admin yang lengkap.",
    content:
      "Campify adalah platform marketplace penyewaan dan jual-beli alat camping komprehensif yang dirancang untuk mempermudah para penggiat alam. Sistem ini dikembangkan menggunakan Laravel dan dilengkapi dengan fitur-fitur canggih seperti sistem pembayaran aman melalui Midtrans, escrow service (rekber) untuk keamanan transaksi, dan manajemen sengketa khusus untuk proses pengembalian barang.\n\nFokus utama proyek ini adalah mengotomatisasi proses penyewaan dengan sistem perhitungan denda keterlambatan secara real-time dan memberikan rasa aman bagi penyewa maupun pemilik barang. Dashboard admin yang lengkap juga disediakan untuk memantau aktivitas transaksi, memvalidasi identitas pengguna (KYC), dan menyelesaikan perselisihan/dispute secara transparan.",
    tags: ["Laravel", "MySQL", "Blade", "Tailwind CSS", "Midtrans", "Escrow"],
    images: ["/images/campify-login.png", "/images/campify-homepage.png", "/images/campify-artikel.png", "/images/campify-produk.png", "/images/campify-detailproduk.png", "/images/campify-chatpenjual.png", "/images/campify-checkout.png", "/images/campify-detailproduksewa.png"], // Duplicated to enable slider testing
    featured: true,
    isUpdating: true,
    github: "#",
    demo: "#",
  },
  {
    title: "Study Flow",
    slug: "study-flow",
    role: "Frontend Developer",
    description:
      "Aplikasi manajemen tugas dan alur belajar (Study Flow) yang interaktif. Menggunakan arsitektur fullstack ringan untuk melacak progres belajar dengan performa tinggi.",
    content:
      "Study Flow adalah aplikasi produktivitas yang dirancang khusus untuk membantu mahasiswa dan pelajar mengelola jadwal serta memantau tugas harian mereka. Proyek ini dibangun dari nol dengan arsitektur yang modern namun ringan, menekankan pada kecepatan interaksi dan pengalaman pengguna (UX) yang responsif.\n\nTeknologi yang diimplementasikan dalam pengembangan aplikasi ini meliputi:\n• **Frontend**: Next.js 16 (React 19), TypeScript, Tailwind CSS v4\n• **Backend**: Node.js Native HTTP Server\n• **Database**: JSON Local Storage\n• **Deployment**: Vercel Services\n• **Icons**: Lucide React\n• **State Management**: React Hooks (useState, useEffect)\n\nDengan memadukan React Hooks untuk manajemen state dan JSON Local Storage sebagai penyimpanan, aplikasi ini menjamin retensi data pengguna secara instan di sisi klien tanpa latensi jaringan.",
    tags: ["Next.js 16", "TypeScript", "Node.js", "Tailwind CSS v4", "Local Storage"],
    images: ["/images/finaltask-homepage.png", "/images/finaltask-edit.png", "/images/finaltask-detailtask.png"],
    featured: false,
    isUpdating: true,
    github: "#",
    demo: "#",
  },
  {
    title: "UI/UX Case Study & Design: Aplikasi Eduvista",
    slug: "uiux-case-study-eduvista",
    role: "UI/UX Designer & Researcher",
    description:
      "Perancangan antarmuka platform edukasi mobile yang dilengkapi dengan dokumentasi pembukuan Case Study komprehensif.",
    content:
      "Eduvista adalah konsep platform edukasi berbasis mobile yang dirancang secara end-to-end. Proyek ini menggabungkan hasil akhir visual High-Fidelity Design di Figma dengan pembukuan UI/UX Case Study yang mendokumentasikan seluruh proses berpikir berdasarkan metodologi Design Thinking; mulai dari User Research, User Persona, Wireframing, hingga penetapan komponen Design System.",
    tags: ["Figma", "UI/UX Case Study", "Design System", "Wireframing", "Prototyping", "Mobile App"],
    images: [],
    featured: true,
    isUpdating: true,
    github: "#",
    demo: "#", // Tautkan ke link PDF Pembukuan UI/UX Eduvista di Google Drive
  },

  {
    title: "Dokumentasi & Laporan Pengembangan Aplikasi Campify",
    slug: "dokumentasi-aplikasi-campify",
    role: "Software Engineer",
    description:
      "Pembukuan teknis mengenai analisis sistem, perancangan struktur, dan dokumentasi fitur pada aplikasi Campify.",
    content:
      "Buku laporan dan dokumentasi menyeluruh mengenai siklus hidup pengembangan aplikasi Campify. Pembukuan ini berfungsi sebagai blueprint teknis aplikasi yang memetakan latar belakang masalah, kebutuhan fungsional sistem, skema database, aturan bisnis (business rules), serta dokumentasi fitur-fitur utama guna memastikan keberlanjutan pengembangan proyek.",
    tags: ["Software Documentation", "System Analysis", "Technical Report", "Project Specification"],
    images: [],
    featured: true,
    isUpdating: true,
    github: "#",
    demo: "#", // Tautkan ke link PDF Pembukuan Aplikasi Campify di Google Drive
  },
  {
    title: "Analisis Arsitektur Sistem Informasi Enterprise",
    slug: "analisis-arsitektur-sistem-informasi",
    role: "System Analyst",
    description:
      "Perancangan blueprint arsitektur sistem informasi komprehensif menggunakan pemodelan UML untuk memastikan skalabilitas sistem.",
    content:
      "Proyek ini berfokus pada tahap analisis dan perancangan sistem secara struktural sebelum masuk ke proses coding. Dokumentasi teknis dibangun menggunakan Draw.io untuk menghasilkan blueprint yang matang, mencakup pemetaan fungsional bisnis melalui Use Case beserta skenarionya, pemodelan alur kerja dengan Activity Diagram, hingga perancangan struktur data serta interaksi objek tingkat tinggi menggunakan Class Diagram dan Sequence Diagram.",
    tags: ["System Analysis", "UML Modeling", "Draw.io", "Use Case", "Database Design"],
    images: [],
    featured: true,
    isUpdating: true,
    github: "#",
    demo: "#", // Tautkan ke link PDF Laporan Diagram UML kamu di Google Drive
  },
  {
    title: "Dokumentasi & Laporan Pengembangan Aplikasi Eduvista",
    slug: "dokumentasi-aplikasi-eduvista",
    role: "Frontend Developer",
    description:
      "Pembukuan teknis komprehensif mengenai pengembangan aplikasi Eduvista, mulai dari analisis sistem hingga implementasi kode.",
    content:
      "Merupakan buku laporan teknis pengembangan aplikasi Eduvista secara end-to-end. Dokumentasi ini merinci arsitektur perangkat lunak yang dibangun, manajemen basis data, implementasi logika backend dan frontend, serta alur deployment sistem untuk memastikan aplikasi berjalan stabil di lingkungan produksi.",
    tags: ["Software Documentation", "Full-Stack Development", "System Architecture", "Technical Report"],
    images: [],
    featured: true,
    isUpdating: true,
    github: "#",
    demo: "#", // Link ke PDF Pembukuan Aplikasi Eduvista
  },
];

export const experiences = [
  {
    title: "Ketua Tim - Inovasi Teknologi Digital Pendidikan (LIDM)",
    organization: "Balai Pengembangan Talenta Indonesia (BPTI) / Puspresnas",
    period: "2026 — Sekarang",
    description:
      "Memimpin tim dalam kompetisi Lomba Inovasi Digital Mahasiswa (LIDM) tingkat nasional. Bertanggung jawab penuh dalam manajemen proyek, konseptualisasi produk, serta mengarsiteki ide pengembangan aplikasi pembelajaran berbasis Machine Learning guna merevolusi metode edukasi digital.",
    type: "Work & Experience" as const,
  },
  {
    title: "Member Lab EISD",
    organization: "EISD Laboratory",
    period: "2026 — Sekarang",
    description:
      "Mempelajari siklus software development secara komprehensif, mulai dari perancangan hingga tahap deployment. Berhasil mengembangkan aplikasi full-stack sebagai tugas akhir dan saat ini terlibat dalam kolaborasi proyek skala besar yang melibatkan integrasi antar 4 divisi berbeda untuk menghasilkan sistem informasi enterprise yang reliabel.",
    type: "Work & Experience" as const,
  },
  {
    title: "Project Manager - Pengembangan Aplikasi Campify",
    organization: "Universitas Telkom",
    period: "2025 — Sekarang",
    description:
      "Bertindak sebagai jembatan komunikasi tim dalam mengelola pengembangan aplikasi Campify. Mengarahkan penentuan business rules, arsitektur sistem, serta bertanggung jawab penuh atas penyusunan buku laporan teknis pengembangan proyek.",
    type: "Work & Experience" as const,
  },
  {
    title: "Independent Open Source Contributor",
    organization: "GitHub",
    period: "2025 — Sekarang",
    description:
      "Aktif membangun dan mendokumentasikan lebih dari 25 proyek pengembangan web secara mandiri di GitHub. Fokus pada eksplorasi integrasi Frontend menggunakan React dan Next.js, serta pengelolaan database menggunakan MySQL dan PHP/Laravel untuk menciptakan solusi aplikasi yang fungsional.",
    type: "Work & Experience" as const,
  },
  {
    title: "Learning Progress Tracker",
    organization: "Final Task - Lab EISD",
    period: "2026",
    description:
      "Berhasil merancang, membangun, hingga melakukan deployment aplikasi web secara end-to-end. Proyek ini mencakup implementasi logika backend, desain antarmuka pengguna (UI/UX) yang responsif, dan pengelolaan basis data.",
    type: "Projects" as const,
  },
  {
    title: "Project Manager - Pengembangan Aplikasi Eduvista",
    organization: "Universitas Telkom",
    period: "2025",
    description:
      "Memimpin siklus manajemen produk secara end-to-end. Bertanggung jawab dalam penyusunan timeline, alokasi tugas divisi UI/UX dan Developer, serta mengawal penyusunan Pembukuan UI/UX Case Study untuk memastikan produk rilis sesuai spesifikasi.",
    type: "Work & Experience" as const,
  },
  {
    title: "Member Dicoding",
    organization: "Dicoding Indonesia",
    period: "2025",
    description:
      "Mengikuti program pembelajaran dan sertifikasi di Dicoding Indonesia untuk memperdalam kemampuan di bidang pengembangan web modern, khususnya pada ekosistem JavaScript dan React.",
    type: "Certification & Training" as const,
  },
  {
    title: "Peserta & Surveyor PPK Ormawa",
    organization: "UKM SEARCH Telkom University x Kemendikbudristek",
    period: "2025",
    description:
      "Menjadi bagian dari tim delegasi UKM SEARCH dalam Program Penguatan Kapasitas Organisasi Kemahasiswaan skala nasional. Bertanggung jawab sebagai surveyor lapangan untuk melakukan pengumpulan data primer, observasi kebutuhan masyarakat, serta menyusun analisis masalah guna merancang solusi program pengabdian yang tepat sasaran.",
    type: "Work & Experience" as const,
  },
  {
    title: "Asisten Praktikum Jaringan Komputer",
    organization: "Universitas Telkom",
    period: "2025",
    description:
      "Bertanggung jawab dalam memberikan asistensi teknis dan pendampingan bagi mahasiswa selama sesi praktikum jaringan komputer. Fokus pada membantu pemahaman materi mengenai konfigurasi router, switching, subnetting, serta implementasi dasar keamanan jaringan untuk memastikan kelancaran proses praktikum di laboratorium.",
    type: "Work & Experience" as const,
  },
  {
    title: "Ketua Tim - Pelatihan & Kompetisi Esai Ilmiah",
    organization: "UKM SEARCH Telkom University",
    period: "2024",
    description:
      "Memimpin tim dalam rangkaian pelatihan intensif hingga pengerjaan karya kompetisi esai ilmiah. Bertanggung jawab penuh dalam mengoordinasikan anggota, melakukan riset literatur, serta merumuskan gagasan solutif berbasis data hingga menghasilkan manuskrip esai yang siap diujikan secara kompetitif.",
    type: "Work & Experience" as const,
  },
];

export const education = [
  {
    institution: "Universitas Telkom",
    degree: "D3 Sistem Informasi",
    period: "2024 — Sekarang",
    description:
      "Fokus pada pengembangan sistem informasi, keamanan jaringan, dan web development. IPK 3.3/4.0.",
    logo: "🎓",
  },
  {
    institution: "SMK Perguruan Cikini",
    degree: "Teknik Komputer & Jaringan",
    period: "2019 — 2022",
    description:
      "Membangun fondasi kuat di bidang jaringan komputer, troubleshooting hardware & software, serta administrasi server.",
    logo: "🏫",
  },
];

export const contactInfo = {
  location: "Bandung, Jawa Barat, Indonesia",
  email: "muhammadarifbillah@student.telkomuniversity.ac.id",
  whatsapp: "+62 819-1188-3275",
  socials: [
    { name: "GitHub", url: "https://github.com/muhammadarifbillah", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-arif-billah-18705a352",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/arif_stiga?igsh=eXdkemQ0YTJkMmwz",
      icon: "instagram",
    },
  ],
};
