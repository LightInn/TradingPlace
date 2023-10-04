'use client'
import {useState} from 'react'
import CardPreview from '../../../components/CardPreview'
import {pb} from '../../../lib/pocketbase'

export default function EditorPage() {
    const [formData, setFormData] = useState({
        title: '', description: '', rarity: '', image: '', // Et plus...
    })

    const handleChange = e => {
        const {name, value} = e.target
        console.log(name, value)
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = async e => {
        e.preventDefault()

        // Envoi de la requête POST avec formData
        console.log("submit")


        // example create data
        const data = {
            "title": formData.title,
            "description": formData.description,
        };

        const record = await pb.collection('propositioncards').create(data);

    }

    return (<div className="container ">
        <main className=" flex w-full justify-center p-8">


            <form className="form-container w-1/2" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
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
                <button className="rounded bg-blue-500 p-2 text-white" type={"submit"}>
                    Proposer la Carte
                </button>
            </form>
            <div className="preview-container w-1/2">
                <CardPreview {...formData} />
            </div>


        </main>
    </div>)
}
