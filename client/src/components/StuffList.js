import styled from 'styled-components';
import StuffListContents from './StuffListContents';
import CityDown from './CityDown';
import { useEffect, useState, useRef } from 'react';
import { FaSearch, FaPencilAlt } from 'react-icons/fa';
import axios from 'axios';
// import InfiniteScroll from 'react-infinite-scroller';
import { DotSpinner } from '@uiball/loaders';
import Swal from 'sweetalert2';

const size = { mobile: 425, tablet: 768 };
const mobile = `@media screen and (max-width: ${size.mobile}px)`; // eslint-disable-line no-unused-vars
const tablet = `@media screen and (max-width: ${size.tablet}px)`; // eslint-disable-line no-unused-vars
function StuffList() {
  const textRef = useRef();
  const pageEnd = useRef(null);
  const [questions, setQuestions] = useState([]); //데이터 저장
  const [pageNum, setPageNum] = useState(1);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState({
    select: 'title',
    content: '',
  });
  const [drop, setDrop] = useState();
  const handleTagSearchButton = () => {
    if (drop !== undefined) {
      axios
        .get(`/stuffQuestion/search/tag/${drop}?page=${pageNum}&size=8`)
        .then((response) => {
          console.log(response.data.data);
          console.log(drop);
          setQuestions(response.data.data);
          if (response.data.data.length === 0) {
            Swal.fire({
              title: '검색 결과가 없습니다.',
              confirmButtonColor: '#008505',
              icon: 'error',
            }).then(() => {
              window.location.reload();
            });
            setLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleSearchButton = () => {
    if (search.content !== undefined) {
      axios
        .get(
          `/stuffQuestion/search/${search.select}/${search.content}?page=${pageNum}&size=8`
        )
        .then((response) => {
          console.log(response.data.data);
          setQuestions(response.data.data);
          if (response.data.data.length === 0) {
            Swal.fire({
              title: '검색 결과가 없습니다.',
              confirmButtonColor: '#008505',
              icon: 'error',
            }).then(() => {
              window.location.reload();
            });
          }
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
  const fetchQustion = async (pageNum) => {
    try {
      console.log('불러오기');
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get(`/stuffQuestion?page=${pageNum}&size=8`);
      console.log(response.data);

      setQuestions((prev) => [...prev, ...response.data.data]);
      setTotalPage(response.data.pageInfo.totalPages);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };
  console.log(totalPage);
  console.log(pageNum);
  console.log(questions.length);

  const onIntersect = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && !loading) {
      setTimeout(async () => {
        setPageNum((page) => page + 1);
        setLoading(false);
      }, 300);
    }
  };

  // 비로그인일시 로그인 페이지로 이동 글쓰기 막는 기능
  const handleAskBtnClick = () => {
    if (localStorage.getItem('email') !== null) {
      window.location.href = '/stuffWriteForm';
    } else {
      Swal.fire({
        icon: 'error',
        title: '로그인 후 이용해주세요.',
        text: '로그인 후 댓글을 작성하실 수 있습니다.',
        confirmButtonColor: '#008505',
      }).then(() => (window.location.href = '/login'));
    }
  };

  useEffect(() => {
    if (totalPage >= pageNum) {
      fetchQustion(pageNum);
    }
  }, [pageNum]);

  // useEffect(() => {
  //   if (questions.length >= 15) {
  //     setLoading(true);
  //   } else {
  //     setLoading(false);
  //   }
  // });

  useEffect(() => {
    let observer;
    if (pageEnd.current) {
      observer = new IntersectionObserver(onIntersect, { threshold: 1.0 });
      observer.observe(pageEnd.current);
    }
    return () => observer && observer.disconnect();
  }, [onIntersect]);

  const handleDrop = (e) => {
    setDrop(e.target.value);
  };

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
            <div className="searchContainer">
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
            </div>
            <div className="row">
              <button className="writingBox" onClick={handleAskBtnClick}>
                <FaPencilAlt />
                <div className="writing">글쓰기</div>
              </button>
            </div>
          </SearchBox>
        </StuffListTitle>
        <SelectBox>
          <CityDown onChange={handleDrop} value={drop} />
          <button className="tagSearch" onClick={handleTagSearchButton}>
            <FaSearch />
          </button>
        </SelectBox>
        <ContentsContainer>
          {[...questions].map((item) => (
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
              count={item.countAnswer}
            />
          ))}
          <Loader>
            {totalPage >= pageNum ? <div id="pageEnd" ref={pageEnd} /> : null}
            {loading ? (
              <DotSpinner size={80} speed={0.9} color="#008505" />
            ) : null}
          </Loader>
        </ContentsContainer>
      </StuffListContent>
    </StuffListContainer>
  );
}

export default StuffList;
// const Loading = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
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
  padding: 1.5rem 1.5rem 0;
  border: 2px solid black;
  border-left-width: 0;
  border-top-width: 0;
  border-bottom-width: 2px;
  border-right-width: 0;

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

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
  .searchContainer {
    display: flex;
    width: 70%;
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
      width: 25rem;
      height: 2.5rem;
      padding: 10px 15px;
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
  }
  .row {
    .writingBox {
      display: flex;
      justify-content: center;
      align-items: center;
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
        font-size: 1rem;
        width: 2.8rem;
        height: 2.1rem;
      }
    }
    .writing {
      ${mobile} {
        display: none;
      }
    }
  }
`;

const SelectBox = styled.div`
  padding: 20px 18px;
  display: flex;
  justify-content: end;
  align-items: center;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  grid-gap: 5px;
  justify-content: center;
`;

const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
