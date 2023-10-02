export default function CardPreview({ name, description, rarity, image, type, attack, defense, mana }) {
    return (
        <div className="bg-white p-4 rounded shadow-lg">
            <img src={image} alt="card-img" className="w-full h-48 object-cover mb-4 rounded"/>
            <h1 className="text-2xl mb-2">{name}</h1>
            <p className="text-base mb-2">{description}</p>
            <p className="text-sm text-gray-500">{rarity}</p>
            {/* Et autres champs... */}
        </div>
    );
}
