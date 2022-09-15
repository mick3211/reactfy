import axios from 'axios';
import { ApiService } from 'data/services/ApiService';
import { PlaylistInterface } from 'data/types/PlaylistInterface';
import { TrackInterface } from 'data/types/TrackInterface';
import { useEffect, useState } from 'react';
import { useApiSWR } from '../useApiSWR';

export function useHomePage() {
    const [recomendations, setRecomendations] = useState(
        [] as PlaylistInterface[][]
    );
    const [categories, setCategories] = useState<
        { href: string; id: string; name: string }[]
    >([]);
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    const highlightColor = 'rgba(9,121,109,0.5)';
    let greetings = 'Bom dia';

    if (currentHour >= 12) greetings = 'Boa tarde';
    if (currentHour >= 18) greetings = 'Boa noite';

    const { data: recentlyPlayed } = useApiSWR<{
        href: string;
        items: { track: TrackInterface }[];
    }>('/me/player/recently-played', {
        method: 'GET',
        params: { limit: 6 },
    });

    // const { data: categories } = useApiSWR<{
    //     href: string;
    //     items: { href: string; id: string; name: string }[];
    // }>('/browse/categories', {
    //     method: 'GET',
    //     params: { limit: 10, country: 'BR', locale: 'pt-BR' },
    // });

    const { data: featured } = useApiSWR<{
        message: string;
        playlists: {
            href: string;
            items: PlaylistInterface[];
        };
    }>('/browse/featured-playlists', {
        method: 'GET',
        params: {
            limit: 5,
            country: 'BR',
            locale: 'pt-BR',
            timestamp: currentDate.toISOString(),
        },
    });

    const getRecomendations = async () => {
        const categories = (
            await ApiService.get<{
                categories: {
                    href: string;
                    items: { href: string; id: string; name: string }[];
                };
            }>('/browse/categories', {
                params: { limit: 5, country: 'BR', locale: 'pt-BR' },
            })
        ).data.categories;

        const responses = await axios.all(
            categories.items.map(item =>
                ApiService.get<{ playlists: { items: PlaylistInterface[] } }>(
                    `/browse/categories/${item.id}/playlists`
                )
            )
        );

        setCategories(categories.items);

        setRecomendations(
            responses.map(recomendation => recomendation.data.playlists.items)
        );
    };

    useEffect(() => {
        getRecomendations();
    }, []);

    return {
        greetings,
        highlightColor,
        recentlyPlayed,
        featured,
        recomendations,
        categories,
    };
}
