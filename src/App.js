import logo from './logo.svg';
import './App.css';
import { Contact} from './components';
import { Header, Footer } from './containers';
import { Home } from './pages';


function App() {
  return (
    <div className='App'>
      <div className='header'>
        <Header />
      </div>
      <Home />
      <Contact />
      
    </div>
  );
}

export default App;
