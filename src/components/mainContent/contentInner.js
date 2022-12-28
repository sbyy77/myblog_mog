import styled from "styled-components";
import BlogContent from "./blogContent";

const ContentInner = () => {
    return (
        <>
            <ContentWrap>
                <BlogContent />
            </ContentWrap>
        </>
    );
};
export default ContentInner;

const ContentWrap = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    /*margin-top: 5rem;
    margin-bottom: 5rem;
    margin-left: auto;
    margin-right: auto;*/
    margin-block: 5rem;
    margin-inline: auto;
    gap: 3.125rem 1.875rem;

    @media (max-width:719px){
        max-width: 29.25rem;
    }
    @media (max-width: 478px){
        justify-content: center;
    }
`