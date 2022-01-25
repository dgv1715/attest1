import theme from "../theme";
import {ThemeProvider} from "@mui/material";

function Header() {

    return (
        <ThemeProvider theme={theme}>
            <h1> test </h1>
        </ThemeProvider>
    );


}

export default Header;