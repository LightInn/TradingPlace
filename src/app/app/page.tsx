import Link from 'next/link'
import React from 'react'

export default function Page() {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<div>Main page</div>
			<div className="bg-blue-600">
				<Link href={'/app/auth/profile'}>Profile</Link>
			</div>
		</div>
	)
}
