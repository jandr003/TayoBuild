import { useEffect, useState } from 'react'
import { ArrowUpRight, Contact, Star } from 'lucide-react'
import buildNowImage from '../assets/images/TAYOBUILD-NOW1.png'
import maskGroupImage from '../assets/images/Mask group1.png'
import solutionImage from '../assets/images/TayoBuildNow-Solution.png'
import maskGroupBuildNowImage from '../assets/images/Mask group-TAYOBUILDNOW.png'
import mobileSolutionBuildingImage from '../assets/images/TayoBuildSolutions-Building-1.png'
import trustedImage from '../assets/images/Trusted.png'
import fastAndEasyImage from '../assets/images/Fast and Easy.png'
import qualityWorkImage from '../assets/images/Quality Work.png'
import reviewAvatarOne from '../assets/images/Ellipse 6.png'
import reviewAvatarTwo from '../assets/images/Ellipse 07.png'
import reviewAvatarThree from '../assets/images/Ellipse 08.png'
import AboutSection from './AboutSection.jsx'
import ServicesSelection from './ServicesSelection.jsx'
import ProjectsSelection from './ProjectsSelection.jsx'
import LocationsSelection from './LocationsSelection.jsx'
import BlogSelections from './BlogSelections.jsx'
import ContactSelection from './ContactSelection.jsx'
import Footer from './Footer.jsx'

const desktopBuildingSlides = [
  buildNowImage,
  maskGroupImage,
  solutionImage,
  maskGroupBuildNowImage,
]

const reviewAvatars = [
  reviewAvatarOne,
  reviewAvatarTwo,
  reviewAvatarThree,
]

function ReviewCard({
  animationKey,
  className,
  starClassName,
  ratingClassName,
  reviewClassName,
  avatarClassName,
  plusClassName,
}) {
  const [ratingValue, setRatingValue] = useState(4.6)
  const [reviewCount, setReviewCount] = useState(1000)

  useEffect(() => {
    if (!animationKey) {
      return undefined
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotion.matches) {
      setRatingValue(4.6)
      setReviewCount(1000)
      return undefined
    }

    const duration = 900
    const startTime = performance.now()
    let frameId

    const animateReviewStats = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easedProgress = 1 - Math.pow(1 - progress, 3)

      setRatingValue(Math.round(easedProgress * 46) / 10)
      setReviewCount(Math.round(easedProgress * 1000))

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animateReviewStats)
        return
      }

      setRatingValue(4.6)
      setReviewCount(1000)
    }

    setRatingValue(0)
    setReviewCount(0)
    frameId = window.requestAnimationFrame(animateReviewStats)

    return () => window.cancelAnimationFrame(frameId)
  }, [animationKey])

  return (
    <div
      className={`flex flex-col items-start justify-center rounded-xl bg-white font-['Poppins'] text-left shadow-[0_18px_40px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 ${className}`}
      aria-label={`${ratingValue.toFixed(1)} rating from ${reviewCount.toLocaleString()}+ reviews`}
    >
      <div className="flex w-full items-center justify-between gap-3">
        <div className="flex items-center justify-start gap-2.5">
          <Star
            className={`fill-orange-500 text-orange-500 ${starClassName}`}
            strokeWidth={2.5}
            aria-hidden="true"
          />
          <p className={`font-extrabold leading-none text-black ${ratingClassName}`}>
            {ratingValue.toFixed(1)}
          </p>
        </div>

        <div className="flex shrink-0 items-center -space-x-4" aria-hidden="true">
          {reviewAvatars.map((avatar) => (
            <img
              key={avatar}
              src={avatar}
              alt=""
              className={`rounded-full border-2 border-white object-cover ${avatarClassName}`}
            />
          ))}
          <span
            className={`relative flex shrink-0 items-center justify-center rounded-full border-2 border-white bg-sky-500 ${plusClassName}`}
          >
            <span className="absolute h-[2px] w-1/2 rounded-full bg-white" />
            <span className="absolute h-1/2 w-[2px] rounded-full bg-white" />
          </span>
        </div>
      </div>
      <p className={`font-medium leading-none text-[#6f6f6f] ${reviewClassName}`}>
        From {reviewCount.toLocaleString()}+ Reviews
      </p>
    </div>
  )
}

function BuildingImageSlider() {
  const buildingSlides = desktopBuildingSlides
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotion.matches) {
      return undefined
    }

    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % buildingSlides.length)
    }, 4000)

    return () => window.clearInterval(slideTimer)
  }, [buildingSlides.length])

  return (
    <div
      className="hero-building-slider hero-building-slider--desktop"
      aria-hidden="true"
    >
      {buildingSlides.map((slide, index) => (
        <img
          key={slide}
          src={slide}
          alt=""
          className={`hero-building-slider__image ${
            activeSlide === index ? 'hero-building-slider__image--active' : ''
          }`}
        />
      ))}
    </div>
  )
}

