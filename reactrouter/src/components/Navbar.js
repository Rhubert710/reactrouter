import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";


function Navbar(props)
{
 
    const [activeButton, setActiveButton] = useState('Home')
    const buttons = ['Home', 'About', 'Blogs', 'Participants']

    function setActive(params) 
    {
        
    }
    return (
        <nav id="nav">

            {buttons.map((buttonName, i) => (

                <Link to={buttonName}

                    key={`button-${i}`}

                    onClick={(e) => setActiveButton( buttonName )}

                    className={buttonName == activeButton? "activeButton navButton" : "navButton"}



                >
                    
                    {buttonName.toUpperCase()}

                </Link>
            ))}
        </nav>
    )
}

export default Navbar