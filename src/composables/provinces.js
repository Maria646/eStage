import { reactive } from "vue";
import axios from 'axios';

const baseUrl = "http://localhost:13446/";




// https://api-4.fly.dev/provinces
export function useProvinces() {
    const allProvincesResults = reactive([]);

    const getAllProvinces= () => {
        return axios.get(`${baseUrl}utilities/provinces`)
        .then((res) => allProvincesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allProvincesResults,
        getAllProvinces
    }
}