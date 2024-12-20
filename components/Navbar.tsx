import Link from 'next/link'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#161E46]/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-[#CFD0EA]">
            Inkrit 3.0
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-[#CFD0EA] hover:text-[#5B56A1]">
              Home
            </Link>
            <Link href="/events" className="text-[#CFD0EA] hover:text-[#5B56A1]">
              Events
            </Link>
            <Link href="/about" className="text-[#CFD0EA] hover:text-[#5B56A1]">
              About
            </Link>
            <Link href="/sponsors" className="text-[#CFD0EA] hover:text-[#5B56A1]">
              Sponsors
            </Link>
            <Link href="/contact" className="text-[#CFD0EA] hover:text-[#5B56A1]">
              Contact
            </Link>
          </div>
          <Button className="md:hidden bg-[#5B56A1] text-[#CFD0EA]" variant="ghost">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar