import 'react-toastify/dist/ReactToastify.css'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { createGlobalStyle } from 'styled-components'
import tw from 'twin.macro'
import 'animate.css'

export default createGlobalStyle`
   :root {
    --toastify-color-dark: ${props => props.theme.colors.bgSecondary};
   }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button {
    ${tw`border-0 cursor-pointer`}
    background: none;
  }

  body {
    ${tw`text-base`}
    background: ${props => props.theme.colors.bgPrimary};
    color: ${props => props.theme.colors.text};
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

  }

  html {
    scroll-behavior: smooth;
  }

  button {
    ${tw`border-0`}
  }

  #__next {
    height: 100vh;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text}
  }
`
