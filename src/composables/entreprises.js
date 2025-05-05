import { reactive, ref } from "vue";
import axios from 'axios';

const baseUrl = "https://backend-projet-tableaudebord-63f5c0584a2c.herokuapp.com/";


// https://api-4.fly.dev/enterprises
export function useAllEnterprises() {
    const allEnterprisesResults = reactive([]);

    const getAllEnterprises = () => {
        return axios.get(`${baseUrl}entreprises`)
        .then((res) => allEnterprisesResults.push(...res.data))
        .catch((error) => console.log(error))
    }

    return {
        allEnterprisesResults,
        getAllEnterprises
    }
}


// https://api-4.fly.dev/enterprises/65f8e7c27e8a7a318bf937cf
export function useEnterprise() {
    const enterpriseResult = ref(null);

    const getEnterpriseById = (id) => {
        return axios.get(`${baseUrl}entreprises/${id}`)
        .then((res) => enterpriseResult.value = res.data)
        .catch((error) => console.log(error))
    }

    return {
        enterpriseResult,
        getEnterpriseById
    }
}