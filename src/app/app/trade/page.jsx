'use client'
import PlayCard from '../../../components/PlayCard'

export default function MarketplacePage() {
	return (
		<>
			<div className="p-8">
				<h1 className="mb-4 text-3xl">Marketplace</h1>
				<div className="flex flex-wrap">
					{fakeCards.map(card => (
						<PlayCard key={card.id} {...card} />
					))}
				</div>
			</div>
		</>
	)
}

const fakeCards = [
	{ id: 1, name: 'Dragon Rouge', price: 500, rarity: 'Rare', image: 'url1' },
	{ id: 2, name: 'Sorcier Noir', price: 300, rarity: 'Commun', image: 'url2' },
	// Ajoute d'autres cartes...
]
