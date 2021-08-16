import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    
    height: 100vh;
    margin: 0;
    padding: 0;
    
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif!important;
    transition: all 0.35s linear;
    button {
        position: right !important;
        display: block;
        outline: none !important;
        
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif!important;
        transition: all 0.35s linear;
        color: ${({ theme }) => theme.text};
      }
      ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.text};; 
        border-radius: 10px;
      
      }
      
      
    a {
    color: ${({ theme }) => theme.text};
    z-index:2
    
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif!important;
    transition: all 0.35s linear;
    }
  
  
  @keyframes shine {
    0% {
      background-position-x: -500%;
    }
    100% {
      background-position-x: 500%;
    }
  }
  
  
    }
    a:hover{
      color: ${({ theme }) => theme.body};
    }
      a: active{
        color: ${({ theme }) => theme.text};
      }`
