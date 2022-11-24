import StuffListViewrTitle from '../components/StuffListViewrTitle';
import StuffListViewrContents from '../components/StuffListViewrContents';
import styled from 'styled-components';
function StuffListLookup() {
  return (
    <Contents>
      <Container>
        <StuffListViewrTitle />
        <StuffListViewrContents />
      </Container>
    </Contents>
  );
}

export default StuffListLookup;
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
