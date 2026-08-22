const projectCards = [
	{ id: 1 },
	{ id: 2 },
	{ id: 3 },
	{ id: 4 },
	{ id: 5 },
	{ id: 6 },
]

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

				<div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-8">
					{projectCards.map((project) => (
						<div
							key={project.id}
							className="flex aspect-[0.82] w-full items-center justify-center"
						>
							<div className="h-[90%] w-[90%] rounded-[24px] bg-[#4a4a4a] transition-transform duration-300 hover:-translate-y-1" />
						</div>
					))}
				</div>
			</div>
		</section>
	)
}