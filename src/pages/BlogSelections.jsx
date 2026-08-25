import { useRef } from 'react'
import { Star, ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react'
import ruezelAvatar from '../assets/images/Ellipse 09.png'

const testimonials = [
  {
    id: 'review-1',
    rating: 5,
    quote:
      'TayoBuild delivered our retail space fit-out on time and within budget. Fast response, quality workmanship, and clear communication throughout the project.',
    title: 'Fast, Reliable, and On-Time!',
    name: 'Ruezel G.',
    role: 'Director, Bennett Retail Group',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=900&h=700&fit=crop',
    avatar: ruezelAvatar,
  },
  {
    id: 'review-2',
    rating: 5,
    quote:
      'TayoBuild sent a licensed plumber who caught a hidden leak in our building. Transparent pricing, no surprise charges on the bill.',
    title: 'No Surprises, Just Solid Work',
    name: 'Marisol Tan',
    role: 'Senior Project Manager, Crestpoint Builders',
    image:
      'https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=900&h=700&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=faces',
  },
  {
    id: 'review-3',
    rating: 4,
    quote:
      'Booked a carpenter for built-in shelving across several of our units in one afternoon. Verified profile, showed up on time, finish quality held up months later.',
    title: 'Verified Carpenter, Zero Guesswork',
    name: 'Carlo Villanueva',
    role: 'Property Manager, CitySquare Properties',
    image:
      'https://images.unsplash.com/photo-1631396326646-c06a935ff3a6?w=900&h=700&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces',
  },
  {
    id: 'review-4',
    rating: 5,
    quote:
      'Nag-book kami ng electrician for our rewiring project, dumating siya on time at maayos ang trabaho. Sulit sa presyo at walang extra charges.',
    title: 'Maayos at Walang Palusot',
    name: 'Jenny Reyes',
    role: 'Homeowner, Pasig City',
    image:
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&h=700&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces',
  },
  {
    id: 'review-5',
    rating: 5,
    quote:
      'Our painting crew arrived with a full materials list and finished the office repaint ahead of schedule. Clear communication and progress updates the whole way through.',
    title: 'Smooth From Booking to Finish',
    name: 'Miguel Santos',
    role: 'Executive Director, Orvella Group',
    image:
      'https://images.unsplash.com/photo-1652829069834-2c05031199c5?w=900&h=700&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=faces',
  },
  {
    id: 'review-6',
    rating: 4,
    quote:
      'Aircon technician diagnosed the issue in minutes and had it fixed the same day. Transparent quote before any work started, walang gulat sa bill.',
    title: 'Same-Day Fix, Transparent Pricing',
    name: 'Ana Dela Cruz',
    role: 'Homeowner, Caloocan City',
    image:
      'https://images.unsplash.com/photo-1615774925655-a0e97fc85c14?w=900&h=700&fit=crop',
    avatar:
      'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=200&h=200&fit=crop&crop=faces',
  },
]

function StarRow({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-orange-500 text-orange-500' : 'fill-slate-200 text-slate-200'}`}
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

function ReviewCard({ review, index }) {
  return (
    <article className="group flex h-full w-[300px] shrink-0 flex-col overflow-hidden rounded-2xl bg-[#F5F5F5] font-['Poppins'] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.10)] sm:w-[340px] md:w-full md:flex-row lg:flex-col lg:w-full">
      <div className="relative h-[180px] w-full shrink-0 overflow-hidden md:h-[200px] md:w-[42%] lg:h-[160px] lg:w-full">
        <img
          src={review.image}
          alt=""
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <StarRow rating={review.rating} />
          <span className="text-[13px] font-bold text-[#c9c9c9]">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        <h3 className="mt-3 text-[16px] font-bold leading-snug text-slate-950 sm:text-[18px]">
          {review.title}
        </h3>

        <p className="mt-2 flex-1 text-[13px] font-normal leading-relaxed text-[#6f6f6f] sm:text-[14px]">
          {review.quote}
        </p>

        <div className="mt-5 flex items-center gap-3">
          <img
            src={review.avatar}
            alt={review.name}
            className="h-9 w-9 shrink-0 rounded-full object-cover"
          />
          <div>
            <p className="text-[13px] font-bold leading-tight text-slate-950 sm:text-[14px]">
              {review.name}
            </p>
            <p className="text-[11px] font-medium leading-tight text-[#6f6f6f] sm:text-[12px]">
              {review.role}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function BlogSelections() {
  const scrollerRef = useRef(null)

  const scrollByCard = (direction) => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const cardWidth = scroller.firstElementChild?.getBoundingClientRect().width ?? 320
    scroller.scrollBy({ left: direction * (cardWidth + 20), behavior: 'smooth' })
  }

  return (
    <section id="blog" className="bg-white px-6 py-16 sm:px-10 md:px-10 lg:px-[42px] lg:py-20">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-[620px]">
          <h2 className="font-['Poppins'] text-[24px] font-black leading-[1.25] text-slate-950 sm:text-[28px] lg:text-[32px]">
            Trusted for Homes, Buildings, and Commercial Projects Across the Metro
          </h2>
        </div>

        <div className="hidden shrink-0 items-center gap-3 sm:flex">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-slate-950 px-5 py-2.5 font-['Poppins'] text-[13px] font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white"
          >
            View all reviews
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full bg-sky-400 px-5 py-2.5 font-['Poppins'] text-[13px] font-semibold text-white transition hover:bg-sky-500"
          >
            Add a Review
            <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((review, index) => (
          <div key={review.id} className="snap-start">
            <ReviewCard review={review} index={index} />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3 lg:hidden">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-950 transition hover:border-sky-400 hover:text-sky-500 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={2.5} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next review"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-950 transition hover:border-sky-400 hover:text-sky-500 active:scale-95"
        >
          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
        </button>
      </div>

      <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-3">
        {testimonials.map((review, index) => (
          <ReviewCard key={review.id} review={review} index={index} />
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:hidden">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-950 px-5 py-3 font-['Poppins'] text-[13px] font-semibold text-slate-950 transition hover:bg-slate-950 hover:text-white"
        >
          View all reviews
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-3 font-['Poppins'] text-[13px] font-semibold text-white transition hover:bg-sky-500"
        >
          Add a Review
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}