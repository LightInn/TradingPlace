import LoginBtn from '@/components/login-btn'
import RegisterBtn from '@/components/register-btn'

export default function HomePage() {
	return (
		<>
			<main>
				<div className="bg-white">
					<div className="mx-auto flex max-w-7xl justify-center py-24 sm:px-6 sm:py-32 lg:px-8">
						<div className="isolate  flex justify-center overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
							<div className="  mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
								<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
									Connect now
								</h2>

								<div className="mt-10 flex items-center justify-center gap-x-6 ">
									<LoginBtn />

									<RegisterBtn />
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
