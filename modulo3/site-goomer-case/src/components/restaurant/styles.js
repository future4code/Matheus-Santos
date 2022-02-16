import styled from 'styled-components'; 

export const RestaurantCardContainer = styled.div`
    border: 1px solid black; 
    @media(max-width: 1200px){
        width: 35%;
    } 
    @media(max-width: 300px){
        width: 60%;
    }
    margin: 0 auto;
`