import axios from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: `https://social-network.samuraijs.com/api/1.0/`,
        header: {
            'API-KEY': '58f98d8a-f688-42bf-8a92-24a3ecbcc273'
        }
    }
)

export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)

}

export const authMe = () => {
    return instance.get(`auth/me`)
        .then(response => response.data)

}
