import styled from "styled-components";
import { mediaQueries } from "../../rules/defaultVaules"

export const Container = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 70px;

    @media (max-width: ${mediaQueries.smartphone.default.widthMax}) {
        flex-direction: column;
        align-items: center;
    }

    a{
        color : ${({theme}) => theme.colors.gray}
    }

`

export const BoxStacks = styled.div`
    display: flex;
    gap: 10px
`
