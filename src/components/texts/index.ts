import styled from "styled-components"

export const Title = styled.p`

color : ${({theme}) => theme.colors.grayDark};
font-size : 36px;
position: relative;

&::after{
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    border-bottom: 2px solid ${({theme}) => theme.colors.secondary};
    width: 15%;
}

`

export const Paragraph = styled.p<{size: string, color: string}>`

    color : ${props => props.color};
    font-size : ${props => props.size};
`