import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ShowCase from './components/ShowCase';
import Resume from './components/Resume';
import Home from './components/Home';
import ContactMe from './components/ContactMe';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/showcase" element={<ShowCase />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
