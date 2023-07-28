import logo from './logo.svg';
import './App.css';
import Landing from './Components/Pages/Landing';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
