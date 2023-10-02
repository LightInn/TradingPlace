'use client';
import PlayCard from "../../../components/PlayCard";

export default function MarketplacePage() {
    return (
        <>
            <div className="p-8">
                <h1 className="text-3xl mb-4">Marketplace</h1>
                <div className="flex flex-wrap">
                    {fakeCards.map(card => (
                        <PlayCard key={card.id} {...card} />
                    ))}
                </div>
            </div>
        </>
    );
}



const fakeCards = [
    {id: 1, name: 'Dragon Rouge', price: 500, rarity: 'Rare', image: 'url1'},
    {id: 2, name: 'Sorcier Noir', price: 300, rarity: 'Commun', image: 'url2'},
    // Ajoute d'autres cartes...
];