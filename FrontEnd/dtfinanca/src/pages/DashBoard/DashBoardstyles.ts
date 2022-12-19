import * as RadioGroup  from "@radix-ui/react-radio-group";
import styled from "styled-components";



export const TransitionContainer = styled.form `
display: flex;
align-items: center;
margin-top: -3rem;
flex-direction: column;
position: absolute;
width: 576px;
padding: 10px;
height: 550px;
left: 416px;
top: 124px;
border: none;
border-radius: 5px;
background: ${(props) => props.theme['gray-10']};



`
export const AddTransitionContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 2rem;
margin-bottom: 1rem;
flex-direction: column;
gap: 1rem;


input{
display: flex;
justify-content: center;
width: 480px;
height: 64px;
border: 1px solid #D7D7D7;
border-radius: 5px;
background: ${(props) => props.theme['gray-100']};
padding: 1rem;
}



`

export const ChoiceInput = styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;
margin-bottom: 1rem;
gap: 1rem;


`
interface ButtonRadioChoiceProps {
isActive: boolean;
}

export const ButtonRadioChoice = styled.button`

display: flex;
justify-content: center;
align-items: center;
width: 236px;
height: 64px;
border: 1px solid #D7D7D7;
border-radius: 5px;
padding: 1rem;
gap: 1rem;
cursor: pointer;

&:hover{
background: ${(props) => props.theme['green-300']};
}

&:hover:nth-child(2){
background: ${(props) => props.theme['red-500']};
}

`

export  const ReturnHome = styled.button `
width: 100%;
display: flex;
justify-content: right;
border: none;
`

export  const FotterContainer = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
border: none;


input{
display: flex;
align-items: center;
width: 480px;
height: 64px;
border: 1px solid #D7D7D7;
border-radius: 5px;
background: ${(props) => props.theme['gray-100']};
padding: 1rem;
}


button{
display: flex;
align-items: center;
justify-content: center;
width: 480px;
height: 64px;
border: 1px solid #D7D7D7;
border-radius: 5px;
background: ${(props) => props.theme['green-300']};
color: ${(props) => props.theme['white']};
padding: 1rem;
cursor: pointer;

&:hover{
  background: ${(props) => props.theme['green-500']};

}
}



`

