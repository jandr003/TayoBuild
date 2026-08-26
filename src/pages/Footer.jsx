export default function Footer() {
  return (
    <footer className="relative min-h-[220px] px-6 py-10 font-['Poppins'] sm:px-10 lg:px-[42px]">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1390 220"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M28,0 L1362,0 A28,28 0 0 1 1390,28 L1390,174 L1281,174 A16,16 0 0 0 1265,190 L1265,220 L0,220 L0,28 A28,28 0 0 1 28,0 Z"
          fill="#101012"
        />
      </svg>

        <div className="absolute bottom-1 right-6 z-10 flex gap-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-80">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                </svg>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-80">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2 .25 2.4.42.6.24 1 .53 1.5 1 .47.47.76.9 1 1.5.17.4.36 1.2.42 2.4.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2-.42 2.4-.24.6-.53 1-1 1.5-.47.47-.9.76-1.5 1-.4.17-1.2.36-2.4.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2-.25-2.4-.42-.6-.24-1-.53-1.5-1-.47-.47-.76-.9-1-1.5-.17-.4-.36-1.2-.42-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2 .42-2.4.24-.6.53-1 1-1.5.47-.47.9-.76 1.5-1 .4-.17 1.2-.36 2.4-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.51.01-4.75.07-1.02.05-1.57.22-1.94.36-.49.19-.84.42-1.2.79-.37.36-.6.71-.79 1.2-.14.37-.31.92-.36 1.94C3.01 8.49 3 8.86 3 12s.01 3.51.07 4.75c.05 1.02.22 1.57.36 1.94.19.49.42.84.79 1.2.36.37.71.6 1.2.79.37.14.92.31 1.94.36 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.02-.05 1.57-.22 1.94-.36.49-.19.84-.42 1.2-.79.37-.36.6-.71.79-1.2.14-.37.31-.92.36-1.94.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.02-.22-1.57-.36-1.94a3.2 3.2 0 0 0-.79-1.2 3.2 3.2 0 0 0-1.2-.79c-.37-.14-.92-.31-1.94-.36C15.51 4.01 15.14 4 12 4Zm0 3.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 1.8a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.85-2a1.08 1.08 0 1 1-2.15 0 1.08 1.08 0 0 1 2.15 0Z" />
                </svg>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-opacity hover:opacity-80">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.5 9.5h5v12h-5v-12ZM9.5 9.5h4.8v1.64h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.33 6 7.66v6.67h-5v-5.92c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.28 1.54-2.28 3.13v6.02h-5v-12Z" />
                </svg>
            </a>
        </div>
    </footer>
  )
}