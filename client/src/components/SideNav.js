import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useState } from 'react';

const SideNav = (props) => {
  const [count, setCount] = useState(1);
  return (
    <SideWrapper>
      <div className="d-flex">
        <div className="ta-right">
          <FontAwesomeIcon
            icon={solid('xmark')}
            onClick={() => props.setopen(false)}
          />
        </div>
        <div className="pt128">
          <div className="mb8 ta-center">XX m</div>
          <div className="mb8 ta-center bold">{props.location}</div>
          <div className="mb8 ta-center">45/350</div>
          <div className="mb8 ta-center reservation">
            <FontAwesomeIcon icon={regular('user')} />
            {count > 0 ? (
              <button onClick={() => setCount(count - 1)}>
                <FontAwesomeIcon icon={solid('minus')} />
              </button>
            ) : null}
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>
              <FontAwesomeIcon icon={solid('plus')} />
            </button>
          </div>
          <button className="reservation">예약하기</button>
        </div>
      </div>
    </SideWrapper>
  );
};
export default SideNav;

const SideWrapper = styled.aside`
  max-width: 400px;
  width: 100%;
  height: calc(100vh - 50px);
  position: fixed;
  background: white;
  padding: 8px 16px;
  z-index: -1;
  font-size: 24px;
  box-shadow: 5px 0 5px rgb(0 0 0/25%);
  .d-flex {
    display: flex;
    flex-direction: column;
  }
  .ta-right {
    text-align: right;
  }
  .ta-center {
    text-align: center;
  }
  .pt128 {
    padding-top: 128px;
  }
  .mb8 {
    margin-bottom: 8px;
    padding-bottom: 8px;
  }
  .bold {
    font-weight: bold;
  }
  div.reservation {
    display: flex;
    justify-content: space-between;
    width: 160px;
    margin: 20px auto;
    align-items: center;

    > svg {
      margin-right: 16px;
    }
    button {
      padding: 8px 10px;
      border-radius: 50%;
      border: 2px solid black;
      background: white;
    }
    p {
      width: 30px;
    }
  }
  button.reservation {
    background: #c24c4c;
    border-radius: 5px;
    padding: 24px 36px;
    border: none;
    color: white;
    width: 100%;
    font-weight: 600;
  }
`;
