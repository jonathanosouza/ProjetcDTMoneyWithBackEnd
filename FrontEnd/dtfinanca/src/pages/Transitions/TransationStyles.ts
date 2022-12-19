import styled from "styled-components";



export const SearchPesquisa = styled.form`

width: 100%;
margin-top:5rem;
display: flex;
justify-content: center;
gap: 20px;

input { 
  padding: 10px;
  border: solid 1px grey;
  width: 50rem;
}

`



export const TransitionsContainer =styled.div `
  
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: center;


`
export const TransitionsList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
  }

  th {
    padding: 1rem;
    text-align: left;
    color: ${(props) => props.theme['gray-500']};
    font-size: 0.875rem;
    line-height: 1.6;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  }

  td {
    background-color: ${(props) => props.theme['white']};
    border-top: 0.50rem solid ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-500']};
    padding: 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.6;

    &:first-child {
      width: 50%;
      padding-left: 1.5rem;
      
    }

    &.saque{
      color: ${(props) => props.theme['red-500']};
    }    
    
    
    &.deposit{
      color: ${(props) => props.theme['red-500']};
    }  

    &.withdraw{
      color: ${(props) => props.theme['green-500']};
    } 

    &:last-child {
      padding-right: 1.5rem;
    
    
    }

    button {  
      background: none;
      border: none;
    }
    button:hover {  
      color: red;
      cursor: pointer;
    }
  }
`

interface PriceColorProps {
  variant?: 'E' | 'S'
}

export const  PriceColor = styled.span<PriceColorProps> `
  color: ${props => props.variant === 'E' ? props.theme['green-500'] : props.theme['red-500'] };
`