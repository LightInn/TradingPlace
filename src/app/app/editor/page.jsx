'use client';
import { useState } from 'react';
import CardPreview from "../../../components/CardPreview";

export default function EditorPage() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        rarity: "",
        image: "",
        // Et plus...
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <main className="flex justify-between p-8">
            <div className="form-container w-1/2">
                <input
                    type="text"
                    name="name"
                    placeholder="Nom"
                    onChange={handleChange}
                    className="p-2 mb-4 w-full rounded border"/>
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    className="p-2 mb-4 w-full rounded border"/>
                <input
                    type="text"
                    name="rarity"
                    placeholder="Rareté"
                    onChange={handleChange}
                    className="p-2 mb-4 w-full rounded border"/>
                {/* Et plus de champs ici... */}
                <button className="bg-blue-500 text-white p-2 rounded">Proposer la Carte</button>
            </div>
            <div className="preview-container w-1/2">
                <CardPreview {...formData} />
            </div>
        </main>
    );
}
