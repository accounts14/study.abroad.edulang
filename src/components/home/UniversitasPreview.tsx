import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { universities } from "@/data/universities";

const UniversitasPreview = () => {
  const preview = universities.slice(0, 6);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <span className="section-badge">MITRA GLOBAL</span>
        <h2 className="section-title">Mitra Universitas Global Kami</h2>
        <p className="section-subtitle mb-12">
          Edulang bekerja sama dengan universitas terkemuka untuk memberikan akses beasiswa terbaik bagi Anda.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {preview.map((uni) => (
            <div key={uni.id} className="glass-card overflow-hidden text-left group hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={uni.imageUrl}
                  alt={uni.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-primary/80 backdrop-blur-sm text-primary-foreground text-xs px-3 py-1 rounded-full">
                  <MapPin size={12} />
                  {uni.city}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-foreground text-base mb-2 line-clamp-2">{uni.name}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{uni.description}</p>
                <Link
                  to={`/universitas/${uni.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-secondary hover:gap-2 transition-all"
                >
                  Lihat Selengkapnya <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/universitas" className="btn-primary-gradient">
            Lihat Semua Universitas <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UniversitasPreview;
