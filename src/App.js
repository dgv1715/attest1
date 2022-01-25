import './App.css';
import theme from "./theme";
import {ThemeProvider} from "@material-ui/core/styles";
import {CssBaseline} from "@material-ui/core";
import {Header} from "./components/Header";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="App">
                <Header> </Header>
            </div>
        </ThemeProvider>
    );
}

export default App;
