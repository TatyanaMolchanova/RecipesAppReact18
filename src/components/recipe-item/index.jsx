import {Link} from "react-router-dom";

export default function RecipeItem({item}) {


    return (
        <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 rounded-2xl border-white">
            <div className="h-4o flex justify-center overflow-hidden items-center rounded-xl">
                <img
                    src={item?.image_url}
                    className="block w-full"
                    alt={item?.title}
                />
            </div>
            <div>
                <span className="text-sm text-cyan-700 font-medium">{item?.publisher}</span>
                <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
                <Link
                    className="text-sm p-3 mt-5 px-8 rounded-lg uppercase font-medium tracking-wider inline-block shadow-md bg-black text-white"
                    to={`/recipe-item/${item?.id}`}>Recipe Details</Link>
            </div>
        </div>
    )
}