export default function Home({ reviewAnimationKey = 0 }) {
  return (
    <main className="bg-white">
      <section className="relative min-h-[590px] overflow-hidden bg-white px-6 pt-14 pb-16 sm:px-10 md:px-10 lg:px-[42px] lg:pt-14 lg:pb-16">
        <div className="absolute inset-y-0 right-0 hidden w-[74%] overflow-hidden lg:block">
          <BuildingImageSlider />
          <div className="absolute inset-y-0 left-0 w-[54%] bg-gradient-to-r from-white via-white/90 to-transparent" />
          <ReviewCard
            animationKey={reviewAnimationKey}
            className="absolute bottom-7 right-[20%] h-[104px] w-[360px] px-5"
            starClassName="h-9 w-9"
            ratingClassName="text-[26px]"
            reviewClassName="mt-2 text-[19px]"
            avatarClassName="h-11 w-11"
            plusClassName="h-11 w-11"
          />
        </div>

        <div className="relative z-10 mt-6 max-w-[980px]">
          <h1 className="font-['Poppins'] text-[54px] font-black leading-[1.2] tracking-normal text-black sm:text-[64px] md:text-[72px] lg:text-[78px]">
            <span className="block">Fixing spaces</span>
            <span className="block sm:whitespace-nowrap">
              one <span className="text-sky-400">project</span> at a time.
            </span>
          </h1>

          <p className="mt-7 max-w-[780px] font-['Poppins'] text-[19px] font-normal leading-[1.55] text-[#6f6f6f] sm:text-[20px] md:text-[21px]">
            <span className="block">
              TayoBuild connects you with trusted builders and service experts
            </span>
            <span className="block">
              for hassle-free repairs, renovations, and home improvements.
            </span>
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-2.5 gap-y-3 xs:gap-x-3 sm:gap-x-6 lg:gap-x-8">
            <button
              type="button"
              className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-sky-400 px-3 font-['Poppins'] text-[11px] font-semibold text-white transition hover:bg-sky-500 active:scale-95 sm:h-12 sm:gap-3 sm:px-7 sm:text-[14px]"
            >
              Book a Carpenter
              <ArrowUpRight className="h-[13px] w-[13px] sm:h-[17px] sm:w-[17px]" strokeWidth={2.5} />
            </button>

            <button
              type="button"
              className="shrink-0 whitespace-nowrap font-['Poppins'] text-[11px] font-semibold text-slate-950 underline underline-offset-2 transition hover:text-sky-500 active:scale-95 sm:text-[14px]"
            >
              Get a free consultation
            </button>
          </div>

          <div className="mt-16 grid max-w-[620px] grid-cols-2 items-center gap-x-7 gap-y-8 font-['Poppins'] sm:mt-[72px] sm:gap-x-12 lg:max-w-[800px] lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
            <div className="flex min-w-0 items-center gap-2">
              <img
                src={trustedImage}
                alt=""
                className="h-[46px] w-[46px] shrink-0 object-contain"
                aria-hidden="true"
              />
              <div>
                <p className="text-[14px] font-bold leading-none text-slate-950">
                  Trusted
                </p>
                <p className="mt-1 text-[12px] font-medium leading-none text-neutral-500">
                  Verified Carpenters
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <img
                src={fastAndEasyImage}
                alt=""
                className="h-[50px] w-[50px] shrink-0 object-contain"
                aria-hidden="true"
              />
              <div>
                <p className="text-[14px] font-bold leading-none text-slate-950">
                  Fast and Easy
                </p>
                <p className="mt-1 text-[12px] font-medium leading-none text-neutral-500">
                  Quick Booking
                </p>
              </div>
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <img
                src={qualityWorkImage}
                alt=""
                className="h-[54px] w-[54px] shrink-0 object-contain"
                aria-hidden="true"
              />
              <div className="-ml-2">
                <p className="text-[14px] font-bold leading-none text-slate-950">
                  Quality Work
                </p>
                <p className="mt-1 text-[12px] font-medium leading-none text-neutral-500">
                  Satisfaction Guaranteed
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden lg:hidden">
          <img
            src={mobileSolutionBuildingImage}
            alt="Modern building exterior"
            className="h-auto w-full object-contain opacity-85 brightness-110 contrast-90"
          />
          <ReviewCard
            animationKey={reviewAnimationKey}
            className="absolute bottom-5 right-6 h-[78px] w-[260px] px-4 shadow-[0_14px_32px_rgba(15,23,42,0.14)] sm:bottom-8 sm:right-10 sm:h-[96px] sm:w-[340px] sm:px-5 md:right-[16%] md:h-[104px] md:w-[360px]"
            starClassName="h-6 w-6 sm:h-8 sm:w-8 md:h-9 md:w-9"
            ratingClassName="text-[19px] sm:text-[24px] md:text-[26px]"
            reviewClassName="mt-1 text-[13px] sm:mt-1.5 sm:text-[17px] md:mt-2 md:text-[19px]"
            avatarClassName="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11"
            plusClassName="h-8 w-8 sm:h-10 sm:w-10 md:h-11 md:w-11"
          />
        </div>
      </section>

      <AboutSection />
      <ServicesSelection />
      <ProjectsSelection />
      <LocationsSelection />
      <BlogSelections />
      <ContactSelection />
      <Footer />
    </main>
  )
}