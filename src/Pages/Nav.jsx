import {Link} from 'react-router-dom';
import "../CSS/Nav.css";

export function NavBar(){
    return (
        <div className="navbar">
            <button><Link  to = "/" className='home'>Home</Link></button>
            <div><img src="https://media.licdn.com/dms/image/C5612AQELHww-j35gzQ/article-cover_image-shrink_600_2000/0/1574917010201?e=2147483647&v=beta&t=WEI4jKUGLGU2T181RwZdoHDV5WcVzHt6raILzTELpig" alt="" /> 
            <div>Typing Game</div></div>
            <button><Link to = "/typing" className='home'>Play Game</Link></button>
        </div>
    )
}