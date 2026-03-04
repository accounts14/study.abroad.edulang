import { Download, FileText, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const documents = [
  { name: "Panduan Awal", desc: "Panduan lengkap proses pendaftaran" },
  { name: "Formulir Pendaftaran", desc: "Formulir utama untuk mendaftar" },
  { name: "Surat Pernyataan Kebijakan Edulang", desc: "Pernyataan persetujuan kebijakan" },
  { name: "Surat Pernyataan Cicilan Biaya Administrasi", desc: "Pernyataan terkait cicilan biaya" },
  { name: "Surat Keterangan Lulus", desc: "Format surat keterangan kelulusan" },
  { name: "Surat Keterangan Aktif Belajar Kelas 12", desc: "Untuk siswa yang masih aktif" },
  { name: "Transkrip Nilai Rapot Semester 1-6", desc: "Format transkrip nilai rapor" },
  { name: "Formulir Surat Keterangan Sehat MCU", desc: "Medical check-up form" },
  { name: "Recommendation Letter", desc: "Template surat rekomendasi" },
  { name: "Study Plan", desc: "Format rencana studi" },
  { name: "Study Gap Letter", desc: "Surat keterangan gap year" },
  { name: "Surat Kuasa untuk Siswa di bawah 18 Tahun", desc: "Power of attorney untuk minor" },
];

const TataCaraPendaftaran = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="section-badge">PENDAFTARAN</span>
            <h1 className="section-title">Tata Cara Pendaftaran</h1>
            <p className="section-subtitle">Dokumen dan formulir yang dibutuhkan untuk proses pendaftaran beasiswa</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="glass-card p-6 mb-8 text-center">
              <FileText size={32} className="mx-auto text-secondary mb-3" />
              <h2 className="text-lg font-bold text-foreground mb-2">Dokumen Pendaftaran</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Download format dokumen pendaftaran di bawah ini. Pastikan semua dokumen telah dilengkapi sebelum mendaftar.
              </p>
            </div>

            <div className="space-y-3">
              {documents.map((doc, i) => (
                <div key={i} className="glass-card p-4 flex items-center justify-between hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3">
                    <div className="icon-box w-10 h-10">
                      <FileText size={16} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-sm">{doc.name}</h3>
                      <p className="text-xs text-muted-foreground">{doc.desc}</p>
                    </div>
                  </div>
                  <button className="shrink-0 p-2 rounded-lg bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-sm text-muted-foreground mb-4">Butuh bantuan mengisi dokumen?</p>
              <a
                href="https://wa.me/6282279506450?text=Halo%20Edulang,%20saya%20butuh%20bantuan%20mengisi%20dokumen%20pendaftaran"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <MessageCircle size={16} />
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TataCaraPendaftaran;
