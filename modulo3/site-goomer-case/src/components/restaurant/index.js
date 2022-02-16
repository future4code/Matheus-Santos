import { RestaurantCardContainer } from './styles'

export const RestaurantCard = ({ name, address }) => {
    return (
        <RestaurantCardContainer>
            <p>{name}</p> 
            <p>{address}</p>
        </RestaurantCardContainer>
    )
}