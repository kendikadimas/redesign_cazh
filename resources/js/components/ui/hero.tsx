import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className=" md:pt-24 lg:pt-32 pb-[150px] bg-primary w-full relative overflow-hidden px-15">      
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="text-center lg:text-left relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 w-4 h-4 bg-accent-orange rounded-full z-20" />
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-white">
            Digitalisasi Sistem
            <br />
            Menejemen Pendidikan
          </h1>
          <p className="mt-4 text-lg font-light text-white max-w-2xl">
            Layanan lengkap manajemen data siswa, staff/guru, PPDB online, administrasi, keuangan, akademik presensi,
            tabungan, hingga transaksi non tunai di kantin lembaga pendidikan (Sekolah dan Pondok Pesantren)
          </p>
          <div className="mt-6 flex items-center justify-center lg:justify-start gap-4">
            <Button className="bg-accent-orange hover:bg-accent-orange-dark text-white">Jadwalkan Demo</Button>
            <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-white">
              Selengkapnya
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <img
            src="/images/hero.png"
            alt="Dashboard and mobile app illustration"
            width={600}
            height={400}
            className="w-full h-auto max-w-md lg:max-w-full rounded-lg "
          />
        </div>
      </div>
    </section>
  )
}

