import styled from 'styled-components';
import StuffListContents from './StuffListContents';
import CityDown from './CityDown';
import { useEffect, useState, useRef } from 'react';
import { FaSearch, FaPencilAlt } from 'react-icons/fa';
import axios from 'axios';
function Equipment() {
  const textRef = useRef();
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState({
    select: 'title',
    content: '',
  });
  const handleSearchButton = () => {
    if (search.content !== undefined) {
      axios
        .get(`/stuffQuestion/search/${search.select}/${search.content}`)
        .then((response) => {
          console.log(response);
          setQuestions(response.data);
          console.log(search);
        });
    }
    window.scrollTo(0, 0);
    setSearch({ select: 'title', content: '' });
    document.getElementById('search').value = 'title';
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearchButton();
    }
  };
  useEffect(() => {
    const fetchQustion = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 questions 를 초기화하고
        setError(null);
        setQuestions(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(`/stuffQuestion/stuffQuestions`);
        console.log(response.data);
        setQuestions(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQustion();
  }, []);
  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!questions) return <div>질문이 없습니다.</div>;
  return (
    <ShareListContainer>
      <ShareListContent>
        <ShareListTitle>
          <Header>
            <h1>비품 현황</h1>
          </Header>
          <SearchBox>
            <SearchContainer>
              <select
                id="search"
                onChange={(e) =>
                  setSearch({ select: e.target.value, content: search.content })
                }
              >
                <option value="title">제목</option>
                <option value="content">내용</option>
                <option value="name">이름</option>
              </select>
              <input
                className="searchInput"
                placeholder="검색어를 입력해주세요."
                value={search.content}
                ref={textRef}
                type="search"
                onChange={(e) =>
                  setSearch({ select: search.select, content: e.target.value })
                }
                onKeyDown={handleEnter}
              />
              <button
                className="searchClick"
                onClick={() => {
                  handleSearchButton();
                }}
              >
                <FaSearch />
              </button>
            </SearchContainer>
            <Row>
              <button className="writing">
                <FaPencilAlt />
                글쓰기
              </button>
            </Row>
          </SearchBox>
        </ShareListTitle>
        <SelectBox>
          <CityDown />
        </SelectBox>
        <ContentsContainer>
          {questions.map((item) => (
            <StuffListContents
              key={item.stuffQuestionId}
              id={item.stuffQuestionId}
              memberId={item.memberId}
              title={item.stuffQuestionTitle}
              content={item.stuffQuestionContent}
              num={item.stuffQuestionId}
              writer={item.name}
              date={item.stuffQuestionCreated}
              tag={item.locationTag}
              view={item.views}
            />
          ))}
        </ContentsContainer>
      </ShareListContent>
    </ShareListContainer>
  );
}

export default Equipment;

const ShareListContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  justify-content: center;
`;

const ShareListContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ShareListTitle = styled.div`
  padding: 24px 24px 0;
  border: 2px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 2px;
  border-right-width: 0;
`;

const Header = styled.div`
  h1 {
    font-size: 27px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  select {
    cursor: pointer;
    font-size: 16px;
    width: 110px;
    border-radius: 5px 0 0 5px;
    border-color: #919eab;
  }
  .searchInput {
    font-size: 16px;
    width: 450px;
    height: 40px;
    padding: 15px;
    background: #ffffff;
    border: 1px solid #919eab;
    border-right: 0px;
    border-left: 0px;
  }
  .searchClick {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #919eab;
    font-size: 24px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: end;

  .writing {
    width: 100px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    cursor: pointer;
  }
`;
const SelectBox = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: grid; /*grid, gird-inline */
  grid-template-columns: repeat(4, 345px);
  grid-template-rows: minmax(280px auto);
  gap: 3px 3px;
  justify-content: center;
`;
