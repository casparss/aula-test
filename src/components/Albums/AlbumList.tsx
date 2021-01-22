import { Typography } from "@material-ui/core";
import React from "react";
import isAlbumsEmpty from "../../utils/isArrEmpty";
import { mapComponent } from "../../utils/mapComponent";
import AlbumItem from "./AlbumItem";
import { filterByName, mapAlbumData } from "./dataMapping";
import { useAlbumListStyles } from "./style";

export const AlbumList: React.FC<{
    albums: any[];
    filterTerm?: string;
    errorMessage?: string;
}> = ({ albums, filterTerm = "", errorMessage }) => {
    const styles = useAlbumListStyles();

    if (errorMessage) {
        return <Typography>Fetch error: {errorMessage}</Typography>;
    }

    if (isAlbumsEmpty(albums)) {
        return <Typography>No albums</Typography>;
    }

    return (
        <div className={styles.container}>
            {albums
                .filter(filterByName(filterTerm))
                .map(mapAlbumData)
                .map(mapComponent(AlbumItem))}
        </div>
    );
};

export default AlbumList;
