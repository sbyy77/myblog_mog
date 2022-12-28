import styled from "styled-components";

const UserInfoBottom = () => {
    return (
        <>
            <UserInfoBottomWrap>
                <UserBlogWrap>
                    <UserBlog>블로그 제목</UserBlog>
                    <UserBlogName>Sbyy77</UserBlogName>
                    <UserEdit href="#">수정하기</UserEdit>
                </UserBlogWrap>
                <UserSocialWrap>
                    <UserSocial>소셜 정보 깃허브</UserSocial>
                    <UserEdit href="#">수정하기</UserEdit>
                </UserSocialWrap>
                <UserEmailWrap>
                    <UserEmail>이메일 주소</UserEmail>
                    <UserEmailAdd>sbyy77@naver.com</UserEmailAdd>
                </UserEmailWrap>
                <br />
                <br />
                <Withdraw href="#">회원탈퇴</Withdraw>
            </UserInfoBottomWrap>
        </>
    );
};
export default UserInfoBottom;

const UserInfoBottomWrap = styled.div`
    width: 95.6%;
    margin-top: 2rem;
    padding-left: 2rem;
    position: relative;

    & > div {
        margin-block: 1rem;
    }
`;
const UserBlogWrap = styled.div`
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
`;
const UserSocialWrap = UserBlogWrap;
const UserEmailWrap = UserBlogWrap;

const UserBlogName = styled.div`
    margin-left: 2rem;
    font-size: 1.25rem;
    color: rgb(102, 100, 255);
`;
const UserEmailAdd = UserBlogName;
const UserBlog = styled.div`
    font-size: 1.25rem;
`;
const UserSocial = UserBlog;
const UserEmail = UserBlog;

const UserEdit = styled.a`
    position: absolute;
    right: 0;
    color: red;
    &:visited {
        text-decoration: none;
        color: black;
    }
`;

const Withdraw = styled.a`
    position: absolute;
    right: 0;
    color: red;
`;
