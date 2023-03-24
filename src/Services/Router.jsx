import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";



const AppRouts = () => {
 
    return(
        <Router>
            <Routes>
                 <Route exact path='/' element={<MainPage/>} />
            </Routes>
        </Router>
    )
}

export default AppRouts;