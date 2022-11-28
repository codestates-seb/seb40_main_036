import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
import Intro from './pages/Intro';
import Main from './pages/main';
import Nav from './components/nav';
import ShareList from './components/ShareList';
import ReviewList from './components/ReviewList';
import Login from './components/Login';
import SignUP from './components/SignUp';
import EvacuationTips from './components/EvacuationTips';
import './App.css';
import ShareListLookup from './pages/ShareListLookup';
import WriteUpdate from './components/WriteUpdate';
import StuffList from './components/StuffList';
import WriteForm from './components/WriteForm';
import MyPage from './pages/MyPage';
import ReviewListLookup from './pages/ReviewListLookUp';
import StuffListLookup from './pages/StuffListLookup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/map" element={<Main />} />
          <Route path="/share" element={<ShareList />} />
          <Route path="/review" element={<ReviewList />} />
          <Route path="/stuffList" element={<StuffList />} />
          <Route path="/share/:QuestionId" element={<ShareListLookup />} />
          <Route path="/Review/:QuestionId" element={<ReviewListLookup />} />
          <Route path="/stuffLook/:QuestionId" element={<StuffListLookup />} />
          <Route path="/Tips" element={<EvacuationTips />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUP />}></Route>
          <Route path="/writeForm" element={<WriteForm />}></Route>
          <Route path="/writeUpdate" element={<WriteUpdate />}></Route>
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
