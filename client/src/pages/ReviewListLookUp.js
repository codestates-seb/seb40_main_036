import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReviewAnswerPost from '../components/ReviewAnswerPost';
import ReviewAnswerViewr from '../components/ReviewAnswerViewr';
import ReviewListViewerTitle from '../components/ReviewListViewerTitle';
import ReviewListViewerContents from '../components/ReviewListViewerContents';
function ReviewListLookup() {
  const { QuestionId } = useParams();
  const [questions, setQuestions] = useState(null);
  const [answer, setAnswer] = useState(null);
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
        const response = await axios.get(`/shelterQuestion/${QuestionId}`);
        console.log(response.data.data);
        setQuestions(response.data.data);
        setAnswer(response.data.data.stuffAnswers); // 데이터는 response.body 안에 들어있습니다.
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
        {questions.length !== 0 && (
          <>
            <ReviewListViewerTitle
              key={questions.stuffQuestionId}
              title={questions.stuffQuestionTitle}
              date={questions.stuffQuestionCreated}
              name={questions.name}
              modifie={questions.stuffQuestionModifed}
              tag={questions.locationTag}
            />
            <ReviewListViewerContents
              id={questions.stuffQuestionId}
              title={questions.stuffQuestionTitle}
              content={questions.stuffQuestionContent}
              user={questions.name}
              questionId={questions.stuffQuestionId}
              memberId={questions.memberId}
            />
          </>
        )}
        {answer.map((item) => (
          <ReviewAnswerViewr
            key={item.stuffAnswerId}
            questionId={item.stuffQuestionId}
            id={item.stuffAnswerId}
            memberid={item.memberId}
            user={item.name}
            answerContents={item.stuffAnswerContent}
            answerDate={item.stuffAnswerCreated}
          />
        ))}
        <ReviewAnswerPost />
      </Container>
    </Contents>
  );
}

export default ReviewListLookup;
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
