/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";
import { Reset } from "styled-reset";
import { GSCommon } from "./Styles/Common";
import MainLayout from "./Components/MainLayout/MainLayout";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import APage from "./pages/APage/APage";
import BPage from "./pages/BPage/BPage";
import { useState } from "react";
import CPage from "./pages/CPage/CPage";

const SHeader = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #777;
`;

const SContainer = css`
  /*flex는 배치를 조정하기위해 사용 아무곳에나 막 쓰지 않는다 */
  margin: 0px auto;    //auto는 flex없이 중앙정렬할때 사용
  width: 1170px;
  background-color: #bbb;
`;



function App() {
  
  // const student = {
  //   code: 20230801,
  //   name: "김준일" 
  // }
  // 구조분해=비할당 구조: 객체 안에서 원하는 정보만 빼온다(객체를 분해시킨다) -> 비할당 구조를 해두면 props를 할때 함수 안에 어떤 변수가 있는지 알 수 있다(자동완성이 되기 때문에)
  // const { code, name } = student;
  
  // const name = '김준일'

  // return (
  //   <>
  //     컴포넌트는 대문자로 시작하는 파스칼 표기법을 사용한다
  //     <div> 표현식 : {name}</div>
  //     <div>{props.age}</div>
  //     <div>{code}</div>
  //     {/* jsx는 반드시 모든 태그가 하나로 묶여야 한다 아니면 오류남*/}
  //   </>
  // );
    
  // const jsx = <>
  //               <div>{name}</div>
  //               {/* (props)대신 { age }로 바로 받을 수 있다 */}
  //               <div>{age}</div>
  //               <div>{code}</div>
  //             </>
  
  // return (jsx);     

  const [ header, setHeader] = useState("Header");
  // 함수를 props를 통해 BPage에 전달하여 click이벤트가 일어날 때 실행 시킨다
  // (recoil: 전역상태 관리)을 이용해서도 할 수 있다(전달없이 사용가능)

  return(
    <>
      <Reset />
      <Global styles={GSCommon} />
      <div>
        <div css={SHeader}>
          {header}
          <div>
            <Link to={ "/a" } >A페이지</Link>
            <Link to={ "/b" } >B페이지</Link>
            <Link to={ "/c" } >C페이지</Link>
          </div>
        </div>
        <div css={SContainer}>
            <Routes>
              <Route path="/a" element={ <APage /> } />
              <Route path="/b" element={ <BPage setHeader={setHeader}/> } />
              <Route path="/c" element={ <CPage /> } />
            </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
