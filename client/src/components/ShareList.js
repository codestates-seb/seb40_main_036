import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import ShareListContents from './ShareListContents';
import { Link } from 'react-router-dom';
import CityDown from './CityDown';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { DotSpinner } from '@uiball/loaders';
import { FaSearch, FaPencilAlt } from 'react-icons/fa';
const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars

function ShareList() {
  const textRef = useRef();
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState(10);
  const [search, setSearch] = useState({
    select: 'title',
    content: '',
  });
  const [drop, setDrop] = useState();

  const handleDrop = (e) => {
    setDrop(e.target.value);
  };

  const handleTagSearchButton = () => {
    if (drop !== undefined) {
      axios
        .get(`/question/search/tag/${drop} `)

        .then((response) => {
          console.log(response);
          setQuestions(response.data);
          console.log(drop);
        })
        .catch((err) => console.log(err));
    }
  };
  const handlePageChange = (page) => {
    setPage(page);
  };

  const itemChange = (e) => {
    setItems(Number(e.target.value));
  };
  const handleSearchButton = () => {
    if (search.content !== undefined) {
      axios
        .get(`/question/search/${search.select}/${search.content}`)
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

  useEffect(() => {
    const fetchQustion = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 questions 를 초기화하고
        setError(null);
        setQuestions(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const response = await axios.get(`/question/questions`);
        console.log(response);
        setQuestions(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchQustion();
  }, []);
  if (loading)
    return (
      <Loading>
        <DotSpinner size={80} speed={0.9} color="#008505" />
      </Loading>
    );
  if (error) return <div>에러가 발생했습니다</div>;
  if (!questions) return <div>질문이 없습니다</div>;

  return (
    <ShareListContainer>
      <ShareListContent>
        <ShareListTitle>
          <Header>
            <h1>물품 나눔 게시판</h1>
          </Header>
          <SelectBox>
            <CityDown onChange={handleDrop} value={drop} />
            <button className="tagSearch" onClick={handleTagSearchButton}>
              <FaSearch />
            </button>
          </SelectBox>
        </ShareListTitle>
        <ContentsContainer>
          <ContentsTitle>
            <div className="num">번호</div>
            <div className="title">제목</div>
            <div className="writer">작성자</div>
            <div className="date">작성일</div>
            <div className="view">조회수</div>
          </ContentsTitle>
          {questions &&
            questions
              .slice(items * (page - 1), items * (page - 1) + items)
              .map((item) => (
                <ShareListContents
                  key={item.questionId}
                  id={item.questionId}
                  memberId={item.memberId}
                  title={item.questionTitle}
                  num={item.questionId}
                  writer={item.name}
                  date={item.questionCreated}
                  tag={item.locationTag}
                  view={item.views}
                  count={item.countAnswer}
                />
              ))}
        </ContentsContainer>
        <Row>
          <select className="items" onChange={itemChange}>
            <option value="10">10개</option>
            <option value="20">20개</option>
            <option value="30">30개</option>
          </select>
          <Link to="/writeForm">
            <button className="writing">
              <FaPencilAlt />
              글쓰기
            </button>
          </Link>
        </Row>
        <PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={items}
            totalItemsCount={questions.length - 1}
            prevPageText={'‹'}
            nextPageText={'›'}
            onChange={handlePageChange}
          />
        </PaginationBox>
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
      </ShareListContent>
    </ShareListContainer>
  );
}

export default ShareList;
const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ShareListContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 10px;
`;

const ShareListContent = styled.div`
  width: 100%;
`;

const ShareListTitle = styled.div`
  padding: 24px 24px 0;
  ${mobile} {
    padding: 1.2rem 1.2rem 0;
  }
`;

const Header = styled.div`
  h1 {
    font-size: 1.68rem;
    ${tablet} {
      font-size: 1.55rem;
    }
    ${mobile} {
      font-size: 1.3rem;
    }
  }
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 0 12px;
  .tagSearch {
    text-align: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid #919eab;
    font-size: 1.2rem;
    border-radius: 5px;
    cursor: pointer;
    ${tablet} {
      font-size: 1.2rem;
      width: 2.3rem;
      height: 2.3rem;
    }
    ${mobile} {
      font-size: 1rem;
      width: 2.1rem;
      height: 2.1rem;
    }
  }
`;
const ContentsContainer = styled.div`
  border: 2px solid black;
  border-left-width: 0;
  border-top-width: 2px;
  border-bottom-width: 2px;
  border-right-width: 0;
`;
const ContentsTitle = styled.div`
  ${mobile} {
    padding: 8px 10px;
  }
  align-items: center;
  display: flex;
  padding: 10px 24px;
  font-size: 1.125rem;
  font-weight: bold;
  border: 1px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-right-width: 0;
  color: black;
  text-align: center;
  ${tablet} {
    font-size: 1rem;
  }
  ${mobile} {
    font-size: 0.8rem;
  }
  .num {
    width: 10%;
  }
  .title {
    width: 40%;
  }
  .writer {
    width: 20%;
  }
  .date {
    width: 20%;
  }
  .view {
    width: 10%;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0 0;
  padding: 0 24px;
  .items {
    padding: 7px 13px;
    width: 6.25rem;
    height: 2.5rem;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 1rem;
    cursor: pointer;
    ${tablet} {
      font-size: 0.9rem;
      width: 5.4rem;
      height: 2.3rem;
    }
    ${mobile} {
      font-size: 0.75rem;
      width: 5rem;
      height: 2.1rem;
    }
  }
  .writing {
    padding: 7px 13px;
    width: 6.25rem;
    height: 2.5rem;
    background-color: #ffffff;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 1rem;
    cursor: pointer;
    ${tablet} {
      font-size: 0.9rem;
      width: 5.4rem;
      height: 2.3rem;
    }
    ${mobile} {
      font-size: 0.75rem;
      width: 5rem;
      height: 2rem;
    }
  }
`;
const PaginationBox = styled.div`
  margin-top: 3px;
  .pagination {
    display: flex;
    justify-content: center;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  ul.pagination li {
    display: inline-block;
    width: 35px;
    height: 35px;
    border: 1px solid #e2e2e2;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.125rem;
    border-radius: 3px;
    margin-left: 2px;
    margin-right: 2px;
    ${tablet} {
      font-size: 0.95rem;
      width: 30px;
      height: 30px;
    }
    ${mobile} {
      font-size: 0.8rem;
      width: 25px;
      height: 25px;
    }
  }
  ul.pagination li a {
    color: black;
    text-decoration: none;
  }
  ul.pagination li:hover {
    background-color: hsl(210, 8%, 95%);
  }
  ul.pagination li.active a {
    color: #ffffff;
  }
  ul.pagination li.active {
    background-color: #008505;
    border-color: #008505;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;
  select {
    cursor: pointer;
    font-size: 1rem;
    width: 110px;
    border-radius: 5px 0 0 5px;
    border-color: #919eab;
    ${tablet} {
      font-size: 0.9rem;
    }
    ${mobile} {
      font-size: 0.8rem;
    }
  }
  .searchInput {
    font-size: 1rem;
    width: 450px;
    height: 40px;
    padding: 15px;
    background: #ffffff;
    border: 1px solid #919eab;
    border-right: 0px;
    border-left: 0px;
    ${tablet} {
      font-size: 0.9rem;
      height: 2.3rem;
    }
    ${mobile} {
      font-size: 0.8rem;
      height: 2.1rem;
    }
  }
  .searchClick {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #919eab;
    font-size: 1.5rem;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    ${tablet} {
      font-size: 1.2rem;
      height: 2.3rem;
    }
    ${mobile} {
      font-size: 1rem;
      height: 2.1rem;
    }
  }
`;
