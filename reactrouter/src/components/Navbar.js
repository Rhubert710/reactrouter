import { Routes, Route, Link } from "react-router-dom";


function Navbar()
{
    return (
        <nav>
            <div>nav</div>

            <Routes>
                <Route path="/" element={<Link to="/blogs">Go to Blogs</Link>} />
                <Route path="blogs" element={<Link to="/">Go Home</Link>} />
            </Routes>

        </nav>
    )
}

export default Navbar