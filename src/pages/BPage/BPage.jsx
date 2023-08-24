import React, { useRef, useState } from 'react';
import MainLayout from '../../Components/MainLayout/MainLayout';

function BPage({ setHeader }) {
    
    const menus = [
        {
            id: 1,
            name: "내 계정 정보"
        },
        {
            id: 2,
            name: "비밀번호 변경"
        },
        {
            id: 3,
            name: "이메일 인증 또는 변경"
        },
        {
            id: 4,
            name: "계정 업그레이드"
        }
    ];
    
    let [ content, setContent ] = useState("기본값");

    let inputText = "";

    // document를 사용하지 않고 값가지고 오기
    const inputRef= useRef();
    
    const handleInputOnChange = (e) => {
        // console.log(e.target.value);
        inputText = e.target.value;
    }

    const handleOkClick = () => {
        // console.log(document.querySelector("input").value);
        // console.log(inputRef.current.value);
        setContent(inputText);
        // content = inputText로는 안바뀜 = 재랜더링이 되지 않았기 때문 => useState를 이용하여 값이 바뀔경우 =  setContent를 통해  content를 바꿔준다
        setHeader(inputText);
    }

    return (
        <MainLayout title={"B페이지"} menus={menus}  >
            <div>
                {/* 재랜더링을 해야 content가 바뀜 */}
                <h1>{content}</h1>
                <input type="text" onChange={handleInputOnChange} ref={inputRef} />
                <button onClick={handleOkClick} >확인</button>
            </div>
        </MainLayout>
    );
}

export default BPage;