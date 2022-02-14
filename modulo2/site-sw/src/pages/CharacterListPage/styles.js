import styled from 'styled-components' 
import { useNavigate } from 'react-router-dom'

export const CharacterListCardContainer = styled.div`
    width: 100px; 
    height: 150px; 
    border: 1px solid black; 
    display: flex; 
    flex-direction: column; 
    justify-content: end; 
    p {
        margin: 0;
    }
` 
export const CharacterListPageContainer = styled.div`
    display: grid; 
    grid-template-columns: repeat(6, 1fr); 
    justify-items: center; 
    row-gap: 15px;
`

const Name = styled.p`
    color: white; 
    background-color: #1F2738; 
    padding: 10px; 
    cursor: pointer;
`

export const CharacterListCard = ({ name, image, index }) => {
    const navigate = useNavigate()
    return (
        <CharacterListCardContainer>    
            {image} 
            <Name onClick={() => navigate(`/details/${index+1}`)}>{name}</Name>
        </CharacterListCardContainer>
    )
}