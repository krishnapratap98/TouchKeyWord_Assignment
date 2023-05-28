import './App.css';
import {Link} from 'react-router-dom';
import { NavBar } from './Pages/Nav';


function App() {
  return (
    <div className='btn'>
   
    <button className='nxtBtn' >

      <Link  className='linkBtn' to="/typing">Proceed To Game</Link>
    </button>
    
    </div>
  );
}

export default App;
