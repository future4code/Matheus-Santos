import { RestaurantCardContainer, RestaurantImage } from './styles'
import { useNavigate } from 'react-router-dom'

export const RestaurantCard = ({ name, address, id, image }) => {
    const navigation = useNavigate()
    
    return (
        <RestaurantCardContainer onClick={() => navigation(`/details/${id}`)}>
            <RestaurantImage src={image}/> 
            <div>
            <p>{name}</p> 
            <p>{address}</p>
            </div>
        </RestaurantCardContainer>
    )
}