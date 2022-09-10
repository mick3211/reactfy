import axios, { AxiosRequestConfig } from 'axios';
import { LocalStorage } from './StorageService';

export const ApiService = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

ApiService.interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401) {
            handleTokenRefresh(error);
        }
        return Promise.reject(error);
    }
);

async function handleTokenRefresh(err: { config: AxiosRequestConfig }) {
    const refresh_token = LocalStorage.get<string>('refresh_token', '');
    const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    const searchParams = new URLSearchParams({
        refresh_token,
        grant_type: 'refresh_token',
        client_id,
    });
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(client_id + ':' + client_secret),
    };

    if (refresh_token) {
        LocalStorage.clear('token');
        LocalStorage.clear('token_refresh');

        try {
            const tokens = (
                await axios.post<{
                    access_token: string;
                    refresh_token: string;
                }>('https://accounts.spotify.com/api/token', searchParams, {
                    headers,
                })
            ).data;

            LocalStorage.set('access_token', tokens.access_token);
            LocalStorage.set('refresh_token', tokens.refresh_token);

            ApiService.defaults.headers.common['Authorization'] =
                'Bearer ' + tokens.access_token;

            if (err.config.headers)
                err.config.headers.Authorization =
                    ApiService.defaults.headers.common['Authorization'];

            return ApiService(err.config);
        } catch (e) {
            return err;
        }
    } else {
        return err;
    }
}
