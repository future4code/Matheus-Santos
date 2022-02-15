import { useEffect, useState } from 'react' 
import { getRestaurants } from '../../utils/api'
import { RestaurantCard } from '../../components'

export const HomePage = () => {
    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        getRestaurants() 
        .then((resposta) => {
            console.log(resposta.error)
            setRestaurants(resposta.response)
        })
    }, [])

    return (
        <> 
        <h1>Home</h1> 
        {restaurants.map(restaurant => <RestaurantCard key={restaurant.id} name={restaurant.name} adress={restaurant.adress} />)} 
        </>
    )
}