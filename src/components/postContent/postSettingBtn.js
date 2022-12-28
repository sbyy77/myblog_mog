import styled from "styled-components";
import dotsImg from "../../images/postImages/dots.png"

const PostSettingBtn = () => {
    return(
        <>
            <SettingBtn/>
        </>
    )
}
export default PostSettingBtn;

const SettingBtn = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    background: url(${dotsImg}) no-repeat center;
    background-size: cover;
    margin-left: 6.25rem;
    cursor: pointer;

    &:hover{
        opacity: 0.6;
    }
`