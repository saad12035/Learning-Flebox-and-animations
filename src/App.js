import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import MainHeader from "./componenets/mainHeader/mainHeader";
import {createTheme} from '@mui/material/styles';
import {ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: 'rgb(202, 50, 55)',
            dark: '#a20989',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ffffff'
        }
    },
});

function App() {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <MainHeader></MainHeader>
                <Routes>
                    <Route path="/" element={<Homepage/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>

    );
}

export default App;
