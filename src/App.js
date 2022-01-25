import './App.css';
import Header from "./components/Header";
import theme from "./theme";
import {ThemeProvider} from "@mui/material";


function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header> </Header>
            </div>

        </ThemeProvider>
    );
}

export default App;
