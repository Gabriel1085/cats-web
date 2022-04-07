import { ThemeProvider } from "styled-components";
import Home from "./pages/home/Home";
import { GlobalStyle } from './globalStyles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MostSearched from './pages/mostSearched/MostSearched';
import Details from './pages/details/Details';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {

  const theme = {
    colors: {
      anchor: 'rgba(41, 21, 7, 0.6)',
      brown: '#291507',
      black: '#050709',
      white: '#fafafa',
      gray: '#e3e1dc',
      lightbrown: '#dec68b',
    },
    fonts:{
      montserrat: 'Montserrat' ,
      mysteryquest: 'Mystery Quest',
    },
  }

  return (
    <>
      <ThemeProvider theme = {theme}>
        <Provider store = {store}>
          <GlobalStyle/>
          <Router>
            <Navbar/>
            <Routes>
              <Route exact path='/mostsearched' element = {<MostSearched/>} />
              <Route exact path='/details:id' element = {<Details/>} />
              <Route path='/' element = {<Home/>} />
            </Routes>
            <Footer/>
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
