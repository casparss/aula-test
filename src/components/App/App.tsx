import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import Albums from "../Albums";
import useStyles from "./style";

const App = () => {
    const { main } = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">Aula dev assignment</Typography>
                </Toolbar>
            </AppBar>

            <main className={main}>
                <Albums />
            </main>
        </>
    );
};

export default App;
