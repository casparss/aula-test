import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import React from "react";
import { useAlbumItemStyles } from "./style";

interface AlbumItemProps {
    image: string;
    name: string;
    artist: string;
    releaseDate: string;
    ranking: number;
}

export const AlbumItem: React.FC<AlbumItemProps> = ({
    name,
    image,
    artist,
}) => {
    const classes = useAlbumItemStyles();

    return (
        <Card className={classes.root} data-album-item>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        {artist}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default AlbumItem;
