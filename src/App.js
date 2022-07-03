import "./App.css";
import Chart from "./component/Chart";
import SideBar from "./component/SideBar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chart />
      </div>
    </div>
  );
}

export default App;
