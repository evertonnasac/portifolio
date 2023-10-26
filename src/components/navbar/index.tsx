'use client'

import * as S from "./styles"
import { items_1, items_2 } from "./itens";
import {IItemNav} from "./types"
import React, {useEffect, useState, useCallback, useRef} from "react"
import {styles} from "../../rules/defaultVaules"
import {setFocusItemNavbar} from "../../rules/itemFocusNavbar"
import {GiHamburgerMenu} from "react-icons/gi"
import { useHeight } from "@/hooks/useHeight";



export const NavBar = () => {

    const renderItems = (item : IItemNav[] ) => {
        return(
            item.map((item, index) => {
                return(
                    <S.ItemNav 
                        key={index}
                        $active = {linkActive == item.name ? true : false} 
                        onClick={(e) => setlink(item.url, e)}
                        href={item.url}
                    >
                        {item.name}
                     </S.ItemNav>
                )
               
            })
        )
    }
    
    const [linkActive, setLinkActive] = useState("Home")
    const [position, setPosition] = useState("relative")
    const [openMobile, setOpenMobile] = useState(false)
    let resizeTimer = useRef<NodeJS.Timeout | undefined>(undefined)
    const refNav = useRef<HTMLElement>(null)

    const setlink = (url : string, event :  React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        let section = document.querySelector(url)
        setTimeout(() => {
            section?.scrollIntoView() 
        }, 500);

        setOpenMobile(false)
    }

    const handleClickMenuHamburguer = () => {
        setOpenMobile(value => !value)

        let positionY = window.scrollY
        if(positionY < 100){
            window.scrollTo(0, positionY + 175)
        }
        
    }

    const getScrolly = useCallback (() => {
        
        let scroll =  window.scrollY
        let alturaViewport = window.innerHeight ;

        let section = setFocusItemNavbar(scroll)

        setLinkActive(section);
        
        if(scroll >= alturaViewport - Number(styles.heightNavBar.substring(0,2))) 
            setPosition("fixed")
        else setPosition("relative")

    },[setLinkActive])


    const resize = () => {
        const {setValues} = useHeight()
        setValues()
        getScrolly()
   
    }

    useEffect(() => {
        
        const {setValues} = useHeight()
        setValues()

        document.addEventListener("scroll", getScrolly)
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer.current)
            resizeTimer.current = setTimeout(resize, 1000);
        })
       
    },[])


    return(
       
        <S.Navbar $position={position} $openMobile = {openMobile} ref = {refNav}>
            <S.MenuHamburguer onClick={handleClickMenuHamburguer}>
                <GiHamburgerMenu color = "blue" size = "40"/>
            </S.MenuHamburguer>
            <S.BoxItensNav $openMobile = {openMobile}>
                {renderItems( items_1)}
            </S.BoxItensNav>
            <S.HeadNav $display={position == "fixed" ? "flex" : "none"}>
                <p>Everton Sacramento</p>
                <p>Developer</p>
            </S.HeadNav>
            <S.RoudedImage $display={position == "fixed" ?  "none" : "block"}/>
            <S.BoxItensNav $openMobile = {openMobile}>
                {renderItems( items_2)}
            </S.BoxItensNav> 
           
        </S.Navbar>
    )
}