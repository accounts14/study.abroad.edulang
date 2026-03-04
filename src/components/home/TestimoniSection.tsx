const testimonials = [
  {
    name: "Ahmad R.",
    role: "Mahasiswa HITSZ, Shenzhen",
    initial: "A",
    text: "Edulang benar-benar membantu saya dari nol sampai saya diterima di Harbin Institute of Technology. Prosesnya transparan dan pendampingannya sangat personal.",
  },
  {
    name: "Siti N.",
    role: "Mahasiswa NJUPT, Nanjing",
    initial: "S",
    text: "Saya tidak menyangka bisa mendapatkan beasiswa penuh! Tim Edulang sangat sabar membimbing saya menyiapkan semua dokumen.",
  },
  {
    name: "Rizky P.",
    role: "Mahasiswa Southeast University",
    initial: "R",
    text: "Dari konsultasi awal hingga keberangkatan, Edulang selalu ada. Sangat recommended untuk yang serius kuliah di luar negeri.",
  },
];

const TestimoniSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <span className="section-badge">TESTIMONI</span>
        <h2 className="section-title">Kata Mereka Tentang Edulang</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card p-6 text-left">
              <span className="text-3xl text-secondary font-bold leading-none">"</span>
              <p className="text-sm text-muted-foreground mt-2 mb-6 italic">{t.text}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
