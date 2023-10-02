import Link from 'next/link'

export default function Navbar() {
	return (
		<div className="flex justify-between rounded bg-white p-4 shadow-lg">
			<Link href={'/app/'}>TradingPlace</Link>
			<Link href={'/app/editor'}>editor</Link>
			<Link href={'/app/trade'}>trade</Link>
			<Link href={'/app/profile'}>profile</Link>
		</div>
	)
}
