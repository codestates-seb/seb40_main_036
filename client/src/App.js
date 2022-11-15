import { BrowserRouter } from 'react-router-dom';
import React from 'react'; // eslint-disable-line no-unused-vars
// import Main from './pages/main';
import Nav from './components/nav';
// import ShareList from './components/ShareList';
// import Login from './components/Login';
// import SignUP from './components/SignUp';
import './App.css';
import WriteForm from './components/WriteForm';
// import DropDown from './components/Dropdown';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <WriteForm />
        {/* <DropDown /> */}
        {/* <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/share" element={<ShareList />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUP />}></Route>
        </Routes> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
