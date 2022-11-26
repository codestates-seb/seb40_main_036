import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react'; // eslint-disable-line no-unused-vars
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
import LogoutNav from './components/LogoutNav';
import MyPage from './pages/MyPage';
import ReviewListLookup from './pages/ReviewListLookUp';
import StuffListLookup from './pages/StuffListLookup';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('email') === null) {
      // sessionStorage 에 email이라는 key 값으로 저장된 값이 없다면
    } else {
      // sessionStorage 에 email이라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
    }
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        {/* isLogin 값이 true라면 로그아웃이 있는 헤더로 아니라면 그냥 헤더로 변환 */}
        {isLogin ? <LogoutNav isLogin={isLogin} /> : <Nav />}
        <Routes>
          <Route path="/" element={<Main />} />
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
          <Route
            path="/writeUpdate/:QuestionId"
            element={<WriteUpdate />}
          ></Route>
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
