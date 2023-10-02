export default function PlayCard({ name, price, rarity, image }) {
	return (
		<div className="m-4 w-64 rounded bg-white p-4 shadow-lg">
			<img
				src={image}
				alt="card-img"
				className="mb-2 h-32 w-full rounded object-cover"
			/>
			<h1 className="mb-2 text-xl">{name}</h1>
			<p className="mb-2 text-sm text-gray-500">{rarity}</p>
			<p className="text-lg text-green-500">{price} pièces</p>
			<button className="mt-2 w-full rounded bg-blue-500 p-2 text-white">
				Acheter
			</button>
		</div>
	)
}
