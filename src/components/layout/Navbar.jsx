import { useEffect, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import logo from '../../assets/images/TayoBuild.png'

export default function Navbar({ onHomeClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeLink, setActiveLink] = useState('')
  const searchInputRef = useRef(null)

  const navLinks = [
    'Home',
    'About',
    'Services',
    'Projects',
    'Locations',
    'Blog',
    'Contact',
  ]

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus()
    }
  }, [isSearchOpen])

  const handleNavClick = (link) => {
    setActiveLink(link)
    setIsMenuOpen(false)

    if (link === 'Home') {
      onHomeClick?.()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (link === 'About') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white font-['Poppins'] shadow-[0_8px_28px_rgba(15,23,42,0.04)]">
      <nav className="grid grid-cols-[auto_auto] items-center justify-between px-4 py-4 sm:px-6 lg:grid-cols-[220px_1fr_220px] lg:px-9 lg:py-5">
        <a href="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Tayo Build PH logo"
            className="h-[56px] w-auto object-contain sm:h-[68px] lg:h-[76px]"
          />
        </a>

        <div className="hidden items-center justify-center gap-x-7 text-[14px] font-semibold text-slate-950 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              type="button"
              onClick={() => handleNavClick(link)}
              className={`relative px-1 py-2 transition active:scale-95 ${
                activeLink === link
                  ? 'text-sky-500'
                  : 'text-slate-950 hover:text-sky-500'
              }`}
            >
              {link}
              <span
                className={`absolute -bottom-0.5 left-0 right-0 mx-auto h-0.5 rounded-full bg-sky-500 transition-all ${
                  activeLink === link ? 'w-full opacity-100' : 'w-0 opacity-0'
                }`}
              />
            </button>
          ))}
        </div>

        <div className="relative hidden items-center justify-end gap-3 lg:flex">
          <form
            onSubmit={(event) => event.preventDefault()}
            className={`absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 overflow-hidden transition-all duration-300 ${
              isSearchOpen ? 'w-56 opacity-100' : 'w-0 opacity-0'
            }`}
          >
            <input
              ref={searchInputRef}
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search"
              className="h-9 w-56 rounded-full border border-slate-200 bg-white px-4 text-xs font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400"
              aria-label="Search"
            />
          </form>

          <button
            type="button"
            onClick={() => setIsSearchOpen((current) => !current)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-950 transition hover:bg-sky-50 hover:text-sky-500 active:scale-95"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={3} />
          </button>

          <button
            type="button"
            onClick={() => setActiveLink('Contact')}
            className="rounded-full bg-sky-400 px-6 py-2.5 text-xs font-extrabold text-white transition hover:bg-sky-500 active:scale-95"
          >
            Contact
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="group flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md transition duration-200 hover:bg-sky-50 active:scale-90 active:bg-sky-100 lg:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className="h-0.5 w-6 rounded-full bg-sky-500 transition group-hover:bg-sky-600" />
          <span className="h-0.5 w-6 rounded-full bg-sky-500 transition group-hover:bg-sky-600" />
          <span className="h-0.5 w-6 rounded-full bg-sky-500 transition group-hover:bg-sky-600" />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-slate-900/20 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className={`ml-auto flex min-h-screen w-[78vw] max-w-sm flex-col bg-white/95 px-8 py-8 font-['Poppins'] text-slate-950 shadow-2xl transition-transform duration-300 ease-out sm:w-[60vw] ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="ml-auto flex h-10 w-10 items-center justify-center rounded-md text-sky-500 hover:bg-sky-50 active:scale-95 active:bg-sky-100"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="flex flex-1 flex-col items-center justify-center">
              <h2 className="mb-12 text-3xl font-bold tracking-wide text-slate-950 sm:text-4xl">
                TayoBuild
                <span className="text-sky-400">.</span>
              </h2>

              <div className="flex w-full max-w-xs flex-col items-center gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    type="button"
                    onClick={() => handleNavClick(link)}
                    className={`w-full rounded-full px-5 py-3 font-['Poppins'] text-lg font-semibold transition active:scale-95 sm:text-xl ${
                      activeLink === link
                        ? 'text-sky-500'
                        : 'text-slate-900 hover:text-sky-500 active:bg-sky-100 active:text-sky-600'
                    }`}
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </div>
      </div>
    </header>
  )
}
