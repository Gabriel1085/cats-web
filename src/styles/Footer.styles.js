import styled from 'styled-components'

export const StyledBlackContainerFooter = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    width: 90%;
    max-width: 1280px;
    height: 10vh;
    position: center;
    border-radius: 42px 42px 0 0;
    background-color: ${({theme})=>theme.colors.black};
    margin-top: 5vh;

    & > img{
        margin-left: 7%;
        max-height: 50%;
        background-color: ${({theme})=>theme.colors.black};
    }

    & > p{
        margin-right: 5%;
    }

`
export const StyledContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%
`