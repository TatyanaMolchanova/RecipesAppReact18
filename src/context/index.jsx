import {createContext, useState} from "react";
import {useNavigate} from "react-router-dom";


export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [recipeDetails, setRecipeDetails] = useState(null)
    const [favoriteList, setFavoriteList] = useState([])

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);

            const data = response.json();

            data.then((items) => {
                console.log('items', items)
                if (items.data.recipes.length) {
                    setRecipeList(items.data.recipes)
                    setLoading(false)
                    setSearchParam('')
                    navigate('/')
                }
            })

        } catch(error) {
            console.error(error)
            setLoading(false)
            setSearchParam('')
        }
    }

    const handleAddToFavorite = (getCurrentFavorite) => {
        console.log('getCurrentFavorite', getCurrentFavorite)
        let copyFavoritesList = [...favoriteList];
        const index = copyFavoritesList.findIndex(item => {
            return item.id === getCurrentFavorite.id
        })

        if (index === -1) {
            copyFavoritesList.push(getCurrentFavorite)
        } else {
            copyFavoritesList.splice(index)
        }

        setFavoriteList(copyFavoritesList)
    }

    console.log('favoriteList', favoriteList)

    return (
        <GlobalContext.Provider
            value={{
                searchParam,
                loading,
                recipeList,
                recipeDetails,
                setRecipeDetails,
                setSearchParam,
                handleSubmit,
                handleAddToFavorite,
                favoriteList
        }}>
            {children}
        </GlobalContext.Provider>
    )
}