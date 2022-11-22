import Pagination from 'react-js-pagination';
import styled from 'styled-components';
import ShareListContents from './ShareListContents';
import { Link } from 'react-router-dom';
import DropDown from './Dropdown';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
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
  const handlePageChange = (page) => {
    setPage(page);
  };

  const itemChange = (e) => {
    setItems(Number(e.target.value));
  };
  const handleSearchButton = () => {
    if (search.content !== undefined) {
      axios.get(`/question/search/${search.title}`).then((response) => {
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
            <h1>물품 나눔 게시판</h1>
          </Header>
          <SelectBox>
            <DropDown />
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
          {questions
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
            <option value="titile">제목</option>
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
          <div className="searchClick" type="button">
            <FaSearch
              onClick={() => {
                handleSearchButton();
              }}
            />
          </div>
        </SearchContainer>
      </ShareListContent>
    </ShareListContainer>
  );
}

export default ShareList;

const ShareListContainer = styled.div`
  width: 100%;
  max-width: 1254px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
`;

const ShareListContent = styled.div`
  width: 100%;
`;

const ShareListTitle = styled.div`
  padding: 24px 24px 0;
`;

const Header = styled.div`
  h1 {
    font-size: 27px;
  }
`;

const SelectBox = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0 0 12px;
  .selectRegion {
    width: 210px;
    height: 40px;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
  }
  .selectDistrict {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
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
  display: flex;
  padding: 10px 24px;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 1px;
  border-right-width: 0;
  color: black;
  text-align: center;
  .num {
    width: 10%;
  }
  .title {
    width: 50%;
  }
  .writer {
    width: 15%;
  }
  .date {
    width: 15%;
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
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border-color: #d2d2d2;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
  }
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
const PaginationBox = styled.div`
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
    font-size: 18px;
    border-radius: 3px;
    margin-left: 2px;
    margin-right: 2px;
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
  padding: 20px;
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
