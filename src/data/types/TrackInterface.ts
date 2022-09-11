import { AlbumInterface } from './AlbumInterface';
import { ArtistInterface } from './ArtistInterface';

export interface TrackInterface {
    album: AlbumInterface;
    artists: ArtistInterface[];
    avaliable_markets: string[];
    disc_number?: number;
    duration: number;
    explicit: boolean;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: 'track';
    uri: string;
}
