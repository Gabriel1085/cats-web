import styled from 'styled-components';
import CatBackground from '../assets/HeroImagelg.png'

export const StyledHomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StyledBlackContainerHome = styled.div`
    margin-top: 2vh;
    display: flex;
    width: 90vw;
    max-width: 1280px;
    height: 78vh;
    background-color: ${({theme}) => theme.colors.black};
    background-image: url(${CatBackground});
    background-size: cover;  
    background-position: center;
    background-repeat: no-repeat;  
    border-radius: 24px 24px 0 0;

    & > div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 5vw;
        border-radius: 24px;
        height: 100%;
        border-radius: inherit;
        width: 40%;
        height: 100%;
        background-color: ${({theme}) => theme.colors.black};

        & > img{
            background-color: inherit;
        }

        & > form{
            background-color: inherit;
        }
    }
`

export const StyledInputContainerHome = styled.div`
    display: flex;
    border-radius: 59px;
    justify-content: space-between;
    margin-top: 10%;
    padding: 5% 0;

    & > button{
        border: none;
        margin-right: 10%;
        background-position: center;
        cursor: pointer;
    }
`

export const StyledInputHome = styled.input`
    border-radius: inherit;
    border: none;
    outline: none;
    width: 50%;
    margin-left: 10%;

    &::placeholder{
        color: ${({theme})=>theme.colors.brown}
    }
`

export const StyledGrayContainerHome = styled.div`
    height: 90vh;
    background-color: ${({theme})=>theme.colors.gray};
    width: 90vw;
    max-width: 1280px;
    border-radius: 0 0 24px 24px;

    & > p{
        margin-top: 3%;
        margin-left: 7%;
    } 

    & > h1{
        margin-top: 2%;
        margin-left: 7%;
        width: 50%;
    }

    & > div a{
        cursor: pointer;
        width: 100%;
        text-align:end;
        margin-bottom: 5%;
    }

    & > div{
        display: flex;
        justify-content: space-between;
        background-color: inherit;
        margin-left: 7%;
        margin-right: 7%; 
    }
`

export const StyledImageGrayContainerHome = styled.div`
    width: 16vw;
    background-color: inherit;

    & > div{
        width: 100%;
        height: 16vw;
        overflow: hidden;
        margin-bottom:1vh;
        border-radius: 24px;
        display: flex;
        justify-content: center;
    }

    @supports(object-fit: cover){
        & img{
        width: 100%;
        object-fit: cover;
        object-position: center center;
        }
    }

    & > a {
        cursor: pointer;
        color: ${({theme})=>theme.colors.brown};
    }
`

export const StyledWhiteContainerHome = styled.div`
    display: flex;
    height: 95vh;
    width: 80vw;
`

export const StyledTextWhiteContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;

    & > h1{
        margin-bottom: 10%;
    }

    & > p{
        margin-bottom: 10%;
    }
`

export  const StyledImageWhiteContainerHome = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-around;

    & div{
        display: flex;
        flex-direction: column;
        width: 40%;
        margin-top: 15%;
    }

        @supports(object-fit: cover){
        & img{
        width: 100%;
        object-fit: cover;
        object-position: center center;
        margin-bottom:25%;
        }
    }
    }

`