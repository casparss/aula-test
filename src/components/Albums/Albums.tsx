import {
    CircularProgress,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core";
import React, { useState } from "react";
import useAlbumResource from "../../hooks/useAlbumResource";
import { ResourceType } from "../../services/albumService";
import AlbumList from "./AlbumList";
import useStyles from "./style";

const Albums: React.FC = () => {
    const styles = useStyles();

    const {
        albums,
        isLoading,
        errorMessage,
        resourceType,
        setResourceType,
    } = useAlbumResource();

    const [filterTerm, setFilterTerm] = useState<string>("");

    return (
        <>
            <div className={styles.controlPanel}>
                <TextField
                    label="Filter"
                    variant="outlined"
                    className={styles.input}
                    onChange={({ target: { value } }) => setFilterTerm(value)}
                />

                <Select
                    variant="outlined"
                    value={resourceType}
                    className={styles.input}
                    onChange={({ target: { value } }) =>
                        setResourceType(value as ResourceType)
                    }
                >
                    <MenuItem value={ResourceType.ALBUMS}>Top albums</MenuItem>
                    <MenuItem value={ResourceType.SONGS}>Top songs</MenuItem>
                </Select>

                {isLoading && <CircularProgress />}
            </div>

            <AlbumList
                albums={albums}
                filterTerm={filterTerm}
                errorMessage={errorMessage}
            />
        </>
    );
};

export default Albums;
