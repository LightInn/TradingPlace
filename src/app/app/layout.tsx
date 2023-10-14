/* eslint-disable @next/next/no-head-element */
'use client'
import '@/styles/globals.css'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { pb } from '@/lib/pocketbase'

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const router = useRouter()
	const [authentificated, setAuthentificated] = useState(true)
	const auth = pb.authStore.isValid

	useEffect(() => {
		if (auth) {
			setAuthentificated(true)
		}
	}, [auth])

	if (!authentificated) {
		router.push('/')
	}
	return (
		<section>
			<Navbar />
			{children}
		</section>
	)
}
