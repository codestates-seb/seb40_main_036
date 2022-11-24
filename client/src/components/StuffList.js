import styled from 'styled-components';
import StuffListContents from './StuffListContents';
import CityDown from './CityDown';
import { useEffect, useState, useRef } from 'react';
import { FaSearch, FaPencilAlt } from 'react-icons/fa';
import axios from 'axios';

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
function StuffList() {
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
    <StuffListContainer>
      <StuffListContent>
        <StuffListTitle>
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
        </StuffListTitle>
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
      </StuffListContent>
    </StuffListContainer>
  );
}

export default StuffList;

const StuffListContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
  justify-content: center;
`;

const StuffListContent = styled.div`
  width: 100%;
`;

const StuffListTitle = styled.div`
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
    ${tablet} {
      font-size: 24px;
    }
    ${mobile} {
      font-size: 21px;
    }
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
  ${tablet} {
    width: 77%;
  }
  ${mobile} {
    width: 70%;
  }
  select {
    cursor: pointer;
    font-size: 16px;
    width: 110px;
    border-radius: 5px 0 0 5px;
    border-color: #919eab;
    ${tablet} {
      font-size: 14px;
    }
    ${mobile} {
      font-size: 12px;
    }
  }
  .searchInput {
    font-size: 16px;
    width: 400px;
    height: auto;
    padding: 10px 15px;
    background: #ffffff;
    border: 1px solid #919eab;
    border-right: 0px;
    border-left: 0px;
    ${tablet} {
      font-size: 14px;
      padding: 9px 14px;
    }
    ${mobile} {
      font-size: 12px;
    }
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
    ${tablet} {
      font-size: 21px;
    }
    ${mobile} {
      font-size: 18px;
    }
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: end;

  .writing {
    padding: 7px 13px;
    width: auto;
    height: auto;
    background-color: #ffffff;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    cursor: pointer;
    ${tablet} {
      font-size: 14px;
    }
    ${mobile} {
      font-size: 12px;
    }
  }
`;
const SelectBox = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ContentsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 5px;
  justify-content: center;
`;
