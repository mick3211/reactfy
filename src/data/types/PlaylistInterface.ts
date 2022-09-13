import { TrackInterface } from './TrackInterface';

export interface PlaylistInterface {
    collaborative: boolean;
    description: string;
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    images?: {
        height: number | null;
        url: string;
        width: number | null;
    }[];
    name: string;
    owner: {
        display_name: string | null;
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: 'user';
        uri: string;
    };
    primary_color: string | null;
    public: boolean | null;
    snapshot_id: string;
    tracks: {
        href: string;
        total: number;
    };
    type: string;
    uri: string;
}

export interface PlaylistFullInterface
    extends Omit<PlaylistInterface, 'tracks'> {
    followers: {
        href: null;
        total: number;
    };
    tracks: {
        href: string;
        total: number;
        items: {
            added_at: string;
            is_local: boolean;
            track: TrackInterface;
        }[];
        limit: number;
        offset: number;
        next?: string;
        prevous?: string;
    };
}
