import styled from 'styled-components';
import AnswerPost from '../components/AnswerPost';
import ShareAnswerViewr from '../components/ShareAnswerViewr';
import ShareLisViewer from '../components/ShareListViewer';
import ShareLisViewerContents from '../components/ShareListViewerContents';
function ShareListLookup() {
  return (
    <Contents>
      <Container>
        <ShareLisViewer />
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
