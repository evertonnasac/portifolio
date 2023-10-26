'use client'

import {CarouselContainer} from "./carousel"
import { Paragraph } from "./styles"
import theme from "../../styles/theme"
import { useHeight } from "@/hooks/useHeight"
import {useRef, useEffect} from "react"
import * as S from "./styles"


export default function(){

    const portfolioRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        if (portfolioRef.current) {

           // const alturaDaDiv = portfolioRef.current.clientHeight;

            let {setRefs} = useHeight()

            setRefs(portfolioRef, "portfolio")
        }
    }, []);


    return(
        <S.Section id="portfolio" ref = {portfolioRef}>
            <Paragraph color={theme.colors.gray} size={theme.fontSize.big}>Portifolio</Paragraph>
            <S.CarouselContainer>
            <CarouselContainer/>
            </S.CarouselContainer>
        </S.Section>
        
    )

}