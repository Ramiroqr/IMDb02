import NavbarItem from "./NavbarItem";


export default function Navbar() {
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-400 lg:text-lg p-3">
        <NavbarItem tittle="Trending" param="fetchTrending" />
        <NavbarItem tittle="Top Rated" param="fetchTopRated" />
    </div>
  )
}
