"use client";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";


export default function ProfileView(props: any) {


    if (props.data === undefined) return <div>Loading...</div>

    return (


        <div className="flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-medium mb-4">Profile</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        {props.data.name}
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        {props.data.email}
                    </label>
                </div>
            </div>
        </div>


    );


}