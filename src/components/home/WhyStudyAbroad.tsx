import { Globe, Compass, TrendingUp, MessageSquare, FileText, Send } from "lucide-react";

const whyItems = [
  { icon: Globe, title: "Kualitas Pendidikan Global", desc: "Akses standar pendidikan internasional dari universitas terkemuka" },
  { icon: Compass, title: "Exposure Internasional", desc: "Pengalaman lintas budaya yang membentuk perspektif global" },
  { icon: TrendingUp, title: "Peluang Karier & Jejaring", desc: "Membuka jaringan profesional dan peluang karier global" },
];

const howItems = [
  { icon: MessageSquare, title: "Konsultasi & Pemetaan Jurusan", desc: "Analisis mendalam minat, bakat, dan peluang jurusan terbaik" },
  { icon: FileText, title: "Pendampingan Essay, CV & Dokumen", desc: "Bimbingan penulisan yang memenuhi standar internasional" },
  { icon: Send, title: "Interview & Pre-departure Support", desc: "Persiapan wawancara hingga briefing keberangkatan" },
];

const WhyStudyAbroad = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <span className="section-badge">MENGAPA & BAGAIMANA</span>
        <h2 className="section-title">Kenapa Kuliah di Luar Negeri?</h2>
        <p className="section-subtitle mb-12">Dan sejauh apa Edulang membantu perjalanan Anda</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Why */}
          <div className="text-left">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground mb-4">
              <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs">?</span>
              Kenapa Kuliah di Luar Negeri
            </h3>
            <div className="space-y-3">
              {whyItems.map((item) => (
                <div key={item.title} className="glass-card p-4 flex items-start gap-3">
                  <div className="icon-box shrink-0 w-10 h-10">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How */}
          <div className="text-left">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground mb-4">
              <span className="w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs">!</span>
              Sejauh Apa Edulang Membantu
            </h3>
            <div className="space-y-3">
              {howItems.map((item) => (
                <div key={item.title} className="glass-card p-4 flex items-start gap-3">
                  <div className="icon-box-accent shrink-0 w-10 h-10">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudyAbroad;
