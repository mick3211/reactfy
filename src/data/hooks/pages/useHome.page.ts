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

    console.log(recentlyPlayed);

    return {
        greetings,
        highlightColor,
        recentlyPlayed,
    };
}
