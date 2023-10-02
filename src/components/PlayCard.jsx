export default function PlayCard({ name, price, rarity, image }) {
    return (
        <div className="bg-white p-4 rounded shadow-lg m-4 w-64">
            <img src={image} alt="card-img" className="w-full h-32 object-cover mb-2 rounded"/>
            <h1 className="text-xl mb-2">{name}</h1>
            <p className="text-sm text-gray-500 mb-2">{rarity}</p>
            <p className="text-lg text-green-500">{price} pièces</p>
            <button className="bg-blue-500 text-white p-2 rounded mt-2 w-full">Acheter</button>
        </div>
    );
}
