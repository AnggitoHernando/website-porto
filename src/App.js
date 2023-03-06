import "./App.css";
import { Header, Footer } from "./containers";
import { Home } from "./pages";

function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <Home />
    </div>
  );
}

export default App;
