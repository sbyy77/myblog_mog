import styled from "styled-components";
import userPhotoImg from "../../images/mainContentImages/user_profile(128px).png";

const MainUserProfile = () => {
    return (
        <>
            <MainUserProfileWrap>
                <UserPhotoInner></UserPhotoInner>
                <div>
                    <UserName>최수빈(과제에 치이는 3학년)</UserName>
                    <UserMsg>파이썬 사라져</UserMsg>
                </div>
            </MainUserProfileWrap>
        </>
    );
};
export default MainUserProfile;

const MainUserProfileWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

const UserPhotoInner = styled.div`
    width: 9.375rem;
    height: 9.375rem;
    margin-right: 6.25rem;
    background: url(${userPhotoImg}) no-repeat center;
    background-size: contain;

    @media (max-width: 536px) {
        margin-right: 1.5625rem;
    }
`;

const UserName = styled.h2`
    color: #000;
    font-size: 1.875rem;
    font-weight: bold;
    @media (max-width: 536px) {
        font-size: 1.5rem;
    }
`;

const UserMsg = styled.p`
    color: #000;
    font-size: 1.25rem;
    font-weight: 500;
    @media (max-width: 536px) {
        font-size: 1.125rem;
    }
`;
