import styled from "styled-components";
import UserImage from "../../../images/userInfoImages/user_profile(128px).png";
const UserImg = () => {
    return (
        <>
            <UserImgWrap>
                <form action="#" method="get">
                    <UserProfileImg></UserProfileImg>
                    <UserImgChange>이미지 변경</UserImgChange>
                    <UserImgDelete>이미지 삭제</UserImgDelete>
                </form>
            </UserImgWrap>
        </>
    );
};
export default UserImg;

const UserImgWrap = styled.div`
    position: relative;

    &::after{
        position: absolute;
        content: "";
        width: 0.0625rem;
        height: 13rem;
        top: 0.8rem;
        margin-left: 10rem;
        border-right: 0.125rem solid #cfcfcf;
    }
`;
const UserProfileImg = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: url(${UserImage}) no-repeat center;
`;

const UserImgChange = styled.button`
    width: 90%;
    height: 1.8rem;
    margin: 10px auto;
    display: block;
    font-weight: bold;
    color: rgb(102,100,255);
    border-radius: 0.3125rem;
    border: 0.125rem solid rgb(102,100,255);
    background-color: #ffffff;
    cursor: pointer;

    &:hover{
        background-color: rgb(102,100,255);
        color: #ffffff;
        transition: 0.2s;
    }
`;

const UserImgDelete = UserImgChange;
