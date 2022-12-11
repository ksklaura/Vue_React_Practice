// 단축키 : rfc
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledCompStyle = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  .App {
    display: inline-block;
    background-color: gray;
    border: 10px solid black;
    height: 63px;
    width: 300px;
  }

  .circle {
    width: 5rem;
    height: 5rem;
    background: black;
    border-radius: 50%;
    margin: auto;
  }
`;

// 단축키 : styled
// import styled, { css } from 'styled-components';
const StyledCircle = styled.div`
  /* https://styled-components.com/docs/basics#adapting-based-on-props */
    width: 5rem;
    height: 5rem;
    background: ${(props) => props.color || 'pink'};
    border-radius: 50%;
    margin: auto;

    ${(props) =>
      props.huge &&
      css`
        width: 10rem;
        height: 10rem;
      `}
  }
`;

function CompStyle({ ...props }) {
  return (
    <StyledCompStyle>
      <h2>styled-components 로 만든</h2>
      <div className="App">styled-components 스타일로 만든</div>
      <hr />

      <div className="circle"></div>
      <hr />

      <StyledCircle></StyledCircle>
      <hr />

      <StyledCircle color={'red'}></StyledCircle>
      <hr />

      <StyledCircle color={'blue'} huge={true}></StyledCircle>
    </StyledCompStyle>
  );
}

CompStyle.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
CompStyle.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(CompStyle); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
