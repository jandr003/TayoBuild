import { useEffect, useRef, useState } from 'react'
import { Target, Lightbulb } from 'lucide-react'

export default function AboutSection() {
  const [count, setCount] = useState(0)
  const statRef = useRef(null)
  const animationFrameRef = useRef(null)

  useEffect(() => {
    const target = 500
    const duration = 1500 

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current)
          }

          setCount(0)
          const startTime = performance.now()

          const animate = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * target))

            if (progress < 1) {
              animationFrameRef.current = requestAnimationFrame(animate)
            } else {
              setCount(target)
              animationFrameRef.current = null
            }
          }

          animationFrameRef.current = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.4 }
    )

    if (statRef.current) observer.observe(statRef.current)

    return () => {
      observer.disconnect()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <section id="about" className="relative overflow-hidden bg-white pb-24 pt-40 sm:pb-32 sm:pt-48">
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:flex-row lg:items-stretch">

        <div className="relative min-h-[360px] lg:min-h-[640px] lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400&auto=format&fit=crop"
            alt="TayoBuild construction and repair work"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div ref={statRef} className="absolute bottom-8 right-8 flex w-[58%] max-w-[260px] flex-col justify-center rounded-2xl bg-black/70 px-7 py-8 shadow-2xl ring-1 ring-white/10 backdrop-blur-sm sm:px-8 sm:py-9">
            <p className="font-['Poppins'] text-[44px] font-extrabold leading-none text-white sm:text-[52px]">
              {count}<span className="text-sky-400">+</span>
            </p>
            <div className="mt-3 h-px w-10 bg-sky-400/60" />
            <p className="mt-3 font-['Poppins'] text-[14px] font-medium leading-snug text-neutral-200">
              Verified Pros Nationwide
            </p>
          </div>
        </div>

        <div className="grid grid-rows-[1fr_auto] lg:w-1/2 lg:min-h-[640px]">

          <div className="flex flex-col justify-center px-6 py-14 pb-10 sm:px-10 lg:px-16 lg:py-0 lg:pb-10">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-sky-400" />
              <p className="font-['Poppins'] text-[13px] font-bold uppercase tracking-[0.15em] text-sky-500">
                About Us
              </p>
            </div>

            <h2 className="mt-7 font-['Poppins'] text-[32px] font-extrabold leading-[1.2] text-neutral-900 sm:text-[38px] lg:text-[42px]">
              For Homes,
              <br />
              <span className="text-sky-500">Buildings, And Spaces.</span>
            </h2>

            <p className="mt-6 max-w-[52ch] font-['Poppins'] text-[16px] font-normal leading-[1.8] text-neutral-500">
              TayoBuild is a modern on-demand skilled services platform that connects customers with verified carpenters and repair professionals for residential and small commercial needs. We provide fast and reliable access to trusted workers for repair, maintenance, and improvement services, ensuring quality workmanship and customer satisfaction in every project.
            </p>
          </div>

          <div className="grid grid-cols-2 divide-x divide-neutral-200 border-t border-neutral-200 bg-neutral-50 px-6 py-10 sm:px-10 lg:px-16">
            <div className="pr-6 sm:pr-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100">
                <Target className="h-5 w-5 text-sky-500" strokeWidth={2.2} />
              </div>
              <p className="mt-4 font-['Poppins'] text-[16px] font-bold text-neutral-900">
                Our Mission
              </p>
              <p className="mt-2 font-['Poppins'] text-[13.5px] font-normal leading-[1.7] text-neutral-500">
                Connecting homes, businesses, and communities with skilled and verified professionals for construction, repair, and improvement projects.
              </p>
            </div>

            <div className="pl-6 sm:pl-10">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-sky-100">
                <Lightbulb className="h-5 w-5 text-sky-500" strokeWidth={2.2} />
              </div>
              <p className="mt-4 font-['Poppins'] text-[16px] font-bold text-neutral-900">
                Our Vision
              </p>
              <p className="mt-2 font-['Poppins'] text-[13.5px] font-normal leading-[1.7] text-neutral-500">
                To be a trusted platform in the Philippines for building and improving homes, businesses, and public spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}