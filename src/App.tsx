import Battle from 'Components/Battle'
import Home from 'Components/Home'
import NavBar from 'Components/NavBar'
import NoMatch from 'Components/NoMatch'
import Popular from 'Components/Popular/Popular'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <NavBar />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="popular" element={<Popular />} />
                    <Route path="battle" element={<Battle />} />
                    <Route path="*" element={<NoMatch />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
