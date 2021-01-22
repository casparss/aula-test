import albumListFixture from "../../test/albumListFixture";

export enum ResourceType {
    ALBUMS = 'topalbums_test',
    SONGS = 'topsongs_test'
}

export const fetchAlbums = async (resourceType: ResourceType): Promise<any[]> => {
    return albumListFixture.feed.entry;
};

export default fetchAlbums;