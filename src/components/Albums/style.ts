import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        input: {
            marginRight: theme.spacing(1)
        },
        controlPanel: {
            marginBottom: theme.spacing(1),
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        }
    })
);

export const useAlbumItemStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        width: 200,
        overflow: 'initial',
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    media: {
        height: 140,
    }
}));

export const useAlbumListStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap'
    },
});

export default useStyles;