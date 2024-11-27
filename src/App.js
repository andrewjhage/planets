import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Layout from './pages/Layout';
import PlanetModal from './components/PlanetModal';

function App() {
  return (

  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <div className="App">
        <Header />
    </div>
    <PlanetModal />
  </>
  );
}

export default App;
