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
        total: 465;
    };
    type: string;
    uri: string;
}
