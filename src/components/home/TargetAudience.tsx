import { GraduationCap, BookOpen, Building, Users } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Pelajar SMA / Gap Year",
    desc: "Lulusan SMA yang ingin langsung melanjutkan studi ke luar negeri",
  },
  {
    icon: BookOpen,
    title: "Mahasiswa S1 / S2",
    desc: "Mahasiswa aktif yang ingin transfer atau lanjut studi pascasarjana",
  },
  {
    icon: Building,
    title: "Profesional Muda",
    desc: "Profesional yang ingin meningkatkan kompetensi melalui pendidikan global",
  },
  {
    icon: Users,
    title: "Orang Tua",
    desc: "Orang tua yang mencari jalur studi luar negeri yang aman & jelas untuk anak",
  },
];

const TargetAudience = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <span className="section-badge">UNTUK SIAPA?</span>
        <h2 className="section-title">Program Ini Cocok Untuk</h2>
        <p className="section-subtitle mb-12">
          Dari pelajar hingga profesional, kami mendampingi semua level
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((item) => (
            <div key={item.title} className="glass-card p-6 text-center hover:shadow-lg transition-shadow">
              <div className="icon-box mx-auto mb-4">
                <item.icon size={22} />
              </div>
              <h3 className="font-bold text-foreground text-sm mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
