const steps = [
  { num: "01", title: "Konsultasi Awal", desc: "Diskusi mendalam mengenai tujuan studi, minat, dan anggaran" },
  { num: "02", title: "Persiapan Dokumen", desc: "Penyusunan CV, essay, transkrip, dan dokumen wajib lainnya" },
  { num: "03", title: "Pendaftaran Beasiswa", desc: "Pengajuan aplikasi ke kampus dan program beasiswa yang sesuai" },
  { num: "04", title: "Seleksi Kampus", desc: "Pendampingan selama proses seleksi dan interview" },
  { num: "05", title: "Keberangkatan", desc: "Pre-departure briefing dan persiapan keberangkatan" },
];

const AlurSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <span className="section-badge">PROSES</span>
        <h2 className="section-title">Alur Pendampingan Beasiswa</h2>
        <p className="section-subtitle mb-14">Langkah demi langkah menuju kampus impian Anda</p>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/20 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className={`relative md:flex items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:mb-8`}>
                {/* Card */}
                <div className={`glass-card p-5 md:w-5/12 text-left ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <h4 className="font-bold text-foreground text-sm">{step.title}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{step.desc}</p>
                </div>

                {/* Circle */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-secondary text-secondary-foreground items-center justify-center text-xs font-bold z-10">
                  {step.num}
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-5/12" />

                {/* Mobile number */}
                <div className="md:hidden flex items-center gap-3 mt-2">
                  <span className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">
                    {step.num}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlurSection;
