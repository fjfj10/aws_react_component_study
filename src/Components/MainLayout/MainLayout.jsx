import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const SMainContainer = css`
    display: flex;
`;

const SSidebar = css`
    width: 300px;
    background-color: #ddd;
`;

const SContentContainer = css`
    flex-grow: 1;
  /* width: 100%;로하면 부모요소(SMainContainer)의 길이 100%와 같아진다 */
    height: 700px;
    background-color: #aaa;
`;

function MainLayout({ title, menus, children }) {

    const testMenus = [ 1, 2, 3, 4 ];
    const testMenusMap = testMenus.map((menu) => <li>{menu}</li>);
    // 위는 map을 이용하여 아래로 만든거임
    // const testMenusMap2 = [ <li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, ]

    return (
        <>
            <h1>{title}</h1>
            <div css={SMainContainer}>
                <ul css={SSidebar}>
                    {menus.map((menu) => <li key={menu.id}>{menu.name}</li>)}
                </ul>
                <div css={SContentContainer}>
                    {children}
                </div>
            </div>
        </>
    );
}

export default MainLayout;