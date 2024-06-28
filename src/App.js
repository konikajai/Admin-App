import './App.css';
import AdminPannel from './containers/AdminPanel';
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AdminPannel/>
      </BrowserRouter>
    </div>
  );
}

export default App;
