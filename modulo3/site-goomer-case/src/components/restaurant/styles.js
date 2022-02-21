import styled from 'styled-components'; 
import { breakpoints } from '../../utils/global-styles';

export const RestaurantCardContainer = styled.div`
    border: 1px solid black; 
    @media(max-width: ${breakpoints.xlarge}){
        width: 80%;
    } 
    padding: 20px; 
    border-radius: 2px; 
    margin: 0 auto; 
    box-shadow: 0px 2px 4px #00000029; 
    display: flex;
` 

export const RestaurantImage = styled.img`
    width: 50px;
`