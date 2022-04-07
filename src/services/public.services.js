import axios from "axios"
import { BreedsAdapter } from "../adapters/breeds.adapter"

export const Loadbreeds = async () => {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/breeds')
        return response.data

    } catch (error) {
        throw new Error(error) 
    }
}
