import logo from './logo.svg';
import './Style.css';
import NavBar from './NavBar.js';
import Map from './Map.js';
import coffee from './coffee.png';

function App() {
  return (
    <div className="body">
          <NavBar />
          <div className='image'>
            <img className="image" src={coffee} />
          </div>
          <Map />
    </div>
  );
}

export default App;
