import Globalstyle from "./assets/Globalstyle";
import "./assets/minireset.min.css"
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";


function App() {
  return (
    <>
  
    <Globalstyle />
    <p>COUNTER</p>
    <CounterContainer />
    <hr />
    <p>🔥 TO DO list 🔥</p>
    <TodosContainer />
    </>
  );
}

export default App;
