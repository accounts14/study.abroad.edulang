import { MessageCircle, Instagram } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
          Dapatkan Informasi Beasiswa &<br />Tips Studi ke Luar Negeri
        </h2>
        <p className="section-subtitle mb-8">
          Hubungi kami sekarang untuk konsultasi gratis dan mulai perjalanan studi internasional kamu!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/6282279506450?text=Halo%20Edulang,%20saya%20tertarik%20konsultasi%20beasiswa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-gradient text-base"
          >
            <MessageCircle size={18} />
            Chat via WhatsApp
          </a>
          <a
            href="https://instagram.com/edulang.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card text-secondary font-semibold rounded-lg border border-secondary/30 hover:bg-secondary/5 transition-all"
          >
            <Instagram size={18} />
            Follow @edulang.id
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
