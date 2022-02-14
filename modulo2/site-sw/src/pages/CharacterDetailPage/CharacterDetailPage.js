import React from 'react' 
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
        <> 
        <h1>CharacterDetailPage</h1> 
        <p>{details.name}</p> 
        </>
    )
}