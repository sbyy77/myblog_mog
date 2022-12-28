import TopLeftMenu from "./topLeftMenu";
import TopRightMenu from "./topRightMenu";
import styled from "styled-components";

const Header = () => {
    return (
        <>
            <HeaderWrap>
                <TopLeftMenu />
                <TopRightMenu />
            </HeaderWrap>
        </>
    );
};
export default Header;

const HeaderWrap = styled.div`
    width: 100%;
    z-index: 1;
    height: 3.4375rem;
    padding: 1.25rem 0.7rem 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 8%) 0px 0px 8px;
    left: 0;
`;
