import styled from "styled-components";
import HeaderLogoImg from "../../../images/headerImages/MogLogo1.png";
const HeaderLogo = () => {
    return (
        <>
            <HeaderLogoIcon />
        </>
    );
};
export default HeaderLogo;

const HeaderLogoIcon = styled.div`
    width: 4.7rem;
    height: 100%;
    margin-left: 1.5rem;
    background: url(${HeaderLogoImg}) no-repeat center center;
    background-size: cover;

    @media (max-width: 612px) {
        display: none;
    }
`;
