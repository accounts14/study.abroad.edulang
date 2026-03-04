import { GraduationCap, Globe, Building } from "lucide-react";

const items = [
  { icon: GraduationCap, title: "Beasiswa Kampus Luar Negeri", desc: "Akses ke program beasiswa dari universitas mitra global" },
  { icon: Globe, title: "Studi Internasional", desc: "Pengalaman belajar di lingkungan multikultural kelas dunia" },
  { icon: Building, title: "Peluang Magang & Karier Global", desc: "Membuka pintu karier di perusahaan internasional" },
];

const OpportunitiesSection = () => {
  return (
    <section className="py-16" style={{ background: "var(--gradient-primary)" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {items.map((item) => (
            <div key={item.title} className="text-primary-foreground">
              <div className="icon-box-accent mx-auto mb-3">
                <item.icon size={22} />
              </div>
              <h4 className="font-bold text-sm mb-1">{item.title}</h4>
              <p className="text-primary-foreground/80 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesSection;
