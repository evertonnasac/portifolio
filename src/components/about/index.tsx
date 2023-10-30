"use client"

import * as S from "./styles"
import theme from "../../styles/theme"
import {ProgressBar} from "../progressBar"
import {IconsBox} from "../iconsBox"
import {Icon} from "../iconsBox/icons"
import {VscGithubAlt} from "react-icons/vsc"
import {SlSocialLinkedin} from "react-icons/sl"
import {useEffect, useRef} from "react"
import { useHeight } from "@/hooks/useHeight"


const About = () => {

    const progressBarWidth  =  "150px"

    const aboutRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (aboutRef.current) {
            
            //const alturaDaDiv = aboutRef.current.clientHeight;

            let {setRefs} = useHeight()
            
            setRefs(aboutRef, "about")
        }
    }, []);

    return(
        <S.Container id = "about" ref = {aboutRef}>
            <S.Card>
               <S.Title >
                    Quem sou?
               </S.Title>
               <S.Paragraph color={theme.colors.grayDark} size={theme.fontSize.medium} >
                  Desenvolvedor Web Jr / Estagiário e Estudante de Ciência da Computação
               </S.Paragraph>
               <S.Paragraph color={theme.colors.gray} size={theme.fontSize.small}  >
               Amante de JavaScript em busca de conhecimento e ansioso para
               transformar  ideias em experiências interativas 
               </S.Paragraph>
            </S.Card>
            <S.Card>
                <S.Title >
                    Informações Pessoais
               </S.Title>
               <S.Box>
                <S.Paragraph color={theme.colors.gray} size={theme.fontSize.small} >
                        <span>Data de nascimento:</span>10/11/1993
                    </S.Paragraph>
                    <S.Paragraph color={theme.colors.gray} size={theme.fontSize.small} >
                        <span>Email:</span> nazare.everton@gmail.com
                    </S.Paragraph>
                    <S.Paragraph color={theme.colors.gray} size={theme.fontSize.small} >
                        <span>Telefone: </span> 71 - 99222-3332
                    </S.Paragraph>
                    <S.Paragraph color={theme.colors.gray} size={theme.fontSize.small} >
                        <span>Enderço: </span>Candeias - Região Metropolitana de Salvador, BA
                    </S.Paragraph>
                    <IconsBox>
                        <Icon link="https://github.com/evertonnasac" >
                         <VscGithubAlt size = "30" color = {theme.colors.secondary}/>
                        </Icon>
                        <Icon link="https://www.linkedin.com/in/everton-nazare-829723b4/">
                         <SlSocialLinkedin size = "30" color = {theme.colors.secondary}/>
                        </Icon>
                    </IconsBox>
               </S.Box>
            </S.Card>
            <S.Card>
                <S.Title>
                    Skills
                </S.Title>
                <S.Box>
                    <div>
                        <S.Paragraph color={theme.colors.gray} size={theme.fontSize.smallX}>
                            Javascript
                        </S.Paragraph>
                        <ProgressBar width={progressBarWidth} progress="80%"/>
                    </div>
                    <div>
                        <S.Paragraph color={theme.colors.gray} size={theme.fontSize.smallX}>
                            Typescript
                        </S.Paragraph>
                        <ProgressBar width={progressBarWidth} progress="50%"/>
                    </div>
                    <div>
                        <S.Paragraph color={theme.colors.gray} size={theme.fontSize.smallX}>
                            React
                        </S.Paragraph>
                        <ProgressBar width={progressBarWidth} progress="75%"/>
                    </div>
                    <div>
                        <S.Paragraph color={theme.colors.gray} size={theme.fontSize.smallX}>
                            Styled-component
                        </S.Paragraph>
                        <ProgressBar width={progressBarWidth} progress="70%"/>
                    </div>
                    <div>
                        <S.Paragraph color={theme.colors.gray} size={theme.fontSize.smallX}>
                            Node
                        </S.Paragraph>
                        <ProgressBar width={progressBarWidth} progress="50%"/>
                    </div>
                    <div>
                        <S.Paragraph color={theme.colors.gray} size={theme.fontSize.smallX}>
                            NextJS
                        </S.Paragraph>
                        <ProgressBar width={progressBarWidth} progress="50%"/>
                    </div>
                    <div>
                        <S.Paragraph color={theme.colors.gray} size={theme.fontSize.smallX}>
                            React Native
                        </S.Paragraph>
                        <ProgressBar width={progressBarWidth} progress="25%"/>
                    </div>
                    <div>
                        <S.Paragraph color={theme.colors.gray} size={theme.fontSize.smallX}>
                            SQL/MongoDB
                        </S.Paragraph>
                        <ProgressBar width={progressBarWidth} progress="50%"/>
                    </div>
                </S.Box>
            </S.Card>
        </S.Container>
    )

}

export default About
