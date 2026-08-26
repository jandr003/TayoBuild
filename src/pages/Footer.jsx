import tayoBuildLogo from '../assets/images/TayoBuild-FooterNow.png'

export default function Footer() {
  return (
     <footer className="relative min-h-[280px] overflow-hidden px-6 py-10 font-['Poppins'] sm:min-h-[220px] sm:px-10 lg:px-[42px]">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1390 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >

    <path
        className="hidden sm:block"
        d="M28,0 L1362,0 A28,28 0 0 1 1390,28 L1390,174 L1290,174 A16,16 0 0 0 1274,190 L1274,220 L0,220 L0,28 A28,28 0 0 1 28,0 Z"
        fill="#101012"
    />
    
    <path
        className="sm:hidden"
        d="M28,0 L1362,0 A28,28 0 0 1 1390,28 L1390,174 L1065,174 A30,30 0 0 0 1035,204 L1035,220 L0,220 L0,28 A28,28 0 0 1 28,0 Z"
        fill="#101012"
    />
      </svg>

        <div className="absolute left-6 top-6 z-10 flex flex-col sm:left-10 sm:top-10 lg:left-[42px]">
        <p className="text-sm text-white/80 max-sm:text-xs leading-tight max-sm:leading-tight">
            Building the future with excellence
        </p>

        <div className="flex items-center gap-2 mt-1 max-sm:mt-0">
            <img
            src={tayoBuildLogo}
            alt="TayoBuild Solutions"
            className="h-44 w-auto max-sm:h-24"
            />
        </div>
        </div>

      <div className="absolute right-6 top-24 z-10 flex flex-col items-end gap-6 max-sm:top-24 sm:right-10 sm:top-16 lg:right-[42px] lg:top-16">
        <nav className="flex max-w-[220px] flex-wrap justify-end gap-x-4 gap-y-1 text-right text-xs text-white/80 sm:max-w-none sm:gap-x-14 sm:text-sm">
          <a href="#about" className="transition-opacity hover:opacity-70">About</a>
          <a href="#services" className="transition-opacity hover:opacity-70">Services</a>
          <a href="#projects" className="transition-opacity hover:opacity-70">Projects</a>
          <a href="#blog" className="transition-opacity hover:opacity-70">Tools &amp; Resources</a>
          <a href="#contact" className="transition-opacity hover:opacity-70">Contact</a>
        </nav>

        <p className="max-w-[220px] text-right text-[10px] leading-tight text-white/50 sm:max-w-none sm:text-xs">
          Copyright @ 2026 TayoBuild Solution. | All Right Reserved
        </p>
      </div>

      <div className="absolute bottom-1 right-3 z-10 flex gap-3 max-sm:bottom-2 max-sm:right-1 max-sm:gap-2">
        <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-80 max-sm:h-[30px] max-sm:w-[30px]">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="white" className="max-sm:!w-[12px] max-sm:!h-[12px]">
            <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
          </svg>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-80 max-sm:h-[30px] max-sm:w-[30px]">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="white" className="max-sm:!w-[12px] max-sm:!h-[12px]">
            <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.4.42.6.24 1 .53 1.5 1 .47.47.76.9 1 1.5.17.4.36 1.2.42 2.4.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.42 2.4-.24.6-.53 1-1 1.5-.47.47-.9.76-1.5 1-.4.17-1.2.36-2.4.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.4-.42-.6-.24-1-.53-1.5-1-.47-.47-.76-.9-1-1.5-.17-.4-.36-1.2-.42-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.4.24-.6.53-1 1-1.5.47-.47.9-.76 1.5-1 .4-.17 1.2-.36 2.4-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.51.01-4.75.07-1.02.05-1.57.22-1.94.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.79 1.2-.14.37-.31.92-.36 1.94C3.01 8.49 3 8.86 3 12s.01 3.51.07 4.75c.05 1.02.22 1.57.36 1.94.19.49.42.84.79 1.2.36.37.71.6 1.2.79.37.14.92.31 1.94.36 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.02-.05 1.57-.22 1.94-.36.49-.19.84-.42 1.2-.79.37-.36.6-.71.79-1.2.14-.37.31-.92.36-1.94.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.02-.22-1.57-.36-1.94a3.2 3.2 0 0 0-.79-1.2 3.2 3.2 0 0 0-1.2-.79c-.37-.14-.92-.31-1.94-.36C15.51 4.01 15.14 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.85-2a1.08 1.08 0 1 1-2.15 0 1.08 1.08 0 0 1 2.15 0Z" />
          </svg>
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-80 max-sm:h-[30px] max-sm:w-[30px]">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="white" className="max-sm:!w-[12px] max-sm:!h-[12px]">
            <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.5 9.5h5v12h-5v-12ZM9.5 9.5h4.8v1.64h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.33 6 7.66v6.67h-5v-5.92c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.28 1.54-2.28 3.13v6.02h-5v-12Z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}