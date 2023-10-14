export default function PlayCard({ title, description, image }) {
	return (
		<div className="m-4 flex max-w-md justify-between rounded bg-white p-4 shadow-lg">
			<h1 className="mb-2 text-xl">{title}</h1>
			<h1 className="mb-2 text-xl">{description}</h1>
			<p className="mb-2 text-sm text-gray-500">rarity</p>
			<p className="text-lg text-green-500"> pièces</p>
			<button className="mt-2 w-20 rounded bg-blue-500  text-white">
				Acheter
			</button>
		</div>
	)
}
