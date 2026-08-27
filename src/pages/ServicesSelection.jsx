import { useState } from 'react'
import onDemandBlack from '../assets/images/On demand services black.png'
import onDemandWhite from '../assets/images/On-Demand_Services_white.png'
import serviceBuildBlack from '../assets/images/Service_Build_black.png'
import serviceBuildWhite from '../assets/images/Service_Build_white.png'
import projectManagementBlack from '../assets/images/Project_Management_black.png'
import projectManagementWhite from '../assets/images/Project_Management_white.png'
import cardShapeUnselected from '../assets/images/Card_Shape_Unselected.png'
import cardShapeSelected from '../assets/images/Card_Shape_Selected.png'
import arrowButtonUnselected from '../assets/images/arrow_skyblue-unselected.png'
import arrowButtonSelected from '../assets/images/arrow_black-selected.png'

const serviceCards = [
	{
		title: 'On-Demand Services',
		description:
			'We connect customers with skilled and verified professionals, ensuring fast and reliable repair, maintenance, and improvement services.',
		iconBlack: onDemandBlack,
		iconWhite: onDemandWhite,
	},
	{
		title: 'Service & Build',
		description:
			'We manage the entire service process from booking to completion, ensuring fast, reliable, and quality work',
		iconBlack: serviceBuildBlack,
		iconWhite: serviceBuildWhite,
	},
	{
		title: 'Project Management',
		description:
			'We manage every detail from scheduling and coordination to quality control, ensuring smooth and efficient service delivery.',
		iconBlack: projectManagementBlack,
		iconWhite: projectManagementWhite,
	},
]

export default function ServicesSelection() {
	const [selectedTitle, setSelectedTitle] = useState(null)

	return (
		<section
			id="services"
			className="bg-white px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
		>
			<div className="mx-auto max-w-[1440px]">
				<h2 className="font-['Poppins'] text-[24px] font-black leading-[1.25] text-slate-950 sm:text-[30px] lg:text-[34px]">
					Our expertise in carpentry and<br />maintenance services
				</h2>

				<div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-12">
					{serviceCards.map((card) => {
						const isActive = card.title === selectedTitle

						return (
						<article
							key={card.title}
								onClick={() => setSelectedTitle(card.title)}
								className={`group relative aspect-[0.72] cursor-pointer transition-transform duration-300 sm:aspect-[0.78] ${
									isActive ? 'scale-[1.03]' : 'scale-100 hover:-translate-y-1'
								}`}
							>
							<img src={cardShapeUnselected} alt="" className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} draggable={false} />
							<img src={cardShapeSelected} alt="" className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} draggable={false} />

							{card.iconBlack && (
								<img src={card.iconBlack} alt="" className="absolute left-5 top-8 z-10 h-28 w-28 transition-opacity duration-300 group-hover:opacity-0 sm:top-10 sm:h-20 sm:w-20 lg:top-[44px] lg:h-28 lg:w-28" />
							)}
							{card.iconWhite && (
								<img src={card.iconWhite} alt="" className="absolute left-5 top-8 z-10 h-28 w-28 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:top-10 sm:h-20 sm:w-20 lg:top-[44px] lg:h-28 lg:w-28" />
							)}

							<div className="absolute inset-x-5 bottom-[130px] z-10 flex flex-col gap-2 sm:bottom-[140px] lg:bottom-[120px]">
								<h3 className={`font-['Poppins'] text-[25px] font-semibold leading-snug transition-colors duration-300 sm:text-[29px] lg:text-[30px] ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-white'}`}>
								{card.title}
								</h3>

								{card.description && (
								<p className={`font-['Poppins'] text-[17px] font-normal leading-[1.45] transition-colors duration-300 sm:text-[19px] lg:text-[19px] ${isActive ? 'text-white/90' : 'text-slate-700 group-hover:text-white/90'}`}>
									{card.description}
								</p>
								)}
							</div>

							<button
								type="button"
								onClick={(e) => { e.stopPropagation(); setSelectedTitle(card.title) }}
								className={`absolute bottom-10 left-5 z-10 font-['Poppins'] text-[24px] font-semibold underline underline-offset-4 transition-colors duration-300 sm:bottom-12 sm:text-[30px] lg:bottom-6 lg:text-[36px] ${isActive ? 'text-white' : 'text-black group-hover:text-white'}`}
							>
								Learn More
							</button>

							<button
								type="button"
								onClick={(e) => { e.stopPropagation(); setSelectedTitle(card.title) }}
								className="absolute bottom-0 right-0 z-10 h-[72px] w-[63px] active:scale-95 sm:h-[88px] sm:w-[77px]"
								aria-label={`Explore ${card.title}`}
							>
								<img src={arrowButtonUnselected} alt="" className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} draggable={false} />
								<img src={arrowButtonSelected} alt="" className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} draggable={false} />
							</button>
						</article>
						)
					})}
				</div>
			</div>
		</section>
	)
}