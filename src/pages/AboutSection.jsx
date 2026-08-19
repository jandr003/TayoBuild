import { ArrowUpRight } from 'lucide-react'
import subtractImage from '../assets/images/Subtract.png'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-2 pt-28 pb-10 sm:px-3 sm:pt-32 lg:px-3 lg:pt-40 lg:pb-12"
    >
      <div className="relative mx-auto h-[260px] w-full max-w-[calc(100vw-1.5rem)] sm:h-[320px] md:h-[360px] lg:aspect-[1332/404] lg:h-auto">
        <div className="absolute inset-0 lg:hidden">
          <div className="absolute bottom-[72px] left-[86px] right-0 top-0 rounded-t-2xl bg-[#f4f4f4] sm:bottom-[138px] sm:left-[110px] md:bottom-[148px] md:left-[128px]" />
          <div className="absolute bottom-0 left-0 right-[72px] top-[54px] rounded-2xl bg-[#f4f4f4] sm:right-[138px] sm:top-[68px] md:right-[148px] md:top-[78px]" />
        </div>

        <img
          src={subtractImage}
          alt=""
          className="absolute inset-0 hidden h-full w-full object-fill lg:block"
          aria-hidden="true"
        />

        <p className="absolute left-2 top-7 z-10 font-['Poppins'] text-[16px] font-extrabold text-[#3676BD] sm:left-3 sm:top-8 sm:text-[18px] lg:left-[10px] lg:top-[22px] lg:text-[20px]">
          About Us
        </p>

        <div className="absolute left-8 right-[82px] top-[64px] z-10 sm:left-12 sm:right-[145px] sm:top-[72px] md:left-14 md:right-[165px] md:top-[82px] lg:left-[96px] lg:right-[260px] lg:top-[182px]">
          <p className="font-['Poppins'] text-[15px] font-normal leading-[1.32] text-black sm:text-[21px] sm:leading-[1.34] md:text-[24px] md:leading-[1.34] lg:text-[42px] lg:leading-[1.12]">
            TayoBuild is a modern on-demand skilled services platform that connects customers with verified carpenters and repair professionals for residential and small commercial needs. We provide fast and reliable access to trusted workers for repair, maintenance, and improvement services, ensuring quality workmanship and customer satisfaction in every project.
          </p>
        </div>

        <button
          type="button"
          className="absolute bottom-0 right-0 z-10 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] bg-sky-400 text-white shadow-[0_16px_30px_rgba(56,189,248,0.26)] transition hover:bg-sky-500 active:scale-95 sm:h-[120px] sm:w-[120px] sm:rounded-[34px] md:h-[128px] md:w-[128px] md:rounded-[36px] lg:h-[128px] lg:w-[128px] lg:rounded-[36px]"
          aria-label="Explore about TayoBuild"
        >
          <span className="flex h-10 w-10 items-center justify-center sm:h-[80px] sm:w-[80px] md:h-[86px] md:w-[86px] lg:h-[86px] lg:w-[86px]">
            <ArrowUpRight className="h-9 w-9 sm:h-[72px] sm:w-[72px] md:h-[76px] md:w-[76px] lg:h-[76px] lg:w-[76px]" strokeWidth={1.8} />
          </span>
        </button>
      </div>
    </section>
  )
}
