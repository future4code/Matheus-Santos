import express, { Express, Request, Response } from "express"
import cors from "cors" 
import { countries } from "./data"
import { country } from "./types"

const app: Express = express() 
app.use(express.json()) 
app.use(cors()) 


app.get('/countries', (req: Request, res: Response) => {
    const result = countries.map((country => {
        return({ id: country.id, name: country.name })
    })) 
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found :/")
    }
}) 

app.get('/countries/search', (req: Request, res: Response) => {
    let result: country[] = countries 

    if (req.query.name) {
        result = result.filter( 
            country => country.name.includes(req.query.name as string)
        )
    } 

    if (req.query.capital) {
        result = result.filter( 
            country => country.capital.includes(req.query.capital as string)
        )
    } 

    if (req.query.continent) {
        result = result.filter( 
            country => country.continent.includes(req.query.continent as string)
        )
    } 

    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found :/")
    }
})

app.get('/countries/:id', (req: Request, res: Response) => {
    const result = countries.find(country => {
        return Number(req.params.id) === Number(country.id)
    }) 
    if (result) {
        res.status(200).send(result)
    } else {
        res.status(404).send("Not found :/")
    }
}) 

app.put('/countries/:id', (req: Request, res: Response) => {
    
})

const server = app.listen(3003, () => console.log("Server is running on port 3003")) 