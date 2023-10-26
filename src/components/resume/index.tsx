"use client"

import * as S from "./styles"
import theme from "../../styles/theme"
import { Paragraph} from "../texts"
import {Title} from "./styles"
import {useEffect, useRef} from "react"
import { useHeight } from "@/hooks/useHeight"

export const Resume = () => {

    
    const resumeRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (resumeRef.current) {

            //const alturaDaDiv = resumeRef.current.clientHeight;

            let {setRefs} = useHeight()

            setRefs(resumeRef, "resume")
        }
    }, []);

    return (
        <S.Container id = "resume" ref = {resumeRef}>
            <S.Paragraph size= {theme.fontSize.big} color={theme.colors.gray}>Resumo</S.Paragraph>
            <S.BoxCard>
                <S.Card>
                    <Title>Experiências</Title>
                    <Paragraph size= {theme.fontSize.medium} color={theme.colors.secondary}>2022</Paragraph>
                    <Paragraph size= {theme.fontSize.smallX} color={theme.colors.gray}>Estagiágio Front-End</Paragraph>
                    <Paragraph size= {theme.fontSize.small} color={theme.colors.gray}>
                        Programa de formação e capacitação para Desenvolvedor Web com 
                        foco em Front-End da empresa Compass.UOL. 
                        Realização de cursos e desenvolvimento de projetos, utilizando: 
                        HTML, CSS, JavaScript, TypeScript, Sass, Styed-Components, 
                        React, Node, Storybook e Scrum.
                    </Paragraph>
                </S.Card>
                <S.Card>
                    <Title>Formação</Title>
                    <Paragraph size= {theme.fontSize.medium} color={theme.colors.secondary}>2021 - Presente</Paragraph>
                    <Paragraph size= {theme.fontSize.smallX} color={theme.colors.gray}>
                    Ciência Da Computação - Unifacs
                    </Paragraph>
                    <Paragraph size= {theme.fontSize.small} color={theme.colors.gray}>
                        Através do meu curso, estou adquirindo uma base sólida em diversas disciplinas relacionadas 
                        à computação, o que me permite explorar e aprofundar meu conhecimento nesta área 
                        em constante evolução. Estou comprometido com meu desenvolvimento acadêmico e ansioso 
                        para enfrentar os desafios que a Ciência da Computação tem a oferecer."
                    </Paragraph>
                </S.Card>
                <S.Card>
                    <Title>Cursos</Title>
                    <Paragraph size= {theme.fontSize.medium} color={theme.colors.secondary}></Paragraph>
                    <Paragraph size= {theme.fontSize.small} color={theme.colors.gray}>Desenvolvedor NodeJS - IGTI</Paragraph>
                    <Paragraph size= {theme.fontSize.small} color={theme.colors.gray}>HTML e CSS – Alura</Paragraph>
                    <Paragraph size= {theme.fontSize.small} color={theme.colors.gray}>Javascript e HTML – Alura</Paragraph>
                    <Paragraph size= {theme.fontSize.small} color={theme.colors.gray}>TypeScript – Alura</Paragraph>
                    <Paragraph size= {theme.fontSize.small} color={theme.colors.gray}>React com Typescript – Alura</Paragraph>
                    <Paragraph size= {theme.fontSize.small} color={theme.colors.gray}>Layouts Responsivos</Paragraph>
                </S.Card>
            </S.BoxCard>
        </S.Container>
    )
}