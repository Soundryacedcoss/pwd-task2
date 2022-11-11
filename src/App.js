import './App.css';
import { Bottom } from './Bottom';
import { MidPage } from './MidPage';
import { Navbar } from './Navbar';
function App() {
  return (
    <div className="App">
      <div className='navMidPAge'>
      <Navbar/> 
      <MidPage/>
      </div>
      
      <Bottom/>
    </div>
  );
}

export default App;
