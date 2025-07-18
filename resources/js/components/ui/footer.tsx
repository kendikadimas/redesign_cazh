import { Link } from "@inertiajs/react"
import { MapPin, Phone, Mail, Instagram, Youtube, Music } from "lucide-react" // Import Lucide icons
import { Separator } from "@/components/ui/separator"

// Data untuk link navigasi
const navigationLinks = [
  { href: "#", label: "Beranda" },
  { href: "#", label: "Flexycazh" },
  { href: "#", label: "Tentang" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Kontak" },
]

// Data untuk quick links
const quickLinks = [
  { href: "#", label: "Company Profile" },
  { href: "#", label: "Proposal" },
  { href: "#", label: "Pendaftaran Partner" },
]

// Data untuk services links
const servicesLinks = [
  { href: "#", label: "FAQs" },
  { href: "#", label: "Syarat" },
  { href: "#", label: "Kebijakan" },
  { href: "#", label: "404" },
]

export function Footer() {
  return (
    <footer className="bg-primary w-full text-white py-12 lg:py-16 px-15">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-start justify-between pb-8">

          <div className="space-y-4">
            <img src="/images/Cards.svg" alt="Cards Logo" width={150} height={40} />
            <p className="text-lg font-light">Digitize School.</p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white hover:underline text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Link */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Link</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white hover:underline text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-white hover:underline text-base">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-white/30 my-8" />

        {/* Middle section: Contact Info & Social Media */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left font-bold">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 flex-shrink-0" />
              <span className="text-base">Graha Timur, Jl. Martadireja 1 No.Blok B2, Purwokerto Timur</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 flex-shrink-0" />
              <span className="text-base">+62 811-255-170</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 flex-shrink-0" />
              <span className="text-base">admin@cazh.id</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img src="/images/Instagram.svg" alt="Instagram" width={20} height={20} />
            <img src="/images/youtube.svg" alt="youtube" width={20} height={20} />
            <img src="/images/tiktok.svg" alt="tiktok" width={20} height={20} />
          </div>
        </div>

        <Separator className="bg-white/30 my-8" />

        {/* Bottom section: Copyright */}
        <div className="text-center text-sm text-white">© 2021-2025 CARDS Kartu Digital</div>
      </div>
    </footer>
  )
}
