import { AxiosRequestConfig } from 'axios';
import { ApiService } from 'data/services/ApiService';
import { useEffect } from 'react';
import useSWR, { mutate } from 'swr';

export function useApiSWR<T>(
    endpoint: string,
    axiosConfig: AxiosRequestConfig
): { data: T | undefined; error: Error | null } {
    const { data, error } = useSWR(endpoint, async () => {
        const response = await ApiService(endpoint, axiosConfig);
        return response.data;
    });

    useEffect(() => {
        mutate(endpoint);
    }, [endpoint]);

    return {
        data,
        error,
    };
}
