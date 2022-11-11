import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'; // eslint-disable-line no-unused-vars
import Main from './Pages/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
