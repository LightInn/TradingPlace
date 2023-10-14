'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ProfileView(props: any) {
	if (props.data === undefined) return <div>Loading...</div>

	return (
		<div className="flex items-center justify-center">
			<div className="rounded-lg bg-white p-6 shadow-md">
				<h2 className="mb-4 text-lg font-medium">Profile</h2>
				<div className="mb-4">
					<label
						className="mb-2 block text-sm font-bold text-gray-700"
						htmlFor="name"
					>
						{props.data.name}
					</label>
				</div>
				<div className="mb-4">
					<label
						className="mb-2 block text-sm font-bold text-gray-700"
						htmlFor="email"
					>
						{props.data.email}
					</label>
				</div>
			</div>
		</div>
	)
}
