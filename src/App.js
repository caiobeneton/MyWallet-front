import { BrowserRouter, Route, Routes } from "react-router-dom"
import Add from "./components/Add"
import Draw from "./components/Draw"
import Home from "./components/Home"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import GlobalStyle from "./globalStyles"

export default function App(){
    return (
        <BrowserRouter>
            <GlobalStyle></GlobalStyle>
            <Routes>
                <Route path="/" element={<Signin></Signin>}></Route>
                <Route path="/signup" element={<Signup></Signup>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/add" element={<Add></Add>}></Route>
                <Route path="/draw" element={<Draw></Draw>}></Route>
            </Routes>
        </BrowserRouter>
    )
}