"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


export default function NavbarItem({tittle, param}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");

  return (
    <div>
        <div className={`m-4 hover:text-amber-600 font-semibold ${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg"}`}>
            <Link href={`/?genre=${param}`}>{tittle}
            </Link>
        </div>
    </div>
  )
}
