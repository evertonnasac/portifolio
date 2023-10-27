import styled from "styled-components";
import {Title as T, Paragraph as P} from "../../components/texts"
import {styles, mediaQueries} from "../../rules/defaultVaules"

export const Container = styled.section`  
    max-width: 1450px;
    padding-top: ${styles.heightNavBar};

    @media (max-width: ${mediaQueries.smartphone.default.widthMax} ) {
        height: auto;
    }

`
export const BoxCard = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 25px;

    @media (max-width: ${mediaQueries.smartphone.default.widthMax} ) {
        flex-direction: column;
        gap: 25px;
        align-items: center;
        
    }
`
export const Card = styled.article`
    border: 1px solid ${({theme}) => theme.colors.borderColor};
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding: 3.5%;

    @media (max-width: ${mediaQueries.smartphone.default.widthMax} ) {
       width: 90%;
        
    }


`

export const Title = styled(T)`
    font-size: ${({theme}) => theme.fontSize.medium};

`
export const Paragraph = styled(P)`
    padding-left: 25px;

`





