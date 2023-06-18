import { useNavigate } from 'react-router-dom'
import './navBar.css'
import { BiArchiveIn } from 'react-icons/bi'
import { AiTwotoneHome } from "react-icons/ai";

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <div className="navigator" onClick={() => navigate('/')}>
                <p><AiTwotoneHome /></p>
            </div>
            <div className="navigator" onClick={() => navigate('/archive')}>
                <p><BiArchiveIn /></p>
            </div>
        </div>
    )
}