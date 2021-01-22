const BASE_URL = "https://itunes.apple.com/us/rss";

export enum ResourceType {
    ALBUMS = 'topalbums',
    SONGS = 'topsongs'
}

export const fetchAlbums = async (resourceType: ResourceType): Promise<any[]> => {
    const params = `limit=100`;
    const response = await fetch(`${BASE_URL}/${resourceType}/${params}/json`);
    return (await response.json()).feed.entry;
};

export default fetchAlbums;