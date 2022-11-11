import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'; // eslint-disable-line no-unused-vars
import Main from './pages/main';
import Nav from './components/nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
