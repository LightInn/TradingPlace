'use client'
import {useState} from 'react'
import CardPreview from '../../../components/CardPreview'

export default function EditorPage() {
    const [formData, setFormData] = useState({
        name: '', description: '', rarity: '', image: '', // Et plus...
    })

    const handleChange = e => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (<div className="container bg-red-500">
            <main className=" flex bg-amber-300 w-full justify-center p-8">


                <div className="form-container w-1/2">
                    <input
                        type="text"
                        name="name"
                        placeholder="Nom"
                        onChange={handleChange}
                        className="mb-4 w-full rounded border p-2"
                    />
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        onChange={handleChange}
                        className="mb-4 w-full rounded border p-2"
                    />
                    <input
                        type="text"
                        name="rarity"
                        placeholder="Rareté"
                        onChange={handleChange}
                        className="mb-4 w-full rounded border p-2"
                    />
                    {/* Et plus de champs ici... */}
                    <button className="rounded bg-blue-500 p-2 text-white">
                        Proposer la Carte
                    </button>
                </div>
                <div className="preview-container w-1/2">
                    <CardPreview {...formData} />
                </div>


            </main>
        </div>)
}
