import { ArrowUpRight } from 'lucide-react'
import subtractImage from '../assets/images/Subtract.png'

const paragraphText = (
  <>
    TayoBuild is a modern on-demand skilled services platform that connects customers with verified carpenters and repair professionals for residential and small commercial needs. We provide fast and reliable access to trusted workers for repair, maintenance, and improvement services, ensuring quality workmanship and customer satisfaction in every project.
  </>
)

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white px-2 pt-28 pb-10 sm:px-3 sm:pt-32 lg:px-3 lg:pt-40 lg:pb-12"
    >
      <div className="relative mx-auto w-[97%] max-w-[calc(96vw-1.5rem)] sm:w-[95%] md:w-[93%] lg:hidden">
        <div className="relative rounded-2xl bg-[#f4f4f4] px-6 pb-24 pt-6 sm:px-10 sm:pb-28 sm:pt-8 md:px-12 md:pb-32 md:pt-9">
          <div className="absolute left-0 top-0 h-[38px] w-[88px] rounded-br-2xl bg-white sm:h-[42px] sm:w-[102px] md:h-[46px] md:w-[110px]" />

          <p className="relative z-10 top-[-20px] -ml-3 font-['Poppins'] text-[15px] font-extrabold text-[#3676BD] sm:top-[-24px] sm:-ml-4 sm:text-[16px] md:top-[-28px] md:-ml-5 md:text-[17px]">
            About Us
          </p>

          <p className="mt-6 font-['Poppins'] text-[25px] font-normal leading-[1.36] text-black sm:mt-7 sm:text-[28px] sm:leading-[1.38] md:mt-8 md:text-[30px] md:leading-[1.36]">
            {paragraphText}
          </p>

          <div className="absolute bottom-0 right-0 h-[70px] w-[62px] rounded-tl-2xl bg-white sm:h-[122px] sm:w-[108px] md:h-[130px] md:w-[116px]" />

          <button
            type="button"
            className="absolute bottom-0 right-0 z-10 flex h-[58px] w-[52px] items-center justify-center rounded-[16px] bg-sky-400 text-white shadow-[0_16px_30px_rgba(56,189,248,0.26)] transition hover:bg-sky-500 active:scale-95 sm:h-[100px] sm:w-[88px] sm:rounded-[26px] md:h-[108px] md:w-[96px] md:rounded-[28px]"
            aria-label="Explore about TayoBuild"
          >
            <span className="flex h-9 w-9 items-center justify-center sm:h-[68px] sm:w-[68px] md:h-[74px] md:w-[74px]">
              <ArrowUpRight className="h-8 w-8 sm:h-[60px] sm:w-[60px] md:h-[66px] md:w-[66px]" strokeWidth={1.8} />
            </span>
          </button>
        </div>
      </div>

      <div className="relative mx-auto hidden h-auto w-[92%] lg:block lg:aspect-[1332/460]">
        <img
          src={subtractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-fill"
          aria-hidden="true"
        />

        <p className="absolute left-[0%] top-[5%] z-10 font-['Poppins'] text-[20px] font-extrabold text-[#3676BD]">
          About Us
        </p>

        <div className="absolute left-[6.7%] right-[2%] top-[20%] z-10">
          <p className="font-['Poppins'] text-[43px] font-normal leading-[1.26] text-black">
            TayoBuild is a modern on-demand skilled services platform that connects customers with verified carpenters and repair professionals for residential and small commercial needs. We provide fast and reliable access to trusted workers for repair, maintenance, and improvement services, ensuring quality workmanship and <br />customer satisfaction in every project.
          </p>
        </div>

        <button
          type="button"
          className="absolute bottom-0 right-0 z-10 flex h-[124px] w-[110px] items-center justify-center rounded-[31px] bg-sky-400 text-white shadow-[0_16px_30px_rgba(56,189,248,0.26)] transition hover:bg-sky-500 active:scale-95"
          aria-label="Explore about TayoBuild"
        >
          <span className="flex h-[82px] w-[82px] items-center justify-center">
            <ArrowUpRight className="h-[75px] w-[75px]" strokeWidth={1.8} />
          </span>
        </button>
      </div>
    </section>
  )
}