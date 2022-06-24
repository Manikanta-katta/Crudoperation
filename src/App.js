import logo from './logo.svg';
import './App.css';
import Create from './components/create/create';
import Readdata from './components/Read/read';
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
   
   <div>
          <Create />


        </div>
        <div>
          <Readdata />
        </div>
    </div>
  );
}

export default App;
