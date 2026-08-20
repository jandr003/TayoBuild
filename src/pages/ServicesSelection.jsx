import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import onDemandBlack from '../assets/images/On demand services black.png'
import onDemandWhite from '../assets/images/On-Demand_Services_white.png'

const serviceCards = [
	{
		title: 'On-Demand Services',
		iconBlack: onDemandBlack,
		iconWhite: onDemandWhite,
	},
	{ title: 'Service & Build' },
	{ title: 'Project Management' },
]

export default function ServicesSelection() {
	const [selectedTitle, setSelectedTitle] = useState(serviceCards[0].title)

	return (
		<section
			id="services"
			className="bg-white pl-4 pr-4 py-16 sm:pl-1 sm:pr-8 sm:py-20 lg:pl-0 lg:pr-[4.7%] lg:py-24"
		>
			<div className="mx-auto max-w-[1440px]">
				<h2 className="font-['Poppins'] text-[24px] font-black leading-[1.25] text-slate-950 sm:text-[30px] lg:text-[34px] lg:-ml-10">
					Our expertise in carpentry and<br />maintenance services
				</h2>

				<div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
					{serviceCards.map((card) => {
						const isActive = card.title === selectedTitle

						return (
							<article
								key={card.title}
								onClick={() => setSelectedTitle(card.title)}
								className={`relative aspect-[0.76] cursor-pointer overflow-hidden rounded-[22px] transition-all duration-300 sm:aspect-[0.82] lg:rounded-[24px] ${
									isActive
										? 'bg-sky-400 shadow-xl shadow-sky-200 scale-[1.03] ring-2 ring-sky-500'
										: 'bg-[#f4f4f4] hover:bg-[#ececec] scale-100'
								}`}
							>
								{card.iconBlack && (
									<img
										src={isActive ? card.iconWhite : card.iconBlack}
										alt=""
										className="absolute left-5 top-6 h-8 w-8 transition-opacity duration-300"
									/>
								)}

								<h3
									className={`absolute left-5 top-[76px] max-w-[70%] font-['Poppins'] text-[15px] font-semibold leading-snug transition-colors duration-300 ${
										isActive ? 'text-white' : 'text-slate-900'
									}`}
								>
									{card.title}
								</h3>

								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation()
										setSelectedTitle(card.title)
									}}
									className={`absolute bottom-0 right-0 z-10 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] text-white transition-all duration-300 active:scale-95 lg:h-[62px] lg:w-[62px] ${
										isActive ? 'bg-black hover:bg-slate-800' : 'bg-sky-400 hover:bg-sky-500'
									}`}
									aria-label={`Explore ${card.title}`}
								>
									<ArrowUpRight className="h-9 w-9" strokeWidth={1.8} />
								</button>
							</article>
						)
					})}
				</div>
			</div>
		</section>
	)
}