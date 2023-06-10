import logo from "./logo.svg";
import "./App.css";
import { FormularioComponent } from "./components/FormularioComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Formularios-React</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <FormularioComponent />
      </header>
    </div>
  );
}

export default App;
