import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import P1 from './P1/P1';

const SContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
    width: 500px;
    height: 500px;
    background-color: #333;
`;

function Principal(props) {
    const [ num, setNum ] = useState(0);

    return (
        <div css={SContainer}>
            <h1>{num}</h1>
            <P1 num={num} setNum={setNum}/>
        </div>
    );
}

export default Principal;