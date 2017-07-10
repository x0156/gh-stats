
export interface IRelease {
    url: string;
    assets_url: string;
    upload_url: string;
    html_url: string;
    id: number;
    tagName: string;
    target_commitish: string;
    name: string;
    draft: Boolean;
    author: IAuthor;
    prerelease: Boolean;
    created_at: string;
    published_at: string;
    assets: IAsset[];
    tarball_url: string;
    zipball_url: string;
    body: string;
}

export interface IAsset {
    url: string;
    id: number;
    name: string;
    label: string;
    uploader: IAuthor;
    content_type: string;
    state: string;
    size: number;
    download_count: number;
    created_at: string;
    updated_at: string;
    browser_downloadUrl: string;

}

export interface IAuthor {

    login: string;
    id: number;
    avatarUrl: string;
    gravatarId: string;
    url: string;
    htmlUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    starredUrl: string;
    subscriptionsUrl: string;
    organizationsUrl: string;
    reposUrl: string;
    eventsUrl: string;
    receivedEventsUrl: string;
    type: string;
    siteAdmin: Boolean;
}
