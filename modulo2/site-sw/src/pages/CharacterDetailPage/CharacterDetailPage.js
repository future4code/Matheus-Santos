import { CharacterDetailPageContainer } from './styles'
import { useParams } from 'react-router-dom' 
import axios from 'axios' 
import { useState, useEffect } from 'react' 
 
export const CharacterDetailPage = () => {
    const params = useParams() 
    const [details, setDetails] = useState([])  
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${params.id}`) 
        .then(({ data }) => {
            setDetails(data) 
        }) 
        .catch((error) => console.log(error))       
    }, [])
    return ( 
        <CharacterDetailPageContainer> 
        <h1>Details:</h1> 
        <p>{details.name}</p> 
        </CharacterDetailPageContainer>
    )
}