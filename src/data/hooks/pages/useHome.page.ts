import { PlaylistInterface } from 'data/types/PlaylistInterface';
import { TrackInterface } from 'data/types/TrackInterface';
import { useApiSWR } from '../useApiSWR';

export function useHomePage() {
    const currentHour = new Date().getHours();
    const highlightColor = 'rgba(9,121,109,0.5)';
    let greetings = 'Bom dia';
    if (currentHour >= 12) greetings = 'Boa tarde';
    if (currentHour > 18) greetings = 'Boa Noite';

    const { data: recentlyPlayed } = useApiSWR<{
        href: string;
        items: { track: TrackInterface }[];
    }>('/me/player/recently-played', {
        method: 'GET',
        params: { limit: 6 },
    });

    const { data: categories } = useApiSWR<{
        href: string;
        items: { track: TrackInterface }[];
    }>('/browse/categories', {
        method: 'GET',
        params: { limit: 10, country: 'BR', locale: 'pt-BR' },
    });

    const { data } = useApiSWR<{
        message: string;
        playlists: {
            href: string;
            items: PlaylistInterface[];
        };
    }>('/browse/featured-playlists', {
        method: 'GET',
        params: {
            limit: 10,
            country: 'BR',
            locale: 'pt-BR',
            timestamp: new Date().toISOString(),
        },
    });

    return {
        greetings,
        highlightColor,
        recentlyPlayed,
        data,
    };
}
