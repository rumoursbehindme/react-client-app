export interface IPlayListProperty {
    href: string;
    items: Array<IPlayListItemsProperty>;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
}

export interface IPlayListItemsProperty {
    added_at: string;
    added_by: {
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        type: string;
        uri: string;
    };
    is_local: boolean;
    primary_color: string | null;
    track: ITrackProperties;
    video_thumbnail: {
        url: string | null;
    };
}

export interface ITrackProperties {
    album: {
        album_type: string;
        artists: Array<{
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            name: string;
            type: string;
            uri: string;
        }>;
        available_markets: string[];
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        images: Array<{
            height: number;
            url: string;
            width: number;
        }>;
        name: string;
        release_date: string;
        release_date_precision: string;
        total_tracks: number;
        type: string;
        uri: string;
    };
    artists: Array<{
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
    }>;
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    episode: boolean;
    explicit: boolean;
    external_ids: {
        isrc: string;
    };
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track: boolean;
    track_number: number;
    type: string;
    uri: string;
};