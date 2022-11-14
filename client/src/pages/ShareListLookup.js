import styled from 'styled-components';
import ShareAnswerViewr from '../components/ShareAnswer';
import ShareLisViewer from '../components/ShareListViewer';
import ShareLisViewerContents from '../components/ShareListViewerContents';
function ShareListLookup() {
  return (
    <Contents>
      <Container>
        <ShareLisViewer />
        <ShareLisViewerContents />
        <ShareAnswerViewr />
      </Container>
    </Contents>
  );
}

export default ShareListLookup;
const Contents = styled.div`
  min-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1254px;
  border: 1px solid #d2d2d2;
  border-radius: 10px;
  padding: 20px;
`;
