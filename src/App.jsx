import { Routes, Route } from 'react-router-dom';
import Home from './Frontend/Pages/HomePage';
import Login from './Frontend/Pages/LoginPage';
import Registrasi from './Frontend/Pages/RegistrasiPage';
import Keranjang from './Frontend/Pages/ChartPage'
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrasi" element={<Registrasi />} />
        <Route path="/Keranjang" element={<Keranjang />} />

      </Routes>
    </div>
  );
}

export default App;
