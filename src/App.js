import Celebrity from './pages/Celebrity';
import Movies from './pages/Movies';
import TV from './pages/TV';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Header/>
      <Routes>
        <Route path='/' element={Home}/>
        <Route path='/movie' element={Movies}/>
        <Route path='/tv' element={TV}/>
        <Route path='/person' element={Celebrity}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
