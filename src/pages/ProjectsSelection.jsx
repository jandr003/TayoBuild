import arrowButtonUnselected from '../assets/images/arrow_skyblue-unselected.png'

const projectCards = [
	{ id: 1, name: 'Vertex Tower' },
	{ id: 2, name: 'Prism District' },
	{ id: 3, name: 'Ivory Plaza' },
	{ id: 4, name: 'Axis Tower' },
	{ id: 5, name: 'Metro Plaza' },
	{ id: 6, name: 'Central Vista Point' },
]

function ArrowIcon() {
	return (
		<div className="flex h-full w-full items-center justify-center rounded-[18px] bg-[#38bdf8]">
			<svg
				viewBox="0 0 24 24"
				fill="none"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				className="h-[50%] w-[50%]"
			>
				<line x1="7" y1="17" x2="17" y2="7" />
				<polyline points="8 7 17 7 17 16" />
			</svg>
		</div>
	)
}

export default function ProjectsSelection() {
	return (
		<section
			id="projects"
			className="mx-auto my-10 max-w-[1350px] rounded-[24px] bg-[#1c1c1c] px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14"
		>
			<div className="mx-auto max-w-[1250px]">
				<h2 className="font-['Poppins'] text-[24px] font-black leading-[1.25] text-white sm:text-[30px] lg:text-[34px]">
					Proven results in commercial construction
				</h2>

				<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-10">
					{projectCards.map((project) => (
						<div
							key={project.id}
							className="flex aspect-[0.6] w-full items-center justify-center"
						>
							<div className="relative h-[97%] w-[97%] overflow-hidden rounded-[24px] transition-transform duration-300 hover:-translate-y-1">
								<div className="absolute inset-0 bg-[#111111]" />
								<div className="absolute bottom-0 right-0 h-[14%] w-[18%] rounded-tl-[14px] bg-[#1c1c1c]" />
								<div className="absolute bottom-0 right-0 top-auto h-[12%] w-[15%]">
									<ArrowIcon />
								</div>
								<p className="absolute bottom-[18%] left-[8%] font-['Poppins'] text-[18px] font-semibold text-white">
									{project.name}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}