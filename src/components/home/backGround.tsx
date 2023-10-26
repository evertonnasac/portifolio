import Image from "next/image";
import styled from "styled-components";

const Style = styled.div`
    width:  100%;
    height: 100vh;
    position: fixed;
    z-index: -1;
`

const BackGround = () => {
    return(
        <Style>
            <Image src="https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-ppt-dark-technology-style-background-backgroundppt-template-backgroundtechnological-image_58969.jpg" alt = "" fill={true}></Image>
        </Style>
        
    )
}

export {BackGround}