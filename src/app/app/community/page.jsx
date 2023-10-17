import PlayCard from '../../../components/PlayCard'
import { pb } from '../../../lib/pocketbase'

export default async function MarketplacePage() {
	const record = await pb.collection('propositioncards').getFullList({
		sort: '-created',
	})

	console.log(record)

	return (
		<>
			<div className="p-8">
				<h1 className="mb-4 text-3xl">Community</h1>
				<div className="flex flex-col flex-wrap">
					{record.map(card => (
						<PlayCard key={card.collectionId} {...card} />
					))}
				</div>
			</div>
		</>
	)
}
