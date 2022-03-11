import './App.css';
import { AddEmployee } from './components/AddEmployee/AddEmployee';
import { ShowEmployees } from './components/ShowEmployees/ShowEmployees';


function App() {
  return (
    <div className="App">
      <AddEmployee />
      <hr className='app-border'/>
      <ShowEmployees />
    </div>
  );
}

export default App;
