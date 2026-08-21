import { useState } from 'react'
import onDemandBlack from '../assets/images/On demand services black.png'
import onDemandWhite from '../assets/images/On-Demand_Services_white.png'
import serviceBuildBlack from '../assets/images/Service_Build_black.png'
import serviceBuildWhite from '../assets/images/Service_Build_white.png'
import projectManagementBlack from '../assets/images/Project_Management_black.png'
import projectManagementWhite from '../assets/images/Project_Management_white.png'
// New: the notched card-shape backgrounds (put these two files in your assets/images folder)
import cardShapeUnselected from '../assets/images/Card_Shape_Unselected.png'
import cardShapeSelected from '../assets/images/Card_Shape_Selected.png'
// New: the arrow-button images that sit in the notch (blue = unselected, black = selected)
import arrowButtonUnselected from '../assets/images/arrow_skyblue-unselected.png'
import arrowButtonSelected from '../assets/images/arrow_black-selected.png'

const serviceCards = [
	{
		title: 'On-Demand Services',
		iconBlack: onDemandBlack,
		iconWhite: onDemandWhite,
	},
	{
		title: 'Service & Build',
		iconBlack: serviceBuildBlack,
		iconWhite: serviceBuildWhite,
	},
	{
		title: 'Project Management',
		iconBlack: projectManagementBlack,
		iconWhite: projectManagementWhite,
	},
]

export default function ServicesSelection() {
	const [selectedTitle, setSelectedTitle] = useState(null)

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
								className={`group relative aspect-[0.76] cursor-pointer transition-transform duration-300 sm:aspect-[0.82] ${
									isActive ? 'scale-[1.03]' : 'scale-100 hover:-translate-y-1'
								}`}
							>
								{/* Card shape - unselected state (fades out when active/hovered) */}
								<img
									src={cardShapeUnselected}
									alt=""
									className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
										isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
									}`}
									draggable={false}
								/>

								{/* Card shape - selected/hover state (fades in when active/hovered) */}
								<img
									src={cardShapeSelected}
									alt=""
									className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
										isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
									}`}
									draggable={false}
								/>

								{/* Content sits above the two background shapes */}
								{card.iconBlack && (
									<img
										src={card.iconBlack}
										alt=""
										className="absolute left-5 top-6 z-10 h-8 w-8 transition-opacity duration-300 group-hover:opacity-0"
									/>
								)}
								{card.iconWhite && (
									<img
										src={card.iconWhite}
										alt=""
										className="absolute left-5 top-6 z-10 h-8 w-8 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
									/>
								)}

								<h3
									className={`absolute left-5 top-[76px] z-10 max-w-[70%] font-['Poppins'] text-[15px] font-semibold leading-snug transition-colors duration-300 ${
										isActive ? 'text-white' : 'text-slate-900 group-hover:text-white'
									}`}
								>
									{card.title}
								</h3>

								{/* Sits inside the notch that's already cut into the card shape image */}
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation()
										setSelectedTitle(card.title)
									}}
									className="absolute bottom-0 right-0 z-10 h-[74px] w-[74px] active:scale-95"
									aria-label={`Explore ${card.title}`}
								>
									{/* Unselected/default arrow button (blue) */}
									<img
										src={arrowButtonUnselected}
										alt=""
										className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
											isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'
										}`}
										draggable={false}
									/>
									{/* Selected/hover arrow button (black) */}
									<img
										src={arrowButtonSelected}
										alt=""
										className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
											isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
										}`}
										draggable={false}
									/>
								</button>
							</article>
						)
					})}
				</div>
			</div>
		</section>
	)
}