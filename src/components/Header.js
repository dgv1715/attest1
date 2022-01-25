import React, {Component} from 'react';
import theme from "../theme";
import {ThemeProvider} from "@material-ui/core/styles";
import {AppBar, CssBaseline, FormControl, InputLabel, MenuItem, Select, Toolbar} from "@material-ui/core";

export class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            faecher: null,
        };
    }


    handleChangeFach = (event) => {
        this.setState({
            faecher: event.target.value
        })
    }

    render() {

        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <AppBar color="primary" position="static">
                    <Toolbar color="primary">
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Fächer</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.faecher}
                                label="Fächer"
                                onChange={this.handleChangeFach}
                            >
                                <MenuItem value={"Mathe"}>Mathe</MenuItem>
                                <MenuItem value={"Deutsch"}>Deutsch</MenuItem>
                                <MenuItem value={"Englisch"}>Englisch</MenuItem>
                            </Select>
                        </FormControl>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        );
    }
}