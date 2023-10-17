'use client'
import {useState} from "react";
import {Image} from "@nextui-org/image";

export default function CardPreview(
    {
        title,
        description,
        rarity,
        image,
        type,
        attack,
        defense,
        mana,
    }
) {

    const [preview, setPreview] = useState(null)
    console.log("image : ", image)

    if (image !== null) {
        const reader = new FileReader()
        reader.readAsDataURL(image)

        reader.onloadend = () => {
            setPreview(reader.result)
        }

    }


    return (

        <div className="rounded bg-white p-4 shadow-lg">

            {preview !== null &&
                <Image
                    isBlurred
                    width={240}
                    src={preview}
                    // src="https://nextui-docs-v2.vercel.app/images/album-cover.png"
                    alt="card-img"
                    className="m-5"
                />
            }

            <h1 className="mb-2 text-2xl">{title}</h1>
            <p className="mb-2 text-base">{description}</p>
            <p className="text-sm text-gray-500">{rarity}</p>
            {/* Et autres champs... */}
        </div>)
}
