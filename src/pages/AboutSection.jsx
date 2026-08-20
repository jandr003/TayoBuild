import { ArrowUpRight } from 'lucide-react'
import subtractImage from '../assets/images/Subtract.png'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-2 pt-28 pb-10 sm:px-3 sm:pt-32 lg:px-3 lg:pt-40 lg:pb-12"
    >
      <div className="relative mx-auto h-[350px] w-full max-w-[calc(100vw-1.5rem)] sm:h-[340px] md:h-[360px] lg:aspect-[1332/404] lg:h-auto">
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

        <p className="absolute left-2 top-7 z-10 font-['Poppins'] text-[16px] font-extrabold text-[#3676BD] sm:left-3 sm:top-8 sm:text-[18px] lg:left-[0%] lg:top-[5%] lg:text-[24px]">
          About Us
        </p>

        <div className="absolute left-6 right-[28px] top-[78px] z-10 sm:left-10 sm:right-[90px] sm:top-[88px] md:left-12 md:right-[110px] md:top-[94px] lg:left-[6.7%] lg:right-[2%] lg:top-[24%]">
          <p className="font-['Poppins'] text-[18px] font-normal leading-[1.36] text-black sm:text-[21px] sm:leading-[1.38] md:text-[24px] md:leading-[1.36] lg:text-[46px] lg:leading-[1.26]">
            TayoBuild is a modern on-demand skilled services platform that connects customers with verified carpenters and repair professionals for residential and small commercial needs. We provide fast and reliable access to trusted workers for repair, maintenance, and improvement services, ensuring quality workmanship and <br className="lg:hidden" />customer satisfaction <br className="hidden lg:block" />in every project.
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
