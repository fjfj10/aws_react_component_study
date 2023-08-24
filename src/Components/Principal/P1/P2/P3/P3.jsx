import React, { useRef } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRecoilState } from 'recoil';
import { principalState } from '../../../../../store/principalStore';

const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    background-color: #fff;
`;

function P3({ num, setNum }) {
    // 재랜더링 시 초기화 -> 0으로 바뀐다 이후 input에 다른 수를 넣어도 변하지 않음 
    // -> inputValue를 사용하지 않는다 => 전역상태관리 사용(props가 세번이상 넘어갈때 전역 사용)
    // let inputValue = 0; 

    // recoilroot는 index에서 준다
    const [ principal, setPricipal ] = useRecoilState(principalState);
    const inputRef = useRef();

    const handleInputChange = (e) => {
        // replace: 0-9까지의 숫자만 들어감 나머지는 공백으로 표시
        const value = e.target.value.replace(/[^0-9]/g, "");
        // 위는 표시만 해주는것 다라서 대입은 따로 해준다
        e.target.value = value;
        // if (!!value) {
        //     inputValue = parseInt(value);
        // }
    }

    const handleButtonClick = (e) => {
        const { name } = e.target;
        if (name === "plus") {
            setNum(num + parseInt(inputRef.current.value));
        }else {
            setNum(num - parseInt(inputRef.current.value));
        }
    }

    return (
        <div css={SContainer}>
            <div>userID: {principal.userId}</div>
            <div>username: {principal.userName}</div>
            <div>name: {principal.name}</div>
            <div>email: {principal.email}</div>
            <div>phon: {principal.phon}</div>
            <input type="text" onChange={handleInputChange} ref={inputRef}/>
            <button name='plus' onClick={handleButtonClick} >증가</button>
            <button name='minus' onClick={handleButtonClick} >감소</button>
        </div>
    );
}

export default P3;