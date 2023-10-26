import styled from "styled-components";
import {mediaQueries} from "../../rules/defaultVaules"
import { Paragraph as P } from "../texts";

export const Section = styled.section`
    height: 90vh;
    padding-top: 65px;
    
`

export const CarouselContainer = styled.div`
    height: 70%;
    width: 100%;
    background-color: ${({theme}) => theme.colors.grayDark };
    padding: 2% 0;
  
;

`
export const Paragraph = styled(P)`
    padding-left: 25px;
    margin-bottom: 25px;

`
export const ContainerImage = styled.div`
    background-position: center;
    width: 90%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${mediaQueries.smartphone.default.widthMax}) {
        
    }

`

export const Image = styled.img`
    width: 100%;
    height: 90%;
`

export const Link = styled.a`
    color : ${({theme})=> theme.colors.primary}
`



