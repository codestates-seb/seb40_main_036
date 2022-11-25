import styled from 'styled-components';

const MyPage = () => {
  var acc = document.getElementsByClassName('accordion');
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function () {
      this.classList.toggle('active');
      var panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
        panel.style.display = 'none';
      } else {
        panel.style.display = 'block';
      }
    });
  }
  return (
    <>
      <MypageWrapper>
        <h2 className="bold title">MyPage</h2>
        <div id="info">
          <div className="d-flex">
            <span className="bold">이름</span>
            <span>어쩌구</span>
          </div>
          <div className="d-flex">
            <span className="bold">전화번호</span>
            <span>저쩌구</span>
          </div>
          <div className="d-flex">
            <span className="bold">이메일</span>
            <span>머시깽이</span>
          </div>
        </div>
        <div id="reservationInfo">
          <button className="accordion">Section 1</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className="accordion">Section 2</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <button className="accordion">Section 3</button>
          <div className="panel">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </MypageWrapper>
    </>
  );
};
export default MyPage;

const MypageWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 16px auto;
  padding: 8px;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
  .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;
    outline: none;
    .active,
    .accordion:hover {
      background-color: #ccc;
    }
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */

  /* Style the accordion panel. Note: hidden by default */
  .panel {
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
  }
  .d-flex {
    display: flex;
    *:first-child {
      flex: 0 1 33.3333%;
    }
    *:last-child {
      flex: 0 1 66.6666%;
    }
  }
  > div {
    margin-bottom: 8px;
  }

  .bold {
    font-weight: bold;
  }
`;
