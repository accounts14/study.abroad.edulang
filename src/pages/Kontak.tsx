import { MessageCircle, Instagram, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Kontak = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-badge">KONTAK</span>
            <h1 className="section-title">Hubungi Kami</h1>
            <p className="section-subtitle">Siap menjawab pertanyaan Anda seputar beasiswa dan studi ke luar negeri</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <a
              href="https://wa.me/6282279506450?text=Halo%20Edulang,%20saya%20ingin%20bertanya"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 hover:shadow-lg transition-shadow block"
            >
              <div className="icon-box shrink-0">
                <MessageCircle size={20} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">WhatsApp</h3>
                <p className="text-muted-foreground text-sm">+62 822-7950-6450 (Mindu)</p>
              </div>
            </a>

            <a
              href="https://instagram.com/edulang.id"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-6 flex items-center gap-4 hover:shadow-lg transition-shadow block"
            >
              <div className="icon-box shrink-0">
                <Instagram size={20} />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-sm">Instagram</h3>
                <p className="text-muted-foreground text-sm">@edulang.id</p>
              </div>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontak;
