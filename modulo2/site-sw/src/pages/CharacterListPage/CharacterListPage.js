import axios from 'axios' 
import { useState, useEffect } from 'react' 
import { CharacterListPageContainer, CharacterListCard } from './styles'


export const CharacterListPage = () => {
    const [charactersList, setCharacterList] = useState([])
    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then(({ data }) => {
            setCharacterList(data.results)
        }) 
        .catch((error) => console.log(error))
    }, [])
    return (
        <CharacterListPageContainer> 
            {charactersList.map((character, index) => <CharacterListCard key={index} name={character.name} image={'image'} />)}
        </CharacterListPageContainer>
    )
}