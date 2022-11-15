import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'; // eslint-disable-line no-unused-vars
import Main from './pages/Main';
import Nav from './components/Nav';
import ShareList from './components/ShareList';
import Login from './components/Login';
import SignUP from './components/SignUp';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/share" element={<ShareList />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUP />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
