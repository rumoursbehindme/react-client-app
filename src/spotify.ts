import axios from "axios";

const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientId = 'a5e29ad315e843e49deaec47d94e1104';
const redirectUri = 'http://localhost:3000';
const scopes = 'user-library-read playlist-read-private'

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes}&response_type=token&show_dialog=true`

export const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/'
});

export const setClientToken = (token: string) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = 'Bearer ' + token;
        return config;
    })
}