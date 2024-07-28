import {NavLink} from "react-router-dom";
import GlobalState, {GlobalContext} from "../../context";
import {useContext} from "react";


export default function Navbar() {
    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)

    console.log('searchParam', searchParam)

    return (
        <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-2xl font-semibold">
                <div>
                    <NavLink to={'/'} className="text-black hover:text-gray-700 duration-300">Food Recipes</NavLink>
                </div>
            </h2>

            <form onSubmit={handleSubmit}>
                <input type="text"
                       name="search"
                       value={searchParam}
                       onChange={(event) => setSearchParam(event.target.value)}
                       placeholder="Enter Items..."
                       className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
                />
            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink to={'/'} className="text-black hover:text-gray-700 duration-300">Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favorites'}
                             className="text-black hover:text-gray-700 duration-300">Favorite</NavLink>
                </li>
            </ul>
        </nav>
    )
}