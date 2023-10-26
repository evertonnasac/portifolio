'use client'

import Header from "./header"
import {Container, RoudedImage} from "./styles"
import {useEffect, useRef} from "react"
import { useHeight } from "@/hooks/useHeight"



const Home = () => {

    const homeRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (homeRef.current) {

            //const alturaDaDiv = homeRef.current.clientHeight;

            let {setRefs} = useHeight()

            setRefs(homeRef, "home")
        }
    }, []);

    return(
        <Container id = "home" ref = {homeRef}>
            <Header/>
        </Container>
    )
}

export default Home