import styled from 'styled-components'; 
import { breakpoints } from '../../utils/global-styles';

export const Header = styled.header`
    background-color: #009CA3; 
    height: 62px; 
` 

export const PageTitle = styled.h1`
    text-align: center; 
    margin: 30px; 
    color: #404040; 
    font-style: normal; 
    font-variant-ligatures: normal; 
    font-variant-caps: normal; 
    font-variant-numeric: normal; 
    font-variant-east-asian: normal; 
    font-weight: normal; 
    font-stretch: normal; 
    font-size: 24px; 
    line-height: 29px; 
    font-family: sans-serif; 
` 

export const RestaurantCardsContainer = styled.div`
    display: grid; 
    @media(max-width: ${breakpoints.xlarge}) {
        grid-template-columns: repeat(3, 1fr);
    } 
    @media(max-width: ${breakpoints.small}) {
        grid-template-columns: 1fr;
    } 
`