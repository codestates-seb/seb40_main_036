import styled from 'styled-components';
import ShareLisViewer from '../components/ShareListViewer';
import ShareLisViewerContents from '../components/ShareListViewerContents';
function ShareListLookup() {
  return (
    <>
      <Container>
        <ShareLisViewer />
        <ShareLisViewerContents />
      </Container>
    </>
  );
}

export default ShareListLookup;
const Container = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
`;
