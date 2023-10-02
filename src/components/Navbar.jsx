import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-white p-4 rounded shadow-lg flex justify-between">

            <Link href={"/app/"}>TradingPlace</Link>
            <Link href={"/app/editor"}>editor</Link>
            <Link href={"/app/trade"}>trade</Link>
            <Link href={"/auth/profile"}>profile</Link>

        </div>
    );
}
