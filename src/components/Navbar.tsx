import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import logoEdulang from "@/assets/logo-edulang.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Universitas", path: "/universitas" },
  { label: "Tata Cara Pendaftaran", path: "/tata-cara-pendaftaran" },
  { label: "Kontak", path: "/kontak" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="glass-navbar sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start">
          <img src={logoEdulang} alt="Edulang" className="h-10 md:h-14 w-auto" />
          <span className="text-[9px] md:text-[11px] text-muted-foreground -mt-1 tracking-wide">
            Unlock The World With Education
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-secondary ${
                location.pathname === link.path
                  ? "text-secondary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6282279506450?text=Halo%20Edulang,%20saya%20tertarik%20konsultasi%20beasiswa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm py-2 px-5"
          >
            <MessageCircle size={16} />
            Konsultasi Gratis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-card border-t border-border px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                location.pathname === link.path
                  ? "text-secondary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6282279506450?text=Halo%20Edulang,%20saya%20tertarik%20konsultasi%20beasiswa"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm py-2 px-5 w-full justify-center"
          >
            <MessageCircle size={16} />
            Konsultasi Gratis
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
