import axios from "axios";

const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': "77b5659d-85ac-46a3-88e2-a77e18a50610"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => {
                return responce.data;
            });
    }
}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instans.get(`follow?page=${currentPage}&count=${pageSize}`)
        .then(responce => {
            return responce.data;
        }) ;
}


