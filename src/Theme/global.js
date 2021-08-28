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
        
      }
      ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.text};; 
        border-radius: 10px;
        box-shadow: 0px 10px 10px -10px ${({ theme }) => theme.body} ;
      }
      
      
    a {
    color: ${({ theme }) => theme.body};
    z-index:9!important;
    
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif!important;
    transition: all 0.35s linear;
    }
    .dsc{
    color: ${({ theme }) => theme.body};
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif!important;
        transition: all 0.35s linear;
    }
    .navigation{
      background: ${({ theme }) => theme.text};
      font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif!important;
      transition: all 0.35s linear;
      box-shadow: 5px 10px 8px -10px ${({ theme }) => theme.text} ;
      border: 1px solid ${({ theme }) => theme.body};
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
