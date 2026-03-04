import { Link } from "react-router-dom";
import { Instagram, MessageCircle, Mail } from "lucide-react";
import logoEdulang from "@/assets/logo-edulang.png";
import logoBri from "@/assets/payment/bri.png";
import logoMandiri from "@/assets/payment/mandiri.png";
import logoCimb from "@/assets/payment/cimb.png";
import logoGopay from "@/assets/payment/gopay.png";
import logoPermata from "@/assets/payment/permata.png";
import logoQris from "@/assets/payment/qris.png";

const Footer = () => {
  return (
    <footer>
      {/* Main Footer - White Background */}
      <div className="bg-white border-t border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Address */}
            <div>
              <img src={logoEdulang} alt="Edulang" className="h-10 mb-4" />
              <p className="font-semibold text-foreground text-sm mb-1">PT Active Edulang Global</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Jl. Z.A. Pagar Alam No.26, Labuhan Ratu, Kec. Kedaton, Kota Bandar Lampung
              </p>

              <h4 className="font-semibold text-foreground mt-6 mb-2 text-sm">Subscribe Email</h4>
              <p className="text-xs text-muted-foreground mb-3">
                Get the best new products in your inbox, every day. Get the latest content first.
              </p>
              <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground font-semibold py-2.5 rounded-md text-sm hover:bg-primary/90 transition-colors"
                >
                  DAFTAR
                </button>
              </form>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm">Navigasi</h4>
              <div className="space-y-2.5 text-sm text-muted-foreground">
                <Link to="/" className="block hover:text-secondary transition-colors">Home</Link>
                <Link to="/universitas" className="block hover:text-secondary transition-colors">Universitas</Link>
                <Link to="/tata-cara-pendaftaran" className="block hover:text-secondary transition-colors">Tata Cara Pendaftaran</Link>
                <Link to="/kontak" className="block hover:text-secondary transition-colors">Kontak</Link>
              </div>
            </div>

            {/* Panduan & Insight */}
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm">Panduan & Insight</h4>
              <div className="space-y-2.5 text-sm text-muted-foreground">
                <Link to="/" className="block hover:text-secondary transition-colors">Alur Belajar</Link>
                <Link to="/" className="block hover:text-secondary transition-colors">FAQ</Link>
                <Link to="/" className="block hover:text-secondary transition-colors">Artikel & Tips Belajar</Link>
                <Link to="/" className="block hover:text-secondary transition-colors">Insight Karier Global</Link>
                <Link to="/" className="block hover:text-secondary transition-colors">Update Program</Link>
              </div>
            </div>

            {/* Legal & Trust */}
            <div>
              <h4 className="font-bold text-foreground mb-4 text-sm">Legal & Trust</h4>
              <div className="space-y-2.5 text-sm text-muted-foreground">
                <Link to="/" className="block hover:text-secondary transition-colors">Syarat & Ketentuan</Link>
                <Link to="/" className="block hover:text-secondary transition-colors">Kebijakan Privasi</Link>
                <Link to="/" className="block hover:text-secondary transition-colors">Kebijakan Refund</Link>
              </div>

              <h4 className="font-bold text-foreground mt-6 mb-3 text-sm">Website</h4>
              <a
                href="https://edulang.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-secondary hover:underline"
              >
                edulang.id
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="border-t border-border mt-10 pt-6">
            <h4 className="font-bold text-foreground text-sm mb-4">Metode Pembayaran</h4>
            <div className="flex flex-wrap items-center gap-4">
              {[
                { name: "BANK BRI", src: logoBri },
                { name: "Mandiri", src: logoMandiri },
                { name: "CIMB Niaga", src: logoCimb },
                { name: "GoPay", src: logoGopay },
                { name: "Permata Bank", src: logoPermata },
                { name: "QRIS", src: logoQris },
              ].map((item) => (
                <div
                  key={item.name}
                  className="px-4 py-2 bg-background border border-border rounded-md flex items-center justify-center"
                >
                  <img src={item.src} alt={item.name} className="h-6 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Dark */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary-foreground/80">
            © Edulang {new Date().getFullYear()}. All rights reserved
          </p>
          <div className="flex items-center gap-3">
            <a href="https://instagram.com/edulang.id" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://wa.me/6282279506450" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <MessageCircle size={16} />
            </a>
            <a href="mailto:info@edulang.id" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
