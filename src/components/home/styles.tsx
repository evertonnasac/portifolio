
import styled from "styled-components";
import {styles} from "../../rules/defaultVaules"
import avatar from "../../../public/img/avatar-linkedin.jpeg"
import capa from "../../../public/img/fundo.jpg"
import {mediaQueries} from "../../rules/defaultVaules"



const Title = styled.h1`
    font-size:  calc(40px + (120 - 40) * ((100vw - 300px)/ (1600 - 300)));
    font-weight: 700;
    line-height: .7;
    margin-bottom: 25px;
    color: ${({theme}) => theme.colors.gray};

`

const SubTitle = styled.h4`
    font-size: calc(20px + (45 - 20) * ((100vw - 300px)/ (1600 - 300)));
    font-weight: 200;
    color : ${({theme}) => theme.colors.light};

` 

const Mono = styled.h6`
    font-weight: 500;
    font-size: calc(12px + (19 - 12) * ((100vw - 300px)/ (1600 - 300)));
    margin-bottom: 40px;
    color : ${({theme}) => theme.colors.light};

`

const Box = styled.header`
    display: flex;
    flex-direction: column;

    
`

const RoudedImage = styled.div`

    display:none;
    width: 175px;
    height: 175px;
    border-radius: 100%;
    background-image: url(${avatar.src});
    background-position: center;
    background-size: contain;
    border: 7px solid ${({theme}) => theme.colors.primary};
    align-self: center;


    @media (max-width:  ${mediaQueries.tablet.default.widthMax}) {
        display: block;
    }
    
`

const Container = styled.div`
    width: 100% ;
    height: calc(100vh - ${styles.heightNavBar});
    display: flex;
    align-items: center;
    padding-left: 20px;
    
    background-image: url(${capa.src});
    background-attachment:fixed;
    background-repeat: no-repeat;
    background-size: cover;

    @media (max-width:  ${mediaQueries.tablet.default.widthMax}) {
        justify-content: center;
        padding: 0
    }


`


export  {Title, SubTitle, Mono, Box, Container, RoudedImage}