import theme from "@/styles/theme";
import styled from "styled-components";
import {Paragraph as P, Title as T} from "../../components/texts"
import {mediaQueries} from "../../rules/defaultVaules"
import {styles} from "../../rules/defaultVaules"


export const Container = styled.section`
    width: 100%;
    max-width: 1450px;
    display: flex;
    justify-content: center;
    margin-top: 20px;

    @media (max-width: ${mediaQueries.smartphone.default.widthMax}) {
        flex-direction: column;
        height: auto;
    }
       
 
`
export const Card = styled.article`
    width: 33%;
    border-bottom: 1px solid ${({theme}) => theme.colors.borderColor};
    border-right: 1px solid ${({theme}) => theme.colors.borderColor};
    padding: calc(${styles.heightNavBar } + 25px) 5% 5% ;
    display: flex;
    flex-direction: column;
    gap: 50px;

    &:nth-child(3){
        border-right: none;
    }

    @media (max-width: ${mediaQueries.smartphone.default.widthMax}) {
        width: 90%;
        height: auto;
        border: none;
    }
  
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 15px;

`
 
export const Title = styled(T)`


    &::after{
        content: "";
        position: absolute;
        bottom: -10px;
        left: 0;
        border-bottom: 2px solid ${theme.colors.secondary};
        width: 15%;
    }

`

export const Paragraph = styled(P)<{size: string, color: string}>`
    
    span{
        font-weight: bold;
        color : ${({theme}) => theme.colors.grayDark};
        margin-right: 2px;
       
    }
  
`

