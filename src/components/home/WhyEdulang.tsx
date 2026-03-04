import { User, Eye, Target, Award } from "lucide-react";

const values = [
  { icon: User, title: "Pendampingan Personal", desc: "Satu mentor untuk satu peserta, bukan massal" },
  { icon: Eye, title: "Transparan & Realistis", desc: "Informasi jujur tentang peluang dan tantangan" },
  { icon: Target, title: "Berbasis Proses & Outcome", desc: "Fokus pada hasil nyata, bukan sekadar janji" },
  { icon: Award, title: "Tim Berpengalaman", desc: "Didukung konsultan dengan track record teruji" },
];

const WhyEdulang = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <span className="section-badge">KEUNGGULAN</span>
        <h2 className="section-title">Kenapa Harus Edulang?</h2>
        <p className="section-subtitle mb-10">Nilai-nilai yang menjadi fondasi setiap pendampingan kami</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {values.map((item) => (
            <div key={item.title} className="glass-card p-6 flex items-start gap-4 text-left hover:shadow-lg transition-shadow">
              <div className="icon-box shrink-0">
                <item.icon size={20} />
              </div>
              <div>
                <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyEdulang;
