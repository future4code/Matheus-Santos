import styled from 'styled-components' 

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
`

export const CharacterListCard = ({ name, image }) => {
    return (
        <CharacterListCardContainer>    
            {image} 
            <Name>{name}</Name>
        </CharacterListCardContainer>
    )
}