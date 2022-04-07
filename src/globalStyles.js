import styled from "styled-components";
import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${({theme})=> theme.fonts.montserrat};
        background-color: ${({theme})=> theme.colors.white};
        color: ${({theme})=>theme.colors.brown}
    }
`

export const Styledh1 = styled.h1`
    font-size: 48px;
    font-weight: 700;
    line-height: 59px;
    background-color: inherit;
`

export const Styledh2 = styled.h2`
    font-size: 36px;
    font-weight: 600;
    line-height: 44px;
    background-color: inherit;
`

export const Styledh3 = styled.h3`
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    color: ${({theme})=>theme.colors.white};
    background-color: inherit;
`
export const Styledp = styled.p`
    font-size: 18px;
    font-weight: 500px;
    line-height: 22px;
    background-color: ${({theme}) => theme.colors.black};
    color: ${
        props => (props.wht && props.theme.colors.white)
    };
    background-color: inherit;
`

export const Styledimg = styled.img`
    border-radius: 24px;
    background-color: inherit;
`

export const Styleda = styled.a`
    color: ${({theme})=>theme.colors.anchor};
    font-size: 18px;
    font-family: ${({theme})=>theme.fonts.montserrat};
    font-weight: 700;
    line-height: 22px;
    background-color: inherit;
`

export const Rectangle = styled.div`
    background-color: ${({theme}) => theme.colors.lightbrown};
    border-radius: 14px;
    background-color: inherit;
`