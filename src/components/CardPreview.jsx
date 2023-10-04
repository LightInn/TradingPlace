export default function CardPreview({
	title,
	description,
	rarity,
	image,
	type,
	attack,
	defense,
	mana,
}) {
	return (
		<div className="rounded bg-white p-4 shadow-lg">
			<img
				src={image}
				alt="card-img"
				className="mb-4 h-48 w-full rounded object-cover"
			/>
			<h1 className="mb-2 text-2xl">{title}</h1>
			<p className="mb-2 text-base">{description}</p>
			<p className="text-sm text-gray-500">{rarity}</p>
			{/* Et autres champs... */}
		</div>
	)
}
