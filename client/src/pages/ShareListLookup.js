import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AnswerPost from '../components/AnswerPost';
import ShareAnswerViewr from '../components/ShareAnswerViewr';
import ShareLisViewerTitle from '../components/ShareListViewerTitle';
import ShareLisViewerContents from '../components/ShareListViewerContents';
function ShareListLookup() {
  const { QuestionId } = useParams();
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQustion = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 questions 를 초기화하고
        setError(null);
        setQuestions(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(`/question/${QuestionId}`);
        console.log(response.data);
        setQuestions(response.data); // 데이터는 response.body 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQustion();
  }, [QuestionId]);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!questions) return <div>질문이 없습니다.</div>;
  return (
    <Contents>
      <Container>
        <ShareLisViewerTitle />
        <ShareLisViewerContents />
        <ShareAnswerViewr />
        <AnswerPost />
      </Container>
    </Contents>
  );
}

export default ShareListLookup;
const Contents = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  padding: 24px;
`;
