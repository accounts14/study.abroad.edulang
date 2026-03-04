import { MessageCircle, GraduationCap, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Graduation celebration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground py-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold mb-6 animate-fade-up">
          <GraduationCap size={18} />
          Pendampingan Beasiswa by Edulang
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Wujudkan Mimpi
          <br />
          Kuliah di Luar Negeri
        </h1>

        <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Pendampingan studi dan pendaftaran beasiswa ke luar negeri yang berfokus pada admission kampus, persiapan dokumen & strategi aplikasi, serta beasiswa dari kampus atau institusi mitra.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="https://wa.me/6282279506450?text=Halo%20Edulang,%20saya%20tertarik%20konsultasi%20beasiswa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-base"
          >
            <MessageCircle size={18} />
            Konsultasi Gratis
          </a>
          <Link to="/universitas" className="btn-outline-white text-base">
            <GraduationCap size={18} />
            Lihat Universitas
          </Link>
          <a
            href="https://edulang.id"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-white text-base"
          >
            <Globe size={18} />
            Kunjungi Edulang.id
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
