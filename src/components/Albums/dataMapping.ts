export const mapAlbumData = (album: any, idx: number) => ({
    key: idx,
    image: album["im:image"][2].label,
    name: album["im:name"].label,
    artist: album["im:artist"].label
});

export const filterByName = (name: string) => (album: any): boolean => {
    if (name === '') {
        return true;
    }
    const albumName = album["im:name"].label;
    return !!albumName.match(new RegExp(name, "i"));
};