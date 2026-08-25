import { useState } from 'react'
import { Plus, X } from 'lucide-react'

const trustPoints = [
  {
    title: '20+ Years of construction experience',
    details:
      'Backed by over 20 years of industry experience, we deliver reliable workmanship and professional service on every project.',
  },
  {
    title: 'On-time & cost-efficient service execution',
    details:
      'We prioritize efficient service and cost-effective solutions, ensuring every project is completed on time and within budget.',
  },
  {
    title: 'Licensed, insured, and service-certified',
    details:
      'Our qualified team is fully licensed, insured, and certified to provide safe, reliable, and professional services.',
  },
  {
    title: 'Fast & efficient service practices',
    details:
      'We provide prompt and efficient service, maintaining high standards of quality while keeping projects on schedule.',
  },
]

export default function LocationsSelection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const togglePoint = (index) => {
    setActiveIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section
      id="locations"
      className="bg-white px-4 pb-16 pt-20 font-['Poppins'] lg:px-7 lg:pb-24 lg:pt-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">

        <div>
          <h2
            style={{ color: '#020617' }}
            className="text-4xl font-extrabold leading-tight sm:text-5xl"
          >
            Why business trust elite
            <br />
            builders Inc.?
          </h2>

          <p className="mt-6 max-w-md text-justify text-slate-500">
            TayoBuild is a trusted service platform providing fast, reliable,
            and cost-effective repair and maintenance solutions. Our verified
            and skilled professionals ensure safe, high-quality workmanship
            and efficient service for every project.
          </p>

          <button
            type="button"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-500 active:scale-95"
          >
            Start a project
            <span className="text-base">↗</span>
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {trustPoints.map((point, index) => {
            const isActive = activeIndex === index

            return (
              <div
                key={point.title}
                className={`relative overflow-hidden rounded-[22px] transition-colors duration-300 lg:overflow-visible lg:rounded-none lg:bg-transparent ${
                  isActive ? 'bg-sky-400' : 'bg-[#F5F5F5]'
                }`}
              >
                {/* Desktop/large-screen notch — UNCHANGED, exactly as approved.
                    Only rendered at lg+ so mobile/tablet never hits the
                    stretched-viewBox bug. */}
                <svg
                  className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
                  viewBox="0 0 665 199"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <mask id={`notchMask-${index}`}>
                      <rect x="0" y="0" width="665" height="199" rx="27" fill="white" />
                      <rect x="575" y="28" width="70" height="70" rx="18" fill="black" />
                      <rect x="620" y="42" width="50" height="42" fill="black" />
                    </mask>
                  </defs>

                  <rect
                    x="0"
                    y="0"
                    width="665"
                    height="199"
                    rx="27"
                    fill={isActive ? '#38B6FF' : '#F5F5F5'}
                    mask={`url(#notchMask-${index})`}
                  />
                </svg>

                {/* Mobile/tablet notch — fixed pixel size, anchored to the
                    corner, clipped by the card's own overflow-hidden. No
                    viewBox scaling, so it stays correct no matter how tall
                    the card gets from text wrapping. Hidden at lg+. */}
                <div
                  className="pointer-events-none absolute -right-[10px] top-[12px] h-11 w-14 rounded-xl bg-white lg:hidden"
                  aria-hidden="true"
                />

                <div
                  className={`relative z-10 rounded-[22px] py-4 pl-5 pr-16 transition-colors duration-300 lg:rounded-[27px] lg:py-5 lg:pl-6 ${
                    isActive ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => togglePoint(index)}
                    className="w-full text-left"
                  >
                    <span className="block text-base font-semibold leading-snug lg:text-lg">
                      {point.title}
                    </span>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isActive
                          ? 'mt-3 grid-rows-[1fr] opacity-100'
                          : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <p className="overflow-hidden text-sm leading-relaxed text-white/90">
                        {point.details}
                      </p>
                    </div>
                  </button>

                  {/* Desktop/large-screen +/x button — UNCHANGED positioning. */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePoint(index)
                    }}
                    aria-label={isActive ? 'Collapse' : 'Expand'}
                    style={{
                      left: '88.72%',
                      top: '21.61%',
                      width: '6.02%',
                      height: '20.10%',
                    }}
                    className="absolute z-30 hidden items-center justify-center rounded-2xl bg-[#0f172a] text-white shadow-md transition-transform duration-200 ease-out hover:scale-105 active:scale-95 lg:flex"
                  >
                    {isActive ? (
                      <X size={17} strokeWidth={2.5} />
                    ) : (
                      <Plus size={17} strokeWidth={2.5} />
                    )}
                  </button>

                  {/* Mobile/tablet +/x button — fixed pixel position matching
                      the fixed-pixel notch above. Hidden at lg+. */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      togglePoint(index)
                    }}
                    aria-label={isActive ? 'Collapse' : 'Expand'}
                    className="absolute right-[4px] top-[14px] z-30 flex h-9 w-9 items-center justify-center rounded-xl bg-[#0f172a] text-white shadow-md transition-transform duration-200 ease-out hover:scale-105 active:scale-95 lg:hidden"
                  >
                    {isActive ? (
                      <X size={15} strokeWidth={2.5} />
                    ) : (
                      <Plus size={15} strokeWidth={2.5} />
                    )}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}