import { ArtistInterface } from './ArtistInterface';

export interface AlbumInterface {
    album_type: string;
    artists: ArtistInterface[];
    avaliable_markets: string[];
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images: {
        height: number | null;
        url: string;
        width: number | null;
    }[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: 'album';
    uri: string;
}
