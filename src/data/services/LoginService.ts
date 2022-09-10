import { UserInterface } from 'data/types/userInterface';
import { ApiService } from 'data/services/ApiService';
import { LocalStorage } from './StorageService';

export const LoginService = {
    // async login(credencials: LoginFormDataInterface): Promise<boolean> {
    //     const { data } = await ApiService.post<{ access_token: string }>(
    //         '/auth/login',
    //         credencials
    //     );
    //     if (data?.access_token) {
    //         LocalStorage.set('access_token', data.access_token);

    //         ApiService.defaults.headers.common['Authorization'] =
    //             'Bearer ' + data.access_token;

    //         return true;
    //     }
    //     return false;
    // },

    async getUser(): Promise<UserInterface | undefined> {
        const token = LocalStorage.get('access_token', '');

        if (token) {
            ApiService.defaults.headers.common['Authorization'] =
                'Bearer ' + token;

            return (await ApiService.get<UserInterface>('/me')).data;
        }
        return undefined;
    },

    logout() {
        LocalStorage.clear('access_token');
    },
};
