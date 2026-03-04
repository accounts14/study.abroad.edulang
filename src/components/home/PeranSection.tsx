import { Building2, Sparkles } from "lucide-react";

const PeranSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <span className="section-badge">PERAN</span>
        <h2 className="section-title">Peran Edulang vs Peran Kampus</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-3xl mx-auto">
          <div className="glass-card p-8 text-left">
            <div className="icon-box mb-4">
              <Building2 size={22} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Kampus</h3>
            <p className="text-muted-foreground text-sm">
              Melakukan seleksi dan memberikan beasiswa kepada mahasiswa yang memenuhi kualifikasi.
            </p>
          </div>
          <div className="glass-card p-8 text-left">
            <div className="icon-box-accent mb-4">
              <Sparkles size={22} />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">Edulang</h3>
            <p className="text-muted-foreground text-sm">
              Mendampingi, mempersiapkan, dan memfasilitasi seluruh proses aplikasi agar peluang diterima lebih besar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PeranSection;
