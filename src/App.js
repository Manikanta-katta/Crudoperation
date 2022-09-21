import "./App.css";
import Create from "./components/create/create";
import Readdata from "./components/Read/read";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

function App(props) {
  return (
    <div className="App">
      <Create />
      <Readdata />
    </div>
  );
}

export default App;
