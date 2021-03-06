import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import AddTodos from './components/AddTodo'
import {MainContext} from './context/MainProvider'
import { useContext } from 'react';

function App() {
  const {addTodo, deleteTodo} = useContext(MainContext)

  return (
    <div className="App">
      <Navbar />
      <Switch>

      <Route exact path="/">
        <Todo deleteTodo={deleteTodo} />
      </Route>

    <Route path="/addtodo">
    <AddTodos addTodo={addTodo} />
    </Route>

      </Switch>
    </div>
  );
}

export default App;
