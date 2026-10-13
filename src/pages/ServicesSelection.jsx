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

				<div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-8 min-[1280px]:gap-12">
					{serviceCards.map((card) => {
						const isActive = card.title === selectedTitle

						return (
							<article
								key={card.title}
								onClick={() => setSelectedTitle(card.title)}
								className={`group relative flex aspect-[0.72] cursor-pointer flex-col transition-transform duration-300 sm:aspect-auto sm:min-h-[430px] lg:min-h-[400px] min-[1280px]:aspect-[0.78] min-[1280px]:min-h-0 ${
									isActive ? 'scale-[1.03]' : 'scale-100 hover:-translate-y-1'
								}`}
							>
								<img
									src={cardShapeUnselected}
									alt=""
									className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
									draggable={false}
								/>
								<img
									src={cardShapeSelected}
									alt=""
									className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
									draggable={false}
								/>

								<div className="relative z-10 flex flex-1 flex-col px-5 pt-8 pb-10 sm:pt-10 sm:pb-12 lg:pt-6 lg:pb-5 min-[1280px]:pt-[44px] min-[1280px]:pb-6">
									<div className="relative h-32 w-32 shrink-0 sm:h-36 sm:w-36 lg:h-28 lg:w-28 min-[1280px]:h-[185px] min-[1280px]:w-[185px] min-[1440px]:h-[220px] min-[1440px]:w-[220px]">
										{card.iconBlack && (
											<img
												src={card.iconBlack}
												alt=""
												className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
											/>
										)}
										{card.iconWhite && (
											<img
												src={card.iconWhite}
												alt=""
												className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
											/>
										)}
									</div>

									<div className="mt-auto flex flex-col gap-2 pt-6 min-[1280px]:mb-6 min-[1280px]:pt-8">
										<h3
											className={`font-['Poppins'] text-[25px] font-semibold leading-snug transition-colors duration-300 sm:text-[24px] lg:text-[22px] min-[1280px]:text-[30px] ${isActive ? 'text-white' : 'text-slate-900 group-hover:text-white'}`}
										>
											{card.title}
										</h3>

										{card.description && (
											<p
												className={`font-['Poppins'] text-[17px] font-normal leading-[1.45] transition-colors duration-300 sm:text-[17px] lg:text-[15px] min-[1280px]:text-[19px] ${isActive ? 'text-white/90' : 'text-slate-700 group-hover:text-white/90'}`}
											>
												{card.description}
											</p>
										)}
									</div>

									<div className="mt-3 flex min-h-[48px] items-end pr-[70px] sm:min-h-[56px] sm:pr-[90px] lg:min-h-[60px] lg:pr-[64px] min-[1280px]:mt-4 min-[1280px]:min-h-0 min-[1280px]:items-start min-[1280px]:pr-[90px]">
										<button
											type="button"
											onClick={(e) => {
												e.stopPropagation()
												setSelectedTitle(card.title)
											}}
											className={`font-['Poppins'] text-[24px] font-semibold leading-none underline underline-offset-4 transition-colors duration-300 sm:text-[22px] lg:text-[20px] min-[1280px]:text-[36px] ${isActive ? 'text-white' : 'text-black group-hover:text-white'}`}
										>
											Learn More
										</button>
									</div>
								</div>

								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation()
										setSelectedTitle(card.title)
									}}
									className="absolute bottom-0 right-0 z-10 h-[72px] w-[63px] active:scale-95 sm:h-[13.5%] sm:w-[15%] min-[1280px]:h-[88px] min-[1280px]:w-[77px]"
									aria-label={`Explore ${card.title}`}
								>
									<img
										src={arrowButtonUnselected}
										alt=""
										className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
										draggable={false}
									/>
									<img
										src={arrowButtonSelected}
										alt=""
										className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
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