import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import Kids from './pages/Kids'
import Offers from './pages/Offers'
import Vmart from './pages/Vmart'
import Login from './pages/login';
import DetailsPage from './components/DetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='/men' element={<Men/>} />
          <Route path='/women' element={<Women/>} />
          <Route path='/kids' element={<Kids/>} />
          <Route path='/offers' element={<Offers/>} />
          <Route path='/vmart' element={<Vmart/>} />
          <Route path='/login' element={<Login/>} />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
