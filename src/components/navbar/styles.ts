import styled from "styled-components";
import {ILinkNav} from "./types"
import {styles, mediaQueries} from "../../rules/defaultVaules"
import avatar from "../../../public/img/avatar-linkedin.jpeg"


export const Navbar = styled.nav<{$position : string, $openMobile : boolean}>`
    position: ${props => props.$position};
    top: 0;
    z-index: 100;
    color : ${({theme}) => theme.colors.light};
    background-color : #fff;
    width : 100%;
    height: ${styles.heightNavBar };
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-weight: 400;
    line-height: 1.5;

    box-shadow: 0 1px 10px rgba(54,54,54,.18);

    @media (max-width: ${mediaQueries.tablet.default.widthMax}) {
        flex-direction:  column;
        gap : 12px;
        align-items: flex-start;
        padding: 10px 10%;
        height: ${ props => props.$openMobile ? "auto" : styles.heightNavBar };
    }

`
  


export const BoxItensNav = styled.div<{$openMobile : boolean}>`
   
    width: 40%;
    display: flex;
    justify-content: space-around;

    @media (max-width:  ${mediaQueries.tablet.default.widthMax} ) {
        display: ${props => props.$openMobile ? "flex" : "none"};
        flex-direction: column;
        gap: 12px;

    }

   
`

export const ItemNav = styled.a<ILinkNav>`
    font-size: ${({theme}) => theme.fontSize.smallX};
    color :  ${({theme}) => (props) =>  props.$active ?  theme.colors.secondary : theme.colors.gray};
    text-decoration: none;
    font-weight: 600;
`

export const MenuHamburguer = styled.div ` 
    display: none;
    align-self: flex-end;
    cursor: pointer;

    @media (max-width: ${mediaQueries.tablet.default.widthMax} ) {
        display: block;
    }
    
    
`



export const HeadNav = styled.div<{$display: string}>` 
    display: ${props => props.$display};
    flex-direction: column;
    align-items: center;
    color: ${({theme}) => theme.colors.grayDark};

    :first-child{
        font-size: ${({theme}) => theme.fontSize.smallX};
    }

    
    @media (max-width:  ${mediaQueries.tablet.default.widthMax}) {
        display: none;
    }

`
export const RoudedImage = styled.div<{$display: string}>`

    display:${props => props.$display};
    width: 175px;
    height: 175px;
    border-radius: 100%;
    background-image: url(${avatar.src});
    background-position: center;
    background-size: contain;
    border: 7px solid #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    @media (max-width:   ${mediaQueries.tablet.default.widthMax} ) {
        display: none;
    }
    
`

   
    
