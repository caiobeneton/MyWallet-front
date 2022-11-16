import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./globalStyles"

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyle></GlobalStyle>
            <Routes>
                <Route path="/"></Route>
            </Routes>
        </BrowserRouter>
    )
}