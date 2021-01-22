import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            flex: 1,
            padding: theme.spacing(1)
        }
    })
);

export default useStyles;