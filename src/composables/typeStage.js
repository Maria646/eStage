import { reactive } from "vue";
import axios from 'axios';

const baseUrl = "https://frontend-projet-tableaudebord-6ec58721db10.herokuapp.com/";

// https://api-4.fly.dev/internship-types
export function useIntershipTypes() {
    const allIntershipTypesResults = reactive([]);

    const getAllIntershipTypes= () => {
        return axios.get(`${baseUrl}utilities/internship-types`)
        .then((res) => allIntershipTypesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allIntershipTypesResults,
        getAllIntershipTypes
    }
}