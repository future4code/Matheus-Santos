import axios from 'axios' 

export const getRestaurants = async () => {
    let error 
    let response 
    try {
        const { data } = await axios.get('https://challange.goomer.com.br/restaurants') 
        console.log(data) 
        response = data
    } catch(e) {
        error = e 
    } 
    return {
        error, 
        response 
    }
} 

export const getMenu = async () => {
    let error 
    let response 
    try {
        const { data } = await axios.get('https://challange.goomer.com.br/restaurants/{id}/menu') 
        console.log(data) 
        response = data 
    } catch(e) {
        error = e 
    } return {
        error,
        response
    }
}