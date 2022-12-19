import styled from "styled-components";


export const HeaderContainer =styled.div `
  background: ${(props) => props.theme['purple-200']};
  height: 10rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

`

export const Container =styled.div `
width: 1120px;
margin: 0 auto;
display: flex;
justify-content: space-between;
margin-top: -5rem;
`

export const AddNewTransition =styled.button` 
width: 12.185rem;
height: 3rem;
background: ${(props) => props.theme['purple-100']};
left: 1085px;
top: 32px;
left: 1085px;
border-radius: 5px;
border: none;
cursor: pointer;

span{
  font-weight: 800;
  font-size: 1rem;
  line-height:1.5rem;
  text-align: right;
  color: ${(props) => props.theme['white']};

}

&:hover{
background: ${(props) => props.theme['purple']};
}

`

