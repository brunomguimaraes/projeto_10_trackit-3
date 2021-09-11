import axios from "axios";
const API = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/'


const signUpNewUser = (newUser) => {
    const body = newUser;
    return axios.post(`${API}auth/sign-up`, body);
}

const loginUser = (user) => {
    const body = {
        email: user.email,
        password: user.password
    }
    const promise = axios.post(`${API}auth/login`, body);
    return promise;
}

const createNewHabit = (body, token) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    return axios.post(`${API}habits`, body, config);
}

export {
    signUpNewUser,
    loginUser,
    createNewHabit
}