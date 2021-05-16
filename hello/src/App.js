import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent'
import FunctinalComponent from "./components/FunctinalComponent";
import Navbar from './components/Navbar';

function App() {
  return (

    <div className="App">

      <Navbar name="Fahim"></Navbar>
     <ClassComponent age="20"></ClassComponent>
     
    </div>

  );
}

export default App;
