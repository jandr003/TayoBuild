import vertexTowerImg from '../assets/images/VERTEX-TOWER.png'
import prismDistrictImg from '../assets/images/Prism District.png'
import ivoryPlazaImg from '../assets/images/IVORY PLAZA.png'
import axisTowerImg from '../assets/images/Axis Tower.png'
import metroPlazaImg from '../assets/images/METRO PLAZA.png'
import centralVistaPointImg from '../assets/images/Central Vista Point.png'

const projectCards = [
	{
		id: 1,
		name: 'Vertex Tower',
		description: 'A modern commercial building with clean design and efficient spaces for business operations.',
		image: vertexTowerImg,
	},
	{
		id: 2,
		name: 'Prism District',
		description: 'A mixed-use development combining retail, office, and residential spaces in one location.',
		image: prismDistrictImg,
	},
	{
		id: 3,
		name: 'Ivory Plaza',
		description: 'An elegant commercial plaza designed for modern businesses and everyday convenience.',
		image: ivoryPlazaImg,
	},
	{
		id: 4,
		name: 'Axis Tower',
		description: 'A landmark office tower built for efficiency, comfort, and long-term durability.',
		image: axisTowerImg,
	},
	{
		id: 5,
		name: 'Metro Plaza',
		description: 'A centrally located commercial hub connecting businesses to the heart of the city.',
		image: metroPlazaImg,
	},
	{
		id: 6,
		name: 'Central Vista Point',
		description: 'A premium development offering panoramic views and versatile commercial spaces.',
		image: centralVistaPointImg,
	},
]

function ArrowIcon() {
	return (
		<div className="flex h-full w-full items-center justify-center rounded-[14px] bg-[#38bdf8] sm:rounded-[16px] min-[1280px]:rounded-[18px]">
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
			className="mx-auto my-10 max-w-[1350px] rounded-[24px] bg-[#1c1c1c] px-4 py-10 sm:px-8 sm:py-12 lg:px-8 lg:py-14 min-[1280px]:px-12"
		>
			<div className="mx-auto max-w-[1250px]">
				<h2 className="font-['Poppins'] text-[24px] font-black leading-[1.25] text-white sm:text-[30px] lg:text-[34px]">
					Proven results in commercial construction
				</h2>

				<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-6 min-[1280px]:gap-10">
					{projectCards.map((project) => (
						<div
							key={project.id}
							className="relative flex h-full w-full flex-col overflow-hidden rounded-[24px] bg-[#232323] pb-[72px] transition-transform duration-300 hover:-translate-y-1 sm:pb-[100px] lg:pb-[68px] min-[1280px]:pb-[84px]"
						>
							<div className="flex flex-1 flex-col p-4 lg:p-3 min-[1280px]:p-4">
								<div className="aspect-[1.1] w-full shrink-0 overflow-hidden rounded-[18px] bg-[#111111] lg:aspect-[1.25] min-[1280px]:aspect-[1.1]">
									{project.image ? (
										<img
											src={project.image}
											alt={project.name}
											className="h-full w-full object-cover"
											draggable={false}
										/>
									) : null}
								</div>

								<h3 className="mt-5 font-['Poppins'] text-[22px] font-bold leading-snug text-white sm:text-[24px] lg:mt-4 lg:text-[18px] min-[1280px]:mt-5 min-[1280px]:text-[22px]">
									{project.name}
								</h3>

								{project.description && (
									<p className="mt-2 font-['Poppins'] text-[17px] leading-[1.5] text-gray-400 sm:text-[18px] lg:text-[14px] min-[1280px]:text-[19px]">
										{project.description}
									</p>
								)}

								<div className="mt-auto pt-4">
									<button
										type="button"
										className="font-['Poppins'] text-[15px] font-semibold text-white underline underline-offset-4 sm:text-[16px] lg:text-[14px] min-[1280px]:text-[15px]"
									>
										Learn More
									</button>
								</div>
							</div>

							<div className="absolute bottom-0 right-0 h-[84px] w-[92px] rounded-tl-[18px] bg-[#1c1c1c] sm:h-[100px] sm:w-[110px] lg:h-[76px] lg:w-[84px] min-[1280px]:h-[80px] min-[1280px]:w-[88px]" />
							<div className="absolute bottom-2 right-2 h-[64px] w-[64px] sm:bottom-1 sm:right-2.5 sm:h-[82px] sm:w-[76px] lg:bottom-1 lg:right-2 lg:h-[64px] lg:w-[58px] min-[1280px]:bottom-2 min-[1280px]:right-2 min-[1280px]:h-[58px] min-[1280px]:w-[58px]">
								<ArrowIcon />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}