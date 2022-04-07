import React, { useEffect } from 'react'
import { Styledh1, Styledh2, Styledh3, Styledp, Styledimg, Styleda } from '../../globalStyles'
import { StyledHomeContainer, StyledBlackContainerHome, StyledInputContainerHome, StyledGrayContainerHome, StyledImageGrayContainerHome, StyledImageWhiteContainerHome, StyledTextWhiteContainerHome} from '../../styles/Home.styles'
import WhiteLogo from '../../assets/WhiteLogo.svg'
import SearchIcon from '@mui/icons-material/Search'
import { StyledInputHome, StyledWhiteContainerHome } from './../../styles/Home.styles';
import { Loadbreeds } from '../../services/public.services'
import { useDispatch, useSelector } from 'react-redux'
import { createListBreeds } from '../../redux/states/breed'
import CatImage1 from '../../assets/image1.png'
import CatImage2 from '../../assets/image2.png'
import CatImage3 from '../../assets/image3.png' 

const Home = () => {

  const dispatch = useDispatch()
  const breedsState = useSelector((store) => store.breeds)

  useEffect(() =>{
    Loadbreeds().then(breeds => {
      dispatch(createListBreeds(breeds))
    })
    console.log(breedsState)
  },[dispatch])

  const handleClick = () => {
    console.log('Hola')
  }

  return (
    <StyledHomeContainer>
        <StyledBlackContainerHome>
          <div>
            <img src={WhiteLogo} alt="logo" />
            <Styledh3>Get to know more about your cat breed</Styledh3>
            <form>
              <StyledInputContainerHome>
                <StyledInputHome type="text" placeholder='Enter your breed' />
                <button onClick={handleClick}>
                  <SearchIcon/>              
                </button>
              </StyledInputContainerHome>
            </form>
          </div>
        </StyledBlackContainerHome>
        
        <StyledGrayContainerHome>
          <Styledp>Most Searched Breeds</Styledp>
          <Styledh1>66+ Breeds For you to discover</Styledh1>
          <div>
            <Styleda>SEE MORE</Styleda>
          </div>
          <div>
            {
              breedsState.slice(0,4).map((breed) => (
                <StyledImageGrayContainerHome key={breed.id}>
                  <div>
                    <Styledimg src={breed.image.url} alt="pic" />
                  </div>
                  {<Styleda>{breed.name}</Styleda>}
                </StyledImageGrayContainerHome>
              ))
            }
          </div>
        </StyledGrayContainerHome>

        <StyledWhiteContainerHome>
          <StyledTextWhiteContainerHome>
            <Styledh1>
              Why should you have a cat?
            </Styledh1>
            <Styledp>
            Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
            </Styledp>
            <Styleda>
              SEE MORE
            </Styleda>
          </StyledTextWhiteContainerHome>
          <StyledImageWhiteContainerHome>
            <div>
              <img src={CatImage2} alt="catImage" />
              <img src={CatImage1} alt="catImage" />
            </div>
            <div>
              <img src={CatImage3} alt="catImage" />
            </div>
          </StyledImageWhiteContainerHome>
        </StyledWhiteContainerHome>

    </StyledHomeContainer>
  )
}

export default Home