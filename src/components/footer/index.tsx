"use client"

import { Container, BoxStacks } from "./style"
import  {DiReact} from "react-icons/di"
import  {SiNextdotjs} from "react-icons/si"
import {SiStyledcomponents} from "react-icons/si"
import { Paragraph } from "../texts"
import theme from "../../styles/theme"



const Footer = () => {
    return(
        <Container>
            <Paragraph color={theme.colors.grayDark} size={theme.fontSize.smallX}>
                Inspiração: <a href="https://www.free-css.com/assets/files/free-css-templates/preview/page281/john-doe/#about"
                            target="_blank">
                                Free CSS
                            </a>
            </Paragraph>
            <BoxStacks>
                <Paragraph color={theme.colors.grayDark} size={theme.fontSize.smallX}>
                    Desenvolvido com:
                </Paragraph >
                <DiReact size = "30"/>
                <SiNextdotjs size = "30"/>
                <SiStyledcomponents size = "30"/>
            </BoxStacks>
        </Container>
    )
}

export default Footer