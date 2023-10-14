export default function Page() {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			{/*a gold quantity view and a "mine" input field*/}
			<div className="flex flex-row items-center justify-center">
				<div className="rounded-lg bg-white p-6 shadow-md">
					<h2 className="mb-4 text-lg font-medium">Gold</h2>
					<div className="mb-4">
						<label
							className="mb-2 block text-sm font-bold text-gray-700"
							htmlFor="name"
						>
							0
						</label>
					</div>
				</div>
				<div className="rounded-lg bg-white p-6 shadow-md">
					<div className="mb-4">
						<button className="mb-2 block text-sm font-bold text-gray-700">
							MINE !
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
