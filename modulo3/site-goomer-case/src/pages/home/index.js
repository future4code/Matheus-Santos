import { useEffect, useState } from 'react' 
import { getRestaurants } from '../../utils/api'
import { RestaurantCard } from '../../components/restaurant' 
import { SearchBox } from '../../components/search'
import { Header, PageTitle, RestaurantCardsContainer } from './styles'

export const HomePage = () => {
    const [restaurants, setRestaurants] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const onChangeSearchTerm = (event) => {
        setSearchTerm(event.target.value)
    }
    useEffect(() => {
        getRestaurants() 
        .then((resposta) => {
            setRestaurants(resposta.response)
        })
    }, [])

    const filterRestaurants = (restaurant) => {
        if(searchTerm === "") return true
        if(restaurant.name.includes(searchTerm)) return true 
        return false
    }

    return (
        <> 
        <Header /> 
        <PageTitle>Bem-vindo ao Labenu Rango!</PageTitle> 
        <SearchBox value={searchTerm} onChange={onChangeSearchTerm} />
        <RestaurantCardsContainer>
        {restaurants.filter(filterRestaurants).map(restaurant => <RestaurantCard key={restaurant.id} name={restaurant.name} address={restaurant.address} />)}    
        </RestaurantCardsContainer> 
        </>
    )
}