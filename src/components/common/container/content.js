import styled from "styled-components";
import MainContent from "../../mainContent/mainContent";

import SideCategory from "./sideCategory/sideCategory";

const Content = () => {
    return (
        <>
            <ContentWrap>
                <SideCategory />
                <MainContent/>
            </ContentWrap>
        </>
    );
};

export default Content;

const ContentWrap = styled.div`
    display: flex;
`;
