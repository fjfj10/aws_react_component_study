import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #fff;
`;

function P3({ num, setNum }) {
    let inputValue = 0;

    const handleInputChange = (e) => {
        // replacs: 0-9까지의 숫자만 들어감 나머지는 공백으로 표시
        const value = e.target.value.replace(/[^0-9]/g, "");
        // 공백으로 보이지만 진짜 공백인것은 아니기 때문에 재설정 
        e.target.value = value;
        if (!!value) {
            inputValue = parseInt(value);
        }
    }

    const handleButtonClick = (e) => {
        const { name } = e.target;
        if (name === "plus") {
            setNum(num + inputValue);
        }else {
            setNum(num - inputValue);
        }
    }

    return (
        <div css={SContainer}>
            <input type="text" onChange={handleInputChange}/>
            <button name='plus' onClick={handleButtonClick} >증가</button>
            <button name='minus' onClick={handleButtonClick} >감소</button>
        </div>
    );
}

export default P3;