import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MapPin, ArrowRight, ArrowLeft, Clock, DollarSign, CheckCircle, FileText, MessageCircle, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { universities } from "@/data/universities";

const UniversitasList = () => {
  const [search, setSearch] = useState("");

  const filtered = universities.filter((uni) =>
    uni.name.toLowerCase().includes(search.toLowerCase()) ||
    uni.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-badge">UNIVERSITAS MITRA</span>
            <h1 className="section-title">Daftar Universitas MoU Edulang</h1>
            <p className="section-subtitle">Pilih universitas impianmu dan mulai perjalanan beasiswa bersama Edulang</p>
            <p className="text-secondary font-bold text-lg mt-2">Total {universities.length} Universitas MoU</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-10">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari universitas atau kota..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
              />
            </div>
            {search && (
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Menampilkan {filtered.length} dari {universities.length} universitas
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((uni) => (
              <div key={uni.id} className="glass-card overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={uni.imageUrl} alt={uni.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs px-3 py-1 rounded-full">
                    <MapPin size={12} />{uni.city}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-foreground text-base mb-2 line-clamp-2">{uni.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{uni.description}</p>
                  <Link to={`/universitas/${uni.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:gap-2 transition-all">
                    Lihat Selengkapnya <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Tidak ada universitas yang cocok dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export const UniversitasDetail = () => {
  const { id } = useParams();
  const uni = universities.find((u) => u.id === id);

  if (!uni) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="section-title">Universitas tidak ditemukan</h1>
          <Link to="/universitas" className="btn-primary-gradient mt-4">Kembali ke daftar</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const waLink = `https://wa.me/6282279506450?text=Halo%20Edulang,%20saya%20tertarik%20mendaftar%20di%20${encodeURIComponent(uni.name)}`;

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/universitas" className="inline-flex items-center gap-1 text-sm text-secondary font-medium mb-6 hover:gap-2 transition-all">
            <ArrowLeft size={14} /> Kembali ke Daftar Universitas
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main */}
            <div className="lg:col-span-2">
              <div className="rounded-xl overflow-hidden mb-6">
                <img src={uni.imageUrl} alt={uni.name} className="w-full h-64 md:h-80 object-cover" />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <MapPin size={14} /> {uni.city}
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">{uni.name}</h1>
              <p className="text-muted-foreground mb-8">{uni.description}</p>

              <div className="glass-card p-6 mb-6">
                <h3 className="font-bold text-foreground mb-3 flex items-center gap-2"><FileText size={16} /> Jurusan Tersedia</h3>
                <div className="flex flex-wrap gap-2">
                  {uni.majors.map((m) => (
                    <span key={m} className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary font-medium">{m}</span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-bold text-foreground mb-3">Persyaratan Pendaftaran</h3>
                <ul className="space-y-2">
                  {uni.requirements.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-secondary shrink-0 mt-0.5" /> {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="glass-card p-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-secondary shrink-0 mt-0.5" />
                    <div><p className="text-xs text-muted-foreground">Durasi Studi</p><p className="text-sm font-semibold text-foreground">{uni.duration}</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign size={16} className="text-secondary shrink-0 mt-0.5" />
                    <div><p className="text-xs text-muted-foreground">Biaya Layanan</p><p className="text-sm font-semibold text-foreground">{uni.serviceFee}</p></div>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-bold text-foreground text-sm mb-3">Cakupan Beasiswa</h3>
                <p className="text-sm text-muted-foreground">{uni.scholarshipCoverage}</p>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-bold text-foreground text-sm mb-3">Benefit & Fasilitas</h3>
                <ul className="space-y-2">
                  {uni.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-accent shrink-0 mt-0.5" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-accent w-full justify-center text-base">
                <MessageCircle size={18} /> Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UniversitasList;
