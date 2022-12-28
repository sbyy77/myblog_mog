import styled from "styled-components";
import UserInfoBottom from "./userContainerbottom/userInfoBottom";
import UserInfoTop from "./userContainertop/userInfoTop";

const UserContainer = () => {
    return (
        <>
            <UserContainerWrap>
                <UserInfoTop/>
                <UserInfoBottom/>
            </UserContainerWrap>
        </>
    );
};

export default UserContainer;

const UserContainerWrap = styled.div`
    margin-top: 9.375rem;
    width: 49rem;
    margin-inline: auto;
`