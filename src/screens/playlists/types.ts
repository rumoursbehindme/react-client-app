export interface IPlaylistsResponse {
    href: string;
    limit: number;
    next: any;
    offset: number;
    previous: any;
    total: number;
    items: Array<IItemProperties>
}

export interface IItemProperties {
    collaborative: boolean;
    description: string;
    external_urls: IExternalURls;
    href: string;
    id: string;
    images: Array<IImageProperties>;
    name: string,
    owner: IOwnerProperty;
    primary_color: any;
    public: boolean;
    snapshot_id: string;
    tracks: ITracksProperty;
    type: string;
    uri: string;
}

interface IExternalURls {
    spotify: string;
}

interface IImageProperties {
    height: number;
    url: string;
    width: number;
}

interface IOwnerProperty {
    display_name: string;
    external_urls: IExternalURls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

interface ITracksProperty {
    href: string;
    total: number;
}