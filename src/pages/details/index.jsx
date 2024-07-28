import {useParams} from "react-router-dom";
import {useContext, useEffect} from "react";
import {GlobalContext} from "../../context";

export default function Details() {
    const { id } = useParams()
    const { recipeDetails, setRecipeDetails, favoriteList, handleAddToFavorite } = useContext(GlobalContext)

    useEffect(() => {
        const getRecipeDetails = async () => {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();

            if (data?.data) {
                setRecipeDetails(data?.data.recipe)
            }

        }


        getRecipeDetails();
    }, []);

    return (
        <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="row-start-2 lg:grow-start-auto">
                <div className="h-96 overflow-hidded rounded-xl group">
                    <img
                        className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                        src={recipeDetails?.image_url}
                        alt={recipeDetails?.title}
                    />
                </div>
                <div className="flex flex-col gap-3">
                    <span className="text-sm text-cyan-700 font-medium">
                        {recipeDetails?.publisher}
                    </span>
                    <h3 className="font-bold text-2xl truncate text-black">
                        {recipeDetails?.title}
                    </h3>
                    <div>
                        <button
                            onClick={() => handleAddToFavorite(recipeDetails)}
                            className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white"
                        >
                            {
                                favoriteList && favoriteList.length > 0 && favoriteList.findIndex(item => item.id === recipeDetails.id) !== -1
                                    ? 'Remove from Favorites'
                                    : 'Add to Favorites'
                            }
                        </button>
                    </div>
                    <div>
                        <span className="text-2xl font-semibold text-black">
                            Ingredients:
                        </span>
                        <ul className="flex flex-col gap-3">
                            {
                                recipeDetails?.ingredients.map(ingredient => (
                                        <li>
                                            <span className="text-2xl font-semibold text-black">
                                                {ingredient.quantity} &nbsp;
                                                {ingredient.unit} &nbsp;
                                            </span>
                                            <span className="text-2xl font-semibold text-black">
                                                {ingredient.description}
                                            </span>
                                        </li>
                                    )

                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}