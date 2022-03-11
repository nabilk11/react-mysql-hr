import './App.css';
import { AddEmployee } from './components/AddEmployee/AddEmployee';
import { ShowEmployees } from './components/ShowEmployees/ShowEmployees';


function App() {
  return (
    <div className="App">
      <h1 className="app-header">MySQL Employee Database</h1>
      <AddEmployee />
      <hr className='app-border'/>
      <ShowEmployees />
    </div>
  );
}

export default App;
