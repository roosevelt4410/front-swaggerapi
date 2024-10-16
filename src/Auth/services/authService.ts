import axios from "axios";

const configg = {
    backendUrl: process.env.REACT_APP_PUBLIC_BACKEND
  };

export const loginUser = async ({username, password}:any) => {
    try {
        return await axios.post(`${configg.backendUrl}/login`, {
        /* return await axios.post('http://localhost:8080/apitestswagger-0.0.1/login', { */
            username,
            password,
        });
    } catch (error) {
        throw error;
    }
}